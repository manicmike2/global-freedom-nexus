## Context

Every route already uses `react-helmet-async` via `PageSEO` (or `BlogArticleLayout` / `DestinationPageTemplate`) and sets its own `<title>` and `<meta name="description">`. A quick audit shows the titles and descriptions are in fact unique per route.

What you're likely seeing is the static fallback in `index.html` — it ships one title/description that every page briefly shows before Helmet mounts, and that's also what appears in "View page source" because Helmet only runs client-side. Social-preview crawlers (LinkedIn, Slack) see only that static head.

So the real work is twofold: (1) confirm uniqueness and tighten descriptions to the 150–160 char target you asked for, and (2) make the static `index.html` head represent the homepage properly (and fix the "CBI" abbreviation which violates the brand rule of always writing "Citizenship by Investment").

## Scope — routes to cover

Static / hub / utility (10):
`/`, `/about`, `/real-estate`, `/destinations`, `/for-attorneys`, `/insights`, `/contact`, `/unsubscribe` (noindex, leave as is), `/citizenship-by-investment`, `/golden-visa`, plus `NotFound` (noindex).

CBI destinations (7): Antigua & Barbuda, Saint Kitts & Nevis, Grenada, Dominica, Saint Lucia, São Tomé & Príncipe, Sierra Leone, Turkey.

Golden Visa destinations (8): Portugal, Greece, Latvia, Hungary, Bulgaria, Malta, UAE, Panama.

Resources (5): `/resources/blog`, `/resources/faq`, `best-citizenship-by-investment-programs-2026`, `antigua-vs-grenada-cbi`, `citizenship-by-investment-us-citizens`, `golden-visa-vs-citizenship-by-investment`.

Dynamic insights (15 article slugs in `src/lib/articles.ts`) — already render through `Article.tsx` with per-article title and excerpt. Confirm each `excerpt` is 150–160 chars; trim/expand any that aren't.

## What changes

1. `**index.html**` — rewrite the static title and description so they represent the homepage cleanly and follow the brand rule:
  - title: `Global Freedom Capital | Citizenship by Investment & Golden Visa Advisory` (keep under 60 chars where possible; this one is ~73 — acceptable for a homepage brand title, but I'll shorten to fit if you prefer).
  - description: a 150–160 char homepage summary, matching the live homepage description.
  - Update `og:title`, `og:description`, `twitter:title`, `twitter:description` to match.
2. **All `PageSEO` / template SEO fields** — for every route above:
  - Verify the `title` is unique across the site (it is today — I'll keep them and only adjust wording where two are too similar).
  - Rewrite the `description` to land in the 150–160 char window. Several current ones are 130–150 chars; a handful are slightly over. Each will be redrafted to be page-specific (mentioning the program, jurisdiction, key figure, and audience) and unique.
  - Apply brand rules: "Citizenship by Investment" (not "CBI") in user-facing copy where it fits the length budget; keep "GFC" only as a brand suffix.
3. **Destination pages** — edit `seoTitle` / `seoDescription` constants at the top of each `src/pages/destinations/*.tsx` file (consumed by `DestinationPageTemplate` → `PageSEO`).
4. **Resource articles** — edit the `seoTitle` / `seoDescription` props passed into `BlogArticleLayout` in each `src/pages/resources/*.tsx` file.
5. **Dynamic insights** — in `src/lib/articles.ts`, adjust any `excerpt` that falls outside 150–160 chars so the rendered `<meta name="description">` hits the target. No `Article.tsx` changes needed.

## Out of scope

- No layout, copy, or visual changes to page bodies.
- No change to canonical URLs, JSON-LD, or OG images.
- `Unsubscribe` and `NotFound` stay `noindex`; their meta is informational only.

## Verification

# After edits I'll grep all `title=` / `description=` props plus the destination `seoTitle` / `seoDescription` constants, dedupe-check them, and confirm every description's character count is in the 150–160 range.  
  
  
  
ALSO

"This site uses React and currently has only one index.html with the same title and meta description on every page. I need unique title tags and meta descriptions for each page/route, rendered so they appear in the page source before JavaScript loads.

Please implement React Helmet Async to add unique `<title>` and `<meta name='description'>` tags to every page component based on that page's content. Each page should have a distinct, keyword-relevant title and description."