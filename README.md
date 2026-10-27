# SVS Group of Institutions — V27 (GitHub Pages only)

This standalone source package includes a parent SVS Group website and five institution-specific websites. It uses **GitHub Pages only** for public hosting, with a single repository and one website hostname.

## Public website routes (without a custom domain)

- Main SVS Group — `https://amoghchowdary.github.io/SVS/`
- Medical College — `https://amoghchowdary.github.io/SVS/medicalcollege/`
- Medical Hospital — `https://amoghchowdary.github.io/SVS/medicalhospital/`
- Dental College — `https://amoghchowdary.github.io/SVS/dentalcollege/`
- Dental Hospital — `https://amoghchowdary.github.io/SVS/dentalhospital/`
- Nursing College — `https://amoghchowdary.github.io/SVS/nursingcollege/`

All six are **static websites**, generated from one source of content and assets and deployed in one GitHub Pages artifact. Each institution has Home, About, Programmes/Services, Departments, Facilities, and Contact pages.

## Local server

From the extracted project folder:

```powershell
npm run build
npm test
npm run dev
```

The development server is on port 3003. Visit `http://localhost:3003/`, `http://medicalcollege.localhost:3003/`, `http://medicalhospital.localhost:3003/`, `http://dentalcollege.localhost:3003/`, `http://dentalhospital.localhost:3003/`, and `http://nursingcollege.localhost:3003/`.

To build exactly what will be deployed to the GitHub Pages project site:

```powershell
$env:SVS_BASE_PATH = "/SVS/"
npm run build
npm test
Remove-Item Env:\SVS_BASE_PATH
```

## GitHub Actions

- `.github/workflows/verify.yml` — builds and tests every page in CI.
- `.github/workflows/deploy-pages.yml` — deploys the `dist/` build through **GitHub Pages** on every push to `main`.

Repository: https://github.com/Amoghchowdary/SVS

After pushing, open **Settings → Pages → Build and deployment → Source: GitHub Actions**, then review the Actions workflow. The URL is not live until the workflow reports successful publication.

## Moving to a single purchased domain in the future

GitHub Pages supports one custom site hostname (plus its standard apex/www pairing). First add and verify the custom domain in **Settings → Pages**. Then set the GitHub Actions repository variable `SVS_BASE_PATH` to `/`, so the existing static routes become `https://www.example.in/medicalcollege/`, etc. Configure the DNS record for that one custom hostname according to GitHub Pages instructions. The domain in this paragraph is an example, not a configured domain.

**Five independent subdomains cannot be assigned to one GitHub Pages project by adding five CNAME records.** If those independent hostnames become mandatory, one approach is separate GitHub Pages projects/repositories for each institution. That would be a separate deployment architecture and is not part of this release.

## Publication limitations

Medical-college and hospital material is based on the supplied brochure, with historical assertions that need current institution approval. Dental and nursing credentials, programmes and claims were not verified by the supplied brochure and remain qualified. No booking portal, authenticated staff backend or dynamic server is claimed in this static release.

Older local version folders are not required to build or deploy V27. The deployment clone should **retain its `.git` directory** during version replacement.
