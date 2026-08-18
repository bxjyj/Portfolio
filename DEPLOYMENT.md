# Deployment

This site is a Vite + React app. It needs a build step before it can be
hosted — you can no longer just drag the raw files into GitHub Pages.

## One-time setup: point GitHub Pages at Actions

1. On GitHub, go to **Settings → Pages**.
2. Under **Source**, choose **GitHub Actions** (not "Deploy from a branch").

That's it. From then on, every push to `main` runs
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
installs dependencies, runs `npm run build`, and publishes the `dist/`
folder to `https://bxjyj.github.io/Portfolio/`. Check the **Actions** tab
on GitHub to watch a deploy or see why one failed.

## Local development

```bash
npm install
npm run dev
```

Opens a dev server (default `http://localhost:5173`) with instant hot
reload — this is the fast local-preview loop the old CDN+Babel setup didn't
have. Edit anything under `src/` and the browser updates immediately.

## Manual build (optional)

```bash
npm run build      # outputs to dist/
npm run preview    # serve that build locally to sanity-check it
```

## Manual deploy (fallback, not needed if Actions is set up)

```bash
npm run deploy      # builds, then pushes dist/ to the gh-pages branch
```

Only use this if you've deliberately gone back to "Deploy from a branch →
gh-pages" in Pages settings instead of Actions.

## Repo name / base path

`vite.config.js` hardcodes `base: '/Portfolio/'` because GitHub Pages serves
this project site from `https://bxjyj.github.io/Portfolio/`, not the domain
root. If you ever rename the repo, update that value (and the `homepage`
field in `package.json`) to match.
