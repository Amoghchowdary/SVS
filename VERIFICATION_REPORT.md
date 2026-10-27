# SVS Group of Institutions — V25 Verification Report

## Scope
Six self-contained site identities with six page routes each (**36 rendered HTML pages**), reused through one host-aware Node development server and one Cloudflare Pages Worker.

## Source and build checks
- `npm run build`: **passed**; generated 36 pages and copied all official media locally.
- `npm test`: **87 foundation checks + 31 V25-specific checks + 5 host-based Worker checks** passed.
- No external runtime dependencies are required for public rendering.
- No earlier project directories are referenced at runtime.
- Git metadata is not part of this deliverable.

## Direct HTTP routing checks
- `localhost:3003`: Group portal — 200 OK.
- `medicalcollege.localhost:3003`: Medical College — 200 OK.
- `medicalhospital.localhost:3003`: Medical Hospital — 200 OK.
- `dentalcollege.localhost:3003`: Dental College — 200 OK.
- `dentalhospital.localhost:3003`: Dental Hospital — 200 OK.
- `nursingcollege.localhost:3003`: Nursing College — 200 OK.
- Video range request: 206 Partial Content (1024 bytes returned for range 0–1023).
- Bundled aerial video: 1600×900 H.264, 21.52 seconds.

## Browser checks
The local browser environment blocks direct localhost URLs; a **self-contained HTML render with inline CSS, JS and the same local media bytes** was used for visual QA. This verifies appearance and client-side behaviours in a Chromium engine, but not networked-browser playback on Windows.

- **36 desktop pages** checked for presence of navigation, h1, main region, and horizontal overflow.
- **12 additional responsive homepage views** checked (6 at 900px tablet, 6 at 390px mobile).
- **3 interactive checks** passed: institution switcher opens, Escape closes it, department search filters entries.
- **51 browser/page tests in total; 0 errors**.
- **13 saved design previews** include desktop, tablet, mobile, five specialist homepages and selected programme/department screens.
- Source test reports are included in `previews/V25_BROWSER_QA.json` and `previews/V25_VISUAL_TEST_RESULTS.json`.

## Source diligence
- Society founded 1997 and Medical College established 1999, as in the 37-page supplied SVSMC brochure.
- Medical-college and hospital claims drawn from supplied brochure; current approvals / staffing require official sign-off.
- Contradictory hospital bed numbers were not promoted as verified metrics.
- Dental and nursing course information remains labelled as requiring institutional confirmation.
- Dental-specific photography has **not** been invented or misrepresented. Group-context photographs are labelled as such.

## Limitations before public launch
- No production authentication, appointment scheduling, verified online enquiries, patient records or real-time services.
- No live cross-device Core Web Vitals measurements or full WCAG compliance certificate.
- Autoplaying hero footage is muted and respects reduced-motion preference, but a pause control is still needed for full accessibility conformance on moving content if the client approves that interface.
- Production domain and custom-domain verification have not been configured in this package.
- Final official dental/nursing documents, photo permissions and programme/clinical approvals must be supplied before public publication.
