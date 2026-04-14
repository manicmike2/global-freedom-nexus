

## Link Fixes, URL Canonicalization, Blog Fixes & 3 New Program Pages

### Part 1 — Fix All Broken `/golden-visas` Links

The old `/golden-visas` URL is used in 10 files. While there is a redirect route (`/golden-visas` → `/golden-visa`), all internal links should point directly to `/golden-visa` for SEO and performance.

**Files to update** (replace `/golden-visas` with `/golden-visa`):
- `src/pages/Index.tsx` — line 41
- `src/pages/Destinations.tsx` — line 83
- `src/pages/About.tsx` — line 85
- `src/pages/Contact.tsx` — line 148
- `src/pages/RealEstate.tsx` — lines 54, 70, 86, 102, 147
- `src/pages/ForAttorneys.tsx` — line 192
- `src/pages/CitizenshipByInvestment.tsx` — lines 106, 193
- `src/components/Footer.tsx` — line 53

### Part 2 — URL Standardization

Current URLs already follow the `/citizenship-by-investment/[slug]` pattern correctly. The user's prompt references some slug variants (e.g. `antigua-and-barbuda`, `st-kitts-and-nevis`) that differ from the existing slugs. I will keep the existing slugs (`antigua-barbuda`, `saint-kitts-nevis`) since they are already indexed and add redirects from the alternate slugs mentioned.

**New redirect routes in `App.tsx`:**
- `/citizenship-by-investment/antigua-and-barbuda` → `/citizenship-by-investment/antigua-barbuda`
- `/citizenship-by-investment/st-kitts-and-nevis` → `/citizenship-by-investment/saint-kitts-nevis`

### Part 3 — Blog Links Audit

Blog links are already correct — the `BlogIndex` cards use `/resources/blog/${slug}` and all 4 article routes exist. No fixes needed.

### Part 4 — Three New Program Pages

Create 3 new destination pages using the existing `DestinationPageTemplate` component:

**Page 1: `/citizenship-by-investment/saint-lucia`**
Already exists but needs content update with the user's provided copy (stats, investment options, benefits). Will replace the placeholder content.

**Page 2: `/citizenship-by-investment/sao-tome-and-principe`**
- New file: `src/pages/destinations/SaoTomePrincipe.tsx`
- Uses `DestinationPageTemplate` with the provided content
- Includes a "Licensed Agent" callout in the hero description
- Uses `dest-caribbean.jpg` as placeholder image

**Page 3: `/citizenship-by-investment/sierra-leone`**
- New file: `src/pages/destinations/SierraLeone.tsx`
- Uses `DestinationPageTemplate` with "Go For Gold" program content
- Includes advisory note callout in hero description
- Uses `dest-caribbean.jpg` as placeholder image

**Supporting changes:**
- `src/App.tsx` — add 2 new routes + 2 alternate-slug redirects
- `src/lib/destinations.ts` — add São Tomé and Sierra Leone entries
- `src/pages/CBIHub.tsx` — add both new programs to the program grid
- `src/pages/Destinations.tsx` — add both to `allDestinations` array
- `public/sitemap.xml` — add 2 new URLs
- Update Saint Lucia page content with user's detailed copy

### Technical Details

- All `/golden-visas` references (10 files) → `/golden-visa`
- 2 new page components using existing `DestinationPageTemplate`
- 1 existing page (Saint Lucia) updated with real content
- 2 new routes + 2 redirect routes in `App.tsx`
- Sitemap updated with new URLs
- No design, layout, or backend changes

