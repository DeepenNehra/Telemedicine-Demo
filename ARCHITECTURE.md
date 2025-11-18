# Architecture: Before vs After Fix

## BEFORE (Not Working on Netlify)

```
┌─────────────────────────────────────────────────────────┐
│                    NETLIFY                              │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Frontend (Next.js) ✅                           │  │
│  │  - React components                              │  │
│  │  - Static pages                                  │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Backend (Node.js) ❌ NOT RUNNING                │  │
│  │  - Socket.IO server                              │  │
│  │  - PeerJS server                                 │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
│  Problem: Netlify doesn't run Node.js servers!         │
└─────────────────────────────────────────────────────────┘

Result: Video calls fail because servers aren't running
```

## AFTER (Working Setup)

```
┌─────────────────────────────────────────────────────────┐
│                    NETLIFY                              │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Frontend (Next.js) ✅                           │  │
│  │  - React components                              │  │
│  │  - Static pages                                  │  │
│  │  - Connects to external servers                  │  │
│  └──────────────────────────────────────────────────┘  │
│         │                                               │
│         │ Uses environment variables                    │
│         │ NEXT_PUBLIC_SOCKET_URL                        │
│         │ NEXT_PUBLIC_PEER_HOST                         │
└─────────┼───────────────────────────────────────────────┘
          │
          ├──────────────────────────────────────────┐
          │                                          │
          ▼                                          ▼
┌─────────────────────┐                  ┌──────────────────────┐
│      RENDER         │                  │   PEERJS CLOUD       │
│  (Free Tier)        │                  │   (0.peerjs.com)     │
│                     │                  │                      │
│  ┌───────────────┐  │                  │  ┌────────────────┐  │
│  │ Socket.IO     │  │                  │  │ PeerJS Server  │  │
│  │ Server ✅     │  │                  │  │ ✅             │  │
│  │               │  │                  │  │                │  │
│  │ Handles:      │  │                  │  │ Handles:       │  │
│  │ - Signaling   │  │                  │  │ - WebRTC       │  │
│  │ - Room mgmt   │  │                  │  │ - P2P connect  │  │
│  └───────────────┘  │                  │  └────────────────┘  │
└─────────────────────┘                  └──────────────────────┘

Result: Video calls work! ✅
```

## How It Works

### 1. User Opens App (Netlify)
```
User → Netlify → Loads React App
```

### 2. User Starts Video Call
```
React App → Socket.IO (Render) → Joins room
React App → PeerJS (Cloud) → Gets peer ID
```

### 3. Two Users Connect
```
Doctor → Socket.IO → "I'm in room ABC"
Patient → Socket.IO → "I'm joining room ABC"
Socket.IO → Both users → "Exchange peer IDs"
Doctor ←→ PeerJS ←→ Patient → Direct video connection
```

### 4. Video Streams
```
Doctor's Camera → WebRTC (P2P) → Patient's Screen
Patient's Camera → WebRTC (P2P) → Doctor's Screen
```

## Component Responsibilities

### Frontend (Netlify)
- User interface
- Authentication (localStorage)
- Video display
- Controls (mute, video on/off)

### Socket.IO Server (Render)
- Room management
- User presence
- Signaling (exchange peer IDs)
- Connection coordination

### PeerJS Server (Cloud)
- WebRTC signaling
- Peer-to-peer connection setup
- ICE candidate exchange
- STUN/TURN coordination

## Data Flow

```
┌──────────┐                                    ┌──────────┐
│  Doctor  │                                    │ Patient  │
└────┬─────┘                                    └────┬─────┘
     │                                               │
     │ 1. Join room "ABC"                            │
     ├──────────────────────────────────────────────►│
     │         (via Socket.IO)                       │
     │                                               │
     │ 2. Get peer ID "doctor-123"                   │
     ├──────────────────────────────────────────────►│
     │         (via PeerJS)                          │
     │                                               │
     │                                               │ 3. Join room "ABC"
     │◄──────────────────────────────────────────────┤
     │         (via Socket.IO)                       │
     │                                               │
     │                                               │ 4. Get peer ID "patient-456"
     │◄──────────────────────────────────────────────┤
     │         (via PeerJS)                          │
     │                                               │
     │ 5. Exchange peer IDs via Socket.IO            │
     │◄─────────────────────────────────────────────►│
     │                                               │
     │ 6. Establish WebRTC connection                │
     │◄═════════════════════════════════════════════►│
     │         (direct P2P via PeerJS)               │
     │                                               │
     │ 7. Stream video/audio                         │
     │◄═════════════════════════════════════════════►│
     │         (direct P2P)                          │
     │                                               │
```

## Why This Architecture?

### Separation of Concerns
- **Netlify**: Best for static hosting (fast, CDN, free)
- **Render**: Best for Node.js servers (free tier, easy deploy)
- **PeerJS Cloud**: Best for WebRTC (maintained, reliable)

### Cost Effective
- Netlify: Free
- Render: Free tier (with sleep)
- PeerJS: Free tier
- **Total: $0**

### Scalability
- Frontend scales automatically (CDN)
- Backend can be upgraded ($7/mo for always-on)
- PeerJS can be self-hosted if needed

### Reliability
- If one service fails, others keep working
- Easy to debug (separate logs)
- Can swap services independently

## Environment Variables Explained

```javascript
// Socket.IO connection
NEXT_PUBLIC_SOCKET_URL=https://your-app.onrender.com
// ↑ Where to find the signaling server

// PeerJS connection
NEXT_PUBLIC_PEER_HOST=0.peerjs.com
// ↑ Where to find the PeerJS server

NEXT_PUBLIC_PEER_PORT=443
// ↑ Use HTTPS port (required for WebRTC)

NEXT_PUBLIC_PEER_PATH=/
// ↑ Path on the PeerJS server

NEXT_PUBLIC_PEER_SECURE=true
// ↑ Use secure connection (HTTPS/WSS)
```

## Alternative Architectures

### Option 1: Everything on Render
```
Render (Frontend + Backend)
  ↓
Single deployment, simpler setup
But: No CDN, slower for global users
```

### Option 2: Self-hosted PeerJS
```
Netlify (Frontend) + Render (Backend + PeerJS)
  ↓
More control, single backend
But: More complex server setup
```

### Option 3: Vercel + Railway
```
Vercel (Frontend) + Railway (Backend) + PeerJS Cloud
  ↓
Similar to current setup
Alternative providers
```

## Current Setup (Recommended)

```
Netlify (Frontend) + Render (Backend) + PeerJS Cloud
  ↓
Best balance of:
- Performance (CDN)
- Cost (Free)
- Simplicity (Managed services)
- Reliability (Separate concerns)
```
