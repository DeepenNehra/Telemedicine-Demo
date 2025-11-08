# 🔧 Troubleshooting Guide

## Server is Running: http://localhost:3003

---

## ✅ Step-by-Step Testing

### 1. Close ALL Browser Windows First
- Close all Chrome windows
- This ensures clean state

### 2. Open Doctor Window (Regular Chrome)
1. Open **NEW Chrome window**
2. Go to: `http://localhost:3003`
3. Click "Join as Doctor"
4. Sign up with any details
5. Click "Create Room"
6. **COPY THE ROOM CODE** (e.g., EQCFBA)
7. Allow camera/microphone
8. **Press F12** to open console
9. You should see logs like:
   ```
   My ID: doctor-1234567890-abc123
   Socket connected: xyz
   Got local stream, joining room: EQCFBA
   I am first in room, waiting...
   ```

### 3. Open Patient Window (Incognito Chrome)
1. Press `Ctrl+Shift+N` (opens incognito)
2. Go to: `http://localhost:3003`
3. Click "Join as Patient"
4. Sign up with any details
5. **PASTE THE ROOM CODE**
6. Click "Join"
7. Allow camera/microphone
8. **Press F12** to open console
9. You should see logs like:
   ```
   My ID: patient-1234567890-xyz789
   Socket connected: abc
   Got local stream, joining room: EQCFBA
   Existing users in room: ["doctor-1234567890-abc123"]
   I will initiate connection to: doctor-1234567890-abc123
   Creating peer - Initiator: true
   Sending signal to: doctor-1234567890-abc123 Type: offer
   ```

### 4. Check Doctor Console
You should now see:
```
New user connected: patient-1234567890-xyz789
Received signal from: patient-1234567890-xyz789 Type: offer
Creating peer as non-initiator
Sending signal to: patient-1234567890-xyz789 Type: answer
✅ Received remote stream!
✅ Peer connection established!
```

### 5. Check Patient Console
You should see:
```
Received signal from: doctor-1234567890-abc123 Type: answer
✅ Received remote stream!
✅ Peer connection established!
```

---

## 🎯 What Should Happen

Within 2-3 seconds:
- ✅ Both videos appear
- ✅ Green dot shows "Connected"
- ✅ You see each other's video
- ✅ After 5 seconds: Language barrier warnings appear

---

## 🐛 Common Issues & Solutions

### Issue 1: "Waiting for other participant..." Forever

**Symptoms**: One window shows waiting, other never connects

**Solutions**:
1. **Check room codes match exactly**
   - Doctor creates: EQCFBA
   - Patient enters: EQCFBA (must be exact)

2. **Refresh both windows**
   - Close both windows
   - Start fresh from step 1

3. **Check console for errors**
   - Press F12 in both windows
   - Look for red error messages
   - Share errors if you see them

### Issue 2: "Connection error" Message

**Symptoms**: Shows "Connection error" in status

**Solutions**:
1. **Check camera/mic permissions**
   - Click camera icon in address bar
   - Ensure "Allow" is selected
   - Refresh page

2. **Close other apps using camera**
   - Close Zoom, Teams, Skype
   - Close other browser tabs with camera access
   - Try again

3. **Try different browser**
   - Use Firefox or Edge instead
   - Some browsers handle WebRTC better

### Issue 3: Only My Video Shows

**Symptoms**: See your own video but not the other person's

**Solutions**:
1. **Check console logs**
   - Press F12 in BOTH windows
   - Look for "✅ Received remote stream!"
   - If missing, connection didn't establish

2. **Verify signaling**
   - Check server terminal
   - Should see "Signal from X to Y"
   - If not, socket connection failed

3. **Restart server**
   ```bash
   # Stop server (Ctrl+C in terminal)
   # Start again
   npm run dev
   ```

### Issue 4: No Video at All (Black Screens)

**Symptoms**: Both video areas are black

**Solutions**:
1. **Grant permissions**
   - Browser will ask for camera/mic
   - Click "Allow"
   - If you clicked "Block", go to browser settings

2. **Check camera is working**
   - Open camera app on your computer
   - Verify camera works
   - Close camera app
   - Try again

3. **Check browser console**
   - Look for "Error accessing media devices"
   - This means permission denied

### Issue 5: Server Won't Start

**Symptoms**: Error when running `npm run dev`

**Solutions**:
1. **Port already in use**
   ```bash
   # Kill process on port 3003
   # Windows:
   netstat -ano | findstr :3003
   taskkill /PID <PID> /F
   
   # Then restart
   npm run dev
   ```

2. **Dependencies missing**
   ```bash
   npm install
   npm run dev
   ```

---

## 📊 Debug Checklist

Use this checklist to diagnose issues:

- [ ] Server is running (see "Ready on http://localhost:3003")
- [ ] Doctor window opened in regular Chrome
- [ ] Patient window opened in incognito Chrome
- [ ] Both windows on http://localhost:3003
- [ ] Room codes match exactly
- [ ] Camera/mic permissions granted in BOTH windows
- [ ] F12 console open in BOTH windows
- [ ] No red errors in console
- [ ] Server terminal shows "Signal from X to Y"
- [ ] Both windows show "Socket connected"
- [ ] Both windows show "Got local stream"

---

## 🔍 Console Commands for Debugging

Open console (F12) and run these:

### Check if socket is connected:
```javascript
// Should show socket object
console.log('Socket:', window.socketRef);
```

### Check if stream exists:
```javascript
// Should show MediaStream
console.log('Local stream:', document.querySelector('video').srcObject);
```

### Check peer connection:
```javascript
// Should show SimplePeer instance
console.log('Peer:', window.peerRef);
```

---

## 🆘 Still Not Working?

### Collect Debug Info:

1. **From Doctor Window Console**:
   - Copy all console logs
   - Note any red errors

2. **From Patient Window Console**:
   - Copy all console logs
   - Note any red errors

3. **From Server Terminal**:
   - Copy server output
   - Look for connection logs

4. **Share**:
   - Room code used
   - Browser versions
   - Operating system
   - Error messages

---

## ✅ Success Indicators

You'll know it's working when you see:

### In Browser:
- ✅ Two video feeds visible
- ✅ Green dot with "Connected" status
- ✅ Language barrier warnings (after 5s)
- ✅ Can hear audio from other side

### In Console:
- ✅ "✅ Received remote stream!"
- ✅ "✅ Peer connection established!"
- ✅ No red errors

### In Server Terminal:
- ✅ "Signal from doctor-xxx to patient-yyy"
- ✅ "Signal from patient-yyy to doctor-xxx"
- ✅ "Room XXXXX now has 2 users"

---

## 🎯 Quick Reset

If nothing works, do a complete reset:

```bash
# 1. Stop server (Ctrl+C)

# 2. Close ALL browser windows

# 3. Clear Next.js cache
rm -rf .next

# 4. Restart server
npm run dev

# 5. Open fresh browser windows
# 6. Try again from step 1
```

---

**Need more help?** Check the console logs and server terminal for specific error messages!
