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

### For Local Development

```bash
# Clone the repository
git clone <your-repo-url>
cd healthcare-problem-demo

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:3003`

**Note**: For local development, video calls will use the public PeerJS cloud server by default.

### For Production (Netlify)

**⚠️ Important**: Video calls require a backend server. Netlify only hosts static files.

See **[QUICK_FIX.md](QUICK_FIX.md)** for 5-minute deployment guide or **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** for detailed instructions.

**Quick Summary**:
1. Deploy backend to Render (free): https://render.com
2. Add environment variables to Netlify
3. Redeploy

See **[DEPLOY_CHECKLIST.txt](DEPLOY_CHECKLIST.txt)** for step-by-step checklist.

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

### Deployment & Setup
- **[QUICK_FIX.md](QUICK_FIX.md)** - 5-minute fix for Netlify video calls
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Complete deployment guide
- **[DEPLOY_CHECKLIST.txt](DEPLOY_CHECKLIST.txt)** - Step-by-step checklist
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - System architecture explained
- **[NETLIFY_VIDEO_FIX_SUMMARY.md](NETLIFY_VIDEO_FIX_SUMMARY.md)** - What was fixed

### Features & Demo
- **[FEATURES.md](FEATURES.md)** - Complete feature list
- **[TWO_LAPTOP_SETUP.md](TWO_LAPTOP_SETUP.md)** - Two-device demo setup
- **[DEMO_DAY_CHECKLIST.md](DEMO_DAY_CHECKLIST.md)** - Demo day guide

## 🐛 Troubleshooting

### Video calls not working on Netlify?
**Solution**: See **[QUICK_FIX.md](QUICK_FIX.md)** - You need to deploy the backend separately.

### Video call not connecting locally?
- Grant camera/microphone permissions in browser
- Check browser console (F12) for errors
- Verify room codes match exactly
- Try using Chrome/Edge (best WebRTC support)

### First connection takes 30-60 seconds?
- Normal for Render free tier (server wakes from sleep)
- Upgrade to paid plan ($7/mo) for instant connections

### Still having issues?
- Check **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** for detailed troubleshooting
- Open browser console (F12) and check for error messages
- Verify environment variables are set correctly in Netlify

## 📄 License

MIT License - Feel free to use for educational purposes

## 🤝 Contributing

This is a demo project. For the full AI-powered solution, check out **Arogya AI**.

---

**Note**: This is intentionally a basic implementation to demonstrate the problem. For the AI-powered solution with translation, transcription, and automation, see the Arogya AI project.
