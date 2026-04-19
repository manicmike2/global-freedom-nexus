

## Fix Google Search Console Indexing Issues

### Root cause
Google reports 404 / "not indexed" issues primarily because **canonical URLs are inconsistent across the site**. The sitemap and ~5 pages use `https://www.globalfreedomcapital.com/...`, while **8 pages declare canonicals with the bare (non-www) domain** `https://globalfreedomcapital.com/...`. When the canonical points to a domain variant Google isn't actively serving (or that 301-redirects elsewhere), Google flags the page as "Alternate page with proper canonical tag" or "Duplicate, Google chose different canonical" — the page disappears from the index.

There are also two **orphan duplicate pages** (`CitizenshipByInvestment.tsx`, `GoldenVisas.tsx`) that aren't even routed in `App.tsx` but declare canonical URLs that conflict with the live hub pages — confusing if they were ever indexed.

### Changes

**1. Standardize all canonicals to `https://www.globalfreedomcapital.com` (matches the sitemap)**
Update the `canonical` prop in 8 files:
- `src/pages/Contact.tsx`
- `src/pages/Insights.tsx`
- `src/pages/RealEstate.tsx`
- `src/pages/ForAttorneys.tsx`
- `src/pages/Article.tsx`
- `src/pages/Unsubscribe.tsx` → also add `noindex` (utility page)
- `src/pages/CitizenshipByInvestment.tsx` (orphan — see #3)
- `src/pages/GoldenVisas.tsx` (orphan — see #3)

**2. Strengthen `PageSEO.tsx`**
- Add explicit `<meta name="robots" content="index, follow" />` by default, with an optional `noindex` prop for utility pages (Unsubscribe).
- Add `og:url` (uses canonical) and `og:image` defaults so social previews and Google rich results work.

**3. Delete the two orphan duplicate page files**
`CitizenshipByInvestment.tsx` and `GoldenVisas.tsx` are not registered in `App.tsx` (the live versions are `CBIHub.tsx` and `GoldenVisaHub.tsx`). Removing them eliminates duplicate canonical declarations and stale code.

**4. Apply `noindex` to utility pages**
- `Unsubscribe` — should never be indexed.
- `NotFound` — add a `noindex` so any stray 404 page Google crawls is properly marked.

**5. Sitemap audit**
Sitemap currently lists `/golden-visa/portugal`, etc. Confirm each URL in `public/sitemap.xml` matches a real route in `App.tsx`. (Spot check passed; will verify all entries during implementation and remove any that 404.)

**6. Remove the irrelevant `vercel.json`**
Lovable hosting ignores `vercel.json` and has built-in SPA fallback, so the file is dead weight. Removing avoids confusion. (Optional — leaving it is also harmless. Will remove unless you object.)

### Out of scope
- No design or layout changes
- No backend / Supabase changes
- No new pages

### Files modified
- `src/components/PageSEO.tsx` (add robots + og:url + og:image)
- 6 page files (canonical fix to www)
- `src/pages/Unsubscribe.tsx` + `src/pages/NotFound.tsx` (noindex)
- Delete: `src/pages/CitizenshipByInvestment.tsx`, `src/pages/GoldenVisas.tsx`, `vercel.json`
- `public/sitemap.xml` (verify only)

