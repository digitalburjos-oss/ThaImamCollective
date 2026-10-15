# UI source and motion provenance

The corporate refinement uses HTML/CSS adaptations of two MIT-licensed patterns from 21st.dev’s public source, inspected at commit `b96d84dcf748d5e56f2f72f2bab9a4f7f33574cf`:

- `apps/web/components/ui/shimmer-button.tsx`: spark, inset backdrop and interaction-state composition, adapted as restrained CSS pseudo-elements on existing buttons.
- `apps/web/components/ui/tabs.tsx`: grouped tab treatment and active-state surface, adapted to the existing accessible HTML tabs.

Source: https://github.com/serafimcloud/21st . The full MIT notice is retained in `third-party/21st-MIT.txt`. React, Tailwind and Radix were not added to the static site; these are local adaptations, not registry-installed React components.

Jitter was requested as a motion reference. Its website is blocked by this environment’s network policy, and no Jitter editor/export integration is connected. No Jitter assets were imported and no animation is represented as a Jitter export. The orchestration narrative, timing, pause control and offscreen/reduced-motion behavior are original website code.
