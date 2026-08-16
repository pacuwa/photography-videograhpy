# Grain & Glass

A marketing site for a photography and videography studio: a landing page with hero, services,
a filterable portfolio grid, studio bio, testimonials, and a contact form, plus a detail page
for each portfolio project.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router, file-based routing)
- Vite 7
- Tailwind CSS 4
- Netlify Forms for the contact form
- TypeScript (strict mode)

## Running locally

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:3000`.

To test with full Netlify feature emulation (including forms), use the Netlify CLI instead:

```bash
netlify dev
```

## Building

```bash
npm run build
```

## Project structure

See [AGENTS.md](./AGENTS.md) for a detailed breakdown of the codebase, routing, and the
contact form setup.
