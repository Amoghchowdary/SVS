# SVS Experience V21 — Official Full-Screen Video Website

SVS medical education and hospital website, adapted from V20 for GitHub Pages deployment.

## Changes
- Official SVS aerial video fills the whole homepage hero.
- Removed the dark "Where clinical learning takes flight" caption panel and playback button.
- Preserved headline, CTAs, specialty search, 15 animated departmental icons, and all public pages.
- Responsive breakpoints for desktop (1440 px), tablet (768 px), and mobile (390 px).
- Added GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.
- Added safe first-push script for [Amoghchowdary/SVS](https://github.com/Amoghchowdary/SVS).

## Run locally on Windows
```powershell
npm ci
npm test
npm run dev
```
Or double-click `START_V21_DEVELOPMENT.bat`.

## Push and deploy
1. Extract this folder to your preferred SVS project directory.
2. Double-click `PUSH_V21_GITHUB.bat`, or use PowerShell:
   ```powershell
   Set-ExecutionPolicy -Scope Process Bypass -Force
   .\PUSH_V21_GITHUB.ps1
   ```
3. Open the GitHub repository's **Settings > Pages > Build and deployment**, and select **GitHub Actions**.
4. The workflow runs `npm ci`, source/route checks, `npm run build`, then uploads and deploys `dist/`.
5. After Actions succeeds, the intended public URL is `https://amoghchowdary.github.io/SVS/`.

The push helper uses normal git push without force. If GitHub main already contains unrelated commits, it stops instead of overwriting them.

## Publishing notes
This is still a client design review build. The staff dashboard and enquiry form use browser-local demo data, not production authentication or a backend. They must not be used for private staff or patient data.
