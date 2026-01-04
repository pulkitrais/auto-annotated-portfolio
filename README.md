# Netlify Developer Portfolio Starter (auto-annotated)

![Developer Portfolio](https://assets.stackbit.com/docs/personal-nextjs-starter-thumb.png)

This is a full-fledged portfolio website built with Next.js, Tailwind CSS, [visual editor](https://docs.netlify.com/visual-editor/overview/) and the [Git Content Source](https://docs.netlify.com/create/content-sources/git/).

The codebase showcases **how to apply annotations at scale**, meaning: how to make much of your components [highlightable in the visual editor](https://docs.netlify.com/visual-editor/visual-editing/inline-editor/) through data attributes without manually adding code throughout the codebase.

**This is achieved by:**

1. Adding an annotation property to the content objects at they're loaded (see `src/utils/content.ts`)
1. When rendering the page, each content sub-object is dynamically matched to the appropriate component. At this point, wrap each component with an annotation, based on the abovementioned content property. See `src/components/components-registry.tsx`.

**⚡ Demo:** [auto-annotated-portfolio.netlify.app](https://auto-annotated-portfolio.netlify.app)

## 🚀 Quick Deploy - Get Your Live Link

Want to get your portfolio live right now? Choose one of these options:

### Deploy to Netlify (2 minutes)
1. Click the "Deploy to Netlify" button below
2. Sign in with GitHub (free)
3. Click "Save & Deploy"
4. Get your live link: `https://[your-site-name].netlify.app`

### Deploy to Vercel (2 minutes)
1. Visit [vercel.com/new](https://vercel.com/new)
2. Import this repository
3. Click "Deploy"
4. Get your live link: `https://[project-name].vercel.app`

📖 **Need more details?** See the complete [Deployment Guide](./DEPLOYMENT.md) for step-by-step instructions, troubleshooting, and custom domain setup.

## Deploying to Netlify

If you click "Deploy to Netlify" button, it will deploy this repository directly to Netlify and give you a live link.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pulkitrais/auto-annotated-portfolio)

## Getting Started

The typical development process is to begin by working locally. Clone this repository, then run `npm install` in its root directory.

Run the Next.js development server:

```txt
cd auto-annotated-portfolio
npm run dev
```

Install the [Netlify visual editor CLI](https://www.npmjs.com/package/@stackbit/cli). Then open a new terminal window in the same project directory and run the Netlify visual editor dev server:

```txt
npm install -g @stackbit/cli
stackbit dev
```

This outputs your own Netlify visual editor URL. Open this, register or sign in, and you will be directed to Netlify's visual editor for your new project.

![Next.js Dev + Netlify visual editor dev](https://assets.stackbit.com/docs/next-dev-stackbit-dev.png)

## Next Steps

Here are a few suggestions on what to do next if you're new to Netlify Visual Editor:

- Learn [how Netlify Visual Editor works](https://docs.netlify.com/visual-editor/overview/)
- Check [Netlify visual editor reference documentation](https://visual-editor-reference.netlify.com/)

## Support

If you get stuck along the way, get help in our [support forums](https://answers.netlify.com/).
