# SVS V27 — GitHub Pages verification

- All six site identities and all 36 route documents are generated in `dist/`.
- Single hosting target: GitHub Pages; old deployment worker and old hosting workflow removed.
- Relative project base handling: `/SVS/` for default GitHub Pages, `/` for localhost or future custom domain.
- All referenced internal static links, navigation destinations, and media assets are checked against the generated directory.
- `npm test` validates source completeness, current Actions workflows, and the absence of Git metadata in published assets.
- The local development server retains port `3003` and hostname-based preview routing for all five institutions.
- Browser network navigation is restricted in this execution environment; live GitHub Pages hosting and public-domain DNS must be verified after the GitHub push and successful Actions deployment.
