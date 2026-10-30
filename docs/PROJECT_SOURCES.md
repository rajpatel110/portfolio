# Project evidence — checked 2026-10-29

Public repository discovery: https://api.github.com/users/rajpatel110/repos?per_page=100. No public Vidloom repository was returned. No exclusive or independent contribution is inferred from repository ownership.

## PrepPilot (lead)
Repository: https://github.com/rajpatel110/prep-pilot (default branch dev).
Inspected README.md and package.json; source: src/modules/planning/accept-preview.ts, src/modules/planning/task-completion.ts, src/modules/catalog/reads.ts.
- README describes interview preparation across DSA, aptitude, and CS fundamentals.
- Manifest confirms Next.js, React, TypeScript, MongoDB/Mongoose, Better Auth, and Zod.
- accept-preview posts explicit confirmation; task-completion validates the active owned plan and updates task status; catalog reads implement published content filtering and pagination.
- Live URL https://prep-pilot-theta-tan.vercel.app returned HTTP 200 and the PrepPilot homepage was inspected in-browser. Authentication and end-to-end study flows were not exercised.
- public/images/projects/preppilot.webp is an actual browser capture of the live homepage; its illustrative sample-plan labeling remains visible. Capture optimized to WebP, max 1280px width. No product screen was fabricated.

## DevLink
Repository: https://github.com/rajpatel110/DevLink (default branch main).
Inspected README.md, package.json, DevLink-web/package.json, src/routes/request.js, src/routes/chat.js.
- React/Vite/Redux frontend; Express/Node backend with Mongoose/MongoDB and JWT authentication.
- Request routes implement interested/ignore and accepted/rejected transitions, authenticated and scoped to recipients.
- Chat checks accepted connections; persists text messages and paginates history. Uses polling per README, not a claimed WebSocket implementation.
- Repository homepage https://dev-link-five-tau.vercel.app returned 200, but browser inspection of / and /Feed showed only the header/footer shell. The demo link was initially omitted; the owner has now explicitly confirmed the exact deployment URL, which is linked with a public-entry limitation note. Presentation is explicitly typography, not a product screenshot.

## Missing inputs
Vidloom and EEG repository/deployment URLs remain unavailable. Owner-supplied fallback descriptions now support compact entries without link controls; no repository verification is claimed.
Personal contributions and collaboration details remain unconfirmed; project copy describes capabilities without sole-authorship claims.

## Services, workflow, and personal usage — current source review
Reviewed default branch dev at commit 58347743a1335f648d837087448f0461b96e3e3f. Sources: README.md, package.json, sanitized .env.example variable names, docs/DEPLOYMENT.md, docs/email/OPERATIONS.md, docs/email/BREVO.md, src/modules/notifications/transport.ts, src/modules/notifications/service.ts, tests/brevo.test.ts, and .github/workflows/ci.yml. No private environment files or secret values were read.

- Vercel: application hosting per README/deployment guide, with a working repository-linked public demo previously checked. Personal use is directly confirmed by the user.
- MongoDB Atlas: hosted MongoDB, confirmed by README/deployment guidance; Mongoose owns domain models. A configured/documented platform, not a new independent database connection audit.
- Brevo: transactional verification/recovery email transport implemented via its HTTP API. Current application documentation identifies it as the live provider according to operator-reported receipt/confirmation. This review does not independently inspect the hosting environment or send real email. Personal use is confirmed by the user.
- Resend: a real alternative HTTP transport remains implemented and selected by EMAIL_PROVIDER. Operations explicitly identifies it as an alternative. The user's statement establishes prior hands-on use; it does not prove a currently active production Resend provider. Public wording says previous use; do not infer simultaneous active providers or automatic failover.
- Testing: package scripts use Node.js node:test with tsx; tests/brevo.test.ts imports node:test and node:assert/strict. Integration commands/fixtures exist. Do not label these Playwright/Vitest/Jest or claim they prove real cloud delivery.
- CI: .github/workflows/ci.yml configures GitHub Actions on PRs and main/dev pushes. Steps run npm ci, Prettier, ESLint, TypeScript, Node tests, and build on Ubuntu. Configuration confirmed, not a fresh CI-run-success or deployment claim.
- R2/S3: optional attachment module and SDKs exist, but README says attachments are unavailable in the demo and deployment docs keep FILES_ENABLED disabled. Not listed as a live capability or newly claimed personal skill.
- Early design documents and earlier memory described proposed services. Current implementation and operator documentation supersede those proposals. No merely planned service is added to the public stack.


## Owner-confirmed URLs and additional projects
The owner explicitly supplied these exact deployment URLs, including trailing slash:
- DevLink: https://dev-link-five-tau.vercel.app/
- PrepPilot: https://prep-pilot-theta-tan.vercel.app/
Both returned HTTP 200 with HTML content. Browser inspection: PrepPilot public homepage renders with its explicitly illustrative sample plan. Accounts are required for study features per the previously inspected README; no authenticated study flow was tested. DevLink root and its visible /Feed navigation render navigation/footer only; console reports 401 for unauthenticated profile lookup. A 401 alone does not establish deployment failure. No login screen was observed at these entry points and no authenticated flow was tested. The owner-confirmed live link is now shown with a concise public-entry limitation note. Existing source URLs are unchanged.

No resume PDF/DOCX/file matching resume was found in repository scope, including ignored references. Content provenance for the compact additions is the current owner-supplied fallback summaries, not repository inspection:
- Vidloom: real-time video app; React, Node.js, WebRTC, WebSocket signaling; peer-to-peer connections and SDP/ICE signaling. No repository, live URL, screenshot, team size, sole ownership, users, outcomes, or deployment status asserted.
- EEG Seizure Prediction: academic ML work using CHB-MIT EEG and Logistic Regression, including preprocessing, segmentation, feature extraction, and class balancing. No clinical-readiness or intensity-classification claim. The 92% recall figure is intentionally omitted pending evaluation context. No language/framework beyond supplied evidence inferred.

The existing genuine PrepPilot homepage capture is retained. DevLink remains typographic; additional projects are text-based. No fabricated screenshots, placeholder URLs, disabled link controls, or coming-soon messages are rendered. Project source/live/image fields are optional and unavailable controls are omitted entirely.

### Collection-update validation
Lint, TypeScript, and production build passed. Restart used stop → build → start, leaving one production listener at http://localhost:3001 (build lUdEw4qWk1bBuZGWrtJAQ). HTML includes both added projects; its referenced stylesheet returns 200 text/css with real cream/more-project rules. Desktop 1440px, mobile 390px, and narrow mobile 320px were inspected: text/link bounds and document overflow passed. All 19 keyboard controls have visible focus, including both exact live URLs. Each compact project renders zero anchors, buttons, and project-link wrappers. Existing genuine images load and the local browser console reports no warnings/errors. Shared reveal observer/GSAP cleanup is unchanged. Scrolling-lag resolution is not claimed.

Screenshots in the chat workspace: project-collection-desktop.jpg, project-collection-mobile-390.jpg, project-collection-mobile-320.jpg. Resume search also covered the named chat workspace; no PDF/DOCX/resume file was available there.

## Owner-supplied EEG and Vidloom refinement
These updates supersede the earlier fallback summaries and metrics omission. They come directly from the project owner; no repository or evaluation artifacts were supplied for independent verification.

EEG: academic research with an offline baseline using CHB-MIT Scalp EEG Database, initially CHB01. Completed work: EDF loading with MNE; EEG preprocessing; 10-second windows with 5-second overlap; pre-ictal/inter-ictal labeling; statistical and frequency-domain feature extraction; Logistic Regression with StandardScaler and balanced class weights. Evaluation used accuracy, precision, recall, confusion matrix, precision-recall curve, and PR-AUC. No numeric PR-AUC was supplied. Owner-reported preliminary CHB01 results are displayed together: approximately 92% accuracy, 92% pre-ictal recall, 52% precision, with the false-positive limitation in the same block. Exact pre-ictal definition and train/test split methodology remain unspecified; no independent result validation inferred. Dataset expansion, stronger validation, model experimentation, prediction-horizon analysis, and real-time processing are future work. No clinical readiness, cross-patient generalization, validated warning horizon, or implemented intensity classification is claimed.

Vidloom: browser WebRTC media/data communication with React/TypeScript frontend and Node.js WebSocket signaling. Signaling exchanges SDP offers/answers and ICE candidates; WebRTC then establishes the media/data connection. STUN assists NAT traversal/connectivity. Reducing application-server media bandwidth is an architectural goal, not a measured result. Direct peer-to-peer connectivity is conditional; media may use a relay. TURN is described as architectural relay fallback, with no independently established deployment/configuration. No deployed TURN service, latency/scale/bandwidth metric, or no-relay guarantee is claimed.

Both existing entries were updated, not duplicated. URLs remain absent for these two projects. EEG results/limitations are always visible; optional native details contain evaluation scope and future work, with keyboard focus styling. Existing featured links, shared IntersectionObserver, GSAP cleanup, and dependencies are unchanged.

### Refinement checks — 2026-10-30
Lint, TypeScript, and production build passed. Production preview was stopped before rebuilding and restarted at http://localhost:3001. Both existing compact entries are present once; featured source/live URLs remain unchanged. At actual 390px and 320px widths, expanded research text stays within bounds with no horizontal overflow. Native disclosure toggles via Enter and has visible focus. No local browser console warnings/errors reported. Results and limitations are outside the disclosure and always visible. CSS response is 200 text/css with real baseline/disclosure rules. Shared reveal observer and GSAP code were not changed.


## Owner-supplied DevLink login screenshot — 2026-10-30
The owner supplied the genuine login-screen PNG directly in this conversation. It shows DevLink branding, email/password fields, login, password recovery and sign-up controls. This supersedes the earlier typography-only preview decision; it does not independently establish successful authentication or testing of the full application flow. The exact owner-confirmed live URL remains https://dev-link-five-tau.vercel.app/. Public wording now says "Sign-in required" next to that link; the earlier public-shell observation remains historical evidence above.

Original PNG preserved byte-for-byte at ignored references/devlink-login-source.png. Published asset: public/images/projects/devlink-login.webp, lossless WebP, 1910x933, 16,502 bytes (source PNG 46,897 bytes). No cropping, stretching, interface reconstruction or screenshot content edits. Both the decorative desktop sticky stage and normal/mobile entry use this same typed image data and exact supplied alt text: "DevLink login interface with email and password fields." Real intrinsic dimensions prevent a false 1280x800 layout ratio. A full-size preview link in the normal project actions allows closer inspection on small screens; the aria-hidden decorative stage still contains no controls.

Project facts, featured source/live URLs, GSAP timeline, shared observer and cleanup are unchanged. No DevLink application source was modified.


### Screenshot integration checks
Lint, TypeScript and production build passed. Preview stopped before rebuilding and restarted sequentially at http://localhost:3000/. Actual widths 1440, 390 and 320 were checked. Both image instances loaded with matching aspect ratios; desktop stage changed from PrepPilot (opacity 1/0) to DevLink (0/1), stayed at 90px during its sticky range, and contained no focus targets. Mobile uses the normal image entry. No horizontal overflow; sign-in note and full-size preview action wrap within bounds. The new preview link has visible keyboard focus. Browser console reported no warnings/errors.

Published WebP and its Next-optimized response returned 200 with image content types; referenced CSS returned 200 text/css with real CSS. Original preservation was verified by SHA-256 comparison. Screenshots saved outside the source repository in the chat workspace: devlink-preview-desktop.jpg and devlink-preview-mobile.jpg. No authenticated DevLink flow was tested; no performance measurement or reduced-motion-emulation claim is added by this asset update.
