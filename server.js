const { createServer } = require('http');
const { Server } = require('socket.io');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3003;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  
  const io = new Server(httpServer, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST']
    }
  });

  // Store rooms and their participants
  const rooms = new Map();
  const peerIds = new Map(); // Store peer IDs by room

  io.on('connection', (socket) => {
    console.log('✅ User connected:', socket.id);
    
    let currentRoom = null;
    let currentUserId = null;

    // Handle peer ID sharing
    socket.on('peer-join', (data) => {
      const { roomId, peerId, role } = data;
      console.log(`🎯 Peer joined: ${role} with ID ${peerId} in room ${roomId}`);
      
      socket.join(roomId);
      
      if (!peerIds.has(roomId)) {
        peerIds.set(roomId, []);
      }
      
      const roomPeers = peerIds.get(roomId);
      roomPeers.push({ peerId, role, socketId: socket.id });
      
      // Notify others in the room
      socket.to(roomId).emit('peer-joined', { peerId, role });
      console.log(`📢 Notified room ${roomId} about ${role}`);
      
      // Send existing peers to the new joiner
      const otherPeers = roomPeers.filter(p => p.socketId !== socket.id);
      otherPeers.forEach(peer => {
        socket.emit('peer-joined', { peerId: peer.peerId, role: peer.role });
        console.log(`📤 Sent existing peer ${peer.role} to new joiner`);
      });
    });

    socket.on('join-room', (roomId, userId) => {
      console.log(`👤 User ${userId} joining room ${roomId}`);
      
      // Leave previous room if any
      if (currentRoom) {
        socket.leave(currentRoom);
      }
      
      currentRoom = roomId;
      currentUserId = userId;
      socket.join(roomId);
      
      // Initialize room if it doesn't exist
      if (!rooms.has(roomId)) {
        rooms.set(roomId, new Set());
      }
      
      const room = rooms.get(roomId);
      
      // Send list of existing users to the new user (excluding themselves)
      const existingUsers = Array.from(room).filter(id => id !== userId);
      console.log(`📋 Existing users in room ${roomId}:`, existingUsers);
      socket.emit('existing-users', existingUsers);
      
      // Notify others in the room about new user
      socket.to(roomId).emit('user-connected', userId);
      console.log(`📢 Notified room ${roomId} about new user ${userId}`);
      
      // Add user to room
      room.add(userId);
      console.log(`✅ Room ${roomId} now has ${room.size} users`);
    });

    socket.on('signal', (data) => {
      console.log(`📡 Signal from ${currentUserId} to ${data.to} - Type: ${data.signal.type}`);
      
      // Find the socket of the target user
      const sockets = io.sockets.sockets;
      for (const [socketId, targetSocket] of sockets) {
        if (targetSocket.data && targetSocket.data.userId === data.to) {
          targetSocket.emit('signal', {
            signal: data.signal,
            from: currentUserId
          });
          return;
        }
      }
      
      // If not found by data, broadcast to room (fallback)
      socket.to(currentRoom).emit('signal', {
        signal: data.signal,
        from: currentUserId
      });
    });

    socket.on('disconnect', () => {
      console.log(`❌ User disconnected: ${socket.id}`);
      
      // Clean up peer IDs
      for (const [roomId, peers] of peerIds.entries()) {
        const index = peers.findIndex(p => p.socketId === socket.id);
        if (index !== -1) {
          peers.splice(index, 1);
          console.log(`🗑️  Removed peer from room ${roomId}`);
          
          if (peers.length === 0) {
            peerIds.delete(roomId);
            console.log(`🗑️  Deleted empty room ${roomId}`);
          }
        }
      }
      
      if (currentRoom && currentUserId) {
        const room = rooms.get(currentRoom);
        if (room) {
          room.delete(currentUserId);
          socket.to(currentRoom).emit('user-disconnected', currentUserId);
          
          if (room.size === 0) {
            rooms.delete(currentRoom);
          }
        }
      }
    });
    
    // Store userId in socket data for easier lookup
    socket.on('join-room', (roomId, userId) => {
      socket.data = { userId, roomId };
    });
  });

  httpServer
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`\n🚀 Ready on http://${hostname}:${port}`);
      console.log(`📡 Socket.IO signaling server running`);
      console.log(`⚠️  Note: For PeerJS, use external server (see DEPLOYMENT_GUIDE.md)\n`);
    });
});
