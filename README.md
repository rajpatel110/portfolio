# Raj Patel — Portfolio

Next.js 16.4.3 App Router, React, TypeScript, Tailwind CSS, custom CSS, GSAP, and @gsap/react. Features: hero/portrait, two featured projects, two compact projects, About, four Skills groups, and Contact. No form service, analytics, or credentials required locally. No deployment has been performed.

## Local commands (PowerShell)
Use Node.js 22.20+ and npm. Run from C:\PROJECTS\portfolio\portfolio:

```powershell
npm.cmd ci
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npm.cmd start -- --port 3001
```

Production preview: http://localhost:3001. Stop its existing terminal with Ctrl+C **before building again**. Build must finish successfully before start. Never replace .next under a running next start process. Details and the earlier missing-CSS diagnosis: [preview workflow](docs/PREVIEW_WORKFLOW.md).

For active development, stop production first and run `npm.cmd run dev -- --port 3001`. Use one preview mode at a time. No custom deployment configuration is needed for the installed Next.js version; Vercel can use its Next.js preset and repository root.

## Content and assets
- data/profile.ts: identity/contact. data/about.ts: biography and skills. data/projects.ts: projects and optional source/live/image fields.
- docs/PROJECT_SOURCES.md: verified evidence, owner-supplied research details, and live-project limitations.
- public/images/portrait.webp: actual optimized portrait. Original JPEG preserved unchanged in ignored references/portrait-source.jpg.
- public/images/projects/preppilot.webp: genuine homepage capture. Other projects use typography; no fabricated screenshots.
- app/icon.svg: original RP favicon. public/social-preview.png: original 1200×630 social card; editable SVG in public/brand/. public/apple-touch-icon.png: RP touch icon.
- No public resume exists; no download is rendered. Keep private originals/references out of public/ and Git.

## Before deployment
Choose the actual public portfolio URL. Set PORTFOLIO_SITE_URL to its HTTPS origin (no path/query/fragment) in hosting settings, then rebuild. Until configured, canonical, og:url, and social-image URL tags are deliberately omitted; localhost is never used as the public address. Open Graph/Twitter titles and descriptions are present, and the social image is ready. `.env.example` documents the optional setting; real .env files stay ignored.

Public claims and URLs must stay grounded in docs/PROJECT_SOURCES.md. EEG results remain owner-reported and preliminary; DevLink public-entry limitations remain explicit. Commits, pushes, and deployments require explicit user authorization.

## Motion and verification
Native scrolling, one shared one-shot IntersectionObserver, GSAP context cleanup, and reduced-motion CSS. No continuous effects or smooth-scroll library. See docs/SCROLL_INVESTIGATION.md and docs/LAUNCH_READINESS.md. The reported scrolling lag has no confirmed cause or measured fix. Browser profiling/media emulation and clipboard-denial emulation have not been available in the permitted tool.
