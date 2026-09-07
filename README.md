# Nest Cafe Website — Editing Guide

This site is built from plain text and image files. To make a change, edit the
relevant file, save it, then commit and push to GitHub — the live site rebuilds
automatically within a couple of minutes.

## Where things live

```
src/
  index.md          <- Home page
  about.md          <- About page
  events.md         <- Events listing page
  recipes.md        <- Recipes page
  contact.md        <- Contact page
  events/           <- one file per pop-up event
  _data/
    site.json       <- email, Instagram, city, nav links, footer text
    recipes.json    <- the list of recipes (title, image, description, price)
  images/           <- all photos, organized by page (events/, recipes/, team/)
  css/style.css     <- all visual styling (colors, fonts, spacing, layout)
```

Every page file (`.md`) has two parts:
1. A block at the top between `---` lines called **front matter** — short labeled
   fields like `title:` or `image:`.
2. The rest of the file — the actual page text.

Only edit the text after the `:` on a front matter line, or the plain text/sentences
in the body. Leave anything that looks like code (`<div class="...">`, `{{ }}`, `{% %}`)
alone — that's structure, not content.

## How to make specific changes

**Change a text description**
Open the relevant `.md` file and edit the sentence directly — either a front matter
value (e.g. `welcomeMessage: "..."` in `index.md`) or a paragraph in the body.

**Add or swap an image**
1. Add your image file into the matching folder in `src/images/` (e.g. `events/`
   for an event photo, `recipes/` for a recipe photo).
2. Point to it from the page: update the `image:` field in that page's front
   matter (or in the recipe's entry in `recipes.json`) to `/images/<folder>/<your-file>.jpg`.

**Add a recipe**
Open `src/_data/recipes.json` and copy one existing entry (the part between `{ }`),
paste it as a new entry, and change its `title`, `image`, `description`, and `price`.
Make sure every entry ends with a comma except the last one.

**Change a style** (colors, fonts, spacing)
Open `src/css/style.css`. The top of the file lists the site's colors and fonts as
named values (e.g. `--periwinkle`, `--display`) — changing one of these updates it
everywhere it's used. For a one-off tweak (like making one section's text bigger),
search the file for the relevant class name (shown in the page's `.md` file, e.g.
`class="hero"`) and adjust the values there.

## Before you publish

`reference-only/` is a local folder of design notes and never gets published —
you won't see it on the live site, and it's safe to ignore.

When unsure, make a small change, save, and check the live site after it rebuilds
before making more edits.
