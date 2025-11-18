// Standalone PeerJS Server
// Run this separately if you want to host your own PeerJS server
// Otherwise, use the public PeerJS cloud server (0.peerjs.com)

const { PeerServer } = require('peer');

const port = process.env.PEER_PORT || 9000;

const peerServer = PeerServer({
  port: port,
  path: '/myapp',
  allow_discovery: true
});

peerServer.on('connection', (client) => {
  console.log('✅ Peer connected:', client.getId());
});

peerServer.on('disconnect', (client) => {
  console.log('❌ Peer disconnected:', client.getId());
});

console.log(`\n🎥 PeerJS Server running on port ${port}`);
console.log(`📍 Path: /myapp`);
console.log(`🌐 Connect at: ws://localhost:${port}/myapp\n`);
