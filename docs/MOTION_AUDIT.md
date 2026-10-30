# Dedicated motion milestone

## Before
- components/portfolio-hero.tsx: two independent gsap.from calls on load, a generic stagger (26px/opacity, .85s, .1s stagger) and portrait rotation. No coordinated hero timeline or text mask.
- components/observe-reveals.ts: one shared IntersectionObserver starts one-shot .65s vertical translations for work/details. No opacity hiding and no scroll sequence.
- components/selected-work.tsx: no local GSAP or ScrollTrigger; ordinary project articles only.
- components/about-skills-contact.tsx: copy-email React state, ordinary observed translations; contact arrow feedback used CSS hover/focus transforms. No SVG sequence or spring.

## After and triggers
- Reload the root URL to see one scoped hero timeline: masked name, portrait settle, overlapping copy/actions, finished in 1.16s. Tab into a hero link to finish immediately.
- At a viewport >=1100x700 with motion allowed, scroll Selected Work. A CSS-sticky decorative stage advances from PrepPilot to DevLink using one scoped ScrollTrigger timeline. Actual headings/details translate modestly; real links always stay visible in normal flow. Stage contains no focus targets and is aria-hidden. Scroll beyond DevLink to see the stage release before More projects.
- Focus/hover/tap the Contact arrow. A small SVG line bends and draws its arrowhead; fine pointers alone get a bounded spring. Email/copy/social actions retain normal behavior. No active pointer tracking outside this one link.
- Shared observer still handles ordinary one-time reveals. No featured article or contact-arrow element is also registered with it. All effects use the existing GSAP stack.

## Performance boundaries
No wheel/touch interception, React scroll state, manual refresh loop, global continuous ticker, animated layout dimensions or blanket will-change. One scroll timeline; native sticky, no JS pin. Transform/opacity dominate; the small contact SVG path redraw has a local paint cost. Static text overflow clipping does not animate mask geometry. All listeners/media contexts/timelines clean up. Decorative duplicate screenshot shares the same Next image request; it introduces no second product screenshot or invented interface.

No permitted performance tracing, media emulation, video recording, JS-disabled emulation or clipboard-denial controls. No measured improvement or resolution of the previously reported lag is claimed. Screenshots document composition only.

## Manual review
1. In your browser, enable reduced motion before loading: hero fully visible, normal project entries, complete static contact arrow; email/copy/links usable.
2. Reload with motion allowed. Confirm the brief name/portrait sequence feels controlled, then scroll work slowly and reverse direction; no wheel resistance or stuck stage.
3. Record the browser Performance panel during the same desktop traversal before/after if comparing frame delivery. Check long tasks and paint cost; screenshots cannot establish this.
4. Hover the contact link with a mouse, then Tab to it and use touch: small spring only for a fine pointer; yellow focus/tap feedback remains clear. Test clipboard denial using browser permissions and confirm manual-copy guidance.

## Verification completed
- npm.cmd run lint, npm.cmd run typecheck and npm.cmd run build passed. Final production build: _DFiW51eNEZ5N87eUKF6R. One confirmed repository next start --port 3001 process, PID 23036 at verification. Preview: http://localhost:3001/.
- Fetched final HTML-referenced CSS and JavaScript: HTTP 200, correct text/css or application/javascript types, actual non-HTML bodies. Portrait and project images loaded in-browser; all existing main sections present.
- Actual browser widths checked: 1440x900, 390x844 and 320x740. No horizontal document overflow. Reviewed hero, project composition and contact wrapping. Desktop stage holds at 90px, reaches DevLink, and releases before More projects. Scrolling upward restores the PrepPilot layer.
- Repeated desktop/mobile resizing and reloads returned the expected enhanced/normal layout. Mobile had no residual inline transforms on featured headings/details and no stage controls. This is functional cleanup observation, not a memory-leak or frame-time profile.
- All 20 controls traversed with Tab at 320px: visible focus and opacity 1. Desktop traversal through all featured links also passed. Skip-link activation focused main; native research disclosure opened/closed via keyboard. Contact keyboard focus animated the SVG; Copy email returned its success status.
- Browser console reported no warnings/errors during checks. Pointer spring is code-reviewed; precise pointer-path behavior, real touch hardware, clipboard denial, reduced-motion and JS-disabled emulation remain unverified under this API.
- Composition captures (in the chat workspace, outside the source repository): motion-before-desktop.jpg; motion-after-hero.jpg; motion-after-stage.jpg; motion-after-contact.jpg; motion-after-desktop-full.jpg; motion-after-mobile-390.jpg; motion-after-mobile-320.jpg. No video recording was supported; these are not evidence of frame delivery or motion quality.



## DevLink alignment correction
Browser inspection after the genuine screenshot replacement found the original artwork handoff completed while the DevLink heading was still about 240px below the image. The scroll timeline now uses the measured CSS sticky travel (story height minus stage height) for its end, with the outgoing/incoming artwork and DevLink text handoff moved later within that same timeline. No extra trigger, scroll listener, wheel interception, image crop, or mobile layout change.

Lint, TypeScript and production build passed. In the 1440x900 preview, the settled DevLink heading/image tops were approximately 123px/163px, versus the previous 417px/173px state; the image now sits beside its matching heading as the stage releases. Native scrolling in both directions was inspected. Mobile 390px retained its stacked, loaded 312x152 image with no horizontal overflow; no console warnings/errors. Preview remains http://localhost:3000/. Screenshot: devlink-alignment-corrected.jpg in the chat workspace. This verifies composition, not frame-time performance.


## Follow-up: image/description geometry across viewport sizes
The owner's screenshot established that the previous timing-only correction did not solve wider, shorter viewports. The stage and project details have independent heights, so early artwork placement can remain above its matching heading even after the handoff. The second stage panel now has an inner content wrapper with a responsive vertical transform calculated from the actual second heading, stage-window offset and sticky travel. One existing ScrollTrigger timeline interpolates that position during the handoff; geometry reads occur only at initialization/refresh, not per scroll frame. Positive offset follows the heading; the zero lower bound protects the stage header when there is no downward correction needed. The screenshot is unchanged and uncropped. No new trigger, animation dependency or scroll listener was added.

Lint, TypeScript and production build passed. At actual 1920x864, settled heading/figure tops measured 116.475px and 115.975px (0.5px difference), correcting the owner's wider-screen mismatch. Also inspected 1920x1080 and 1440x900, then resized/reloaded at 390x844 and 320x740. Images loaded, no horizontal overflow or console warnings/errors; mobile stage is hidden and its wrapper has no residual inline styles. Decorative stage still contains zero controls. Preview: http://localhost:3000/. Screenshot in chat workspace: devlink-description-alignment-wide.jpg. Earlier timing-only correction claims are superseded by this follow-up; no frame-time performance claim is made.
