# 🚀 START HERE - Video Call Fix for Netlify

## The Problem

Your healthcare demo is deployed on Netlify, but **video calls don't work** because:

- ✅ Netlify hosts your frontend (React/Next.js)
- ❌ Netlify doesn't run your backend (Socket.IO + PeerJS servers)
- ❌ Video calls need these servers to connect users

## The Solution (5 Minutes)

Deploy your backend to **Render** (free) and connect it to Netlify.

```
┌─────────────┐         ┌─────────────┐         ┌──────────────┐
│   NETLIFY   │────────►│   RENDER    │────────►│ PEERJS CLOUD │
│  (Frontend) │         │  (Backend)  │         │  (WebRTC)    │
└─────────────┘         └─────────────┘         └──────────────┘
     ✅                       ✅                        ✅
```

## Quick Fix (Choose One)

### 🎯 Option 1: Follow the Checklist (Easiest)
Open **[DEPLOY_CHECKLIST.txt](DEPLOY_CHECKLIST.txt)** and follow the checkboxes.

### 📖 Option 2: Read the Quick Guide
Open **[QUICK_FIX.md](QUICK_FIX.md)** for a 5-minute guide.

### 📚 Option 3: Detailed Instructions
Open **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** for complete details.

## What You'll Do

1. **Deploy backend to Render** (5 min)
   - Sign up at https://render.com
   - Connect your GitHub repo
   - Click deploy

2. **Add environment variables to Netlify** (2 min)
   - Copy your Render URL
   - Add 5 environment variables
   - Save

3. **Redeploy Netlify** (1 min)
   - Trigger new deployment
   - Wait for build

4. **Test** (1 min)
   - Open your site
   - Start video call
   - It works! 🎉

## Files You Need

| File | Purpose |
|------|---------|
| **[DEPLOY_CHECKLIST.txt](DEPLOY_CHECKLIST.txt)** | Step-by-step checklist with checkboxes |
| **[QUICK_FIX.md](QUICK_FIX.md)** | 5-minute deployment guide |
| **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** | Detailed instructions + troubleshooting |
| **[ARCHITECTURE.md](ARCHITECTURE.md)** | How it works (technical) |
| **[NETLIFY_VIDEO_FIX_SUMMARY.md](NETLIFY_VIDEO_FIX_SUMMARY.md)** | What was changed in code |

## Cost

- **Netlify**: Free ✅
- **Render**: Free tier ✅
- **PeerJS Cloud**: Free ✅
- **Total**: $0 💰

## Important Notes

⚠️ **Render free tier sleeps after 15 minutes of inactivity**
- First connection takes 30-60 seconds to wake up
- After that, it's instant
- For production, upgrade to paid plan ($7/mo)

✅ **This is normal and expected for free tier**

## Need Help?

1. Check browser console (F12) for errors
2. Read **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** troubleshooting section
3. Verify environment variables are set correctly
4. Make sure Render backend is running (visit your Render URL)

## What Was Changed

The code has been updated to:
- ✅ Support environment variables for backend URLs
- ✅ Use PeerJS cloud server by default
- ✅ Work with separate backend deployment
- ✅ Handle production vs development environments

See **[NETLIFY_VIDEO_FIX_SUMMARY.md](NETLIFY_VIDEO_FIX_SUMMARY.md)** for details.

## Ready to Deploy?

👉 **Start with [DEPLOY_CHECKLIST.txt](DEPLOY_CHECKLIST.txt)**

It has checkboxes for each step so you don't miss anything!

---

**Questions?** Check the troubleshooting section in [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
