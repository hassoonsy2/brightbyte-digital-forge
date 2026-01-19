# GitHub Pages Deployment Troubleshooting Guide

## Error: 422 Validation Failed

This error typically occurs when GitHub Pages cannot validate the deployment. Here are the most common causes and solutions:

### 1. **GitHub Pages Not Enabled**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions" (not "Deploy from a branch")
   - Save the settings

### 2. **Repository Permissions**
   - Ensure the workflow has the correct permissions
   - The workflow file should have:
     ```yaml
     permissions:
       contents: read
       pages: write
       id-token: write
     ```

### 3. **Custom Domain Configuration**
   - If using a custom domain (bright-byte.co):
     - Ensure DNS is configured correctly
     - The CNAME file is created in the dist folder (handled by workflow)
     - In repository Settings → Pages, verify the custom domain is set

### 4. **Workflow Configuration**
   - Ensure you're using the latest versions of GitHub Actions:
     - `actions/configure-pages@v4`
     - `actions/upload-pages-artifact@v3`
     - `actions/deploy-pages@v4`

### 5. **Build Artifact Issues**
   - The artifact should be uploaded from the `dist` folder
   - Ensure the build completes successfully
   - Check that `dist/index.html` exists

### 6. **File Size Limits**
   - Individual files: 100MB max
   - Total repository: 1GB max
   - Current dist folder: ~15MB (well within limits)

## Quick Fixes

1. **Re-run the workflow**: Go to Actions → Select the failed workflow → Re-run all jobs

2. **Check workflow logs**: Look for specific error messages in the build/deploy steps

3. **Verify GitHub Pages settings**:
   - Repository Settings → Pages
   - Source: GitHub Actions
   - Custom domain: bright-byte.co (if configured)

4. **Clear and rebuild**:
   ```bash
   rm -rf dist
   npm run build
   ```

## Current Workflow Status

✅ Workflow file is correctly configured
✅ Build completes successfully locally
✅ Artifact upload is properly configured
✅ CNAME file is created automatically
✅ Permissions are set correctly

If the error persists, check the GitHub Actions logs for more specific error messages.

