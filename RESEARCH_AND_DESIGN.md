# V26 — Design & Technical Research Notes

## Design choices
- Parent SVS site is a **historical institutional narrative**, not a startup product page: full-width campus film, establishment story, photograph-led five-site directory, learning & infrastructure sections.
- Sites share a disciplined serif/sans system, but the message changes by destination: academic guidance at colleges, patient-oriented information at hospitals.
- Clear page architecture: Home, Our story, Programmes/Services, Departments/Specialties, Facilities, Contact.
- No misleading dental imagery or unsupported programme claims: photographs used for dental pages are group-context images explicitly described that way.

## External standards consulted
1. **W3C WCAG 2.2**: text alternatives, keyboard access, focus visibility, 4.5:1 normal-text contrast target and reduced motion. Reference: https://www.w3.org/TR/WCAG22/
2. **Google Search Central Core Web Vitals**: target LCP 2.5 s, INP <200 ms and CLS <0.1 at the 75th percentile on real-user data. Reference: https://developers.google.com/search/docs/appearance/core-web-vitals
3. **web.dev video performance**: muted / playsinline / loop for background film; use poster and metadata preload to avoid unnecessary content blocking. Reference: https://web.dev/learn/performance/video-performance

## Implementation and what is not claimed
- All needed media files are local in `public/assets/official/`. No Google Fonts, image CDN or runtime API dependency.
- Medical college historical facts are sourced from the supplied brochure; external standards inform site construction but do not replace the brochure.
- Preliminary local render tests are not Lighthouse or real-user Core Web Vitals scores. Those require measurement after production hosting.
- The full-bleed video is muted and respects system reduced-motion preferences. V26 preserves the customer's uncluttered video-only hero design. A video pause control remains a consideration for full WCAG 2.2 conformance where motion continues beyond five seconds.
- Medical accessibility, public regulatory disclosures and institutional approvals require human sign-off beyond frontend checks.
