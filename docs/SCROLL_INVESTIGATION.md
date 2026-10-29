# Scroll investigation and technology expansion

## Baseline
Production preview http://localhost:3001, next start --port 3001, PID 24044, build 90ioMK_VMWtJAwE68kzZs. The origin returned its expected CSS and milestone-three content. The permitted in-app browser traversed the full page with nine PageDown inputs at its measured 1280x720 viewport, reaching scrollY 3356 of a 4076px document. No browser warnings/errors were reported. These automation observations do not measure frame delivery or prove absence of perceived lag.

## Confirmed code findings
- No application wheel/touchmove/scroll listeners, scroll interception, inertia library, requestAnimationFrame loop, or React scroll-state updates.
- The two content components created one ScrollTrigger per one-time reveal: twelve targets before adding the fourth skill group. They used once:true, no scrub/pin, matchMedia and useGSAP cleanup. No leak, repeated refresh(), or persistent triggers were established.
- The scroll reveals called gsap.from at setup time, preparing transforms on offscreen targets including whole project articles. Their simple enter-once behavior did not require ScrollTrigger's scroll/refresh machinery.
- Animated properties were transforms and hero opacity, not layout dimensions. Shadows are static; no blur/backdrop filters or persistent will-change found. The two web-ready images are bounded and Next-optimized. No evidence establishes oversized assets or shadows as the lag cause.

## Targeted change
Use one shared IntersectionObserver in the existing root matchMedia context. Construct a brief GSAP translation only when an element enters the viewport, unobserve it after first entry, and disconnect when complete. force3D:false avoids explicitly promoting large reveal containers. Completed transforms clear; async tweens are registered with the GSAP context and cleanup disconnects observation. Reduced-motion users get no observer or entrance tweens. Focused/hash-target content bypasses a reveal. Hero entrance and contact interactions remain. No extra library, artificial inertia, per-scroll layout loop, or React state was added.

This reduces known scroll-related bookkeeping and offscreen transform preparation. It is a conservative code-based simplification, not a confirmed diagnosis or measured speedup. No temporary isolation experiment established a causal effect.

## Measurement limitations
The permitted browser API exposes no performance-tracing, frame-timing, long-task, scripting/layout/paint profile, or layer-inspection controls. No baseline trace, same-condition frame-time comparison, or measured improvement is claimed. Browser screenshots and viewport overrides were also unreliable in the preceding repair; actual reported viewport sizes must be checked before calling a mobile test passed. Native Brave access previously failed policy verification and is not retried or bypassed.

## Local workflow
The confirmed repository dev process on port 3000 and production process on 3001 were stopped before building. Only the updated production preview on 3001 is left running after verification. Follow PREVIEW_WORKFLOW.md: stop, build, start; never build underneath next start.

## Updated preview checks
Final build uLYV09M-V-MhsCsQ3JQFd, production PID 23852 at verification, http://localhost:3001. Lint, TypeScript, and production build passed. Exactly one listener remains across portfolio preview ports 3000/3001/3002: production 3001.

The same nine PageDown inputs at actual 1280x720 traversed the updated 4235px page to its end. Extra content changes document height, so intermediate scroll positions are not performance comparisons. After traversal no reveal target had residual transform or zero opacity. At initial load, zero offscreen reveal targets had prepared transforms. All 18 keyboard controls had visible focus, and keyboard activation of Skills focused its section. Images loaded; no console warnings/errors reported. Current CSS/JS URLs returned 200 with appropriate text/css or application/javascript bodies.

Viewport controls recovered during this run: actual widths 390 and 320 were confirmed, wrapping inspected, technology items stayed within horizontal bounds, and no document overflow was found. Desktop 1440 also had no overflow. Reduced-motion behavior remains code-reviewed only; browser media emulation is unavailable. The browser API still has no profiling controls, so perceived smoothness and frame delays require a user-side browser Performance recording. No measured lag reduction is claimed.
