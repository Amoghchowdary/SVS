# V26 — Hostnames, CNAMEs and GitHub Actions

## Architecture
One SVS source repository and one Cloudflare Pages project, with distinct site experiences selected from the requested hostname. The hostname-to-website mapping is implemented by `cloudflare/_worker.js`, while localhost equivalents are handled by `scripts/server.cjs`.

| Site | Proposed hostname under `<approved-domain>` |
|---|---|
| Group | `<approved-domain>` |
| Medical College | `medicalcollege.<approved-domain>` |
| Medical Hospital | `medicalhospital.<approved-domain>` |
| Dental College | `dentalcollege.<approved-domain>` |
| Dental Hospital | `dentalhospital.<approved-domain>` |
| Nursing College | `nursingcollege.<approved-domain>` |

## Steps when the registered domain is final

1. In `config/domain.json`, set `rootDomain` to the approved DNS name (without protocol).
2. Commit the V26 project to GitHub, including `.github/workflows/verify.yml` and `deploy-cloudflare.yml`.
3. Create a Cloudflare Pages project for the deployment output `dist/` and confirm the Pages project URL (e.g. `svs-multisite.pages.dev`).
4. In Cloudflare Pages → Custom domains, **add all six hostnames** (including the apex). Do not create DNS records alone and assume Cloudflare is accepting them.
5. In Hostinger DNS, for each non-apex subdomain, configure the CNAME using the exact target and DNS status Cloudflare tells you to use. The apex must follow Cloudflare's recommended apex procedure rather than inventing a CNAME at the root.
6. Wait for TLS certificate issuance and confirm HTTPS on each hostname, then verify navigation and mixed-content errors.
7. For automated deploys, set the GitHub repository variable `CF_PAGES_PROJECT_NAME`, and secrets `CF_API_TOKEN` and `CF_ACCOUNT_ID`. The deploy workflow will run on main only after the variable is configured. Create the required least-privilege Cloudflare token.
8. Run the smoke tests again for all six public websites after DNS propagation.

**No actual DNS edits, domain connection or GitHub push are performed by the standalone ZIP.**

## GitHub Actions design
- `verify.yml`: builds and verifies all sites, then uploads a deployable artifact.
- `deploy-cloudflare.yml`: opt-in Cloudflare Pages deployment via Wrangler, using repository secrets/variable.
- GitHub Pages alone is not recommended for six independent hostnames from one Pages artifact.

## Local routing
Run `npm run dev` on port 3003. Use `medicalcollege.localhost:3003` etc. If your DNS/network configuration does not resolve `.localhost` subdomains, the `?site=` query fallback remains supported: `http://localhost:3003/?site=medicalcollege`. For local fallback links, V26 retains the selected site when navigating internally.
