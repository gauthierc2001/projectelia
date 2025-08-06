# Deployment Guide

## GitHub Setup

1. Create a new repository on GitHub
2. Push your code to GitHub:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Vercel Deployment

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Next.js project
6. Click "Deploy"

## Environment Variables

No environment variables are needed for this project.

## Build Settings

Vercel will automatically:
- Detect Next.js framework
- Install dependencies with `npm install`
- Build with `npm run build`
- Deploy to production

## Custom Domain (Optional)

After deployment, you can add a custom domain in your Vercel project settings. 