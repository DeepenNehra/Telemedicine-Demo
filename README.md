# MediConnect - Professional Telemedicine Platform

A modern, full-featured telemedicine platform connecting patients with healthcare professionals through secure HD video consultations and real-time chat.

## 🌐 Live Demo

https://fastidious-daifuku-64bc60.netlify.app/

- **Frontend**: Deployed on Netlify
- **Backend**: Deployed on Render
- **Status**: ✅ Fully Functional

---

## ✨ Key Features

### 🎥 Video Consultations
- **HD Video Calls** - Crystal clear 1280x720 video quality
- **Real-time Audio** - Low-latency audio communication
- **Zoom-like Interface** - Professional, full-screen video layout
- **Picture-in-Picture** - Self-view in corner
- **Connection Status** - Live connection indicators

### 💬 Real-time Chat
- **Instant Messaging** - Chat during video calls
- **Message History** - View all conversation history
- **Timestamps** - Track when messages were sent
- **Typing Indicators** - See when others are typing
- **Toggle Panel** - Show/hide chat as needed

### 👥 User Management
- **Role-based Access** - Separate Doctor and Patient interfaces
- **User Profiles** - Avatar, name, email, specialization
- **Authentication** - Secure login/signup system
- **Profile Management** - Edit user information

### 🎨 Modern UI/UX
- **Professional Design** - Clean, medical-grade interface
- **Dark Theme** - Easy on the eyes during consultations
- **Responsive** - Works on desktop, tablet, and mobile
- **Smooth Animations** - Polished user experience
- **Accessibility** - WCAG 2.1 AA compliant

### 🔐 Security & Privacy
- **Secure Connections** - HTTPS/WSS encryption
- **Private Rooms** - Unique room codes for each consultation
- **Data Protection** - No data stored on servers
- **HIPAA-ready** - Built with healthcare compliance in mind

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Modern utility-first styling
- **React Hooks** - State management

### Backend
- **Node.js** - Server runtime
- **Socket.IO** - Real-time bidirectional communication
- **Express** - Web server framework

### Video & Communication
- **PeerJS** - WebRTC peer-to-peer connections
- **WebRTC** - Browser-based video/audio streaming
- **STUN Servers** - NAT traversal for connectivity

### Deployment
- **Netlify** - Frontend hosting with CDN
- **Render** - Backend hosting
- **GitHub** - Version control and CI/CD

---

## 📸 Screenshots

### Landing Page
Professional landing page with feature showcase and call-to-action.

### Authentication
Clean sign-up/sign-in interface with role selection (Doctor/Patient).

### Dashboard
Personalized dashboard with quick actions and profile information.

### Video Call
Full-screen video consultation with integrated chat panel.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/DeepenNehra/Telemedicine-Demo.git
cd Telemedicine-Demo

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **http://localhost:3003**

---

## 📁 Project Structure

```
healthcare-problem-demo/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── auth/page.tsx         # Authentication
│   │   ├── dashboard/page.tsx    # User dashboard
│   │   └── call/[roomId]/page.tsx # Video call room
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation component
│   │   └── VideoCall.tsx         # Video call component
│   └── lib/
│       └── auth.ts               # Authentication helpers
├── server.js                     # Socket.IO server
├── package.json
└── README.md
```

---

## 🎯 How It Works

### For Doctors:
1. Sign up/Login as Doctor
2. Click "Start New Consultation"
3. Share the generated room code with patient
4. Wait for patient to join
5. Conduct video consultation with chat

### For Patients:
1. Sign up/Login as Patient
2. Enter room code from doctor
3. Click "Join Call"
4. Connect with doctor
5. Video consultation begins

---

## 🌟 Features Showcase

### Video Call Interface
- **Full-screen remote video** - Focus on the consultation
- **Picture-in-picture local video** - See yourself in corner
- **Control bar** - Mute, video toggle, chat, end call
- **Connection status** - Real-time connection indicators
- **Call duration** - Track consultation time

### Chat System
- **Real-time messaging** - Instant message delivery
- **Message bubbles** - WhatsApp-style interface
- **Timestamps** - Track conversation timeline
- **Auto-scroll** - Always see latest messages
- **Unread badge** - Know when new messages arrive

### Dashboard
- **Quick actions** - Start/join consultations easily
- **Profile display** - View user information
- **Role-specific UI** - Different for doctors and patients
- **Clean design** - Professional medical interface

---

## 🔧 Configuration

### Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_SOCKET_URL=http://localhost:3003
NEXT_PUBLIC_PEER_HOST=0.peerjs.com
NEXT_PUBLIC_PEER_PORT=443
NEXT_PUBLIC_PEER_PATH=/
NEXT_PUBLIC_PEER_SECURE=true
```

For production, update `NEXT_PUBLIC_SOCKET_URL` to your backend URL.

---

## 🚀 Deployment

### Frontend (Netlify)
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables
5. Deploy

### Backend (Render)
1. Create Web Service
2. Build command: `npm install`
3. Start command: `npm start`
4. Deploy

**Detailed deployment guide**: See [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📊 Performance

- **Fast Load Times** - Optimized bundle size
- **Smooth Video** - 30fps video streaming
- **Low Latency** - Real-time communication
- **Responsive** - Works on all devices
- **Reliable** - Stable WebRTC connections

---

## 🎨 Design System

### Colors
- **Primary**: Medical Blue (#3b82f6)
- **Secondary**: Health Green (#22c55e)
- **Accent**: Purple (#8b5cf6)
- **Dark**: Gray-900 (#111827)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300-900
- **Responsive**: Scales with viewport

### Components
- Buttons (6 variants)
- Cards (3 variants)
- Inputs (with validation)
- Badges (5 colors)
- Animations (4 types)

---

## 🔒 Security

- **HTTPS/WSS** - Encrypted connections
- **Private Rooms** - Unique room codes
- **No Data Storage** - Privacy-first approach
- **Secure Authentication** - Protected routes
- **CORS Protection** - Controlled access

---

## 📱 Browser Support

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS/Android)

---

## 🤝 Contributing

This is a portfolio project. For suggestions or improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License - Feel free to use for educational purposes

---

## 👨‍💻 Developer

**Deepen Nehra**

- GitHub: [@DeepenNehra](https://github.com/DeepenNehra)
- Project: [Telemedicine-Demo](https://github.com/DeepenNehra/Telemedicine-Demo)
- Live Demo: [MediConnect](https://fastidious-daifuku-64bc60.netlify.app)

---

## 🙏 Acknowledgments

Built with modern web technologies for healthcare innovation.

- Next.js for the amazing framework
- Socket.IO for real-time communication
- PeerJS for WebRTC simplification
- Tailwind CSS for beautiful styling

---

## 📈 Future Enhancements

- [ ] Screen sharing
- [ ] Recording functionality
- [ ] File sharing
- [ ] Appointment scheduling
- [ ] Medical records integration
- [ ] Payment processing
- [ ] Multi-language support
- [ ] Mobile app (React Native)

---

**⭐ Star this repository if you found it helpful!**

**🌐 [View Live Demo](https://fastidious-daifuku-64bc60.netlify.app)**

---

*Last Updated: November 2024*
*Status: ✅ Production Ready*
