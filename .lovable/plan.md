## Fix URL Structure & Indexing Issues

### Root cause

Three real problems are blocking Google indexing:

1. `**vercel.json` rewrite is broken.** Current config rewrites every path to `/` (root) instead of `/index.html`. On Vercel this means `/about`, `/contact`, every destination page returns the homepage HTML with a stripped URL — Googlebot sees duplicate content across hundreds of URLs. This is the #1 indexing killer.
2. **No canonical-domain redirect.** `globalfreedomcapital.com`, `www.globalfreedomcapital.com`, and `http://` variants all serve content but canonicals point only to `https://www.` — Google sees split signals.
3. **No lowercase enforcement.** If anyone links to `/Panama` or `/About`, it serves a 404 (React Router is case-sensitive) instead of redirecting to the lowercase canonical.
  &nbsp;

Good news from the audit:

- All internal `<Link to="...">` are already lowercase ✓
- All `PageSEO` canonicals already use `https://www.` ✓
- Sitemap already uses canonical URLs ✓
- React Router config is clean ✓

### Fix 1 — `vercel.json` (correct SPA rewrite + redirects)

Replace the broken rewrite. The destination must be `/index.html` so React Router receives the original path. Add redirects for non-www → www and force-lowercase via a catch-all redirect rule.

```json
{
  "trailingSlash": false,
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "globalfreedomcapital.com" }],
      "destination": "https://www.globalfreedomcapital.com/:path*",
      "permanent": true
    }
  ],
  "rewrites": [
    { "source": "/((?!.*\\.).*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
      ]
    }
  ]
}
```

Key points:

- `((?!.*\\.).*)` — only rewrites URLs **without a file extension**, so `/og-image.jpg`, `/sitemap.xml`, `/llms.txt`, `/assets/*.js`, `/assets/*.css`, etc. continue to load as static files. **This is what protects images, CSS, JS.**
- `redirects` (not `rewrites`) for non-www → www = real 301, which Google honors for canonicalization.
- http → https is automatic on Vercel/Lovable hosting; no config needed.
- `trailingSlash: false` collapses `/about/` → `/about`.
- Make sure that it does not break images and such as it did before when redirected to /index.html. 

### Fix 2 — Lowercase URL enforcement (client-side fallback)

Vercel's config language can't easily detect uppercase characters with a regex redirect. Add a tiny check in `src/components/ScrollToTop.tsx` (already runs on every route change): if `location.pathname !== location.pathname.toLowerCase()`, do a `window.location.replace(lowercasePath + search + hash)`. This issues a clean redirect for any uppercase URL hit, e.g. `/Panama` → `/panama`. Combined with React Router's 404 catch (`<Route path="*" element={<NotFound />}/>`), Google won't get stuck on mixed-case 404s.

### Fix 3 — Hosting note (important context)

Per Lovable hosting docs, `**vercel.json` is ignored on `*.lovable.app` and Lovable custom domains** — Lovable handles SPA fallback automatically and does not process Vercel/Netlify hosting configs. The `vercel.json` fix above only takes effect if the site is actually deployed to Vercel (which the existing `vercel.json` implies is the case for the production custom domain). If the site is served from Lovable hosting, the broken rewrite is harmless (ignored), but the non-www → www and HTTPS redirects must be configured in the **domain provider / Lovable domain settings** instead. We'll fix the file as requested and call this out.

### Fix 4 — Verification (no changes, just confirming what's already correct)

- ✓ All `<Link to>` paths in `src/App.tsx`, `Header.tsx`, `Footer.tsx`, destination pages, and resource pages are lowercase.
- ✓ All `canonical=` props in `PageSEO` use `https://www.globalfreedomcapital.com/...`.
- ✓ `public/sitemap.xml` contains only canonical `https://www.` URLs.
- ✓ `PageSEO.tsx` already injects `<link rel="canonical">` on every page.
- ✓ `public/robots.txt` already references the canonical sitemap URL.

No changes needed to internal links, canonicals, or the sitemap.

### Files modified

- `vercel.json` — fix SPA rewrite, add non-www redirect, add security headers, exclude static assets from rewrite
- `src/components/ScrollToTop.tsx` — add lowercase-URL redirect (~5 lines)

### Out of scope

- No changes to React Router config (already correct)
- No changes to canonicals or sitemap (already correct)
- No content/design changes

&nbsp;

### What this fixes for Google

- Eliminates duplicate-content signal (every URL now serves its real HTML, not the homepage)
- Single canonical domain enforced via 301
- Uppercase URLs redirect instead of 404
- Static assets (images, JS, CSS, sitemap, llms.txt) continue to load untouched