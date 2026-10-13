# mgmayaguari.github.io

My personal portfolio. React, TypeScript, and Tailwind, built with Vite.

## Current state

A single-page React app with four sections: Hero, Projects, Experience, About/Contact.
Content is pulled from my resume and kept in sync as roles change. This is a holding
pattern while I rebuild the site properly — see the roadmap below.

## Structure

```
/
├── index.html
├── package.json
└── src/
    ├── App.tsx              Nav header, mobile menu, section order
    ├── main.tsx             Entry point
    ├── index.css            Tailwind theme: fonts, colors
    ├── types.ts             Shared TypeScript interfaces
    └── components/
        ├── Hero.tsx         Name, summary, education, core skills, principles
        ├── Projects.tsx     Skills strip + flagship project cards
        ├── Experience.tsx   Work history, earlier roles, trade experience
        ├── About.tsx        Travel, map, contact links, copyright
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

Charcoal background (`#0B0C10`), onyx panels (`#1F2833`), gold accent (`#C5A059`).
Inter for body and UI, Space Grotesk for headings. No third typeface — if a future
version needs one for code or data, it's the system monospace stack.

These carry over into the rebuild unchanged.

## Roadmap

The React version is a stopgap. Next is a static site — Astro, Eleventy, or
hand-written HTML — organized around a few real case studies instead of interactive
demos.

**Structure**

```
/                         Home: positioning, three work cards, short about, contact
/work/                    Case study index
/work/inventory           Retail inventory systems (Ecuador)
/work/planning-agent      applied-ai-system-project
/work/portfolio-copilot   Flagship project
/writing/                 Technical posts
/about                    Full story
/es/                      Spanish version
```

**Case studies** follow one format: situation, constraint, what I built, what broke,
where it is now. "What broke" stays in every time — it's the part worth reading.
Order: inventory systems first, then the planning agent, then portfolio-copilot
(written alongside the build), then Kawsay Urcu once it ships.

**Constraints for the rebuild:** static HTML, content present without JS, a custom
domain, Open Graph tags, mobile-first at 375px, one font family, real heading
hierarchy and alt text, plain-text email instead of a form. No skill-bar percentages,
no decorative status readouts, no carousels or scroll animation, no repo wall, no PDF
resume standing in for the site.

**Sequence:** static conversion with home, about, and the inventory case study first;
then one case study or post a month; portfolio-copilot and the writing once those
exist; Spanish version last.

Until that ships, this React version only gets content updates — no new interactive
features.
