# Design direction — Curious by construction
A quiet editorial introduction with oversized identity, a compact professional story, and a tilted portrait card. Cream and charcoal establish warmth; muted olive grounds the portrait placeholder; yellow marks small moments of personality.

- Palette: cream #f4f1e9, charcoal #292a26, supporting text #62645a, yellow #e9c84a. Yellow is decorative, not small text on cream.
- Typography: deliberately self-host-independent system sans (Arial/Helvetica) with tight display tracking; monospace labels and a small italic serif annotation. No third-party font requests.
- Layout: thin rules, generous space, asymmetrical two-column hero, educational context below. No speculative projects or experience sections.
- Motion: GSAP staggered entrance and portrait rotation, scoped through useGSAP and matchMedia cleanup. Content is visible in base CSS. Reduced motion disables the entrance and transitions. Hover arrows offer lightweight feedback, with native keyboard links.
- Mobile: single-column reading order, scaled type, centered portrait, compact navigation. All three navigation destinations remain available on narrow screens.
- Assets: original assets belong in ignored references/. Copy a web-ready portrait to public/portrait.webp; the page detects it at build/dev render time. Until then, display an explicitly labeled typographic placeholder. No stock person.

## Reference research
Read the live page content on 2026-10-29 (not a visual animation audit):
- https://dennissnellenberg.com/ — clear personal identity, succinct navigation, role-labeled selected work.
- https://brittanychiang.com/ — direct professional positioning, accessible content organization, contextual project descriptions.
- https://bruno-simon.com/ — exploratory interaction as personality, with explicit desktop/mobile controls.
Use identity, clarity, and a little playfulness; no borrowed layouts, text, assets, or game mechanic. All decorative artwork here is CSS or inline geometry; no external asset licenses required.


## Milestone two
Selected Work extends the same editorial language: a large lead entry with a genuine PrepPilot homepage capture, followed by a compact typography-led DevLink entry. Evidence lives in docs/PROJECT_SOURCES.md; no sole-authorship claims. Project reveals translate only and use scoped ScrollTrigger with matchMedia cleanup; all text stays visible even before a trigger runs. Reduced motion creates no reveal tweens.
Portrait: the supplied public/portrait.webp.jpg is preserved. An optimized public/images/portrait.webp retains the complete square photo and original background, with contain sizing and no face crop at any breakpoint.
Mobile navigation uses two rows to retain all original destinations plus Selected Work, with wrapping on the narrowest screens. Project content stacks in reading order; essential content is never hover-dependent.

## Milestone three
About uses an offset student introduction with a circular typographic annotation. Skills use three ruled rows tied to project evidence, with no ratings or expertise claims. Contact closes with a charcoal panel, serif emphasis, and an email arrow whose orbit accent responds to hover/focus. Reduced motion disables transitions and new GSAP reveal tweens. Reveals translate only, with useGSAP/matchMedia cleanup. Clipboard feedback uses a persistent polite live region, including manual-copy guidance on denial. Navigation stays in normal document flow; anchors have 30px scroll margins and focusable targets. Resume omitted because no file exists in the repository.

## Scroll-work simplification
One scoped IntersectionObserver now starts one-shot GSAP transform reveals for work/details. No ScrollTrigger module, per-scroll application handler, scrub, pin, or offscreen transform preparation is needed. Elements stay visible before initialization; observer targets are removed after first entry. Async tweens are recorded in the matchMedia context; observer and tweens clean up on unmount or reduced-motion changes. The hero entrance and contact hover/focus personality remain. No frame-time improvement is claimed without profiling.

## Additional project collection
Two featured projects retain their visual hierarchy and exact owner-confirmed live URLs. A compact two-column More projects subsection follows them within Selected Work, stacking deliberately on mobile. Vidloom and the academic EEG project use owner-supplied summaries, compact type, restrained rules, and technology labels. Optional links/images render only when supplied. Shared IntersectionObserver and GSAP cleanup are unchanged; added cards reuse data-work-reveal. No new motion system or dependencies.

## Owner-supplied research detail
Compact project cards now support a single qualified baseline-results block and native keyboard-accessible details. EEG metrics remain together beside scope/limitations; evaluation and future-work paragraphs expand without JavaScript state. Vidloom keeps three concise implementation highlights and a separate connectivity qualification. Existing layout, featured URLs, and motion architecture are preserved.

## Launch polish
The full-page review retained the established composition and portrait framing. Hero states the full-stack role directly; compact descriptions, technology chips, context notes and research limitations have larger supporting type. Secondary hero link has a 44px target; profile links announce new-tab behavior. Contact hover/focus retains contrast, and reduced-motion rules remove its decorative arrow displacement. Original RP favicon and typographic cream/charcoal social card use no external assets or font requests. Canonical/social image URLs remain conditional on a real, owner-selected public origin; none is guessed. Original portrait is archived unchanged in ignored references/portrait-source.jpg; the optimized public image is unchanged.
The keyboard review also found browser-default outlines spanning the entire focused main/section container. Focus now marks the corresponding heading with a high-contrast underline instead; interactive links/buttons/disclosures retain their explicit focus rings. No scroll handlers or motion timings were changed.


## Dedicated motion milestone (current architecture)
This supersedes the earlier entrance and ScrollTrigger simplification descriptions above; content, palette, type and project evidence are unchanged.
- Hero: one scoped 1.16-second GSAP timeline. A static overflow text mask reveals the single accessible name; the portrait settles from 30px lower and 9 degrees to its original 4-degree composition. Copy/actions overlap briefly. Navigation is immediately available; focusing a hero control completes the entrance. Base HTML/CSS stays visible if JavaScript is absent or setup fails.
- Featured work: at widths of at least 1100px and heights of at least 700px, with motion allowed, CSS sticky holds one decorative stage. One scoped scrubbed ScrollTrigger timeline exchanges artwork, advances its counter/progress, and settles the adjacent headings/details as native scrolling advances. No pin spacer or artificial scroll runway. Real project text and links stay in normal document flow and are never opacity-hidden. Decorative layers are aria-hidden and contain no controls. Additional projects remain outside this sequence. Smaller/shorter viewports and reduced-motion users retain ordinary stacked project entries.
- Contact: an original SVG line bends into an arrow on focus, pointer entry or tap. Fine pointers get a bounded 5px/4px elastic response; no dragging or continuous loop. Static yellow focus/tap feedback and a complete default arrow work without animation. Mobile puts the interaction after the heading to protect readable line lengths.
- Ownership: hero timeline owns its entrance elements; work timeline owns stage panels and featured text wrappers; the shared IntersectionObserver handles only ordinary work headings, additional cards and About/Skills/Contact copy. CSS hover scale acts on image children, not the animated card/panel parents. No blanket will-change, wheel interception, scroll-driven React state, or new dependency. SVG path interpolation repaints only a small local graphic; text masks use static overflow rather than animated clip-path.
- useGSAP, matchMedia and explicit listener cleanup cover unmount, responsive changes and motion-preference changes. Browser profiling, media emulation and video recording are unavailable in the permitted API; subjective smoothness remains a manual review item.
