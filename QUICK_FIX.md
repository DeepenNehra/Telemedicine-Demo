# Quick Fix for Video Calls on Netlify

## The Problem
Netlify = Static hosting only. Your app needs Node.js servers running.

## Fastest Solution (5 minutes)

### Step 1: Deploy Backend to Render

1. Go to https://render.com (sign up with GitHub)
2. Click "New +" → "Web Service"
3. Select your repository
4. Settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click "Create Web Service"
6. Copy your URL (e.g., `https://xyz.onrender.com`)

### Step 2: Update Netlify Environment Variables

1. Go to Netlify Dashboard → Your Site
2. Site settings → Environment variables → Add variables
3. Add these:

```
NEXT_PUBLIC_SOCKET_URL=https://YOUR-RENDER-URL.onrender.com
NEXT_PUBLIC_PEER_HOST=0.peerjs.com
NEXT_PUBLIC_PEER_PORT=443
NEXT_PUBLIC_PEER_PATH=/
NEXT_PUBLIC_PEER_SECURE=true
```

Replace `YOUR-RENDER-URL` with your actual Render URL (without https://)

### Step 3: Redeploy Netlify

1. Deploys tab → Trigger deploy → Deploy site

### Step 4: Test

Open your Netlify site and test the video call!

## Important Notes

- **First connection on Render free tier takes 30-60 seconds** (server wakes up)
- After 15 minutes of inactivity, server sleeps again
- For production, upgrade to Render paid plan ($7/mo)

## Still Not Working?

Check browser console (F12) for errors and see DEPLOYMENT_GUIDE.md for detailed troubleshooting.
