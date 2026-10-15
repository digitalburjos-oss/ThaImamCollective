# the collective — global website

The supplied master logo and division family are the identity authority. Preserve their lowercase custom wordmark and symbol geometry; use the actual raster artwork. Transparent margin cropping and web-size exports are asset preparation, not a new logo.

Tokens: aubergine `#28142D`, vermilion `#EE4823`, ivory `#FBF8F0`. Supporting surfaces: warm paper `#F0EAE7`, muted aubergine `#736774`, line `#DED8D8`. Display typography uses self-hosted Plus Jakarta Sans with restrained negative tracking; interface and body copy use self-hosted Instrument Sans with Arial/Helvetica fallbacks. The wordmark is never recreated as typed text.

The composition is editorial: an open ivory canvas, full-width quiet navigation, oversized left-aligned type, a documentary studio photograph, a narrow capability strip, six typographic service rows, a working dashboard, project interface studies and a photographic operational chapter. Vermilion guides action. Aubergine chapters distinguish hands-on examples and the closing conversation. There is no inherited green regional palette, generic globe motif or fabricated global-office map.

The core site scenes show workflow review, warehouse scanning, design proofs and the studio at evening; the journal adds fifteen distinct article-specific editorial scenes. Responsive WebP derivatives are exported once and reused across relevant routes. No photograph repeats within an individual page. Division logos come from the supplied kit. Journal cards and article covers use topic-specific photography; dashboards and project previews use readable HTML, not fabricated screenshots.

The workspace tabs, project filters, service finder, journal search, keyboard search, pricing display and automation sample are interactive. Data is visibly labelled as sample content. The workflow ends at human review and sends nothing. Contact and newsletter forms expose honest validation, loading, failure and success states. Content is present without JavaScript; motion is limited to the opening composition and respects reduced motion.

Persuasive surfaces: homepage, capabilities, work and commercial pages. Readable surfaces: the journal and privacy notice. Focus rings, selection, form caret, scrollbars and responsive layouts follow the same palette. Desktop and mobile screenshots document the shipped composition in `docs/`.

## Corporate refinement

The homepage now opens with a product-led aubergine chapter, a restrained studio-photography backdrop and the headline “Intelligence, put to work.” The orchestration panel demonstrates three sample journeys—operations, growth and delivery—with clear handovers and a visible human-review endpoint. The panel has a restrained perspective treatment on desktop and becomes flat on mobile.

Motion is paced around meaningful workflow progression, not decorative continuous movement. It pauses through an explicit control, when offscreen or hidden, and defaults to paused for reduced-motion users. Other motion is limited to the opening composition and subtle control feedback. Small interface text uses strengthened contrast.

The shared header is sticky with a keyboard-operable six-capability service menu. Button spark/backdrop composition and tab active surfaces adapt 21st.dev source, with MIT attribution retained. Interior pages share the corporate type scale and controls; the palette and supplied identity remain authoritative. Jitter was not accessible and no Jitter-authored asset is claimed.

## Current editorial and service expansion

The public identity is exclusively the collective. The work section contains four clearly labelled, anonymous workflow examples with sample records. It does not list related ventures, client claims or public source repositories. The header carries the agreed tagline, favicon exports use the supplied icon mark, and the footer uses a transparent monochrome reverse logo.

The journal uses fifteen distinct editorial photographs, one per article, with responsive 768px exports. Photographs illustrate the subject and do not imply a client or employee relationship. Commercial navigation connects six capability pages to eighteen detailed service pages, six industry pages and a central detailed-services hub. All 62 pages share typography, spacing, navigation, enquiry controls and metadata conventions.

Analytics is prepared with consent controls and intentionally disabled until a valid measurement ID is supplied and activation is requested. The first-party website guide uses browser-local published-service matching; it does not claim live human or model-based chat.

## Premium hero layer

The latest visual layer is scoped to page heroes, action buttons and the closing invitation. Ivory editorial layouts pair with compact aubergine working-perspective panels, restrained vermilion accents and clear actions. Service photography receives a refined frame rather than an unrelated graphic. No animated dashboard claims or invented customer statistics are introduced. The footer uses its ordinary company/navigation layout; a page's single closing CTA provides the invitation.

The Catalogue, Solutions and Portfolio pages connect fourteen operational module briefs with the existing capability structure. Industry coverage expands without changing the established card, reading or form layouts. Modules describe scoped implementation, with reviewed dependencies and handovers.

## Component and motion direction

The supplied Aceternity, Magic UI, 21st.dev, shadcn, ReUI and editorial references guide interaction choices, not package adoption. This static site uses native HTML, CSS and JavaScript: a compact sticky floating header, bounded CTA pointer attraction, hover/focus border shine, manual capability browsing, focused product surfaces, a process timeline and short state-entry feedback. Existing native menus, dialogs and tabs retain their behavior. No copied component code, paid animation, external animation runtime, particles or WebGL is introduced.

Pointer motion is bounded to three horizontal and two vertical pixels and disabled for touch and reduced motion. Keyboard focus stays stationary. Context panels animate once when opened; content reveals once on entry. The desktop practice copy stays alongside its photograph, while mobile stays in normal flow. The mobile navigation scrolls within the available viewport. All color roles and supplied artwork remain part of the Collective identity.

## Static route compatibility and vertical chapters

The public host was returning 404 for clean URLs while `/pages/catalogue` returned the real document. The build now emits identical clean-URL `.html` entries for all 89 canonical routes, retaining the internal `/pages` documents for existing Vercel and Worker deployments. Cloudflare static hosting can resolve these entries without a server-side rewrite. Native `_redirects` preserve aliases and move internal page URLs to the canonical routes. Route coverage tests check both copies so a local rewrite-aware server cannot hide missing static entries again.

Homepage capabilities now form a vertical chapter with sticky supporting copy and gently overlapping cards on tall desktop screens. Capability lists use the same stack rhythm. Short screens, mobile and reduced-motion preferences get a normal document flow. All cards remain links in source order and stay readable without JavaScript. Detail cards, process steps and timeline surfaces share the same spacing and color families as the capability cards.

## Reference-wide consistency

The visual authority is the supplied DigitalBurj implementation at commit `035e5b43e514e0cbcac36f7315a0f2df8a296bb6`. All 89 routes now load one generated `experience.css` and one `experience.js` interaction layer. The stylesheet combines existing structural/form rules with the adapted reference hero system and one final component mapping; the earlier vivid layer is no longer loaded. Shared measurements cover the 76rem page edge, 62px floating navigation bar, 12px CTA corners, full-bleed photographic heroes, copy/panel grids, title scale, cards, ecosystem strip, footer, mobile sheet and responsive thresholds.

Every hero is normalized into the same content/grid/copy/panel hierarchy at build time, with breadcrumbs inside the hero. Collective artwork, imagery, contact details, service copy, pricing, forms, sample-data labels and all canonical routes remain authoritative. The homepage and service lists retain the requested vertical card chapters. Search, forms, tabs, workflow approval, newsletter consent, analytics preferences and real 404s keep their original behavior. The mobile sheet has a backdrop, an explicit close control, keyboard focus containment and scroll restoration.

This is an implementation-level alignment to the reference system. An alternative Chromium runtime enabled 178 page/viewport checks across all 89 routes at desktop and mobile sizes, plus visual inspection of homepage, footer and mobile sheet screenshots. No layout overflow or page JavaScript errors were detected. Pixel-level parity with the original site has not been certified.

## Horizontal capability chapter and brand typography

The “Built to connect. Designed to perform.” chapter now uses one horizontal scroll-snap track at every breakpoint: three cards on desktop, two on tablet, and one card with a preview of the next on mobile. Previous/next controls, a desktop position indicator, keyboard arrows/Home/End and native touch scrolling expose all six capabilities. Movement is smooth when motion is allowed and immediate for reduced-motion users. It does not auto-advance or hide content without JavaScript.

`src/styles/brand-typography.css` is the final text-color authority in the shared stylesheet: aubergine `#28142D` for primary type, muted aubergine `#736774` for supporting copy, vermilion `#EE4823` for large highlighted headings, and ivory `#FBF8F0` for inverse type. Headline gradients imported from the reference have been replaced with these exact brand colors. Dark sections, panels, featured plans and the footer retain ivory type for readable contrast.

## Collective identity restoration (current visual authority)

The last four merges made the presentation too similar to DigitalBurj. The PR9 palette and editorial character now provide the baseline: aubergine, ivory and vermilion brand typography, six varied pastel capability surfaces, a full-width institutional header, warm framed interior heroes and a light interactive product preview. The current horizontal capability carousel, complete navigation, clean static routes, mobile drawer and search remain.

The active bundle replaces `reference-system.css` and `experience-bridge.css` with `collective-experience.css`; the old files remain only for history. Homepage and interior heroes deliberately have different compositions. The header has an explicit height at each breakpoint, the footer description is visible, and the footer reserves space below its legal links for support controls. Brand typography differentiates paper preview surfaces from inverse panels.
