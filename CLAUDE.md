# Project Brief: Nest Cafe Website Rebuild

## Context

This is a rebuild of a real small business ("Nest Cafe") marketing site. A friend
previously built a design demo as static, hand-coded HTML files (single file per page,
all CSS inline). That demo lives in `reference-only/` at the project root.

**`reference-only/` must never be modified, under any circumstances.** It splits into two
very different kinds of source material:

- **Visual design** (palette, type pairing, layout, object motifs): mood-reference only.
  The rebuild should feel similar in spirit but not identical — no CSS or markup should
  be copied from `reference-only/`.
- **Business content** (founders' names, past event details, recipe names/descriptions/
  prices, email, Instagram handle, city, footer tagline): this is **real information about
  the actual business**, not placeholder copy. It should be transcribed accurately into
  the new data files and markdown, not replaced with invented example text.

`reference-only/` is not tracked in git and will not be pushed or deployed — it's a local
mood board + content source, not a page that ships.

### Real business facts (source of truth, see `reference-only/` for full copy)

- **Founders:** Sammy & Ananya. Based in Houston, TX. Founded 2026.
- **Email:** nestcafehtx@gmail.com
- **Instagram:** @nestcafehtx (https://instagram.com/nestcafehtx)
- **Footer tagline:** "A home cafe by Sammy & Ananya. A space to feel a little more connected."
- **Past pop-ups (real, already happened — these are the only 3 events so far):**
  1. **The First Nest** — 2026-03-01 — The Nest on Dryden — everyday nutrition & wellbeing
     (`reference-only/event-1.html`)
  2. **Exercising Your Right** — 2026-04-02 — Rice Academic Quad — Pilates class w/ solidcore
     + nonpartisan civic engagement resources (`reference-only/event-2.html`)
  3. **You Are Not Alone** — 2026-04-24 — Outside Brochstein — mental health & stress guide,
     sold out (`reference-only/event-3.html`)
- **Recipes:** 11 real items across cookies/bars, muffins/cupcakes, and breads/savory, each
  with a real name, description, and price — see `reference-only/recipes.html`.

## Goals

1. A real, deployable static site (5 pages) for a home-cafe/community business.
2. All editable text and images pulled from data files (Markdown front matter / JSON),
   never hardcoded inline in templates — a non-technical business owner will eventually
   edit content directly.
3. Ship now with plain-file editing; a form-based CMS (Decap CMS) may be layered on
   top later without restructuring content. Don't build anything that would make that
   migration harder.

## Tech stack

- **Static site generator:** Eleventy (11ty) — Node-based, outputs plain HTML/CSS/JS.
- **Hosting:** Netlify, connected to a GitHub repo, auto-deploy on push to main.
- **Forms:** Netlify Forms for the contact form (no backend/JS required — just
  `data-netlify="true"` on the `<form>`).
- **Future (not yet implemented):** Decap CMS for form-based content editing with an
  image upload widget, added as an `/admin` folder pointed at the same data files below.

## Site structure (5 pages)

1. **Home** — trimmed down. Welcome widget + Founding Story widget (own fields) +
   a "Pop Ups" gallery showing the 3 most recent events, sourced automatically from the
   events collection sorted by `date` (not hand-duplicated, no manual "featured" flag to
   remember to set).
2. **About** — Letter widget (title + long-form letter body + link to Contact) and the
   Social Media widget (moved here from Home per latest direction).
3. **Events** — one collection, one file per event, each auto-generates its own subpage.
   Plus a "Connect" widget (description + button to a contact-list signup).
4. **Recipes** — title/blurb widget, then a gallery of recipe cards. Clicking a card
   opens a **modal overlay on the same page** (not a subpage/route) showing title,
   image, description, price. Data source is a flat JSON array, not individual files,
   since there are no per-recipe pages.
5. **Contact** — info widget (email, instagram, city — pulled from shared site data)
   plus a Netlify-powered contact form.

## Folder structure (initial)

```
nest-cafe/
  package.json
  reference-only/              <- demo HTML, visual + content reference only, gitignored, never edited
  src/
    _data/
      site.json                <- global: nav labels, footer text, email, instagram, city
      recipes.json             <- array of recipe items (title, image, description, price)
    events/
      the-first-nest.md         <- 2026-03-01, everyday nutrition & wellbeing
      exercising-your-right.md  <- 2026-04-02, Pilates + civic engagement (w/ solidcore)
      you-are-not-alone.md      <- 2026-04-24, mental health & stress, sold out
    _includes/
      layout.njk                <- shared <head>, nav, footer
      event.njk                  <- template for individual event subpages
    css/
    js/
      recipes-modal.js           <- click-to-open modal behavior for recipe cards
      nav.js                     <- mobile nav toggle
    images/
      events/
      recipes/
    index.md                    <- Home
    about.md
    events.md                   <- Events listing page (pulls the collection) + Connect widget
    recipes.md                  <- Recipes page (pulls recipes.json)
    contact.md
```

## Content model / front matter shapes

**`index.md` (Home) front matter — real copy from `reference-only/index.html`:**

```yaml
welcomeMessage: "A home cafe where good food gathers us and good conversation gives it
  purpose. Every pop-up pairs something we baked by hand with a topic worth talking about."
welcomeImage: /images/welcome.jpg
welcomeButtonText: "See our pop-ups"
welcomeButtonLink: /events/
foundingTitle: "Founded by two friends in 2026"
foundingImage: /images/founding.jpg
foundingDescription: "Nest Café is more than a home café. In a world saturated with
  information, we wanted to create a third space where people can find a starting point
  for meaningful conversation. Through food and shared experiences, we hope to bring
  people together in a space where curiosity grows, perspectives are exchanged, and
  genuine connections are built around the issues shaping our communities."
foundingButtonText: "Learn More"
foundingButtonLink: /about/
```

**`about.md` front matter:**

```yaml
letterTitle: "Hey there!"
letterButtonText: "Contact us"
letterButtonLink: /contact/
```

Letter body text = the markdown body of the file itself — real copy is the "Hi! We're
Sammy & Ananya..." letter in `reference-only/about.html` (the Venn-diagram origin story:
what we love / what we're good at / what our community needs).
Social handle/link pulled from `_data/site.json`, not duplicated here.

**`events/<slug>.md` front matter (one file per event, real example below):**

```yaml
title: "The First Nest"
date: 2026-03-01
image: /images/events/the-first-nest.jpg
excerpt: "how everyday ingredients quietly care for you"
```

No `featured` flag — Home always shows the 3 most recent events by `date`, computed at
build time.

Body = full article text for that event's own subpage, transcribed from the matching
`reference-only/event-N.html` (location, topic, and the event's unique write-up — e.g.
event 1's nutrition breakdown, event 2's civic-resource links, event 3's stress guide —
all just live as regular markdown/HTML in the body, no extra frontmatter fields needed
for them).

**`events.md` front matter (Connect widget only — listing itself comes from the collection):**

```yaml
connectDescription: "..."
connectButtonText: "Join our list"
connectFormLink: "..."
```

The Connect widget is new — it has no equivalent in `reference-only/` (the original site
has no mailing-list signup), so this copy doesn't have a real-content source yet. Use
reasonable placeholder text and flag it for the business to confirm/replace.

**`_data/recipes.json`:**

```json
[
  {
    "title": "The Sea Salt Situation",
    "image": "/images/recipes/sea-salt-cookies.jpg",
    "description": "Crackly, brown-buttered, and finished with flaky sea salt.",
    "price": "$4.00"
  }
]
```

Real lineup is 11 items (cookies/bars, muffins/cupcakes, breads/savory) — see
`reference-only/recipes.html` for the full set of names, descriptions, and prices to
transcribe. Deliberately kept as one flat array with no `category` field (a simplification
from the reference design's three grouped sections) — the recipes page renders a single
flat gallery.

**`_data/site.json`:**

```json
{
  "email": "nestcafehtx@gmail.com",
  "instagramHandle": "@nestcafehtx",
  "instagramLink": "https://instagram.com/nestcafehtx",
  "city": "Houston, TX",
  "founders": "Sammy & Ananya",
  "footerTagline": "A home cafe by Sammy & Ananya. A space to feel a little more connected.",
  "nav": [
    { "label": "About", "url": "/about/" },
    { "label": "Events", "url": "/events/" },
    { "label": "Recipes", "url": "/recipes/" },
    { "label": "Contact", "url": "/contact/" }
  ]
}
```

**`contact.md`:** body/front matter for page copy; email/instagram/city pulled from
`_data/site.json`; the form itself is a plain HTML `<form data-netlify="true" name="contact">`
with standard Netlify hidden-field setup, no JS required.

## Design direction (inspiration only, not to be copied verbatim)

The `reference-only/` demo uses: an airy, editorial feel; a soft oat/cream base with black text;
a periwinkle-blue accent color; a serif display font paired with a script accent font and
a grotesk sans body font; hand-drawn-style annotations; and content presented inside
"object" motifs (e.g., a receipt-shaped card, an ID-badge shape). Use this as a mood
reference for a **distinct but kindred** visual identity — different specific palette/type
pairing and layout details, not a reskin of the same design.

## Current state

- Nothing scaffolded yet: no `package.json`, no `src/`, no git repo.
- Only `reference-only/`, `README.md`, and this file exist.
- Priority right now is getting the site running **locally** (`npx @11ty/eleventy --serve`).
  GitHub/Netlify setup comes later, once the local build works — no rush to init git.

## Immediate next steps for Claude Code

1. `npm init` + install Eleventy; create a minimal `.eleventy.js` config (input: `src`,
   output: `_site`, pass through `css/`, `js/`, `images/` as static assets).
2. Build `_includes/layout.njk` with nav (from `site.json`), footer, and a fresh CSS design
   system (custom properties for color/type) inspired by, but distinct from, the reference.
3. Build the 5 page templates and the `events` collection + `event.njk` subpage template.
4. Populate `_data/site.json` and `_data/recipes.json` with the **real** content from
   `reference-only/` (see "Real business facts" above and the shapes below), and the 3 real
   event files (`the-first-nest.md`, `exercising-your-right.md`, `you-are-not-alone.md`).
5. Implement the recipe modal (`js/recipes-modal.js`) and mobile nav toggle (`js/nav.js`).
6. Add the Netlify contact form (can be built now; won't actually submit anywhere until a
   Netlify site is connected later).
7. Run `npx @11ty/eleventy --serve` and confirm all 5 pages + event subpages render and
   link correctly. Git init / first commit (excluding `reference-only/` and `node_modules/`)
   and GitHub/Netlify hookup are separate, later steps — not blocking local dev.
