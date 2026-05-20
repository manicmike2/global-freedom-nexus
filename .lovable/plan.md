## Do not apply the proposed vercel.json — it would break the site

The config you pasted has multiple serious issues. I recommend rejecting it and applying a corrected version instead.

### Critical problems in the proposed file

1. `**"framework": "next"**` — this project is **Vite + React**, not Next.js. Setting `framework: next` tells Vercel to expect a Next.js build (`.next/`, server functions, etc.) and will break the deploy. Same for `/_next/*` routes — that path doesn't exist here.
2. **Garbage value `"โอกา率达到": true**` on the `/golden-visas/:path*` redirect. That's not a valid Vercel key; the redirect will be rejected and `/golden-visas/anything` will stop redirecting.
3. **Typo `antigua-barbula**` in the destination of `/citizenship-by-investment/antigua-and-barbuda` → would 404 every user hitting that legacy URL.
4. `**/citizenship-by-investment/st-kitts-and-nevis` → `/saint-kitts-and-nevis**` — wrong destination. The real page is `/citizenship-by-investment/saint-kitts-nevis` (no "and", see `src/App.tsx`).
5. **Missing the non-www → www 301** that currently enforces the canonical domain. Removing it reintroduces duplicate-content (apex + www both serve 200).
6. **Missing the SPA fallback rewrite** `"/((?!.*\\.).*)" → "/index.html"`. Without it, every deep link (`/about`, `/contact`, all destination pages, all `/insights/*`) returns 404 on direct load / refresh — exactly the indexing problem we just fixed.
7. `**"version": 3` + top-level `"routes"**` — legacy Vercel v1 schema, incompatible with the modern `rewrites`/`redirects`/`headers` keys also present. Vercel will reject or ignore parts of the file.
8. **No-op rewrites** like `/api/(.*) → /api/$1`, `/assets/(.*) → /assets/$1` do nothing useful. There is no `/api` directory in this project.
9. `**poweredByHeader`, `favicon**` are not valid Vercel config keys (those are Next.js-only options).
10. `**X-Frame-Options: DENY**` would block embedding the site in iframes (e.g. preview share, Tally form previews). Lower-risk to omit or use `SAMEORIGIN`. `**X-XSS-Protection**` is deprecated by all modern browsers — harmless but noise.
11. **Missing `"trailingSlash": false**` — currently enforced; removing it can create duplicate URLs (`/about` vs `/about/`).

### Recommended action

Keep the current `vercel.json` (already correct) and only **add `X-Frame-Options: SAMEORIGIN**` if you want the extra header. Final file:

```json
{
  "trailingSlash": false,
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "globalfreedomcapital.com" }],
      "destination": "https://www.globalfreedomcapital.com/:path*",
      "permanent": true
    },
    { "source": "/golden-visas", "destination": "/golden-visa", "permanent": true },
    { "source": "/golden-visas/:path*", "destination": "/golden-visa/:path*", "permanent": true },
    { "source": "/antigua-barbuda", "destination": "/citizenship-by-investment/antigua-barbuda", "permanent": true },
    { "source": "/citizenship-by-investment/antigua-and-barbuda", "destination": "/citizenship-by-investment/antigua-barbuda", "permanent": true },
    { "source": "/citizenship-by-investment/st-kitts-and-nevis", "destination": "/citizenship-by-investment/saint-kitts-nevis", "permanent": true }
  ],
  "rewrites": [
    { "source": "/((?!.*\\.).*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" }
      ]
    }
  ]
}
```

### Changes vs current file

- Add `X-Frame-Options: SAMEORIGIN` (clickjacking protection without breaking same-origin embeds)
- Add `Referrer-Policy: strict-origin-when-cross-origin` (privacy-friendly default)
- Everything else stays — non-www→www 301, all 5 legacy redirects, SPA fallback, nosniff + HSTS

### Out of scope

- No router, sitemap, or content changes
- No Next.js migration (project is Vite — that's not changing)

### Approve to apply

On approval I'll overwrite `vercel.json` with the block above.  
  
Okay, reject, but I still need you to fix these redirect issues for better SEO optimization in the current working vercel.json

&nbsp;