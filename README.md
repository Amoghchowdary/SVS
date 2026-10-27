# SVS Group of Institutions — V26 Editorial Legacy

**Complete, independent six-destination website package.** This version does not require V24, V23, or any previous folder. All front-end source, images, campus video, page templates, local server, Cloudflare Pages Worker, and GitHub Actions files are bundled.

## Six destinations

| Website | Local URL (port 3003) |
| --- | --- |
| SVS Group of Institutions | http://localhost:3003/ |
| SVS Medical College | http://medicalcollege.localhost:3003/ |
| SVS Medical College Hospital | http://medicalhospital.localhost:3003/ |
| SVS Dental College | http://dentalcollege.localhost:3003/ |
| SVS Dental Hospital | http://dentalhospital.localhost:3003/ |
| SVS Nursing College | http://nursingcollege.localhost:3003/ |

All destinations have individual **Home / Our story / Programmes or Services / Departments / Facilities / Contact** pages. The main group portal links to all five. Use `http://localhost:3003/?site=medicalcollege` as a fallback if Windows browser/DNS does not resolve `*.localhost`.

## Quick start — Windows PowerShell

```powershell
cd "C:\Users\SarkshGroups\OneDrive\Desktop\SVS\SVS_MultiSite_V26_CI_Verified"

node --version
npm run build
npm test
npm run dev
```

Node.js **20+** required. `npm install` is optional because V26 uses no external runtime packages. Use `START_V26_LOCAL.bat` to launch directly. You can stop the local server using Ctrl+C.

## Preserved V25 website design and V26 GitHub CI fixes

- **No boxed video:** group home hero remains a full-bleed version of the official supplied aerial campus video.
- **Heritage editorial typography:** calm serif headlines, restrained colour, wider content and consistent spacing.
- **In-depth writing:** revised from the supplied SVS brochure, without generic company slogans or unexplained numbers.
- **Photography-rich institution tiles:** five distinct destinations with visible media and individual vector icons.
- **Fuller academic and clinical pages:** editorial introduction, programme/service panels, photographs, practical information, facilities, and support links.
- **Responsive navigation:** desktop horizontal menu, tablet and mobile toggle, keyboard-accessible institution switcher.
- **No DNA/galaxy assets:** those were removed from the earlier production direction.

## Source structure

```text
src/content.cjs           Medical-college brochure content and institution maps
src/editorial.cjs         Extended contextual editorial copy for each institution
src/legacy-icons.cjs      Consistent inline SVGs
scripts/build.cjs         Generates 36 complete HTML pages and the public distribution
scripts/server.cjs        One HTTP server; routes by hostname or `?site=` on port 3003
scripts/verify.cjs        Base structural checks
scripts/verify-v26.cjs    V26-specific source/asset/content checks
scripts/worker_verify.mjs Tests host routing at the Cloudflare Worker layer
public/site.js            Accessible navigation, switcher, filtering, motion policy
public/site.css           Reset
public/editorial-v26.css  Full responsive institutional design system
public/assets/official/  Local official photos and campus video
cloudflare/_worker.js     Multi-domain site dispatch for Cloudflare Pages
dist/                     Complete ready-built deployment output
.github/workflows/        CI verification and optional Cloudflare deploy workflow
```

## Production deployment

See `DNS_SETUP.md`. Configure `config/domain.json` with the approved registered domain before production build. The six-domain routing design is intended for one Cloudflare Pages project with host-based selection. Each hostname must be added in Cloudflare Pages as a custom domain and configured in DNS; a DNS record alone is not the deployment.

A GitHub Actions verification workflow runs automatically on pull requests and `main`. Optional Cloudflare deployment is gated behind repository configuration and does **not** run until secrets and project variable exist.

## Content publication gates

The brochure documents society establishment in **1997** and medical college establishment in **1999**. MBBS and postgraduate MD/MS programmes, facilities and departments are described there, but current approvals, seat intakes, doctors, fees, and availability should be independently signed off by SVS before public publication.

The supplied medical-college brochure does **not** establish dental and nursing colleges' full course inventories, founding dates, approvals or seat figures. Their websites are deliberately navigable yet avoid inventing official details. The available group photographs cannot be represented as photographs of unverified dental facilities.

There is **no production patient portal, student authentication, scheduling, appointment booking, or backend storage** in this version. Contact information is displayed without an insecure demo form.
