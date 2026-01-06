# Deployment Guide

This guide explains how to deploy the auto-annotated portfolio to GitHub Pages.

## Prerequisites

The repository has been configured with:
- Next.js static export enabled (`output: 'export'` in `next.config.js`)
- GitHub Actions workflow (`.github/workflows/nextjs.yml`) for automatic deployment
- Proper `.gitignore` configuration to exclude build artifacts

## Deployment Steps

### 1. Enable GitHub Pages

To enable GitHub Pages for this repository:

1. Go to your repository on GitHub (e.g., `https://github.com/[username]/[repository-name]`)
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under **Source**, select **GitHub Actions** from the dropdown
5. Click **Save**

### 2. Automatic Deployment

Once GitHub Pages is enabled:

- The workflow will automatically run when code is pushed to the `main` branch
- The workflow can also be triggered manually from the Actions tab
- Each successful build will deploy the site to GitHub Pages

### 3. Access Your Deployed Site

After the workflow completes successfully, your site will be available at:

```
https://[username].github.io/[repository-name]/
```

Replace `[username]` with your GitHub username and `[repository-name]` with your repository name.

You can find the exact URL in the Actions tab or the Pages settings after a successful deployment.

## Manual Deployment (Optional)

If you need to trigger a deployment manually:

1. Go to the **Actions** tab in your GitHub repository
2. Click on **Deploy Next.js site to Pages** workflow
3. Click **Run workflow** button
4. Select the branch (usually `main`)
5. Click **Run workflow**

## Troubleshooting

### Build Failures

If the build fails, check:
- The Actions tab for detailed error logs
- Ensure all dependencies are properly listed in `package.json`
- Verify that the build works locally with `npm run build`

### GitHub Pages Not Working

If GitHub Pages doesn't seem to be working:
- Verify GitHub Pages is enabled in repository settings
- Check that the workflow has the correct permissions (defined in `.github/workflows/nextjs.yml`)
- Ensure the deployment step completed successfully in the Actions tab

### 404 Errors

If you see 404 errors on the deployed site:
- Check that `trailingSlash: true` is set in `next.config.js` (already configured)
- Verify that all internal links use proper paths
- Review the generated `out` directory structure matches expected paths

## Local Testing

To test the production build locally:

```bash
npm run build
npx serve out
```

This will serve the static site locally (typically on http://localhost:3000 or http://localhost:5000 depending on your configuration)

## Additional Resources

- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
