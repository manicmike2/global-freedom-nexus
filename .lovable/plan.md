## SEO/Indexing audit — fixes + likely root causes outside the code

### What's actually in the codebase

I scanned every page. Here's the real state vs. what you asked to remove/fix:

**`noindex` tags (only 2, both correct — do NOT remove):**
- `src/pages/NotFound.tsx` — the 404 page. Removing `noindex` here is harmful: it tells Google to index your 404 as a real page, which directly causes "Soft 404" and "Crawled — not indexed" reports.
- `src/pages/Unsubscribe.tsx` — email unsubscribe page. Must stay `noindex` (PII/utility page, not search-worthy).

Every other route (Home, About, Contact, Destinations, all 14 destination pages, CBI Hub, Golden Visa Hub, all `/insights/*`, For Attorneys, Real Estate, Resources) renders `<meta name="robots" content="index, follow">` via `PageSEO`. Nothing else is blocking indexing at the meta level.

**Canonicals**: every page using `PageSEO` already sets a canonical to `https://www.globalfreedomcapital.com/...`. No duplicate canonical sources found.

### Real issues I'll fix

1. **`index.html` has a stale preview-domain OG image** pointing at `pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/...id-preview-...lovable.app...`. Social crawlers (LinkedIn, Slack, FB — none of which run JS) only see this static head, so every share shows a Lovable preview screenshot instead of your brand image. Replace with `https://www.globalfreedomcapital.com/og-image.jpg` (the file `PageSEO` already references).

2. **`index.html` is missing a static canonical and `<meta name="robots" content="index, follow">`.** JS-executing crawlers (Googlebot) get the Helmet canonical fine, but non-JS crawlers see nothing. Add a sitewide canonical for `/` and a sitewide `robots: index, follow` as a safety net (Helmet overrides per-route).

3. **`<title>` in `index.html` is 86 chars** — over Google's ~60 char display limit. Shorten to ≤60 so home-page SERP snippet doesn't get truncated mid-word.

4. **Twitter handle is `@Lovable`** (template default). Either remove or set to your real handle (will leave as-is unless you give me one).

5. **No `<link rel="preload" as="image">` for the LCP hero**. Add one for the homepage hero asset to improve LCP / Core Web Vitals.

6. **Add `<meta name="theme-color">`** (small WCV/UX nicety, helps Lighthouse SEO score).

### What I will NOT change (and why)

- The two legitimate `noindex` pages above.
- Canonicals across page components — they're already correct.
- The SPA rewrite — already correct (`vercel.json` falls back to `index.html` for non-asset routes).
- Route components / content / design.
- `react-helmet-async` — staying on the existing per-route head system.

### Likely root causes OUTSIDE your codebase (this is probably 80% of your indexing pain)

Your code is genuinely sound. The real culprits for "redirects / crawled not indexed / soft 404 / discovered not indexed" reports on a Vite SPA hosted via Vercel + Cloudflare + Supabase are almost always infrastructure-side:

**A. Cloudflare in front of Vercel (most likely culprit)**
   - **"Bot Fight Mode" / "Super Bot Fight Mode"** challenges Googlebot with a JS challenge → Googlebot sees a Cloudflare interstitial, not your HTML → indexes nothing, reports "Crawled — not indexed."
   - **"Browser Integrity Check" / "Security Level: High"** can return 403 to Googlebot from datacenter IPs.
   - **Cache rules** can cache an old redirect or an old `noindex` response for days. After your recent `vercel.json` fix, Cloudflare may still be serving the stale broken version.
   - **Cloudflare → Vercel "Authenticated Origin Pulls"** or strict SSL modes occasionally break Vercel's own edge → returns 5xx → "Server error" report.
   - Fix: in Cloudflare dashboard → Security → Bots → **disable Bot Fight Mode**; Security Level → **Medium**; Caching → **Purge Everything** once after deploys; verify "Verified Bot" allowlist includes Googlebot/Bingbot.

**B. Vercel SPA + non-JS crawlers (architectural)**
   - Every URL returns `index.html` with the same static `<title>`/`<description>` until React + Helmet mutate the head. **Googlebot does execute JS**, so it eventually sees the per-route meta, but it does so in a deferred render pass — for low-authority new pages, Google often indexes the first-pass (homepage meta) and flags duplicates. That produces "Duplicate without user-selected canonical" and "Alternate page with proper canonical tag" reports across `/about`, `/contact`, every destination, every insight.
   - **The only real fix is SSR or static prerendering.** On the current Vite stack, the pragmatic option is `vite-plugin-prerender` or moving the marketing pages to a prerender step at build time. That's a bigger change — flagging it, not doing it without your sign-off.

**C. `www` vs apex confusion**
   - Your `vercel.json` correctly 301s `globalfreedomcapital.com` → `www.`. Verify in Cloudflare that both DNS records (apex A/AAAA and `www` CNAME) point to Vercel, and that no Page Rule is doing a competing redirect. Conflicting redirects produce the "Page with redirect" report.

**D. Supabase**
   - Supabase is not in your render path for marketing pages — it can't be causing indexing issues. The only way it could matter is if a public Supabase URL is being linked from your sitemap (it isn't). Ruling it out.

**E. Google Search Console hygiene**
   - Make sure you've submitted the sitemap *and* "Validate fix" after the recent changes.
   - Use the URL Inspection tool on 3–5 affected URLs → "Test live URL" → check the rendered HTML actually contains the right `<title>` and `<link rel=canonical>`. If it doesn't, you've confirmed (B) or (A).
   - Coverage stats lag 1–4 weeks. Don't panic if reports haven't moved yet.

### Files I'll edit

- `index.html` — fix OG image URL, add canonical + robots fallback, shorten title, add LCP preload + theme-color.

### Out of scope (mention only)

- SSR / prerender migration (architectural; needs your decision)
- Cloudflare dashboard changes (only you can make them — I'll give you the exact checklist above)
- Removing legitimate `noindex` from NotFound/Unsubscribe (would *worsen* SEO)

### Approve to apply
On approval I'll edit `index.html` only, then summarize the Cloudflare/Search Console steps for you to run.
