# Validation — 15 October 2026

- `npm ci --cache /workspace/.npm-cache --no-audit --no-fund`: passed with lockfile integrity verification enabled. The initial default-cache attempt failed because `/home/agent/.npm` was not writable; using the workspace cache resolved it.
- `npm run build`: passed; generated 31 crawlable pages, metadata, sitemap, route maps and Worker bundle.
- `npm test`: 7 passed, 0 failed, 0 skipped. Covers canonical metadata, structured data and visible content, service-page intent, route handling, and interactive runtime enhancement, menu and search behavior.
- `VERIFY_ORIGIN=http://127.0.0.1:3000 npm run verify:live`: all page, metadata, release-asset and missing-route checks passed.
- Chromium: all 31 routes enhanced correctly at 1440px and 390px, with no page JavaScript errors and no horizontal viewport overflow.
- Homepage images: no failed images after scrolling through the complete page at desktop and mobile widths.
- Mobile menu: opens and closes. Contact form: missing name, invalid email and short message produce validation errors at both widths.
- Identity audit: all 161 incumbent image files differ from their reference versions. No reference domain or old WhatsApp number remains in application text or configuration. Original analytics tag removed.
- Local API: GET contact returns 405; contact, lead and newsletter POSTs return honest 503 responses without a provider key. Missing articles return 404. No real email was sent.

Current limitations: automated email delivery needs `RESEND_API_KEY` and a verified sender domain on the deployment host. The contact form offers a mailto fallback. Mailbox provisioning, public deployment, GitHub push and domain connection have not been performed. The reference's indicative USD price tables require business confirmation before publication. Academy, Talent and Jobs are marketing pages, as in the reference, not authenticated platforms.
