# Raj Patel | Developer Portfolio

A personal portfolio showcasing full-stack web applications, academic research, and the technologies behind them. Built by Raj Patel, a B.Tech Computer Science and Cyber Security student at Pranveer Singh Institute of Technology, graduating in 2027.

## Highlights

- Responsive editorial design with an original cream, charcoal, and yellow palette.
- Choreographed hero introduction and a desktop sticky Selected Work showcase.
- Featured projects: **PrepPilot** and **DevLink**, with genuine project screenshots and source/live links.
- Additional projects: **Vidloom** and **EEG Seizure Prediction**.
- About, grouped skills, certifications, resume, and contact links with copy-email feedback.
- Semantic markup, visible keyboard focus, reduced-motion fallbacks, and readable content before animation initializes.

## Technology

Next.js App Router · React · TypeScript · Tailwind CSS · custom CSS · GSAP · ScrollTrigger · @gsap/react

## Getting started

Use Node.js 22 and npm. Run these commands from the repository root:

```bash
npm ci
npm run dev -- --port 3000
```

Open [localhost:3000](http://localhost:3000). In PowerShell, use `npm.cmd` if script execution policy blocks `npm`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Production preview

Stop any running development or production server for this checkout before building:

```bash
npm run build
npm start -- --port 3000
```

Wait for the build to finish before starting the server. Stop it with **Ctrl+C** before rebuilding; replacing `.next` while `next start` is running can leave HTML referencing stale CSS or JavaScript assets. See [Preview workflow](docs/PREVIEW_WORKFLOW.md) for the detailed procedure.

## Configuration

No environment variables are required for local development. To enable canonical and social-preview URLs, configure the optional `PORTFOLIO_SITE_URL` with the portfolio's complete public HTTPS origin:

```dotenv
PORTFOLIO_SITE_URL=https://your-portfolio-domain.example/
```

Use the actual public domain, including `https://`, without credentials, additional paths, query parameters, or fragments. Leave this value unset locally. See `.env.example`; local environment files are ignored by Git.

For Vercel, use the **Next.js** framework preset and the repository root. No custom deployment configuration is required.

## Search indexing

The single-page portfolio publishes `app/sitemap.xml` at `/sitemap.xml`, listing only `https://www.rajpatel.in/`. Section anchors are not separate pages. `app/robots.txt` allows crawling and points to that sitemap.

Keep the production `PORTFOLIO_SITE_URL` set to `https://www.rajpatel.in/` so canonical metadata matches the sitemap. After deploying changes, confirm both public files load, then submit `https://www.rajpatel.in/sitemap.xml` in Google Search Console under **Sitemaps**. Sitemap submission supports discovery; it does not guarantee indexing or ranking. If the primary domain changes, update both static crawl files and the production environment variable together.

## Project structure

| Path | Purpose |
| --- | --- |
| `app/` | App Router entry points, metadata, icons, and global styles |
| `components/` | Hero, project showcase, About/Skills/Contact, and motion behavior |
| `data/profile.ts` | Identity, contact details, resume, and certification URLs |
| `data/about.ts` | Biography, interests, and skill groups |
| `data/projects.ts` | Typed project content and optional links/images |
| `public/images/` | Optimized portrait and genuine project screenshots |
| `public/brand/` | Editable original brand artwork |
| `docs/` | Content provenance, preview workflow, and verification notes |

Update portfolio content in the typed data files. Keep original/private assets in the ignored `references/` directory and publish only website-ready copies. Resume and certification links currently point to owner-supplied Google Drive folders.

## Design and motion

The hero uses one scoped GSAP timeline. Selected Work uses one desktop ScrollTrigger timeline with native CSS sticky positioning; mobile and reduced-motion users receive normal project entries. A shared IntersectionObserver handles ordinary reveals, and Contact includes an original SVG arrow interaction. Timelines, media contexts, and listeners clean up when their scope changes.

See [Design direction](DESIGN.md), [Motion audit](docs/MOTION_AUDIT.md), and [Scroll investigation](docs/SCROLL_INVESTIGATION.md). Profiling and browser media emulation remain documented verification limitations; no measured scrolling-performance improvement is claimed.

## Content provenance

[Project sources](docs/PROJECT_SOURCES.md) records repository evidence, owner-supplied details, screenshots, and evaluation context. EEG figures are preliminary, owner-reported CHB01 baseline results. Public copy should remain grounded in this evidence.

## Contact

[GitHub](https://github.com/rajpatel110) · [LinkedIn](https://www.linkedin.com/in/raj-patel-cse) · [Email](mailto:341raj.patel@gmail.com)
