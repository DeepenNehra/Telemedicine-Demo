# Telemedicine Problem Demo

A basic telemedicine video consultation platform that demonstrates the **language barrier problem** in healthcare. This is designed to showcase the issues that AI-powered solutions like Arogya AI aim to solve.

## 🎯 Purpose

This is a **"before"** demo showing:
- ✅ Basic video calling works
- ❌ No real-time translation
- ❌ No automatic transcription
- ❌ No AI-powered features
- ❌ Language barriers in consultations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Two devices (laptops/computers) on the same WiFi network

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd healthcare-problem-demo

# Install dependencies
npm install

# Install PeerJS server globally
npm install -g peer
```

### Running the Application

**Terminal 1 - Start PeerJS Server:**
```bash
peerjs --port 9000 --key peerjs --path /myapp
```

**Terminal 2 - Start Next.js Server:**
```bash
npm run dev
```

The application will be available at `http://localhost:3003`

## 🎬 Demo Setup (Two Laptops)

### Laptop 1 (Server):
1. Start both servers (PeerJS + Next.js)
2. Get your IP address: `ipconfig` (Windows) or `ifconfig` (Mac)
3. Open: `http://localhost:3003`
4. Sign up as **Doctor**
5. Create room and share code

### Laptop 2 (Client):
1. Connect to same WiFi
2. Open: `http://YOUR_IP:3003` (e.g., `http://192.168.1.100:3003`)
3. Sign up as **Patient**
4. Enter room code and join

## 📋 Features

- **Video Calling**: Real-time WebRTC video consultations
- **Room-based System**: Doctors create rooms, patients join with codes
- **Basic Controls**: Mute, video toggle, end call
- **Language Indicator**: Shows language barrier (English/Hindi)
- **Simple UI**: Intentionally basic design to show limitations

## 🛠️ Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **PeerJS** - WebRTC peer connections
- **Socket.io** - Signaling server
- **LocalStorage** - Simple authentication

## 📁 Project Structure

```
healthcare-problem-demo/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── auth/page.tsx         # Login/Signup
│   │   ├── dashboard/page.tsx    # User dashboard
│   │   └── call/
│   │       ├── [roomId]/page.tsx # Video call room
│   │       └── ended/page.tsx    # Call ended page
│   ├── components/
│   │   ├── VideoCall.tsx         # WebRTC video component
│   │   └── Navbar.tsx            # Navigation bar
│   └── lib/
│       └── auth.ts               # Auth helpers
├── server.js                     # Custom Next.js + Socket.io server
├── package.json
└── README.md
```

## 🎯 Use Case

This demo is designed for:
- **Hackathon presentations** - Show the problem before your solution
- **Pitch decks** - Demonstrate current limitations
- **Comparison demos** - Contrast with AI-powered alternatives

## 📝 Documentation

- `TWO_LAPTOP_SETUP.md` - Detailed setup for two-device demo
- `DEMO_DAY_CHECKLIST.md` - Step-by-step demo day guide
- `FEATURES.md` - Complete feature list

## 🐛 Troubleshooting

### Video call not connecting?
- Ensure both devices are on the same WiFi
- Check that PeerJS server is running (port 9000)
- Verify room codes match exactly
- Grant camera/microphone permissions

### Can't access from second laptop?
- Check firewall settings (allow ports 3003 and 9000)
- Verify IP address is correct
- Ensure both devices are on same network

## 📄 License

MIT License - Feel free to use for educational purposes

## 🤝 Contributing

This is a demo project. For the full AI-powered solution, check out **Arogya AI**.

---

**Note**: This is intentionally a basic implementation to demonstrate the problem. For the AI-powered solution with translation, transcription, and automation, see the Arogya AI project.
