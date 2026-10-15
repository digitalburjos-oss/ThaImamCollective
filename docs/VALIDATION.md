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

## Editorial imagery and owned website guide — 2026-10-15

Three original editorial scenes generated with the built-in image generator are stored as compressed WebP assets in public/images/editorial-{enquiries,training,testing}.webp. Briefs: a business owner reviewing quotation paperwork with a colleague; a small team practising a laptop workflow; a designer comparing a mobile website with a laptop. These are illustrative scenes, not client or staff photographs. Topic-specific imagery now appears on article cards and article pages.

The website guide is first-party, browser-local topic matching against published service descriptions. It is not a model-backed assistant or a live human chat. It stores no transcript and sends no chat messages to a server. Contact remains the existing explicit enquiry flow. Announcement dismissal uses session storage. No external chat widget, tracking service or connector is added.

Edit public/updates.json to schedule announcements, alerts or offers. Each entry needs id, type, title, body, startsAt, href and label. endsAt is optional for announcements; offers require both endsAt and terms. Dates use ISO 8601 with timezone. Rebuild and publish the site after changes. The browser rechecks this file every five minutes while visible, and filters expired/future entries. No background publishing or browser push is implied. No unapproved discounts are advertised.

All six service pages include expanded preparation, scope and acceptance guidance. The existing logo family, palette and typography are retained. New automated checks cover assistant behavior, safe message rendering, panel controls and schedule/offer filtering. Browser visual QA has not been performed in this session.

## Brand, editorial and search expansion — 2026-10-15

The site now builds 62 crawlable pages: the original service, journal and company routes, four anonymous workflow examples, a detailed-services hub, 18 focused service pages and six industry pages. Named projects, their repository links and their public route names have been removed from generated pages and public assets. Examples explicitly describe illustrative scope with sample records.

Each of the 15 articles receives a distinct generated editorial photograph with full-size and 768px WebP exports. Scene briefs describe ordinary work relevant to the topic: quotation review, order processing, customer support, stock handovers, release testing, prototype review, access approval, training, hiring, shipping documents, property enquiries and approval checklists. Images are illustrative rather than documentary evidence of a client relationship. The built-in image-generation tool is used; exact output-to-article mapping is recorded in docs/blog-image-assets.json.

The original transparent icon mark supplies favicon exports at 32, 180, 192 and 512 pixels and the ICO. The header adds the agreed readable tagline. The footer uses the transparent compact logo with a monochrome reverse treatment, avoiding the rectangular background in the old raster reverse asset.

Every page has a unique title, description, canonical URL, Open Graph and Twitter metadata. Article social images match the article photographs. BlogPosting, Organization, WebSite, BreadcrumbList and relevant Service/FAQPage JSON-LD describe visible content. The sitemap includes article images and modification dates. The detailed-service hub and capability pages link the new routes. llms.txt is provided as a discovery aid, not an indexing or AI-answer guarantee.

Google Analytics preparation is intentionally disabled with no measurement ID, per the user's selection. public/analytics-config.json controls later activation. Even with a valid enabled ID, scripts wait for visitor consent. Page view URLs exclude query strings; no form or chat contents are sent as custom events. The footer exposes preference controls. This is not a claim of account verification, Search Console ownership, Meta business verification, live analytics collection or guaranteed rankings.

Search implementation follows Google's public guidance: https://developers.google.com/search/docs/fundamentals/seo-starter-guide and https://developers.google.com/search/docs/crawling-indexing/special-tags . Google does not use meta keywords for indexing or ranking. Current subject terms are mapped to useful pages; unsupported trend-volume or ranking claims are not made. Indexing and rich results require search-engine processing after deployment. Meta social previews are configured; Meta Pixel would need a supplied account ID and separately approved tracking scope.

Validation includes page counts, links, assets, metadata, visible structured facts, removal of excluded names, identity consistency, article image uniqueness, consent-gated analytics and query-string exclusion. No browser screenshot QA or verified live deployment is claimed for this revision.

## Interior hero and supplied-lockup refinement

Removed the redundant All capabilities link from service heroes; the breadcrumb remains. Interior titles use a shared responsive scale and shorter detailed-service headings. Hero photography uses bounded viewport-relative sizing, and narrow or short viewports use stacked/compact layouts without fixed-height clipping. The homepage composition is retained.

The newly supplied primary transparent lockup, including its embedded tagline, replaces the header artwork. The additional rendered tagline is visually hidden to avoid duplication. Transparent padding is trimmed for display. Footer exports retain the orange mark with reversed lettering. Division artwork comes from the supplied ZIP, with matching extracted icon exports in service navigation and listings. The flattened ivory Talent background is removed for the web export.

A first-visit welcome can appear after eight seconds, without moving keyboard focus. It is remembered in local storage, with a session fallback. Returning visitors can receive one eligible current announcement after 45 seconds, at most once per day; expired/future offers remain filtered. Notices do not interrupt typing, a hidden page, open chat, the updates panel or the search dialog. Notices are dismissible; no browser push permission is requested. Current verification: 19 automated checks pass. Browser visual QA and live deployment remain unverified.

## Hero presentation, closing CTA and page coverage

Reference review used the owner's reference website sitemap and current page structure to identify page categories, module coverage and industry gaps. Every one of the reference sitemap's 31 routes maps to an existing canonical Collective route; the mapping is recorded in docs/page-coverage.json. Existing capability aliases remain redirects rather than duplicate-content pages. Solutions and Portfolio now have dedicated canonical pages, with old redirect rules removed from both generated hosting configuration and the Worker.

The site builds 89 canonical pages: the previous 62, a Catalogue hub, Solutions, Portfolio, fourteen individually scoped module pages, and ten additional industry pages. Module content explains records, inputs, review points and implementation boundaries rather than claiming all functionality is already provisioned. The expanded industry set includes sixteen detailed pages because the existing restaurant sector is retained alongside the reference coverage.

Presentation changes are limited to shared heroes, action buttons, the closing CTA and links needed to discover the new pages. Interior heroes receive purpose-specific working-perspective panels. Service heroes retain their original photographs with refined framing and a compact delivery sequence. The homepage retains its orchestration composition, with updated photo treatment and primary actions. Reduced-motion rules disable entrance effects; decorative panels do not claim live data or client results.

The invitation block inside the footer has been removed. Each page has at most one closing CTA, with ordinary contact links retained in the footer. Existing dashboard, search, forms, article photography, guide, notices and non-hero content retain their established behavior. Build and automated verification cover all routes, reference mapping, module links and visible structured facts, hero presence and single closing invitations. Browser visual QA and live deployment remain unverified.

## Reference-wide experience verification

The current release builds 89 canonical pages with native static-host entries and passes all 30 tests. Every page loads a single experience stylesheet, uses the same reference hero hierarchy, retains its canonical URL and includes the Collective header/footer assets.

An ephemeral Chromium package enabled browser testing without adding a project dependency. All 89 routes were loaded at 1440px and 390px, for 178 page/viewport checks. Every response was 200, every page had one photographic hero and one footer, all header Get Started buttons were visible, and no horizontal overflow, loaded broken images or page JavaScript errors were detected. Earlier targeted checks also covered eight representative pages at 320px, 768px and 1024px.

Real-browser checks also passed mobile-sheet opening and closing, keyboard search dismissal, scroll restoration and reduced-motion cards returning to normal document flow. Visual review covered desktop homepage, footer, mobile homepage and the capability/Explore sheet. That review caught a legacy mobile rule hiding the header CTA; it was corrected and the full browser route checks were repeated successfully.

The reference implementation is adapted with the Collective brand palette and artwork. These checks establish page consistency and working behavior; they do not claim certified pixel-for-pixel parity with DigitalBurj or a completed public deployment.

## Horizontal capabilities and brand text colors

Production build and all 31 automated tests pass. The new carousel regression covers previous/next, Home/End boundaries, disabled controls, announcements and reduced-motion behavior. Chromium repeated all 178 desktop/mobile route checks with zero detected issues or page JavaScript errors. Real carousel movement and keyboard reset passed at 1440px, 390px and 320px. Desktop and mobile carousel screenshots were visually inspected.

Computed browser colors match the identity exactly: hero title `rgb(251,248,240)`, highlighted title `rgb(238,72,35)`, card title `rgb(40,20,45)`, and supporting card copy `rgb(115,103,116)`. This release retains the previous clean-URL files and shared experience system.
