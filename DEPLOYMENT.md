# Deployment Guide

This guide provides step-by-step instructions to deploy your auto-annotated portfolio and get a live link.

## Quick Deploy Options

### Option 1: Deploy to Netlify (Recommended - Takes 2 minutes)

This is the fastest way to get your portfolio live with a shareable link.

1. **One-Click Deploy:**
   - Click the "Deploy to Netlify" button in the [README.md](./README.md)
   - Or visit: https://app.netlify.com/start/deploy?repository=https://github.com/pulkitrais/auto-annotated-portfolio
   
2. **Sign in to Netlify:**
   - Create a free account or sign in with GitHub
   
3. **Configure Your Site:**
   - Give your site a name (or use the auto-generated one)
   - Click "Save & Deploy"
   
4. **Get Your Link:**
   - Wait 2-3 minutes for the build to complete
   - Your live site will be at: `https://[your-site-name].netlify.app`
   - You can customize the domain in Site Settings

### Option 2: Deploy to Vercel (Takes 2 minutes)

1. **Visit Vercel:**
   - Go to https://vercel.com/new
   
2. **Import Repository:**
   - Connect your GitHub account
   - Select this repository: `pulkitrais/auto-annotated-portfolio`
   
3. **Configure Project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   
4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for the build
   - Your live link: `https://[project-name].vercel.app`

### Option 3: Deploy to GitHub Pages

GitHub Pages requires additional configuration for Next.js static export.

1. **Update next.config.js:**
   ```javascript
   module.exports = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   ```

2. **Build Static Site:**
   ```bash
   npm run build
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to Pages section
   - Select source: GitHub Actions

4. **Create Deployment Workflow:**
   - Create `.github/workflows/deploy.yml`
   - Add Next.js static export workflow
   - Your site will be at: `https://[username].github.io/auto-annotated-portfolio`

## Local Development & Testing

Before deploying, you can test locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

## Build & Preview Production

Test the production build locally:

```bash
# Build the project
npm run build

# Start production server
npm start

# Visit http://localhost:3000
```

## Getting Your Live Link

After deployment, you'll receive a live URL:

- **Netlify:** `https://[your-site-name].netlify.app`
- **Vercel:** `https://[project-name].vercel.app`
- **GitHub Pages:** `https://[username].github.io/auto-annotated-portfolio`

## Custom Domain (Optional)

Both Netlify and Vercel allow free custom domains:

1. **Buy a domain** from providers like Namecheap, Google Domains, etc.
2. **Add domain** in your hosting platform's settings
3. **Update DNS records** as instructed by the platform
4. **Wait for SSL certificate** (automatic, takes 5-10 minutes)

## Troubleshooting

### Build Fails

If the build fails, check:
- All dependencies are listed in `package.json`
- Node version compatibility (use Node 18+)
- Build logs for specific errors

### Site Not Loading

- Check build status in deployment dashboard
- Verify output directory is set correctly (`.next`)
- Check browser console for errors

### Environment Variables

If you add environment variables:
1. Create `.env.local` for local development
2. Add variables in your hosting platform's dashboard
3. Prefix public variables with `NEXT_PUBLIC_`

## Continuous Deployment

Once deployed, your site auto-updates when you push to your repository:
- Every `git push` triggers a new build
- Changes go live in 2-3 minutes
- No manual redeployment needed

## Support

- **Netlify:** https://answers.netlify.com/
- **Vercel:** https://vercel.com/support
- **Next.js:** https://nextjs.org/docs
