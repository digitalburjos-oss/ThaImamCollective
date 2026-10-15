# Optional Cloudflare deployment

The Worker in `worker.js` serves the built `dist` directory through a Workers KV mirror of a pinned public repository commit. The repository identity points to `digitalburjos-oss/ThaImamCollective`.

Create your own `SITE` KV namespace, set its binding in `wrangler.toml`, and set `COMMIT` to the full published commit SHA before deploying. The source commit must be publicly readable for the mirror to fetch missing assets. Run `npm run build` first.

Configure `RESEND_API_KEY` as a Worker secret and verify your sender domain for email delivery. Optional `CONTACT_TO`, `MAIL_FROM` and `RESEND_SEGMENT_ID` override the project inbox, sender and newsletter segment. No original deployment keys or segment IDs are retained.

The Academy, Talent and Jobs sections are marketing pages; this repository does not include an LMS, authenticated hiring platform or payment processing.
