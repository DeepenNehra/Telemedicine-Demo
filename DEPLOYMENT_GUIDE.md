# Complete Deployment Guide for Netlify

## Why Video Calls Don't Work on Netlify

Your app has 3 parts:
1. **Frontend (Next.js)** - Works on Netlify ✅
2. **Socket.IO Server** - Needs Node.js backend ❌
3. **PeerJS Server** - Needs Node.js backend ❌

Netlify only hosts static sites, so parts 2 and 3 don't work.

## Quick Fix: Deploy Backend to Render (Free)

### Step 1: Deploy Backend to Render

1. Go to https://render.com and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `healthcare-demo-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

5. Click "Create Web Service"
6. Wait for deployment (5-10 minutes)
7. Copy your backend URL (e.g., `https://healthcare-demo-backend.onrender.com`)

### Step 2: Run PeerJS Server Separately

Since the peer package integration is complex, use the official PeerJS cloud server:

**Option A: Use PeerJS Cloud (Easiest)**
- Free tier available
- Go to https://peerjs.com/peerserver
- Or use the public server: `0.peerjs.com`

**Option B: Deploy Your Own PeerJS Server**
1. Create a separate repository with just PeerJS server:
   ```bash
   npm install peer
   ```
2. Create `index.js`:
   ```javascript
   const { PeerServer } = require('peer');
   
   const peerServer = PeerServer({
     port: process.env.PORT || 9000,
     path: '/myapp'
   });
   
   console.log('PeerJS server running on port', process.env.PORT || 9000);
   ```
3. Deploy to Render as a separate service

### Step 3: Configure Environment Variables in Netlify

1. Go to your Netlify site dashboard
2. Click "Site settings" → "Environment variables"
3. Add these variables:

**If using Render backend + PeerJS Cloud:**
```
NEXT_PUBLIC_SOCKET_URL=https://your-backend.onrender.com
NEXT_PUBLIC_PEER_HOST=0.peerjs.com
NEXT_PUBLIC_PEER_PORT=443
NEXT_PUBLIC_PEER_PATH=/
NEXT_PUBLIC_PEER_SECURE=true
```

**If using Render for both:**
```
NEXT_PUBLIC_SOCKET_URL=https://your-backend.onrender.com
NEXT_PUBLIC_PEER_HOST=your-peerjs-server.onrender.com
NEXT_PUBLIC_PEER_PORT=443
NEXT_PUBLIC_PEER_PATH=/myapp
NEXT_PUBLIC_PEER_SECURE=true
```

### Step 4: Redeploy on Netlify

1. Go to "Deploys" tab
2. Click "Trigger deploy" → "Deploy site"
3. Wait for deployment

### Step 5: Test

1. Open your Netlify URL
2. Sign in as Doctor → Start consultation
3. Copy room code
4. Open in another browser/device
5. Sign in as Patient → Join with room code
6. Video call should connect!

## Alternative: Deploy Everything to Render

If you want to avoid Netlify entirely:

1. Deploy to Render as a "Web Service" (same as Step 1 above)
2. Render will run your `npm start` command which includes both frontend and backend
3. No environment variables needed (uses localhost)
4. Access at your Render URL

## Troubleshooting

### Video call still not connecting?

1. **Check browser console** for errors
2. **Verify environment variables** are set in Netlify
3. **Check Render logs** to see if backend is running
4. **Test backend directly**: Visit `https://your-backend.onrender.com` - should show Next.js page
5. **Check HTTPS**: Video calls require HTTPS (both Netlify and Render provide this)

### Common Issues

- **"Camera access denied"**: Allow camera/microphone in browser
- **"Connection error"**: Backend not running or wrong URL
- **"Peer error"**: PeerJS server not accessible
- **Render free tier sleeps**: First connection takes 30-60 seconds to wake up

## Cost Summary

- **Netlify**: Free (frontend)
- **Render**: Free tier (backend) - sleeps after 15 min inactivity
- **PeerJS Cloud**: Free tier available
- **Total**: $0 for testing/demo

## Recommended Setup for Production

For a production app, consider:
- **Render Paid Plan** ($7/mo) - No sleep, better performance
- **Your own PeerJS server** - More control
- **TURN servers** - Better connectivity (Google Cloud, Twilio)
