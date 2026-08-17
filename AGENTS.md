# AGENTS.md

Project overview for developers and AI agents working on this codebase.

## Project Overview

Classic Photo Studio is a marketing site for a photography and videography studio: a one-page
landing experience (hero, services, filterable portfolio, studio bio, testimonials, contact
form) plus a detail page per portfolio project. Built with TanStack Start and deployed on
Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 (file-based routing) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes) + CSS custom properties for the color/type system |
| Forms | Netlify Forms (AJAX submission, static skeleton for build-time detection) |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public/
│   ├── __forms.html      # Static, hidden skeleton form so Netlify detects "inquiry" at build time
│   ├── favicon.ico
│   └── placeholder.png
├── src/
│   ├── components/
│   │   ├── Frame.tsx        # Reusable gradient "photo/film still" placeholder tile with grain overlay
│   │   └── ContactForm.tsx  # AJAX contact form wired to Netlify Forms ("inquiry")
│   ├── data/
│   │   └── portfolio.ts     # Portfolio project data (title, category, story, credits, gradient tint)
│   ├── routes/
│   │   ├── __root.tsx        # Root layout: fonts, meta, global styles
│   │   ├── index.tsx         # Landing page: nav, hero, services, work grid, studio, testimonials, contact
│   │   └── work/
│   │       └── $projectId.tsx  # Project detail page (loader looks up the project by id, 404s via notFound())
│   ├── router.tsx     # Router instance from the generated route tree
│   └── styles.css     # Tailwind import, Google Fonts, CSS variables, grain/marquee/reveal animations
├── netlify.toml
├── package.json
├── tsconfig.json      # `@/*` path alias → `src/*`
└── vite.config.ts
```

## Key Concepts

### File-based routing (TanStack Router)

- `src/routes/__root.tsx` — root shell, wraps every page
- `src/routes/index.tsx` — `/`
- `src/routes/work/$projectId.tsx` — `/work/:projectId`, loader reads `src/data/portfolio.ts`
  and throws `notFound()` for unknown ids

### Imagery

There are no photographs in the repo. Portfolio "images" are `Frame` components — CSS
gradients (per-project `tint` in `portfolio.ts`) layered with an SVG-noise overlay to read as
film grain. Swap `Frame` usages for real `<img>`/`<video>` once actual client work is
available; the gradient gives every section correct proportions and hover behavior in the
meantime.

### Contact form (Netlify Forms)

The form name is `inquiry`. `public/__forms.html` is a hidden static form Netlify's build bot
scans to register the form — it is never rendered to users. `src/components/ContactForm.tsx`
submits via `fetch('/__forms.html', ...)` with `application/x-www-form-urlencoded` (not `/`,
since TanStack Start's SSR catch-all would otherwise intercept the POST). Any new field added
to the React form must also be added to the skeleton file or Netlify will reject it.

## Development Commands

```bash
npm run dev      # Start dev server (vite dev --port 3000)
npm run build    # Production build
```

## Conventions

- Components: PascalCase, one per file in `src/components/`
- Import paths use the `@/` alias (`@/data/portfolio`, `@/components/Frame`)
- Styling is Tailwind utility classes; shared design tokens (colors, not spacing) live as CSS
  variables in `styles.css` (`--ground`, `--ink`, `--copper`, `--line`, etc.) so the palette
  stays centralized
- Display headings use `font-display` (Fraunces, serif/italic); body copy uses the default
  Archivo sans stack
