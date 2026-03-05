# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server (Vite)
npm run build     # Build for production (output: dist/)
npm run preview   # Preview the production build locally
```

Both `npm` and `bun` lock files exist; use `npm` to stay consistent with the CI workflow (`npm ci`).

## Architecture

This is a **multi-page static portfolio site** (tatsuki.dev) built with Vite + Vanilla JS + Tailwind CSS v4.

### Page structure

Every page follows the same two-file pattern:

1. **HTML entry** in `/pages/<page>.html` — a minimal shell that renders `<div id="app">` and loads a JS module.
2. **JS module** in `/src/pages/<page>.js` — builds the DOM and injects it into `#app`.

The home page (`index.html` + `src/main.js`) follows the same pattern but lives at the root.

All entry points are registered in `vite.config.js` under `build.rollupOptions.input`. **When adding a new page, register it there.**

### Shared components

`src/components/header.js` and `src/components/footer.js` export functions that return DOM nodes. Each page JS file imports and mounts them manually — there is no framework or router.

### Styling

- `src/style.css` — global stylesheet. Starts with `@import "tailwindcss"` (Tailwind v4 syntax). Custom CSS utilities, animation keyframes, and reusable class names (`.gradient-text`, `.card-hover`, `.glass`, `.btn-primary`, etc.) are defined here.
- Tailwind is processed via the `@tailwindcss/vite` plugin — no `tailwind.config.js` is needed.

## Personal profile (`shuukatsu/`)

`shuukatsu/` is a separate git repository (独自の `.git` を持つ) containing job-hunting materials for Kitamura Tatsuki. When writing or editing portfolio content (bio, project descriptions, experience, etc.), reference these files:

- **`shuukatsu/人物像まとめ.md`** — master profile: skills, work history, strengths/weaknesses, career goals, and an AI guide for how to use the materials.
- **`shuukatsu/共通/ESテンプレート/`** — detailed episode write-ups for each project and experience (MBTI app, opendata, AtCoder, QA internship, event planning, etc.).
- **`shuukatsu/共通/面接用/`** — interview answers (ガクチカ, self-intro, career axis).

`人物像まとめ.md` section 9 ("AI向け参照ガイド") describes priority order and episode selection rules — follow it when generating bio or ES text.

### Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and deploys `dist/` to GitHub Pages. The site is served from the root (`base: '/'` in `vite.config.js`).
