# GitHub Pages Deployment Guide

This project has been converted to deploy as static assets to GitHub Pages.

## What Changed

### Removed Server-Side Dependencies
- Removed TanStack Start SSR configuration
- Converted to pure client-side React + TanStack Router app
- No longer using Cloudflare Workers/Wrangler

### Files Added/Modified
- **vite.config.ts** - Updated to standard Vite config without Cloudflare plugin
- **src/main.tsx** - New entry point for client-side React app
- **src/routes/__root.tsx** - Simplified from SSR to CSR (client-side rendering)
- **index.html** - Standard HTML entry point
- **public/.nojekyll** - Tells GitHub Pages to skip Jekyll processing
- **public/404.html** - SPA redirect handler for client-side routing
- **.github/workflows/deploy.yml** - Automated GitHub Pages deployment workflow

## How It Works

1. **Build Process**: `bun run build` creates static files in `dist/`
2. **GitHub Actions**: Automatically builds and deploys on push to `main` branch
3. **SPA Routing**: 404.html redirects unmapped routes back to index.html for TanStack Router

## Local Development

```bash
# Install dependencies
bun install

# Run dev server
bun run dev

# Build for production
bun run build

# Preview production build locally
bun run preview
```

## Deployment

### Automatic (Recommended)
Push to the `main` branch and GitHub Actions will automatically:
1. Build the project
2. Deploy to GitHub Pages

### Manual
1. Run `bun run build`
2. Manually upload `dist/` folder to GitHub Pages

## Repository Settings

Configure GitHub Pages in your repository settings:
1. Go to Settings → Pages
2. Set source to "GitHub Actions"
3. The workflow file at `.github/workflows/deploy.yml` handles everything

## Optional: Project vs User/Organization Pages

If using a **project repository** (not organization/user page):
- Update `vite.config.ts` to add `base: '/repository-name/'`
- Update `.github/workflows/deploy.yml` if needed

Example for project repo:
```typescript
export default defineConfig({
  base: '/veda-rangapravesam/',
  // ... rest of config
});
```

## Troubleshooting

- **Styles not loading**: Check the base path in vite.config.ts
- **404 on page reload**: 404.html redirect should handle this automatically
- **Assets not found**: Verify asset paths use `/` prefix for GitHub Pages compatibility

## Notes

The `wrangler.jsonc` file is no longer needed for GitHub Pages deployment but has been left in place in case you want to switch back to Cloudflare hosting.
