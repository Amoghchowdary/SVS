# V26: GitHub Actions verification repair

## Original failure in V25
GitHub Actions uses `actions/checkout@v4` which creates `.git` in the source directory.
The V25 assertion `!fs.existsSync(path.join(root,'.git'))` treated normal Git metadata as a packaging error and failed `npm test` on `main`, despite the website building successfully.

## V26 fix
- No verification rejects source-directory `.git` metadata.
- `scripts/verify-v26.cjs` verifies that source modules are present, and that the **published `dist/` contains no Git metadata**.
- Renamed the release verification script and V26 CSS so the release has consistent references.
- GitHub Actions verification now runs the checkout-safe V26 test suite and uploads `svs-v26-multisite-dist`.
- All six public site identities and their 36 rendered pages are preserved from V25; no redesign or content change has been introduced.
- The official campus video and images are bundled.

## Local and CI commands
```
npm run build
npm test
```
Both commands run without dependencies from earlier versions, whether the root contains `.git` or not.

## What has **not** been done
- This ZIP has not been pushed to GitHub.
- Cloudflare Pages deployment is gated behind explicit hosting setup.
- This CI fix alone does not prove public domain availability, DNS, or live Cloudflare deployment.
