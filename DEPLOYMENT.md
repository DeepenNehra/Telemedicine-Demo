# Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd healthcare-problem-demo
vercel
```

3. Follow the prompts and your app will be live!

### Option 2: GitHub + Vercel

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - Healthcare Problem Demo"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js and deploy

## Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

## Environment Variables

No environment variables are required for this demo app. Everything runs client-side using localStorage.

## Build Settings

- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 18.x or higher

## Post-Deployment Testing

1. Visit the landing page
2. Sign up as a Doctor
3. Create a consultation room
4. Open an incognito window
5. Sign up as a Patient
6. Join the room using the room code
7. Test the video call features
8. End the call and review the problems highlighted

## Performance Notes

- The app is fully client-side rendered where needed
- Static pages are pre-rendered for optimal performance
- WebRTC connections are peer-to-peer (no server required)
- LocalStorage is used for authentication (no database)

## Troubleshooting

### Camera/Microphone Access
- Ensure HTTPS is enabled (required for WebRTC)
- Grant browser permissions for camera and microphone
- Vercel automatically provides HTTPS

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Rebuild: `npm run build`

---

Your app should now be live and ready to demonstrate the language barrier problem in traditional telemedicine!
