# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start local dev server (Astro, port 4321)
npm run build      # astro check && astro build (output: dist/)
npm run preview    # Preview the production build locally
npm run typecheck  # astro check only, no build
```

Both `npm` and `bun` lock files exist; use `npm` to stay consistent with the CI workflow (`npm ci`).

## Architecture

This is a **static portfolio site** (tatsuki.dev) built with Astro 6 + React 19 islands + TypeScript + Tailwind CSS v4, deployed as a static bundle to GitHub Pages. Every route is pre-rendered to its own HTML file at build time for SEO.

### Routing and i18n

The site is served in four languages. Japanese is the default and lives at the root; the others are path-prefixed:

| Locale | URL prefix | `<html lang>` |
|--------|------------|---------------|
| `ja` (default) | `/about` | `ja` |
| `en` | `/en/about` | `en` |
| `zh` (Simplified Chinese) | `/zh/about` | `zh-CN` |
| `ko` | `/ko/about` | `ko` |

Locale config (`LOCALES`, `DEFAULT_LOCALE`, `LOCALE_META`) and helpers (`localePaths`, `localeFromParam`, `localizePath`, `stripLocale`, `getLocale`) live in `src/i18n/config.ts`. `astro.config.mjs` mirrors the locale list for Astro's `i18n` routing and the sitemap's hreflang output — keep both in sync.

Every page lives under `src/pages/[...lang]/` and is built once per locale via `getStaticPaths()`:

| Route | File |
|-------|------|
| `/`, `/en`, … | `src/pages/[...lang]/index.astro` |
| `/about` | `src/pages/[...lang]/about.astro` |
| `/projects` | `src/pages/[...lang]/projects/index.astro` |
| `/projects/{yamatomo,mbti-app,opendata,atcoder,math}` | `src/pages/[...lang]/projects/*.astro` |
| `/experience` | `src/pages/[...lang]/experience.astro` |
| `/problem` | `src/pages/[...lang]/problem.astro` |
| `/contact` | `src/pages/[...lang]/contact.astro` |
| `/artworks`, `/artworks/bubbles` | `src/pages/[...lang]/artworks.astro`, `artworks/bubbles.astro` |
| `/404` | `src/pages/404.astro` (built once; swaps copy client-side by URL prefix) |

**Translations** are per-page dictionaries in `src/i18n/dict/*.ts`. Each file defines the `ja` object (source of truth), derives its type (`type XDict = typeof ja`), and exports `{ ja, en, zh, ko }` as `Record<Locale, XDict>` so a missing key in any language is a type error. `common.ts` holds shell strings (nav, footer, back link, generic section headings); `layout.ts` holds site-wide SEO metadata.

**Page skeleton:**

```astro
---
import { localePaths, localeFromParam, localizePath } from '../../i18n';
import dict from '../../i18n/dict/example';
export function getStaticPaths() { return localePaths(); }
const locale = localeFromParam(Astro.params.lang);
const t = dict[locale];
const l = (p: string) => localizePath(p, locale);
---
<BaseLayout title={t.title} description={t.description} path="/example">
  <a href={l('/contact')}>{t.cta}</a>
</BaseLayout>
```

Rules when adding or editing pages:
- Create the file under `src/pages/[...lang]/` and add a dictionary in `src/i18n/dict/` with all four locales.
- Never hard-code visible text in markup; every user-facing string comes from the dictionary. Terminal-style `command` strings for `PageHeader` and brand strings (`tatsuki.dev`) are the exception.
- Every internal `href` goes through `l()` so it stays inside the current locale. Pass the locale-less path to `BaseLayout`'s `path` prop; it adds the prefix, emits the canonical URL, `hreflang` alternates, `og:locale`, and the localized JSON-LD.
- React islands that show text receive it as props (e.g. `RoleTyper roles={t.roles}`, `ProblemTerminal locale={locale}`); `localizePath` is a pure function and can be imported into islands from `src/i18n/config.ts`.
- `Header`, `Footer`, `ProjectBackLink`, and `LanguageSwitcher` derive the locale from `Astro.url` themselves; `LanguageSwitcher` has a `tone="dark"` variant for the black artworks pages.

### Layout and shared components

- `src/layouts/BaseLayout.astro` — the `<html>` shell. Renders all `<head>` metadata (per-page title/description/canonical/OG/Twitter + static JSON-LD `Person` + `WebSite`), Google fonts, and the `gtag.js` snippet. Takes `title`, `description`, `path`, `ogImage` props.
- `src/components/Header.astro` — fixed top nav. Mobile-menu toggle uses a small inline `<script>`, not React.
- `src/components/Footer.astro` — site footer.
- `src/components/PageHeader.astro` — the `$ <command>` typing animation + `<h1>` block reused on most pages. Title is passed via `<slot />`, so callers can include rich content. Typing is driven by an inline `<script>` keyed off `.page-header-typer[data-command]`.
- `src/components/ProjectBackLink.astro` — back link reused on project detail pages.
- `src/components/Icons.tsx` — inline SVG icon set (React components). Used in both `.astro` and React contexts; when used from `.astro` they SSR to HTML with no JS shipped.

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

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and deploys `dist/` to GitHub Pages. The site is served from the root (`site: 'https://tatsuki.dev'` in `astro.config.mjs`).
