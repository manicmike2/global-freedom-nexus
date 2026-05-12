## Fix Backlinks + Build Missing Destination Pages + Resolve Indexing Issues

### Decision recap
- **Malta** → reposition as **Permanent Residency** (not citizenship). Build `/golden-visa/malta` and update memory: Malta now offered as residency only, citizenship route remains excluded.
- **Turkey** → build `/citizenship-by-investment/turkey`
- **UAE** → build `/golden-visa/uae`
- **Panama** → build `/golden-visa/panama` (currently linked from Destinations + Globe but has no page = soft 404)

### Root cause of Google issues
1. **Soft 404 / "Page with redirect" / "Discovered – not indexed"** → Turkey/UAE/Panama/Malta are linked from Destinations grid, GlobeScene, llms files, sitemap-adjacent content but resolve to hub pages with non-existent `#anchor` fragments. Googlebot hits a page that doesn't match the link intent → soft 404.
2. **"Page with redirect"** → legacy paths (`/golden-visas`, `/antigua-barbuda`, `/citizenship-by-investment/antigua-and-barbuda`, `/citizenship-by-investment/st-kitts-and-nevis`) use React Router `<Navigate replace>` — client-side, served as 200 of the redirector. Googlebot sees this as soft 404, not a 301.
3. **"Crawled — currently not indexed"** → low-value/thin pages and duplicate hub-anchor URLs.
4. **"Not found (404)"** → mixed-case or stale external links hitting routes not in router.
5. **No 404 status code** → SPA always returns 200; `NotFound` page is `noindex` but Search Console flags soft 404. Mitigation: ensure clear noindex + minimal links from internal pages, plus convert known stale URLs into real 301s in `vercel.json`.

### Files to create

**4 new destination pages** using existing `DestinationPageTemplate` (same pattern as `Grenada.tsx` — ~55 lines each):
- `src/pages/destinations/Malta.tsx` (type: `golden-visa`, Malta Permanent Residency Programme — MPRP, from €150K gov contribution + property)
- `src/pages/destinations/Turkey.tsx` (type: `cbi`, from $400K real-estate route, 3–6 months)
- `src/pages/destinations/Uae.tsx` (type: `golden-visa`, 10-year renewable, from $550K real estate / public investment)
- `src/pages/destinations/Panama.tsx` (type: `golden-visa`, Qualified Investor + Friendly Nations, from $300K)

Each page includes: SEO title/description (≤60/≤160 chars, niche keywords), canonical, BreadcrumbList + Service JSON-LD, hero, 4 highlights, 2–3 investment options, 4-step timeline, eligibility, 4 FAQs, CTA. Reuses existing `dest-malta.jpg`, `dest-turkey.jpg`, `dest-uae.jpg`, `dest-panama.jpg` assets already imported.

### Files to edit

**`src/App.tsx`** — Register the 4 new routes:
```
/golden-visa/malta            → Malta
/citizenship-by-investment/turkey → Turkey
/golden-visa/uae              → Uae
/golden-visa/panama           → Panama
```

**`src/lib/destinations.ts`** — Replace hub-anchor entries with real page paths:
```
"Malta":  { page: "/golden-visa/malta" }
"Turkey": { page: "/citizenship-by-investment/turkey" }
"UAE":    { page: "/golden-visa/uae" }
"Panama": { page: "/golden-visa/panama" }
```

**`src/pages/Destinations.tsx`** — Move Malta from `type: "Citizenship"` to `type: "Residency"`, region stays "Europe", update copy from "EU citizenship by investment" → "Malta Permanent Residency Programme (MPRP)".

**`src/pages/CBIHub.tsx`** — Add Turkey card (Caribbean+Global section).

**`src/pages/GoldenVisaHub.tsx`** — Add Malta, UAE, Panama cards.

**`src/pages/ForAttorneys.tsx`** — Move Malta from CBI list to Golden Visa list.

**`public/sitemap.xml`** — Add 4 new `<url>` entries; keep canonical hub URLs only (no anchored URLs).

**`public/llms.txt` + `public/llms-full.txt`** — Update Malta description (residency, not citizenship-excluded), add Turkey/UAE/Panama links and details. Keep "Malta CBI excluded" note but allow "Malta MPRP residency".

**`vercel.json`** — Convert client-side `<Navigate>` redirects into proper server 301s so Googlebot sees real redirects (fixes "Page with redirect" + soft 404):
```json
"redirects": [
  { non-www → www (existing) },
  { "source": "/golden-visas", "destination": "/golden-visa", "permanent": true },
  { "source": "/golden-visas/:path*", "destination": "/golden-visa/:path*", "permanent": true },
  { "source": "/antigua-barbuda", "destination": "/citizenship-by-investment/antigua-barbuda", "permanent": true },
  { "source": "/citizenship-by-investment/antigua-and-barbuda", "destination": "/citizenship-by-investment/antigua-barbuda", "permanent": true },
  { "source": "/citizenship-by-investment/st-kitts-and-nevis", "destination": "/citizenship-by-investment/saint-kitts-nevis", "permanent": true }
]
```
Keep the React Router `<Navigate>` fallbacks too — defense in depth for non-Vercel hosting.

**Memory update** — Edit `mem://index.md` Core: change "Malta is intentionally EXCLUDED from all offerings" → "Malta offered ONLY as Permanent Residency (MPRP). Malta citizenship/CBI remains excluded." Update `mem://features/service-scope` accordingly.

### Out of scope
- No design/layout changes
- No changes to existing destination pages other than Malta/Turkey/UAE/Panama wiring
- No backend or Supabase changes
- No content rewrites of existing pages beyond the Malta repositioning
- No changes to the Malta blog article (`malta-citizenship-naturalization`) — left as informational; will not link to it from offerings

### Result
- 4 new indexable pages with proper canonicals, JSON-LD, internal links
- Zero broken/dead destination links across the site
- Legacy URLs return real 301s (resolves "Page with redirect")
- Sitemap matches actual canonical pages (resolves "Alternate page with proper canonical tag")
- Hub-anchor soft 404s eliminated
