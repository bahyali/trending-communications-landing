# Trending Communications

Marketing landing page for **Trending Communications**, a next-generation media company. A single-page React site presenting the agency's purpose, vision, and service offering — from media production and PR to sports marketing and localization.

**Live:** [trending-communications.pages.dev](https://trending-communications.pages.dev)

---

## Tech stack

| Layer        | Choice                              |
| ------------ | ----------------------------------- |
| Framework    | [React 18](https://react.dev)       |
| Language     | [TypeScript 5](https://www.typescriptlang.org) |
| Build tool   | [Vite 5](https://vitejs.dev)        |
| Styling      | [Tailwind CSS 3](https://tailwindcss.com) |
| Icons        | [lucide-react](https://lucide.dev)  |
| Hosting      | [Cloudflare Pages](https://pages.cloudflare.com) |

---

## Quick start

Requires **Node.js ≥ 18** and **npm**.

```bash
# install
npm install

# run dev server (http://localhost:5173)
npm run dev

# type-check + production build → ./dist
npm run build

# preview the production build locally
npm run preview
```

---

## Project structure

```
.
├── index.html              # Vite entry HTML
├── src/
│   ├── main.tsx            # React root + Tailwind import
│   ├── App.tsx             # page composition + scroll state
│   ├── index.css           # Tailwind directives + smooth-scroll
│   └── components/
│       ├── Header.tsx          # fixed nav, scrolls to sections
│       ├── Hero.tsx            # "Next Generation Media Company"
│       ├── About.tsx           # purpose statement
│       ├── WhoWeAre.tsx        # company intro
│       ├── VisionMission.tsx   # vision + mission cards
│       ├── Solutions.tsx       # 8 service offerings grid
│       ├── Contact.tsx         # contact info / CTA
│       └── Footer.tsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── tsconfig.node.json
```

The page is a single scroll with smooth-scroll navigation between section anchors (`#about`, `#who-we-are`, `#solutions`, `#contact`). The header switches to a backdrop-blurred state once `scrollY > 50`.

### Design system

- **Palette:** zinc-950 background, orange-500 / amber-500 accents, white text
- **Type scale:** Tailwind defaults; heroes use `text-5xl md:text-7xl lg:text-8xl`
- **Container:** `max-w-7xl` for the header, `max-w-5xl`–`max-w-6xl` for content sections
- **Iconography:** [lucide-react](https://lucide.dev) — `ArrowRight`, `Eye`, `Target`, `Mail`, `Play`, `Users`, `BarChart3`, `PenTool`, `Globe`, `Calendar`, `Trophy`, `Globe2`

---

## Adding or editing a section

1. Create `src/components/MySection.tsx` exporting a default React component.
2. Wrap content in `<section id="my-section" className="py-24 px-6">…</section>` so the in-page nav can target it.
3. Import and place it in `src/App.tsx`.
4. Add a label to `navItems` in `src/components/Header.tsx` — the nav lowercases and replaces spaces with `-` to match the section `id`.

---

## Deployment

Production hosting is **Cloudflare Pages**, project name `trending-communications`.

### First-time setup on a new machine

```bash
npx wrangler login          # opens a browser to authorize wrangler
cp .env.example .env        # then fill in CLOUDFLARE_ACCOUNT_ID if needed
```

`CLOUDFLARE_ACCOUNT_ID` only needs a value if your wrangler session has access to multiple accounts — otherwise wrangler picks the only available one. `.env` is gitignored, so the value stays per-machine.

### Manual deploy

```bash
npm run deploy
```

This builds the production bundle and runs `wrangler pages deploy`, auto-sourcing `.env` so any account/config you've put there is applied. No personal account info is committed to the repo.

### Auto-deploy on push (optional)

Cloudflare Pages can build directly from this GitHub repo:

1. Cloudflare dashboard → **Workers & Pages** → **trending-communications** → **Settings** → **Builds & deployments**.
2. **Connect to Git**, pick `bahyali/trending-communications-landing`.
3. Build command: `npm run build`. Build output: `dist`. Production branch: `main`.

After connecting, every push to `main` triggers a production deploy and PRs get preview URLs.

---

## Repository

Source: [github.com/bahyali/trending-communications-landing](https://github.com/bahyali/trending-communications-landing)
