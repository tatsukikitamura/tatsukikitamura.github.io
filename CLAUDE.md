# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start local dev server (Astro, port 4321)
npm run build      # astro build only (output: dist/) — CI runs typecheck as a separate step
npm run preview    # Preview the production build locally
npm run typecheck  # astro check only, no build
```

Use `npm` (CI runs `npm ci`; there is no bun lock file). Node version is pinned in `.nvmrc` (also `engines` in `package.json`) and CI reads it via `node-version-file`.

`vite` is listed in `devDependencies` at `^7` on purpose: Astro 6 depends on vite 7, but `@tailwindcss/vite` also accepts vite 8, so without the pin npm hoists vite 8 to the top level and the build fails with a rolldown "Missing field ... on BindingViteResolvePluginConfig" error. Drop the pin only when moving to Astro 7 (vite 8).

## Architecture

This is a **static portfolio site** (tatsuki.dev) built with Astro 6 + React 19 islands + TypeScript + Tailwind CSS v4, deployed as a static bundle to GitHub Pages. Every route is pre-rendered to its own HTML file at build time for SEO.

`astro.config.mjs` sets `trailingSlash: 'never'` **and** `build.format: 'file'` (so `/about` becomes `dist/about.html`, not `dist/about/index.html`). Keep both: GitHub Pages 301-redirects `/about` → `/about/` when only `about/index.html` exists, which would contradict the no-slash canonical/sitemap URLs.

### Routing

Astro routes everything in `src/pages/`:

| Route | File |
|-------|------|
| `/` | `src/pages/index.astro` |
| `/about` | `src/pages/about.astro` |
| `/projects` | `src/pages/projects/index.astro` |
| `/projects/{yamatomo,mbti-app,opendata,atcoder,math}` | `src/pages/projects/*.astro` |
| `/experience` | `src/pages/experience.astro` |
| `/problem` | `src/pages/problem.astro` |
| `/contact` | `src/pages/contact.astro` |
| `/artworks` | `src/pages/artworks/index.astro` (standalone dark page, `frame={false}`) |
| `/artworks/bubbles` | `src/pages/artworks/bubbles.astro` (canvas soft-body sim, logic in `src/lib/bubbleSimulation.ts`) |
| `/404` | `src/pages/404.astro` |

**When adding a new page:** create a `.astro` file in `src/pages/`. Astro auto-routes it and includes it in the sitemap. Wrap content with `<BaseLayout title=... description=... path=...>` so per-page SEO metadata (title, description, canonical, OG, Twitter, JSON-LD) gets emitted.

### Layout and shared components

- `src/layouts/BaseLayout.astro` — the `<html>` shell. Renders all `<head>` metadata (per-page title/description/canonical/OG/Twitter + static JSON-LD `Person` + `WebSite`), Google fonts, and the `gtag.js` snippet. Takes `title`, `description`, `path`, `ogImage`, `frame` props. `frame={false}` skips Header/Footer/white background for pages that bring their own chrome (artworks).
- `src/components/Header.astro` — fixed top nav. Mobile-menu toggle uses a small inline `<script>`, not React.
- `src/components/Footer.astro` — site footer.
- `src/components/PageHeader.astro` — the `$ <command>` typing animation + `<h1>` block reused on most pages. Title is passed via `<slot />`, so callers can include rich content. Typing is driven by an inline `<script>` keyed off `.page-header-typer[data-command]`.
- `src/components/ProjectBackLink.astro` — back link reused on project detail pages.
- `src/components/MacbookFrame.astro` — MacBook-style frame that embeds a live site in a scaled `<iframe>` (project pages). The `scrolling="no"` attribute is deprecated in HTML but kept on purpose: it is the only way to suppress the iframe's internal scrollbar, and `astro check` reports it as a hint, not an error.
- `src/components/Icons.tsx` — inline SVG icon set (React components). Used in both `.astro` and React contexts; when used from `.astro` they SSR to HTML with no JS shipped.
- `src/lib/techIcons.ts` — maps tech names to icon components; `src/lib/bubbleSimulation.ts` — the `/artworks/bubbles` physics, imported from that page's `<script>`.
- `src/types.ts` — shared types (`Artwork`, `ArtworkCategory`, ...).

### React islands (`src/islands/`)

Interactive bits are kept as React components and hydrated with `client:load`:

- `NoiseCanvas.tsx` — the `<canvas>` background on Home.
- `RoleTyper.tsx` — the cycling "I am a … " typer on Home.
- `ProblemTerminal.tsx` — the entire terminal + celebration on Problem.

Adding a new island: create the `.tsx` in `src/islands/`, import it in an `.astro` page, and add a `client:*` directive (e.g. `client:load`, `client:visible`).

### Styling

- Tailwind v4 is processed via `@tailwindcss/vite` (wired in `astro.config.mjs`). There is no `tailwind.config.js`.
- `src/style.css` is intentionally minimal: body font/background, the `fadeInUp` / `fadeIn` / `blink` keyframes, the `.animate-fade-in*` / `.animation-delay-*` utility classes that drive page enter-animations, and `.cursor-blink`. Everything else (colors, spacing, hover effects, buttons) should be expressed inline with Tailwind classes — do not re-add component classes like `.btn-primary` or `.card-hover`.

### Sitemap and robots

`@astrojs/sitemap` generates `sitemap-index.xml` + `sitemap-0.xml` at build time from the `site` value in `astro.config.mjs`. `public/robots.txt` points crawlers at `sitemap-index.xml`. No manual sitemap maintenance needed.

## Personal profile (`shuukatsu/`)

`shuukatsu/` is a separate git repository (独自の `.git` を持つ) containing job-hunting materials for Kitamura Tatsuki. When writing or editing portfolio content (bio, project descriptions, experience, etc.), reference these files:

- **`shuukatsu/人物像まとめ.md`** — master profile: skills, work history, strengths/weaknesses, career goals, and an AI guide for how to use the materials.
- **`shuukatsu/共通/ESテンプレート/`** — detailed episode write-ups for each project and experience (MBTI app, opendata, AtCoder, QA internship, event planning, etc.).
- **`shuukatsu/共通/面接用/`** — interview answers (ガクチカ, self-intro, career axis).

`人物像まとめ.md` section 9 ("AI向け参照ガイド") describes priority order and episode selection rules — follow it when generating bio or ES text.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci`, `npm run typecheck`, `npm run build` and deploys `dist/` to GitHub Pages. The site is served from the root (`site: 'https://tatsuki.dev'` in `astro.config.mjs`).

Pull requests and pushes to non-`main` branches run `.github/workflows/ci.yml` (typecheck + build, no deploy). `.github/dependabot.yml` opens weekly update PRs for npm (minor/patch grouped) and GitHub Actions.
