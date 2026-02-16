# Deploy AJCE React App to GitHub Pages

## Build

From the `app/` directory:

```bash
npm run build
```

This produces a `dist/` folder with static assets.

## GitHub Pages setup

The app is configured for GitHub Pages with base path `/amal-jyothi-website/` in `vite.config.js`. If your repo is `https://github.com/username/amal-jyothi-website`, use that base. For a root domain or `username.github.io/repo-name`, set `base` in `vite.config.js` to `'/repo-name/'` or `'/'`.

## Deploy options

### Option A: Push `dist` to `gh-pages` branch

1. Install `gh-pages`: `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`
3. Run: `npm run deploy`

### Option B: Use GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: app/package-lock.json
      - run: cd app && npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: app/dist
```

### Option C: Copy `dist` to `docs/` (if repo uses GitHub Pages from `docs/`)

1. Run `npm run build` in `app/`
2. Copy contents of `app/dist` to `docs/`
3. Set `base` in `vite.config.js` to `'/amal-jyothi-website/'` (or your repo name) so asset paths are correct.
4. In repo Settings → Pages, choose "Deploy from a branch" and select branch `main` / folder `docs/`.

## After deploy

The site will be available at `https://<username>.github.io/amal-jyothi-website/` (or your configured path).
