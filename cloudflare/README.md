# Optional Cloudflare deployment

The Worker in `worker.js` serves the built `dist` directory through a Workers KV mirror of a pinned public repository commit. The repository identity points to `digitalburjos-oss/ThaImamCollective`.

Create your own `SITE` KV namespace, set its binding in `wrangler.toml`, and set `COMMIT` to the full published commit SHA before deploying. The source commit must be publicly readable for the mirror to fetch missing assets. Run `npm run build` first.

Configure `RESEND_API_KEY` as a Worker secret and verify your sender domain for email delivery. Optional `CONTACT_TO`, `MAIL_FROM` and `RESEND_SEGMENT_ID` override the project inbox, sender and newsletter segment. No original deployment keys or segment IDs are retained.

The Academy, Talent and Jobs sections are marketing pages; this repository does not include an LMS, authenticated hiring platform or payment processing.

## Current deployment

- Worker: `collective-site` (account `theimamcollective@gmail.com`), served at https://collective-site.theimamcollective.workers.dev
- Code: the single-file bundle `worker-dashboard.mjs`, uploaded through the Cloudflare API
- KV namespace `collective-site-SITE` (`a4c35cd80b734ca0bdbdecd7da48a8bc`), bound as `SITE`
- Pinned commit: `7821e325f22dc8af4b6558b879b1a371466ff05d`
- Not yet configured: `RESEND_API_KEY` secret (the `/api/*` endpoints return 503 until it is set) and custom-domain routes for `theimamcollective.com`.

## Static asset hosting and clean URLs

The current public host serves static assets directly: clean URLs such as `/catalogue` were returning 404 while `/pages/catalogue` served their generated document. A `vercel.json` rewrite or the optional Worker route module does not configure an asset-only deployment.

The build now also writes `/catalogue.html`, `/services/ai.html` and the equivalent file for every canonical route. Cloudflare's default HTML handling serves those files at the extensionless public URLs. Keep default HTML handling enabled when publishing `dist`; do not enable a single-page fallback that returns the homepage for missing pages. `_redirects` preserves the legacy aliases and canonicalizes the internal page URLs.

Publish the complete rebuilt `dist` directory after merging the routing fix. The optional KV mirror Worker remains a separate deployment method and still requires its `COMMIT` to match the release. Its checked-in historical commit does not describe the current asset-only host. Run the live verification after publishing to check all 89 public URLs, not just the homepage.
