# 🚀 Complete Deployment Guide

## Step 1: Push to GitHub

### 1.1 Check Git Status
```bash
cd healthcare-problem-demo
git status
```

### 1.2 Add All Changes
```bash
git add .
```

### 1.3 Commit Changes
```bash
git commit -m "Complete telemedicine platform with video call and chat"
```

### 1.4 Push to GitHub
```bash
git push origin main
```

If you get an error, use:
```bash
git push -u origin main
```

---

## Step 2: Deploy Backend to Render

### 2.1 Sign Up for Render
1. Go to: **https://render.com**
2. Click **"Get Started"**
3. Sign up with **GitHub** (easiest option)
4. Authorize Render to access your repositories

### 2.2 Create New Web Service
1. Click **"New +"** button (top right)
2. Select **"Web Service"**
3. Connect your repository:
   - Find: **"Telemedicine-Demo"** (or your repo name)
   - Click **"Connect"**

### 2.3 Configure Service Settings

**Name**: `mediconnect-backend` (or any name you like)

**Region**: Choose closest to you
- Oregon (US West)
- Frankfurt (Europe)
- Singapore (Asia)

**Branch**: `main`

**Root Directory**: `healthcare-problem-demo`
⚠️ **IMPORTANT**: Don't leave this empty!

**Runtime**: Node

**Build Command**: 
```
npm install
```

**Start Command**: 
```
npm start
```

**Instance Type**: **Free** (scroll down to find it)

### 2.4 Deploy
1. Click **"Create Web Service"** (big blue button at bottom)
2. Wait 5-10 minutes for deployment
3. Watch the logs - you'll see:
   ```
   ==> Installing dependencies...
   ==> Build successful!
   ==> Starting service...
   🚀 Ready on http://0.0.0.0:10000
   📡 Socket.IO signaling server running
   ```

### 2.5 Copy Your Backend URL
Once deployed, you'll see at the top:
```
https://mediconnect-backend-xxxx.onrender.com
```

**📋 COPY THIS URL!** You'll need it for Netlify.

---

## Step 3: Deploy Frontend to Netlify

### 3.1 Sign Up for Netlify
1. Go to: **https://app.netlify.com**
2. Click **"Sign up"**
3. Choose **"Sign up with GitHub"**
4. Authorize Netlify

### 3.2 Create New Site
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Select your repository: **"Telemedicine-Demo"**
4. Configure build settings:

**Base directory**: `healthcare-problem-demo`

**Build command**: 
```
npm run build
```

**Publish directory**: 
```
.next
```

**Click "Show advanced"** and add these:

### 3.3 Add Environment Variables

Click **"Add environment variable"** and add these 5 variables:

**Variable 1:**
- Key: `NEXT_PUBLIC_SOCKET_URL`
- Value: `https://YOUR-RENDER-URL.onrender.com`
  (Replace with your actual Render URL from Step 2.5)

**Variable 2:**
- Key: `NEXT_PUBLIC_PEER_HOST`
- Value: `0.peerjs.com`

**Variable 3:**
- Key: `NEXT_PUBLIC_PEER_PORT`
- Value: `443`

**Variable 4:**
- Key: `NEXT_PUBLIC_PEER_PATH`
- Value: `/`

**Variable 5:**
- Key: `NEXT_PUBLIC_PEER_SECURE`
- Value: `true`

### 3.4 Deploy
1. Click **"Deploy site"**
2. Wait 3-5 minutes
3. Your site will be live!

### 3.5 Get Your Site URL
You'll see something like:
```
https://your-site-name.netlify.app
```

---

## Step 4: Test Your Deployment

### 4.1 Test Backend
1. Visit your Render URL: `https://your-backend.onrender.com`
2. You should see the Next.js landing page
3. If you see it, backend is working! ✅

### 4.2 Test Frontend
1. Visit your Netlify URL: `https://your-site.netlify.app`
2. You should see the landing page
3. Click "Get Started"
4. Sign up as Doctor
5. Start a consultation
6. Copy room code
7. Open in another browser/device
8. Sign up as Patient
9. Join with room code
10. Video call should connect! ✅

---

## Troubleshooting

### Issue: Backend not responding
**Solution**: 
- Render free tier sleeps after 15 min inactivity
- First request takes 30-60 seconds to wake up
- This is normal! Just wait a minute

### Issue: Video call not connecting
**Solution**:
1. Check browser console (F12) for errors
2. Verify all 5 environment variables are set in Netlify
3. Make sure NEXT_PUBLIC_SOCKET_URL is your Render URL
4. Wait 60 seconds for Render to wake up

### Issue: "Camera access denied"
**Solution**:
- Allow camera/microphone in browser settings
- Use HTTPS (both Netlify and Render provide this automatically)

### Issue: Build fails on Netlify
**Solution**:
- Make sure Base directory is set to: `healthcare-problem-demo`
- Check that all environment variables are added
- Try redeploying

---

## Important Notes

### Render Free Tier
- ✅ Completely free
- ⏰ Sleeps after 15 minutes of inactivity
- 🌅 First request takes 30-60 seconds to wake up
- 💰 Upgrade to paid ($7/mo) for instant connections

### Netlify Free Tier
- ✅ Completely free
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ CDN included

### PeerJS Cloud
- ✅ Free tier included
- ✅ Handles WebRTC connections
- ⚠️ Has usage limits (fine for demos)

### Total Cost
**$0** for development and testing! 🎉

---

## Production Recommendations

For a production app, consider:

1. **Render Paid Plan** ($7/mo)
   - No sleep
   - Faster performance
   - More resources

2. **Custom Domain**
   - Buy domain from Namecheap/GoDaddy
   - Connect to Netlify (free)
   - Professional URL

3. **Database**
   - Add PostgreSQL (Supabase free tier)
   - Store user data
   - Real authentication

4. **Monitoring**
   - Set up error tracking (Sentry)
   - Analytics (Google Analytics)
   - Uptime monitoring

---

## Quick Reference

### Render Dashboard
- URL: https://dashboard.render.com
- View logs, restart service, check status

### Netlify Dashboard
- URL: https://app.netlify.com
- View deployments, update env vars, check analytics

### Update Environment Variables
1. Go to Netlify Dashboard
2. Site settings → Environment variables
3. Edit variables
4. Trigger new deployment

### Redeploy
**Netlify**: Deploys → Trigger deploy → Deploy site
**Render**: Manual Deploy → Deploy latest commit

---

## Support

If you encounter issues:
1. Check browser console (F12)
2. Check Render logs
3. Verify environment variables
4. Wait for Render to wake up (60 seconds)
5. Try in incognito mode

---

**You're ready to deploy! Follow the steps above and your telemedicine platform will be live!** 🚀
