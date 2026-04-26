# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start local dev server (Vite)
npm run build      # Type-check (tsc) and build for production (output: dist/)
npm run preview    # Preview the production build locally
npm run typecheck  # Type-check only, no build
```

Both `npm` and `bun` lock files exist; use `npm` to stay consistent with the CI workflow (`npm ci`).

## Architecture

This is a **single-page React portfolio site** (tatsuki.dev) built with Vite + React 19 + TypeScript + Tailwind CSS v4, deployed as a static bundle to GitHub Pages.

### Entry and routing

- `index.html` → `src/main.tsx` mounts `<App />` inside `<BrowserRouter>` on `#app`.
- `src/App.tsx` declares all routes with `react-router-dom` v7. Every route renders inside the shared `<Layout />` (header + outlet + footer).
- Page components live in `src/pages/*.tsx` (one component per route: `Home`, `About`, `Projects`, `ProjectMbti`, `ProjectOpendata`, `ProjectAtcoder`, `Experience`, `Blog`, `BlogPost`, `Contact`, `NotFound`).

**When adding a new page:** create the component in `src/pages/`, then add a `<Route>` to `src/App.tsx`. No Vite config change is needed — there is a single HTML entry.

### Shared components

`src/components/` contains React components used across pages:
- `Layout.tsx` — header + `<Outlet />` + footer wrapper
- `Header.tsx`, `Footer.tsx` — site chrome
- `Icons.tsx` — inline SVG icon components
- `ProjectBackLink.tsx` — back link reused on project detail pages

### Blog content

Blog posts are Markdown files under `src/content/blogs/*.md` with YAML-ish frontmatter (`title`, `date`, `category`, `tags`, `excerpt`). Files prefixed with `_` (e.g. `_template.md`) are excluded.

`src/lib/blog.ts` loads them at build time via `import.meta.glob('../content/blogs/*.md', { query: '?raw', eager: true })`, parses the frontmatter manually, and exposes `getAllPosts()` / `getPostBySlug(slug)`. `BlogPost.tsx` renders the body with `marked`.

### Styling

- Tailwind v4 is processed via the `@tailwindcss/vite` plugin — there is no `tailwind.config.js`. The typography plugin is enabled via `@plugin "@tailwindcss/typography";` in `src/style.css` so blog post bodies can use the `prose` classes.
- `src/style.css` is intentionally minimal. It contains only what cannot be expressed in Tailwind utilities: the body font/background, the `fadeInUp` / `fadeIn` / `blink` keyframes, the `.animate-fade-in*` and `.animation-delay-*` utility classes that drive page enter-animations, and `.cursor-blink` for the Home hero. Everything else (colors, spacing, hover effects, glassmorphism, buttons) should be expressed inline with Tailwind classes — do not re-add component classes like `.btn-primary` or `.card-hover`.

### SPA fallback for GitHub Pages

Because GitHub Pages serves static files only, deep links (e.g. `/projects/mbti-app`) would 404. `public/404.html` encodes the requested path into a `?/...` query and redirects to `/`; the inline script in `index.html` decodes it back via `history.replaceState` before the React bundle boots, so React Router sees the original URL. Keep both halves in sync if you change the encoding.

## Personal profile (`shuukatsu/`)

`shuukatsu/` is a separate git repository (独自の `.git` を持つ) containing job-hunting materials for Kitamura Tatsuki. When writing or editing portfolio content (bio, project descriptions, experience, etc.), reference these files:

- **`shuukatsu/人物像まとめ.md`** — master profile: skills, work history, strengths/weaknesses, career goals, and an AI guide for how to use the materials.
- **`shuukatsu/共通/ESテンプレート/`** — detailed episode write-ups for each project and experience (MBTI app, opendata, AtCoder, QA internship, event planning, etc.).
- **`shuukatsu/共通/面接用/`** — interview answers (ガクチカ, self-intro, career axis).

`人物像まとめ.md` section 9 ("AI向け参照ガイド") describes priority order and episode selection rules — follow it when generating bio or ES text.

### Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and deploys `dist/` to GitHub Pages. The site is served from the root (`base: '/'` in `vite.config.ts`).
