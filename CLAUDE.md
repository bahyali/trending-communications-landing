# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Vite dev server at http://localhost:5173
npm run build     # tsc -b && vite build  →  ./dist
npm run preview   # serve the built dist/ locally
```

There is no test suite or linter configured. Type-checking happens as part of `npm run build` (`tsc -b` runs before `vite build`).

## Deployment

Production target is **Cloudflare Pages**, project name `trending-communications`. Deploys go through:

```bash
npm run deploy
```

That script builds, then auto-sources `.env` (if present) before invoking `wrangler pages deploy`. Per-machine config lives in `.env` (gitignored) — see `.env.example`. Set `CLOUDFLARE_ACCOUNT_ID` there if your wrangler session has access to multiple accounts; otherwise wrangler picks the only available one. Do **not** hardcode an account ID in `package.json`, `CLAUDE.md`, `README.md`, or `wrangler.toml` — keep it machine-local.

The Pages project already exists upstream — do not run `wrangler pages project create` again. First-time setup on a new machine: `npx wrangler login`, then `cp .env.example .env` and fill in `CLOUDFLARE_ACCOUNT_ID` if needed.

## Architecture

Single-page React landing site. The whole page is composed in `src/App.tsx` as a flat list of section components rendered into a fixed `bg-zinc-950` shell. There is no router and no data layer — everything is presentational.

**Section ↔ nav coupling.** `src/components/Header.tsx` defines `navItems` and slugifies each label with `item.toLowerCase().replace(" ", "-")` before calling `scrollIntoView` on the matching DOM `id`. This means each section component is responsible for owning its own `<section id="…">` wrapper, and the id **must** match the slugified nav label. Adding a nav entry without a corresponding `id` (or vice versa) breaks scroll navigation silently. Current pairings: `About`→`#about`, `Who We Are`→`#who-we-are`, `Solutions`→`#solutions`, `Contact`→`#contact`. (`Hero`, `VisionMission`, `Footer` have no nav entry.)

**Scroll state.** `App.tsx` tracks `window.scrollY > 50` and passes it to `Header` as `scrolled`, which toggles between transparent and `bg-zinc-950/95 backdrop-blur-md`. This is the only piece of cross-component state in the app.

**Design tokens (informal).** `zinc-950` page background, `zinc-900` alternating section background, `zinc-800` borders, `orange-500`/`amber-500` accents, white/`zinc-300`/`zinc-400` text. Hover states almost always shift accent elements toward `orange-500`. Keep new sections in this palette.

**Icons** come from `lucide-react`; import only what's used per file.

## Known issue

`src/components/Hero.tsx:18-21` builds a grid pattern with `linear-gradient(zinc-700 1px, transparent 1px), linear-gradient(90deg, zinc-700 1px, transparent 1px)`. `zinc-700` is a Tailwind class name, not a valid CSS color, so the grid silently fails to render. Replace with the actual hex (`#3f3f46`) or a Tailwind arbitrary-value approach if you touch this file.
