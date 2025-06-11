# 🚀 Bright-Byte Website Deployment Guide

This guide will help you deploy your Bright-Byte website to **www.bright-byte.co** using GitHub Actions.

## 📋 Prerequisites

- [x] GitHub repository for your website
- [x] Custom domain: **www.bright-byte.co**
- [x] DNS access to configure domain settings

## 🏗️ Deployment Options

We've set up **GitHub Pages** as the primary deployment method, but alternatives are available.

### Option 1: GitHub Pages Deployment (Recommended)

#### Step 1: Repository Settings

1. Go to your GitHub repository
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**

#### Step 2: Configure Custom Domain

1. In **Settings** > **Pages**
2. Enter `www.bright-byte.co` in the **Custom domain** field
3. Check **Enforce HTTPS** (recommended)

#### Step 3: DNS Configuration

Configure your DNS settings with Google Domains:

**Method 1: CNAME Record (Recommended)**
1. Go to [Google Domains](https://domains.google.com)
2. Select your domain `bright-byte.co`
3. Click on **DNS** in the left sidebar
4. Scroll down to **Custom resource records**
5. Add a new CNAME record:
   - **Name**: `www`
   - **Type**: `CNAME`
   - **TTL**: `3600` (1 hour)
   - **Data**: `your-github-username.github.io` (replace with your actual GitHub username)

**Method 2: A Records (Alternative)**
If you prefer A records, add these four records:
1. In **Custom resource records**, add four A records:
   - **Name**: `www`
   - **Type**: `A`
   - **TTL**: `3600`
   - **Data**: Add each of these IPs as separate A records:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

**Important Google Domains Notes:**
- Changes can take up to 48 hours to propagate
- CNAME method is simpler and automatically updates if GitHub changes their IPs
- You can verify DNS changes using Google's DNS checker tool

#### Step 4: Environment Variables (Optional)

If you need EmailJS or other environment variables:

1. Go to **Settings** > **Secrets and variables** > **Actions**
2. Add these secrets:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

#### Step 5: Deploy

1. Push your code to the `main` or `master` branch
2. The GitHub Action will automatically trigger
3. Check the **Actions** tab to monitor deployment progress
4. Your site will be live at **https://www.bright-byte.co**

---

## 🔄 How the Deployment Works

### Workflow Trigger
- **Automatic**: Triggers on push to `main`/`master` branch
- **Manual**: Can be triggered from the Actions tab

### Build Process
1. ✅ Checkout repository
2. ✅ Setup Node.js 18
3. ✅ Install dependencies (`npm ci`)
4. ✅ Build the application (`npm run build`)
5. ✅ Create CNAME file for custom domain
6. ✅ Upload build artifacts
7. ✅ Deploy to GitHub Pages

### Files Created
```
.github/
└── workflows/
    ├── deploy.yml                    # Main deployment workflow
    └── deploy-alternatives.yml.example  # Alternative deployment options
```

---

## 🛠️ Alternative Deployment Options

If GitHub Pages doesn't meet your needs, we've included examples for:

### Option 2: Netlify
- Great for advanced features like form handling
- Built-in CI/CD
- Easy custom domain setup

### Option 3: Vercel  
- Excellent for React/Next.js apps
- Global CDN
- Automatic HTTPS

### Option 4: FTP Deployment
- Traditional web hosting
- Direct file upload to your server

### Option 5: SSH Deployment
- Deploy to your own VPS/server
- Full control over the deployment process

**To use alternatives:** Rename `.github/workflows/deploy-alternatives.yml.example` to `deploy-alternative.yml` and uncomment your preferred method.

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Custom Domain Not Working
- Check DNS propagation (can take up to 48 hours)
- Verify CNAME file is created correctly
- Ensure GitHub Pages is enabled in repository settings

#### 2. Build Failures
- Check Node.js version compatibility
- Verify all dependencies are in `package.json`
- Review build logs in Actions tab

#### 3. Environment Variables
- Ensure secrets are set correctly in repository settings
- Check that environment variable names match in workflow

#### 4. SSL Certificate Issues
- Wait 24 hours after DNS changes
- Try toggling "Enforce HTTPS" off and on
- Check domain verification in GitHub Pages settings

### Verification Commands

Test your deployment:
```bash
# Check DNS resolution
nslookup www.bright-byte.co

# Test HTTPS
curl -I https://www.bright-byte.co

# Check HTTP headers
curl -I https://www.bright-byte.co
```

---

## 📊 Monitoring Your Deployment

### GitHub Actions Dashboard
- Monitor build/deploy status
- View detailed logs
- Set up notifications for failures

### Domain Health Check
```bash
# Quick health check script
curl -s -o /dev/null -w "%{http_code}" https://www.bright-byte.co
```

### Expected Response
- ✅ **200**: Website is live and working
- ❌ **404**: Domain or deployment issue
- ❌ **502/503**: Server/hosting issue

---

## 🚀 Going Live Checklist

- [ ] Repository contains the latest code
- [ ] GitHub Pages is enabled in repository settings
- [ ] Custom domain `www.bright-byte.co` is configured
- [ ] DNS records are correctly set up
- [ ] HTTPS is enforced
- [ ] Environment variables are set (if needed)
- [ ] First deployment has completed successfully
- [ ] Website is accessible at https://www.bright-byte.co
- [ ] All pages and functionality work correctly
- [ ] EmailJS contact form is working (if configured)

---

## 🔄 Updating Your Website

Future updates are automatic:

1. Make changes to your code
2. Commit and push to `main`/`master` branch
3. GitHub Actions will automatically build and deploy
4. Changes will be live in 2-5 minutes

---

## 🆘 Support

If you encounter issues:

1. Check the **Actions** tab for detailed error logs
2. Verify DNS settings with your domain provider
3. Review GitHub Pages documentation
4. Check this guide's troubleshooting section

**Happy Deploying! 🎉** 