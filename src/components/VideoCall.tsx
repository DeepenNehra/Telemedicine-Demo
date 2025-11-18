'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { io, Socket } from 'socket.io-client';
import Peer, { MediaConnection } from 'peerjs';

interface VideoCallProps {
  roomId: string;
  role: 'doctor' | 'patient';
}

export default function VideoCall({ roomId, role }: VideoCallProps) {
  const router = useRouter();
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [showLanguageBarrier, setShowLanguageBarrier] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('Initializing...');
  
  const peerRef = useRef<Peer | null>(null);
  const callRef = useRef<MediaConnection | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    let mounted = true;
    
    const peerId = `${roomId}-${role}-${Date.now()}`;
    
    console.log('🆔 My Peer ID:', peerId);
    setConnectionStatus('Connecting...');
    
    // Use environment variable or fallback to localhost
    const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3003';
    
    console.log('🔌 Connecting to Socket.IO:', socketUrl);
    socketRef.current = io(socketUrl);
    
    socketRef.current.on('connect', () => {
      console.log('📡 Socket connected');
    });
    
    navigator.mediaDevices.getUserMedia({ 
      video: { width: 1280, height: 720 }, 
      audio: true 
    })
      .then(stream => {
        if (!mounted) return;
        
        streamRef.current = stream;
        setLocalStream(stream);
        
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
        
        console.log('📹 Got local stream');
        setConnectionStatus('Establishing connection...');
        
        // Use environment variables or fallback
        // For production: Use PeerJS cloud or your own server
        // For local dev: Use localhost (requires running peerjs-server.js separately)
        const peerHost = process.env.NEXT_PUBLIC_PEER_HOST || '0.peerjs.com';
        const peerPort = parseInt(process.env.NEXT_PUBLIC_PEER_PORT || '443');
        const peerPath = process.env.NEXT_PUBLIC_PEER_PATH || '/';
        const peerSecure = process.env.NEXT_PUBLIC_PEER_SECURE !== 'false'; // Default to true
        
        console.log('🎥 Connecting to PeerJS:', { host: peerHost, port: peerPort, path: peerPath, secure: peerSecure });
        
        const peer = new Peer(peerId, {
          host: peerHost,
          port: peerPort,
          path: peerPath,
          secure: peerSecure,
          debug: 2,
          config: {
            iceServers: [
              { urls: 'stun:stun.l.google.com:19302' },
              { urls: 'stun:stun1.l.google.com:19302' },
            ]
          }
        });
        
        peerRef.current = peer;
        
        peer.on('open', (id) => {
          console.log('✅ Peer opened with ID:', id);
          setConnectionStatus('Waiting for participant...');
          
          socketRef.current?.emit('peer-join', { roomId, peerId: id, role });
          console.log('📤 Sent my peer ID to room:', roomId);
        });
        
        socketRef.current?.on('peer-joined', (data: { peerId: string; role: string }) => {
          console.log('📥 Peer joined:', data);
          
          if (data.role !== role) {
            console.log('🎯 Found the other peer:', data.peerId);
            setConnectionStatus('Connecting...');
            
            setTimeout(() => {
              console.log('📞 Calling:', data.peerId);
              const call = peer.call(data.peerId, stream);
              if (call) {
                handleCall(call);
              }
            }, 1000);
          }
        });
        
        peer.on('call', (call) => {
          console.log('📞 Incoming call from:', call.peer);
          setConnectionStatus('Answering...');
          call.answer(stream);
          handleCall(call);
        });
        
        peer.on('error', (err) => {
          console.error('❌ Peer error:', err);
          setConnectionStatus(`Connection error`);
        });
        
        peer.on('disconnected', () => {
          console.log('⚠️ Peer disconnected');
          setConnectionStatus('Disconnected');
        });
      })
      .catch(err => {
        console.error('❌ Camera error:', err);
        setConnectionStatus('Camera access denied');
      });

    return () => {
      mounted = false;
      console.log('🧹 Cleanup');
      
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (callRef.current) {
        callRef.current.close();
      }
      if (peerRef.current) {
        peerRef.current.destroy();
      }
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [roomId, role]);

  const handleCall = (call: MediaConnection) => {
    callRef.current = call;
    
    call.on('stream', (remoteStream) => {
      console.log('✅ Connected!');
      
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
      }
      
      setIsConnected(true);
      setConnectionStatus('Connected');
      
      setTimeout(() => {
        setShowLanguageBarrier(true);
      }, 5000);
    });
    
    call.on('close', () => {
      console.log('📞 Call ended');
      setIsConnected(false);
      setConnectionStatus('Call ended');
    });
    
    call.on('error', (err) => {
      console.error('❌ Call error:', err);
      setConnectionStatus('Call error');
    });
  };

  const toggleMute = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
      console.log('🔊 Mute toggled:', !isMuted);
    }
  };

  const toggleVideo = () => {
    if (localStream) {
      localStream.getVideoTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsVideoOn(!isVideoOn);
      console.log('📹 Video toggled:', !isVideoOn);
    }
  };

  const endCall = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (callRef.current) {
      callRef.current.close();
    }
    if (peerRef.current) {
      peerRef.current.destroy();
    }
    if (socketRef.current) {
      socketRef.current.disconnect();
    }
    router.push('/call/ended');
  };

  return (
    <div className="min-h-screen bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="bg-blue-700 border-4 border-gray-500 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Consultation Room: {roomId}
              </h2>
              <p className="text-gray-200">Status: {connectionStatus}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 ${isConnected ? 'bg-green-400' : 'bg-yellow-400'} border-2 border-black`}></div>
            </div>
          </div>
        </div>

        {/* Language Barrier Warning */}
        {showLanguageBarrier && isConnected && (
          <div className="mb-6 bg-yellow-200 border-4 border-yellow-600 p-4">
            <p className="text-gray-800 font-bold">
              Language: {role === 'doctor' ? 'English' : 'Hindi'}
            </p>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Local Video */}
          <div className="relative bg-black border-4 border-gray-500 aspect-video">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ transform: 'scaleX(-1)' }}
            />
            <div className="absolute top-4 left-4 bg-blue-600 border-2 border-black px-3 py-2">
              <p className="text-white font-bold">
                You ({role === 'doctor' ? 'Doctor' : 'Patient'})
              </p>
            </div>
            {!isVideoOn && (
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                <p className="text-white text-2xl font-bold">Camera Off</p>
              </div>
            )}
          </div>

          {/* Remote Video */}
          <div className="relative bg-black border-4 border-gray-500 aspect-video">
            {isConnected ? (
              <>
                <video
                  ref={remoteVideoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-600 border-2 border-black px-3 py-2">
                  <p className="text-white font-bold">
                    {role === 'doctor' ? 'Patient' : 'Doctor'}
                  </p>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-700">
                <div className="text-center">
                  <p className="text-white text-xl font-bold">{connectionStatus}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="bg-gray-600 border-4 border-gray-500 p-6">
          <div className="flex justify-center gap-4">
            <button
              onClick={toggleMute}
              className={`px-6 py-3 font-bold text-lg border-2 border-black ${
                isMuted 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-300 text-black'
              }`}
            >
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
            <button
              onClick={toggleVideo}
              className={`px-6 py-3 font-bold text-lg border-2 border-black ${
                !isVideoOn 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-300 text-black'
              }`}
            >
              {isVideoOn ? 'Video On' : 'Video Off'}
            </button>
            <button
              onClick={endCall}
              className="px-6 py-3 bg-red-700 text-white font-bold text-lg border-2 border-black"
            >
              End Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
