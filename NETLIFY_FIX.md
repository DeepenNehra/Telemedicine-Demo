# Fixing Video Call on Netlify

## Problem
Your video call feature doesn't work on Netlify because:
- Netlify only hosts static sites (no Node.js server)
- Your app needs Socket.IO server (port 3003) and PeerJS server (port 9000)
- Both are hardcoded to `localhost` in the code

## Solution: Deploy Backend Separately

### Step 1: Deploy Backend to Render/Railway/Heroku

**Option A: Render (Free tier available)**
1. Go to https://render.com
2. Create new "Web Service"
3. Connect your GitHub repo
4. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node
5. Note your backend URL (e.g., `https://your-app.onrender.com`)

**Option B: Railway (Free tier available)**
1. Go to https://railway.app
2. Create new project from GitHub
3. It auto-detects Node.js
4. Note your backend URL

**Option C: Heroku**
1. Install Heroku CLI
2. Run:
   ```bash
   heroku create your-app-name
   git push heroku main
   ```
3. Note your backend URL

### Step 2: Set Up PeerJS Server

Add this to your `server.js` (already included in the fix):
```javascript
const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(httpServer, {
  path: '/myapp'
});
app.use('/peerjs', peerServer);
```

### Step 3: Update Environment Variables

Create `.env.local` in your project:
```
NEXT_PUBLIC_SOCKET_URL=https://your-backend-url.onrender.com
NEXT_PUBLIC_PEER_HOST=your-backend-url.onrender.com
NEXT_PUBLIC_PEER_PORT=443
NEXT_PUBLIC_PEER_PATH=/peerjs/myapp
```

### Step 4: Update Code to Use Environment Variables

The code has been updated to use these environment variables instead of hardcoded localhost.

### Step 5: Redeploy to Netlify

After setting environment variables in Netlify dashboard:
1. Go to Site settings > Environment variables
2. Add all NEXT_PUBLIC_* variables
3. Trigger new deployment

## Alternative: Use Public PeerJS Server (Quick Test)

For testing only, you can use the public PeerJS server:
```
NEXT_PUBLIC_PEER_HOST=0.peerjs.com
NEXT_PUBLIC_PEER_PORT=443
NEXT_PUBLIC_PEER_PATH=/
```

But you still need to deploy your Socket.IO server separately.

## Cost Estimate
- Netlify: Free (frontend)
- Render/Railway: Free tier available (backend)
- Total: $0 for small usage

## Testing
1. Deploy backend first
2. Get backend URL
3. Update environment variables
4. Redeploy frontend
5. Test video call between two devices
