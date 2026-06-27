# WICKII Blog — CLAUDE.md

## Project Overview

Personal blog for **WICKII** (维奇), an RF engineer. Built with **Astro 5** (static output), deployed to **GitHub Pages** via GitHub Actions on push to `master`.

Live site: https://wickii.github.io

## Tech Stack

- **Framework**: Astro 5 (`astro.config.mjs`, output: `"static"`)
- **Language**: TypeScript (`tsconfig.json`)
- **Styling**: Vanilla CSS (`src/styles/global.css`) — no CSS framework
- **Comments**: Gitalk (GitHub Issues-based, configured in `src/site.config.ts`)
- **RSS**: `/rss.xml` via `src/pages/rss.xml.ts`
- **PWA**: Service worker at `public/sw.js`, manifest at `public/pwa/manifest.json`

## Commands

```bash
npm run dev       # Dev server (astro dev)
npm run build     # Production build → dist/
npm run preview   # Preview built site
```

## Project Structure

```
src/
  components/        # Astro components (Hero, Sidebar, PostCard, Comments, Resume, …)
  content/
    blog/            # Markdown posts — filename format: YYYY-M-D-slug.md
    config.ts        # Zod schema for blog collection
  layouts/
    BaseLayout.astro # Root HTML shell (SEO, OG, PWA meta)
  pages/
    index.astro
    about.astro
    tags.astro
    [year]/[month]/[day]/[slug].astro   # Dynamic post route
    rss.xml.ts
    404.astro
  site.config.ts     # Central config: title, author, social links, Gitalk credentials
  styles/
    global.css       # Design tokens (CSS vars), all site-wide styles
  utils/
    blog.ts          # getPostPath, getSortedPosts, getAllTags, slugifyTag
public/
  img/               # Static images (avatars, hero images)
  pwa/               # PWA icons + manifest
  sw.js              # Service worker
```

## Blog Post Conventions

- **Filename**: `YYYY-M-D-slug.md` under `src/content/blog/`
- **URL**: `/YYYY/MM/DD/slug/` (zero-padded month/day)
- **Required frontmatter**: `title`, `date`
- **Optional frontmatter**: `subtitle`, `author`, `header-img`, `catalog`, `tags` (string or array)
- Tags are normalized to arrays by the Zod schema
- Posts sorted by `date` descending on index and sidebar

## Design System

Design tokens live in `src/styles/global.css` under `:root`:
- `--bg`: warm off-white `#f4efe8`
- `--accent`: teal `#0f766e`
- `--text`: dark `#1f2933`
- `--shell`: max-width container (`min(1120px, calc(100vw - 2rem))`)
- Font stack: Iowan Old Style / Palatino / Georgia (serif)
- Layout: sticky header with backdrop-filter blur, two-column post layout (article + sidebar)

## Site Config

All site-wide metadata is in `src/site.config.ts` (exported as `siteConfig`). Edit there for: title, description, author, social links, friends list, Gitalk OAuth credentials.

## Deployment

Push to `master` → GitHub Actions (`.github/workflows/`) → Astro build → GitHub Pages. No manual deploy step needed.
