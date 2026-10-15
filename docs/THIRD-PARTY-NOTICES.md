# UI source and motion provenance

The corporate refinement uses HTML/CSS adaptations of two MIT-licensed patterns from 21st.dev’s public source, inspected at commit `b96d84dcf748d5e56f2f72f2bab9a4f7f33574cf`:

- `apps/web/components/ui/shimmer-button.tsx`: spark, inset backdrop and interaction-state composition, adapted as restrained CSS pseudo-elements on existing buttons.
- `apps/web/components/ui/tabs.tsx`: grouped tab treatment and active-state surface, adapted to the existing accessible HTML tabs.

Source: https://github.com/serafimcloud/21st . The full MIT notice is retained in `third-party/21st-MIT.txt`. React, Tailwind and Radix were not added to the static site; these are local adaptations, not registry-installed React components.

Jitter was requested as a motion reference. Its website is blocked by this environment’s network policy, and no Jitter editor/export integration is connected. No Jitter assets were imported and no animation is represented as a Jitter export. The orchestration narrative, timing, pause control and offscreen/reduced-motion behavior are original website code.

## User-supplied reference implementation

The user requested the layout and interaction system from their DigitalBurj repository. `src/styles/reference-system.css` adapts `dist/hero-system.css` from `shamhar07-max/DigitalBurjFinalMain` at commit `035e5b43e514e0cbcac36f7315a0f2df8a296bb6`. Class prefixes and the Collective identity palette/fonts are substituted locally. The reference's hero grid, type measurements, panel geometry, ecosystem tiles, breakpoints and motion keyframes are retained. `src/styles/experience-bridge.css` applies the same measurements to the existing Collective components. No DigitalBurj brand artwork, tracking identifiers, contact details or runtime component engine are imported.
