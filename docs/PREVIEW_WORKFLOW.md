# Local preview workflow

Run commands from C:\PROJECTS\portfolio\portfolio in PowerShell. Use one preview mode at a time for this repository.

## Production preview on port 3001

1. Stop the existing portfolio preview with Ctrl+C in its terminal. Confirm port 3001 is free. Do not terminate unrelated Node processes.
2. Build and wait for success:

```powershell
npm.cmd run build
```

3. Start the matching build:

```powershell
npm.cmd start -- --port 3001
```

4. Open http://localhost:3001. After replacing a previous build, reload the browser (Ctrl+Shift+R if necessary).

Never run `npm.cmd run build` while this repository's `next start` is running. A production server retains build metadata; replacing .next underneath it can leave cached HTML pointing to deleted hashed assets. Stop, build, then start sequentially. Normal rebuilding was sufficient for this incident; no generated output deletion was needed.

## Active development alternative

Stop the production preview first, then run:

```powershell
npm.cmd run dev -- --port 3001
```

Do not run a build or start another preview during this session. Use Ctrl+C to stop development before switching to production. Next 16 currently keeps dev artifacts under .next/dev; do not rely on multiple servers as a workflow.

## Confirmed incident

Port 3001 was served by PID 19500 from this root, command `next start --port 3001`, launched before milestone three. Fresh origin HTML omitted About/Skills/Contact and requested `/_next/static/chunks/2fbc7tw2miho4.css`. That CSS file was absent on disk and returned HTTP 500 with Content-Type text/plain and body `Internal Server Error`. The current generated HTML contained all three sections and referenced `2lukg1e9n_ng2.css` instead. A later production build had replaced .next while the old server remained running. This mismatch, rather than a missing global import or design change, caused the unstyled page. Browser caching was not required to reproduce it.

The separate existing dev process on port 3000 was identified as belonging to this repository, using .next/dev. It was left untouched; no evidence identified it as the cause. Only the stale confirmed port-3001 preview was stopped.

## Repair verification

After stopping PID 19500, a sequential production build passed and a new `next start --port 3001` listener (PID 24044 at verification time) was started from this root. http://localhost:3001 returned About, Skills, and Contact. The referenced stylesheet `2lukg1e9n_ng2.css` returned 200, text/css; charset=UTF-8, real CSS (not HTML), with cream/hero/contact rules. Seven referenced script files returned application/javascript; both optimized image URLs returned decodable image responses. Browser computed styles confirmed rgb(244, 241, 233), Arial/Helvetica/sans-serif, grid hero layout, and bounded image sizes with no desktop overflow. No warning/error console entries or new server log errors appeared.

Fresh visual verification limitation: screenshot capture reported Unable to capture screenshot; viewport overrides did not change measured innerWidth. The fresh dedicated tabs confirmed desktop DOM/computed styles, but no fresh mobile visual pass or screenshot is claimed for this restart. Previously saved milestone-three captures are from earlier verification, not this repaired port-3001 process.

The repaired production preview is intentionally left running. Reload the existing browser tab; Ctrl+Shift+R if it retains stale HTML. No application code, dependencies, or styling changed during this repair.
