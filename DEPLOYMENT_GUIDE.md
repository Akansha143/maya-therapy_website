# 🚀 Deployment Guide - Dr. Maya Reynolds Therapy Website

This guide will walk you through deploying your therapy website to Vercel (recommended) or Netlify.

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is created by the Next.js team and offers the best performance for Next.js applications.

### Step 1: Prepare Your GitHub Repository

1. **Create a GitHub account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Click "Sign up"

2. **Create a new repository**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it: `dr-maya-reynolds-therapy`
   - Keep it public (or private if you prefer)
   - Click "Create repository"

3. **Push your code to GitHub**

   Open your terminal in the project directory and run:

   ```bash
   # Initialize git (if not already done)
   git init

   # Add all files
   git add .

   # Commit your changes
   git commit -m "Initial commit: Dr. Maya Reynolds therapy website"

   # Add your GitHub repository as remote
   # Replace YOUR_USERNAME with your GitHub username
   git remote add origin https://github.com/YOUR_USERNAME/dr-maya-reynolds-therapy.git

   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. **Create a Vercel account**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Sign up with GitHub (easiest option)

2. **Import your project**
   - Click "Add New..." → "Project"
   - You'll see your GitHub repositories
   - Find `dr-maya-reynolds-therapy`
   - Click "Import"

3. **Configure your project**
   - **Framework Preset**: Vercel auto-detects Next.js ✅
   - **Root Directory**: `./ ` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - Click "Deploy"

4. **Wait for deployment** (Usually takes 1-3 minutes)
   - Vercel will build your site
   - You'll see a progress indicator
   - Once complete, you'll get a live URL!

### Step 3: Get Your Live URL

Your site will be live at:
```
https://dr-maya-reynolds-therapy-[random-string].vercel.app
```

You can customize this domain in Vercel settings!

### Step 4: Custom Domain (Optional)

1. Go to your project in Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `drmayareynolds.com`)
4. Follow Vercel's DNS configuration instructions

---

## Option 2: Deploy to Netlify

### Step 1: Build Your Site

In your project directory, run:

```bash
npm run build
```

This creates a production-ready build.

### Step 2: Deploy to Netlify

**Method A: Drag & Drop (Quickest for testing)**

1. Go to [netlify.com](https://netlify.com)
2. Sign up / Log in
3. Click "Add new site" → "Deploy manually"
4. Drag the entire `therapy-website` folder into the upload area
5. Wait for deployment (2-3 minutes)
6. Get your live URL: `https://random-name-12345.netlify.app`

**Method B: GitHub Integration (Better for updates)**

1. Push your code to GitHub (see Vercel Step 1 above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub
5. Select your repository
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
7. Click "Deploy site"

---

## 📊 Post-Deployment Checklist

After deployment, verify these items:

- [ ] Homepage loads correctly
- [ ] All images display properly
- [ ] Navigation works (Blog, Contact)
- [ ] Mobile menu functions
- [ ] Blog page displays all posts
- [ ] Contact form is accessible
- [ ] All animations work
- [ ] Site is responsive on mobile
- [ ] SEO meta tags are present (view page source)

### Test Your Site

Use these tools to verify quality:

1. **Google PageSpeed Insights**
   - Go to [pagespeed.web.dev](https://pagespeed.web.dev)
   - Enter your live URL
   - Aim for 90+ scores

2. **Mobile-Friendly Test**
   - Go to [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)
   - Enter your URL
   - Verify mobile compatibility

3. **Manual Testing**
   - Open site on desktop browser
   - Open site on mobile phone
   - Test all links and buttons
   - Fill out contact form
   - Check blog page

---

## 🔄 Making Updates After Deployment

### For Vercel:

1. Make changes to your local files
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: [describe your changes]"
   git push
   ```
3. Vercel automatically rebuilds and deploys! ✨

### For Netlify:

Same process as Vercel if you used GitHub integration. For manual deployment:
1. Make changes
2. Run `npm run build`
3. Drag and drop the folder again to Netlify

---

## 🐛 Common Deployment Issues

### Issue: Build Fails on Vercel/Netlify

**Error**: "Cannot find module"

**Solution**:
```bash
# Delete and reinstall dependencies
rm -rf node_modules package-lock.json
npm install
git add .
git commit -m "Fix: dependencies"
git push
```

### Issue: Images Don't Load

**Check**: `next.config.js` has correct image domains

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

### Issue: 404 Error on Blog/Contact Pages

**Solution**: Ensure you've pushed all files to GitHub
```bash
git add app/blog app/contact
git commit -m "Add blog and contact pages"
git push
```

### Issue: Fonts Not Loading

Fonts should load automatically with Next.js. If not:
1. Check `app/layout.tsx` has correct font imports
2. Verify Google Fonts CDN is accessible
3. Clear browser cache and hard refresh (Ctrl+Shift+R)

---

## 🎥 Before Recording Your Video

Make sure your site is live and working:

1. ✅ Deployed successfully
2. ✅ All pages load correctly
3. ✅ Mobile responsive
4. ✅ No console errors
5. ✅ All images display

Then record your Loom walkthrough using the live URL!

---

## 📞 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)

---

## 🎉 Congratulations!

Your therapy website is now live on the internet! Share your URL:

```
🌐 Live Site: [YOUR-URL-HERE]
📂 GitHub: [YOUR-REPO-URL]
🎥 Video: [YOUR-LOOM-VIDEO]
```

Good luck with your internship submission! 🚀