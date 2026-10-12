# mgmayaguari.github.io

Personal portfolio for Michael Mayaguari. React + TypeScript + Tailwind, built with Vite.

## Current state

This is the interim version of the site: a single-page React app with four sections
(Hero, Projects, Experience, About/Contact). Content is sourced from the resume and kept
current as roles change. It's intentionally a holding pattern, not the final design — see
the roadmap below for where it's going.

## Structure

```
/
├── index.html
├── package.json
└── src/
    ├── App.tsx              Fixed nav header, mobile menu, section order
    ├── main.tsx             Entry point
    ├── index.css            Tailwind theme: fonts, colors
    ├── types.ts             Shared TypeScript interfaces
    └── components/
        ├── Hero.tsx         Name, summary, education, core skill tiles, principles
        ├── Projects.tsx     Skills strip + flagship project cards
        ├── Experience.tsx   Work history, earlier roles, trade experience
        ├── About.tsx        Travel paragraph, map, contact links, copyright
        └── Logo.tsx         Monogram SVG
```

## Local setup

```bash
git clone https://github.com/mgmayaguari/mgmayaguari.github.io.git
cd mgmayaguari.github.io
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs to /dist
```

## Design tokens

- **Palette:** charcoal background (`#0B0C10`), onyx panels (`#1F2833`), gold accent (`#C5A059`).
- **Type:** Inter for body and UI text, Space Grotesk for headings. No third typeface —
  code or data display, if any, uses the system monospace stack.

These are locked in for now; the next redesign (below) keeps them rather than
reinventing the look.

## Roadmap: moving to a static, content-first site

The React version above is a stopgap. The plan is to rebuild as a static site
(Astro or Eleventy, or hand-written HTML) built around written case studies instead of
interactive demos. Principles for the rebuild:

1. **Static HTML with real content in the source.** No client-side-only rendering;
   content must be visible with JavaScript disabled.
2. **A body of work, not a gallery.** Three good case studies beat twenty repo links.
3. **Depth, not duplication.** Anyone here already has the resume — the site should add
   to it, not restate it.
4. **Timeboxed.** One weekend for v1, then one case study or post a month. This can't
   eat into flagship project time.

### Planned structure

```
/                         Home — positioning, 3 work cards, short about, contact
/work/                    Index of case studies
/work/inventory           Case study: retail inventory systems (Ecuador)
/work/planning-agent      Case study: applied-ai-system-project
/work/portfolio-copilot   Case study: flagship project
/writing/                 Technical posts
/about                    The full story
/es/                      Spanish version (phase 3)
```

### Case study format

Every case study follows the same five sections: **the situation**, **the constraint**,
**what I built**, **what broke**, **where it is now**. "What broke" is never skipped —
it's the most useful part of the page.

Planned order: retail inventory systems first (the strongest story), then the planning
agent, then portfolio-copilot (written as it's built), then Kawsay Urcu once it ships.

### Technical requirements for the rebuild

- Static HTML, content present without JS
- Custom domain (michaelmayaguari.com)
- Open Graph / Twitter card tags on every page
- Mobile-first, readable at 375px
- Fast: no framework bloat, one font family beyond the system stack, sub-1s load target
- Accessible: real heading hierarchy, alt text, 4.5:1 contrast minimum
- Plain-text email contact, no form

### Explicitly out of scope

Skill-bar percentage ratings, "passionate about" language, carousels/parallax/typing
animations, a wall of every repo, a PDF resume as the main content, decorative
telemetry or status readouts, and stock photos of code.

### Build sequence

- **Phase 1:** Convert to static. Home, About, and the inventory case study. Buy the
  domain. Ship it.
- **Ongoing:** one case study or post per month, roughly 30–90 minutes a week.
- **Phase 2:** portfolio-copilot case study, all writing posts live, then put the
  portfolio link back on the resume.
- **Phase 3:** Spanish version (`/es`) of home, about, and one case study, with
  hreflang tags.

Until the rebuild ships, this React version stays live and gets content updates only —
no new interactive features.
