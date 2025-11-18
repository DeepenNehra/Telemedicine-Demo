# ⚡ Quick Deployment Guide

## ✅ Step 1: GitHub - DONE!
Your code is now on GitHub: https://github.com/DeepenNehra/Telemedicine-Demo

---

## 🔥 Step 2: Deploy Backend to Render (5 minutes)

### Quick Steps:
1. Go to: **https://render.com**
2. Sign up with GitHub
3. Click **"New +"** → **"Web Service"**
4. Select **"Telemedicine-Demo"** repository
5. Fill in:
   - **Name**: `mediconnect-backend`
   - **Root Directory**: `healthcare-problem-demo` ⚠️ IMPORTANT!
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: **Free**
6. Click **"Create Web Service"**
7. Wait 5-10 minutes
8. **Copy your URL**: `https://mediconnect-backend-xxxx.onrender.com`

---

## 🌐 Step 3: Deploy Frontend to Netlify (5 minutes)

### Quick Steps:
1. Go to: **https://app.netlify.com**
2. Sign up with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **"Deploy with GitHub"**
5. Select **"Telemedicine-Demo"**
6. Fill in:
   - **Base directory**: `healthcare-problem-demo`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

### Add Environment Variables:
Click **"Show advanced"** → **"New variable"** and add these 5:

```
NEXT_PUBLIC_SOCKET_URL = https://YOUR-RENDER-URL.onrender.com
NEXT_PUBLIC_PEER_HOST = 0.peerjs.com
NEXT_PUBLIC_PEER_PORT = 443
NEXT_PUBLIC_PEER_PATH = /
NEXT_PUBLIC_PEER_SECURE = true
```

⚠️ Replace `YOUR-RENDER-URL` with your actual Render URL from Step 2!

7. Click **"Deploy site"**
8. Wait 3-5 minutes
9. Your site is live! 🎉

---

## 🎯 Step 4: Test It!

1. Visit your Netlify URL
2. Sign up as Doctor
3. Start consultation
4. Copy room code
5. Open in another browser
6. Sign up as Patient
7. Join with room code
8. Video call works! ✅

---

## 📝 Important Notes

### First Connection
- Render free tier sleeps after 15 min
- First connection takes 30-60 seconds
- This is normal! Just wait

### Cost
- **Everything is FREE!** 🎉
- Render: Free tier
- Netlify: Free tier
- PeerJS: Free tier

### Upgrade Later
- Render paid: $7/mo (no sleep)
- Custom domain: ~$10/year

---

## 🆘 Need Help?

See **DEPLOYMENT.md** for detailed instructions and troubleshooting.

---

**Ready to deploy? Start with Render, then Netlify!** 🚀
