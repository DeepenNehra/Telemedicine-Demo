# 🎯 PeerJS Video Call - Simple Test

## ✅ Servers Running:

1. **Next.js Server**: http://localhost:3003
2. **PeerJS Server**: Port 9000

---

## 🚀 Test Now (2 Minutes)

### Step 1: Doctor Window

1. Open **Chrome** (regular window)
2. Go to: `http://localhost:3003`
3. Sign up as **Doctor**
4. Create room → **COPY CODE** (e.g., ABC123)
5. Allow camera/mic
6. You'll see: "Waiting for patient to join..."

### Step 2: Patient Window

1. Press `Ctrl+Shift+N` (incognito)
2. Go to: `http://localhost:3003`
3. Sign up as **Patient**
4. **PASTE CODE** → Join
5. Allow camera/mic
6. Connection should establish in 1-2 seconds!

---

## ✅ What Should Happen:

Within 2 seconds:
- ✅ Both video feeds appear
- ✅ Green dot shows "Connected"
- ✅ You see each other's video
- ✅ Language barrier warnings (after 5s)

---

## 🔍 How It Works:

**PeerJS** is simpler than simple-peer:
- Uses a dedicated PeerJS server (port 9000)
- Automatic peer discovery
- Built-in signaling
- More reliable connections

**Connection Flow:**
1. Doctor joins → Stores peer ID in localStorage
2. Patient joins → Reads doctor's peer ID
3. Patient calls doctor
4. Doctor answers
5. Video streams exchange
6. Connected!

---

## 🐛 If It Doesn't Work:

### Check PeerJS Server:
```bash
# Should see in terminal:
Started PeerServer on ::, port: 9000, path: /myapp
Client connected: ABC123-doctor-1234567890
Client connected: ABC123-patient-1234567890
```

### Check Browser Console (F12):
```
🆔 My Peer ID: ABC123-doctor-1234567890
📹 Got local stream
✅ Peer connection opened with ID: ABC123-doctor-1234567890
👨‍⚕️ I am doctor, stored my ID for patient
```

### Restart Everything:
```bash
# Stop both servers (Ctrl+C)
# Start PeerJS server:
peerjs --port 9000 --key peerjs --path /myapp

# In another terminal, start Next.js:
npm run dev
```

---

## 💡 Why This Is Better:

**Before (simple-peer + Socket.io):**
- Complex signaling logic
- Manual peer management
- Connection issues

**Now (PeerJS):**
- ✅ Built-in signaling server
- ✅ Automatic peer discovery
- ✅ Simpler code
- ✅ More reliable

---

**Test it now!** Open http://localhost:3003 in two windows! 🚀
