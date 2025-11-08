# Quick Start Guide

Get the Healthcare Problem Demo running in 3 minutes!

## Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Installation & Setup

```bash
# Navigate to project directory
cd healthcare-problem-demo

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

The app will be available at: **http://localhost:3000**

## Testing the Demo

### Scenario 1: Doctor Creates Room

1. Open http://localhost:3000
2. Click "Join as Doctor"
3. Sign up with:
   - Name: Dr. Smith
   - Email: doctor@example.com
   - Password: password123
   - Role: Doctor
4. Click "Create Room"
5. **Copy the room code** displayed at the top
6. Allow camera/microphone access when prompted

### Scenario 2: Patient Joins Room

1. Open a **new incognito/private window**
2. Go to http://localhost:3000
3. Click "Join as Patient"
4. Sign up with:
   - Name: Raj Kumar
   - Email: patient@example.com
   - Password: password123
   - Role: Patient
5. Enter the room code from the doctor
6. Click "Join"
7. Allow camera/microphone access

### Experience the Problem

- Notice the language labels: "Doctor (Speaking English)" and "Patient (Speaking Hindi)"
- See the warning messages appear after 3 seconds
- Try the controls (mute, video, end call)
- End the call to see the comprehensive problem summary

## Key Features to Test

✅ **Landing Page**: Clear problem statement
✅ **Authentication**: Quick sign up/sign in
✅ **Doctor Dashboard**: Room creation with code
✅ **Patient Dashboard**: Room joining with code
✅ **Video Call**: WebRTC with language barriers
✅ **Call Ended**: Problem highlights

## Common Issues

### Camera/Microphone Not Working
- Grant browser permissions
- Use HTTPS in production (HTTP works on localhost)
- Check browser console for errors

### Room Code Not Working
- Ensure code is entered correctly (case-sensitive)
- Both users must be logged in
- Try creating a new room

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

## Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## Next Steps

After experiencing the problems in this demo:

1. Document the pain points you observed
2. List features that would solve these problems
3. Consider how AI translation would help
4. Think about automatic note generation
5. Imagine multilingual consultation summaries

This demo sets the stage for **Project Arogya AI** - the solution to all these problems!

---

**Need Help?** Check the full README.md for detailed documentation.
