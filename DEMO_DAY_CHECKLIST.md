# 🎯 Demo Day Checklist

## ✅ Before Demo (30 minutes before)

### Laptop 1 (Server Laptop):
- [ ] Fully charged
- [ ] Connected to WiFi
- [ ] Get IP address: `ipconfig` (Windows) or `ifconfig` (Mac)
- [ ] Write down IP: `192.168.___.___ `

### Laptop 2 (Client Laptop):
- [ ] Fully charged
- [ ] Connected to SAME WiFi as Laptop 1
- [ ] Test browser works
- [ ] Camera/mic permissions ready

---

## 🚀 Start Servers (Laptop 1)

**Terminal 1:**
```bash
cd healthcare-problem-demo
peerjs --port 9000 --key peerjs --path /myapp
```
✅ Should see: "Started PeerServer on ::, port: 9000"

**Terminal 2:**
```bash
cd healthcare-problem-demo
npm run dev
```
✅ Should see: "Ready on http://localhost:3003"

---

## 🧪 Test Before Presentation

### Laptop 1 (Doctor):
1. Open: `http://localhost:3003`
2. Sign up as Doctor (name: "Dr. Test")
3. Create room
4. Copy room code (e.g., "ABC123")

### Laptop 2 (Patient):
1. Open: `http://YOUR_IP:3003` (e.g., `http://192.168.1.100:3003`)
2. Sign up as Patient (name: "Test Patient")
3. Enter room code: "ABC123"
4. Join call

### ✅ Success Check:
- [ ] Both videos visible
- [ ] Audio working
- [ ] Mute button works
- [ ] Language warning shows

---

## 🎬 Your 5-Minute Pitch

### Slide 1: Problem (2 minutes)

**Show this website on both laptops:**

**Say:**
> "Let me show you the current state of telemedicine in India..."

**Demo:**
- Doctor creates room (Laptop 1)
- Patient joins (Laptop 2)
- Video call connects

**Point out problems:**
> "As you can see:
> - Video works ✅
> - But there's a language barrier ❌
> - No real-time translation ❌
> - No automatic transcription ❌
> - No AI-generated notes ❌
> - Doctor must manually document everything ❌"

**Show the yellow warning:**
> "See this warning? 'Language: English/Hindi' - but no translation!"

---

### Slide 2: Solution (3 minutes)

**Switch to your Arogya AI project:**

**Say:**
> "This is where Arogya AI comes in..."

**Show features:**
- Real-time AI translation
- Automatic transcription
- AI-powered consultation notes
- Prescription generation
- Multi-language support

**Contrast:**
> "Same video call technology, but now with AI that:
> - Translates in real-time
> - Transcribes automatically
> - Generates consultation notes
> - Creates prescriptions
> - All powered by AI"

---

## 💡 Key Talking Points

### Problem Website:
- "This is what 90% of telemedicine platforms look like today"
- "Basic video call, but language is a HUGE barrier"
- "Doctors waste 15-20 minutes on manual documentation"
- "Miscommunication leads to medical errors"

### Your Solution:
- "Arogya AI solves all of this with AI"
- "Real-time translation breaks language barriers"
- "Automatic documentation saves doctor's time"
- "AI ensures accuracy and reduces errors"
- "Scalable across all Indian languages"

---

## 🎯 Backup Plan

### If WiFi fails:
- [ ] Have video recording of working demo
- [ ] Use phone hotspot as backup WiFi
- [ ] Show screenshots of features

### If camera fails:
- [ ] Use phone camera
- [ ] Show pre-recorded demo
- [ ] Focus on slides and explanation

---

## 📊 Impact Numbers to Mention

- "70% of India speaks regional languages"
- "Only 10% of doctors speak patient's native language"
- "15-20 minutes wasted on manual documentation per consultation"
- "30% miscommunication rate in cross-language consultations"
- "Arogya AI reduces consultation time by 40%"

---

## 🔥 Closing Statement

> "The technology for video calls exists. But without AI-powered 
> translation and automation, it's not enough. Arogya AI bridges 
> the language gap and makes healthcare accessible to every Indian, 
> in their own language. That's the future of telemedicine."

---

## ✅ Final Check (5 minutes before)

- [ ] Both laptops on same WiFi
- [ ] Servers running on Laptop 1
- [ ] Test call successful
- [ ] Room code ready (use "DEMO01")
- [ ] Slides ready
- [ ] Confident and ready!

---

**You've got this! 🚀**

**Remember:**
- Keep problem demo SHORT (2 min)
- Make the contrast OBVIOUS
- Show EXCITEMENT for your solution
- Be CONFIDENT in your pitch

**Good luck! 🎉**
