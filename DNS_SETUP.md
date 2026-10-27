# GitHub Pages domain setup — V27

## Current configuration (no custom domain)

One GitHub Pages repository: `Amoghchowdary/SVS`.

The six websites are served on this hostname under paths `/SVS/`, `/SVS/medicalcollege/`, `/SVS/medicalhospital/`, `/SVS/dentalcollege/`, `/SVS/dentalhospital/`, and `/SVS/nursingcollege/`.

No CNAME record is needed for the default `github.io` site.

## When the institution provides its purchased domain

1. Decide whether to use the apex domain or `www`.
2. In GitHub `Amoghchowdary/SVS` → Settings → Pages, configure and verify the selected custom domain.
3. Configure that hostname at the DNS registrar as documented by GitHub: subdomain CNAME or apex A/ALIAS/ANAME as supported.
4. In GitHub → Settings → Secrets and variables → Actions → Variables, set `SVS_BASE_PATH` to `/`.
5. Re-run the `Deploy SVS to GitHub Pages` workflow; now the six sites use paths directly under the custom domain.
6. Check GitHub Pages' domain/HTTPS status and test the six destinations.

**Do not set a CNAME until the corresponding custom hostname has been configured on GitHub Pages.**

GitHub documentation:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

A single Pages site cannot route five unrelated custom hostnames to five different static roots using five CNAME records. Continue with path-based routes until an alternate multi-project architecture is explicitly approved.
