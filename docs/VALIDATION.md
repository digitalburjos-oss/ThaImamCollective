# Validation — 15 October 2026

## Build and route coverage

- Frozen-lockfile dependency installation (`npm ci --cache /workspace/.npm-cache --no-audit --no-fund`) passed with integrity verification enabled.
- `npm run build` passed and generated 37 complete static pages, canonical metadata, structured data, search index, sitemap, Vercel routes and the optional Worker bundle.
- `npm test`: nine passed, zero failed or skipped. Tests cover global page content, unique metadata, internal resources and anchors, USD pricing and annual totals, legacy redirects, dashboard tabs, project filtering, article search, the service finder, menu state, form validation, explicit unsent email fallback, the human-review workflow and keyboard search dismissal.
- `VERIFY_ORIGIN=http://127.0.0.1:3000 npm run verify:live`: all 37 pages, release assets, eight legacy route aliases and a real missing-page response passed.
- Retired geographic positioning and currencies: zero matches in active source or generated page content. The user’s international phone contact remains a contact channel, without a regional positioning claim.

## Browser checks

Chromium loaded all 37 pages at 1440px and 390px widths: no horizontal viewport overflow, no missing main headings, no failed loaded images and no page JavaScript errors. Additional home checks passed at 320, 375, 768 and 1024px.

The actual browser also verified keyboard search, populated-dialog Escape dismissal, dashboard arrow-key tabs, service recommendations, a workflow that stops at human approval, mobile-menu dismissal, reduced motion, contact validation, an explicit provider-failure draft option and a mocked successful submission that resets the form. The search Escape behavior was corrected and covered by a regression test.

Screenshots include the homepage, OS capability, selected work, contact and demo pages at desktop and mobile widths. Original documentary-style imagery is AI-generated and illustrative. Project previews and dashboards use labelled sample data.

## External services and scope

No Resend API key is injected into this development machine. Real automated email delivery and mailbox/domain configuration are not verified here. Browser delivery scenarios were mocked and no real email or newsletter message was sent.

The marketing website does not deploy or expose the referenced projects’ authenticated applications. The dashboard and workflow are local examples, not live customer accounts. USD platform estimates remain indicative; custom work, implementation, usage, taxes and commercial terms require confirmation. Public deployment is managed by the user’s hosting project.

## Corporate refinement verification

The refined site was loaded on all 37 routes at desktop and mobile widths without viewport overflow, failed loaded images or browser JavaScript errors. The new automated regression covers scenario selection, arrow-key tabs, explicit motion pause and Escape dismissal of the service menu. A separate native-browser check verifies timed phase progression, pause stability, menu links, additional viewport widths and reduced-motion defaults.

21st.dev’s public GitHub source and MIT licence were inspected. Direct website requests to 21st.dev and jitter.video returned proxy-policy denials; requested domains were saved additively in the environment draft. No Jitter account/editor was accessed or export generated.
