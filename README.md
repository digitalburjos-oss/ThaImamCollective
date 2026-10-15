# Innovation.Mastery.Automation.Marketing Collective

A complete adaptation of the supplied reference website, using the Collective brand kit. The reference's layouts, service ecosystem, responsive navigation, search, pricing structure, editorial guides and form flows are retained. All 161 reference image files have been replaced with supplied Collective identity assets or derivatives of three newly generated brand photographs.

## Run locally

Use Node.js 24. From this directory:

```sh
npm ci --cache /workspace/.npm-cache
npm run build
npm run dev
```

The development server listens on port 3000 (`PORT` overrides it). It serves all 31 clean routes, static assets, and the three enquiry/subscription endpoints. `npm test` runs seven SEO, routing and interactive-runtime tests. With the server running, `VERIFY_ORIGIN=http://127.0.0.1:3000 npm run verify:live` checks all pages and release assets.

## Edit

- Page templates: `dist/*.dc.html`.
- Service copy and pricing: `dist/pages.js`.
- Articles: `dist/articles.js`.
- Brand overrides: `dist/brand.css`.
- Shared responsive styles: `dist/hero-system.css`.
- Uploaded logos and service marks: `dist/brand/logos` and `dist/brand/icons`.
- Generated imagery: responsive derivatives in `dist/media`, `dist/industry` and `dist/insight`.

Run the build after changing templates or copy. It regenerates page HTML, structured data, sitemap and deployment routes. Keep the generated routes and their source templates together.

## Public contact details

Information: `info@theimamcollective.com`.
Support: `support@theimamcollective.com`.
Project enquiries: `contact@theimamcollective.com`.
WhatsApp / phone: `+91 85479 11745`.
Canonical domain: `https://theimamcollective.com` (from the supplied brand kit).

## Email delivery

The contact form offers an email-app fallback to the project inbox when automated delivery is unavailable. Newsletter and process-review submissions show an error if the service is unavailable; they never pretend a message was delivered.

For automatic delivery, configure `RESEND_API_KEY` securely on the deployment host and verify `theimamcollective.com` with Resend. The default sender is `Innovation.Mastery.Automation.Marketing Collective <info@theimamcollective.com>` and enquiry recipient is `contact@theimamcollective.com`. Optional `MAIL_FROM`, `CONTACT_TO`, and `RESEND_SEGMENT_ID` override these settings. Do not put API keys in the repository. No real outbound emails were sent during validation.

## Deploy

Vercel: import this repository; `vercel.json` configures the build, static routes, and Node serverless API handlers. Configure the email bindings before enabling automatic delivery and connect the canonical domain in your hosting account.

A Cloudflare Worker alternative is retained in `cloudflare/`. Its KV, commit and mail bindings must be configured for this project; no reference deployment credentials, audience IDs or analytics are inherited. The site has not been published or pushed remotely.

The reference's price tables are retained as indicative USD estimates, not confirmed Collective quotations. Confirm commercial rates and service availability before publishing. Workflow panels are illustrative.
