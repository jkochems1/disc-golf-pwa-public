# Disc Golf — Jeffy vs Nicky (PWA Beta)

A lightweight Progressive Web App to track Jeffy vs Nicky disc golf matches and run the **BUBBLY** randomizer.

## Features
- Match entry: score, CTP, outside putts (30’, 40’, 50’), long putt distance, OB count
- Rolling season from **July 5 – July 4**
- Views: Current season, All-time
- Summary: wins, matches played, average score
- **BUBBLY**: weighted random picker with:
  - Points tracked as a **net** total per player
  - Non-point items tracked by count per player
  - Pool quantity decreases as items are drawn
  - Auto-reset every **July 5**, with archival of last season
  - Manual reset in Settings
- Local storage only (no server, no sign-in)
- Installable PWA (manifest + service worker)

## Quick Start
1. Install Node.js 18+
2. Install deps: `npm install`
3. Run dev server: `npm run dev`
4. Build: `npm run build`
5. Preview build: `npm run preview`

## Deploy on GitHub Pages (no terminal required)
1. Create a new **public** repo on GitHub.
2. Upload **all files** from this folder (including `.github/workflows/deploy.yml`).
3. Commit to branch **main**.
4. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
5. Open the **Actions** tab — the **Deploy to GitHub Pages** workflow will run.
6. When it finishes, your site URL appears in **Settings → Pages**.

Open that URL on your iPhone and **Add to Home Screen** to install the app.
