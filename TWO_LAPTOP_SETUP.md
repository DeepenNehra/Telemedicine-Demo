# 🎯 Two Laptop Demo Setup Guide

## Your Pitch Flow:
1. **Problem Demo** (This Website) - Show basic video call with no AI
2. **Solution Demo** (Your Arogya AI) - Show advanced AI features

---

## ✅ Setup Instructions:

### Step 1: Get Your Computer's IP Address

**On Laptop 1 (Server Laptop):**

**Windows:**
```bash
ipconfig
```
Look for "IPv4 Address" under your WiFi adapter (e.g., `192.168.1.100`)

**Mac/Linux:**
```bash
ifconfig
```
Look for `inet` address (e.g., `192.168.1.100`)

**Example Output:**
```
IPv4 Address: 192.168.1.100
```

---

### Step 2: Update Server Configuration

**On Laptop 1, update the VideoCall component:**

Open: `src/components/VideoCall.tsx`

Find this line (around line 40):
```javascript
socketRef.current = io('http://localhost:3003');
```

Change to:
```javascript
const serverUrl = typeof window !== 'undefined' && window.location.hostname !== 'localhost'
  ? `http://${window.location.hostname}:3003`
  : 'http://localhost:3003';

socketRef.current = io(serverUrl);
```

---

### Step 3: Start Servers on Laptop 1

**Terminal 1:**
```bash
cd healthcare-problem-demo
peerjs --port 9000 --key peerjs --path /myapp
```

**Terminal 2:**
```bash
cd healthcare-problem-demo
npm run dev
```

Servers will run on:
- Next.js: `http://localhost:3003`
- PeerJS: Port 9000

---

### Step 4: Access from Both Laptops

**Laptop 1 (Doctor):**
```
http://localhost:3003
```

**Laptop 2 (Patient):**
```
http://192.168.1.100:3003
```
(Replace `192.168.1.100` with your actual IP)

---

## 🎬 Demo Script:

### Part 1: Problem Demo (5 minutes)

**Laptop 1 - Doctor:**
1. Open: `http://localhost:3003`
2. Sign up as Doctor
3. Create room → **Show room code on screen**
4. Wait for patient

**Laptop 2 - Patient:**
1. Open: `http://192.168.1.100:3003`
2. Sign up as Patient
3. Enter room code
4. Join call

**Show the Problems:**
- ✅ Video call works
- ❌ No real-time translation
- ❌ No transcription
- ❌ No AI notes
- ❌ Language barrier (show the warning)
- ❌ Manual documentation needed

**Say:**
> "As you can see, the video call works, but there's a major problem - 
> the doctor speaks English, the patient speaks Hindi, and there's 
> NO translation, NO transcription, NO AI assistance. This is the 
> current state of most telemedicine platforms."

---

### Part 2: Solution Demo (Your Arogya AI)

**Switch to your Arogya AI project:**

**Show Features:**
- ✅ Real-time AI translation
- ✅ Automatic transcription
- ✅ AI-powered consultation notes
- ✅ Prescription generation
- ✅ Multi-language support

**Say:**
> "Now let me show you our solution - Arogya AI. Same video call, 
> but with AI-powered features that solve all these problems..."

---

## 🔥 Pitch Tips:

### Make the Contrast Clear:

**Problem Website (This one):**
- "This is what exists today"
- "Notice the language barrier warning"
- "No AI features"
- "Manual work required"

**Your Solution:**
- "This is Arogya AI"
- "Real-time translation"
- "Automatic everything"
- "AI-powered intelligence"

---

## 🐛 Troubleshooting:

### Issue: Laptop 2 can't connect

**Solution 1: Check Firewall**
```bash
# Windows: Allow port 3003 and 9000
# Go to Windows Firewall → Allow an app
```

**Solution 2: Same WiFi**
- Both laptops must be on the SAME WiFi network
- Not one on WiFi and one on hotspot

**Solution 3: Test Connection**
On Laptop 2, open browser and try:
```
http://192.168.1.100:3003
```
If you see the landing page, it's working!

---

### Issue: Video call not connecting

**Check:**
1. Both laptops can access the website
2. PeerJS server is running (port 9000)
3. Room codes match exactly
4. Camera/mic permissions granted on both

---

## 📱 Alternative: Use Phone as Second Device

If you only have one laptop:

**Laptop (Doctor):**
```
http://localhost:3003
```

**Phone (Patient):**
```
http://192.168.1.100:3003
```

Make sure phone is on same WiFi!

---

## ✅ Pre-Demo Checklist:

**Day Before:**
- [ ] Test on both laptops
- [ ] Verify WiFi connection
- [ ] Check camera/mic on both
- [ ] Practice the pitch
- [ ] Have room codes ready

**Demo Day:**
- [ ] Both laptops charged
- [ ] Connected to same WiFi
- [ ] Servers running on Laptop 1
- [ ] Test call before presentation
- [ ] Have backup plan (video recording)

---

## 🎯 Success Criteria:

You'll know it's working when:
1. ✅ Both laptops can access the website
2. ✅ Doctor creates room successfully
3. ✅ Patient can join with code
4. ✅ Video feeds appear on both screens
5. ✅ Language barrier warning shows
6. ✅ Mute/unmute works

---

## 💡 Pro Tips:

1. **Practice Run:** Do a full demo run the night before
2. **Backup Video:** Record a working demo as backup
3. **Room Code:** Use simple codes like "DEMO01"
4. **Timing:** Keep problem demo short (2-3 min)
5. **Contrast:** Make the difference obvious
6. **Energy:** Show frustration with problem, excitement with solution

---

## 🚀 Your Winning Pitch:

**Opening:**
> "Let me show you the current state of telemedicine..."

**Problem Demo:**
> "Video works, but look - language barrier, no AI, manual work..."

**Transition:**
> "This is the problem we're solving with Arogya AI..."

**Solution Demo:**
> "Same video call, but now with AI translation, transcription, 
> automatic notes, prescription generation..."

**Closing:**
> "That's the difference. That's Arogya AI."

---

**You've got this! 🎉**
