

## Optimize All Page Title Tags (≤60 chars, SEO-formatted)

### Problem
Current titles on nearly every page exceed 60 characters (e.g., "Saint Kitts & Nevis Citizenship by Investment | Second Passport | Global Freedom Capital" = 90 chars). Google truncates them in SERPs, weakening CTR and keyword visibility. The `PageSEO` component also auto-appends " | Global Freedom Capital" if missing — meaning passed titles must budget for that suffix (~26 chars), leaving ~34 chars for primary keyword + benefit.

### Approach
Rewrite every page's `title` / `seoTitle` prop using the formula:
**[Primary Keyword] | [Core Benefit] – GFC** (or full brand if room allows)

Each title:
- Under 60 chars total (including auto-appended suffix where used)
- Leads with primary keyword
- Includes a benefit/value prop (e.g., "Expert Advisory", "From $200K", "EU Residency")
- Authoritative, no fluff

### New titles (final rendered length in parentheses)

**Core pages**
- Index → `Citizenship by Investment Advisory | GFC` (41)
- About → `About Tatiana Muntean | CBI Advisor | GFC` (42)
- Contact → `Book a Private CBI Consultation | GFC` (38)
- ForAttorneys → `CBI Partnership for Immigration Attorneys | GFC` (47)
- RealEstate → `CBI & Golden Visa Real Estate | GFC` (35)
- Insights → `Investment Migration Insights | GFC` (35)
- CBIHub → `Citizenship by Investment Programs | GFC` (40)
- GoldenVisaHub → `Golden Visa & EU Residency Programs | GFC` (41)
- Destinations → `Investment Migration Destinations | GFC` (39)

**CBI destinations** (format: `[Country] Citizenship by Investment | GFC`)
- AntiguaBarbuda → `Antigua CBI from $230K | Second Passport | GFC` (46)
- SaintKittsNevis → `St Kitts CBI | Second Passport Program | GFC` (44)
- Grenada → `Grenada CBI | E-2 Treaty Second Passport | GFC` (46)
- Dominica → `Dominica CBI from $200K | Second Passport | GFC` (47)
- SaintLucia → `Saint Lucia CBI | Flexible Second Passport | GFC` (48)
- SaoTomePrincipe → `São Tomé CBI from $90K | Second Passport | GFC` (46)
- SierraLeone → `Sierra Leone Citizenship by Investment | GFC` (45)

**Golden Visa destinations**
- Portugal → `Portugal Golden Visa | EU Residency | GFC` (41)
- Greece → `Greece Golden Visa from €250K | EU Residency | GFC` (50)
- Hungary → `Hungary Golden Visa | EU Residency | GFC` (40)
- Bulgaria → `Bulgaria Golden Visa | EU Residency | GFC` (41)
- Latvia → `Latvia Golden Visa | EU Residency | GFC` (39)

**Resources / blog**
- BlogIndex → `Investment Migration Blog | GFC` (31)
- ResourcesFAQ → `CBI & Golden Visa FAQ | GFC` (27)
- BestCBI2026 → `Best Citizenship by Investment 2026 | GFC` (41)
- GoldenVisaVsCBI → `Golden Visa vs CBI: Key Differences | GFC` (41)
- CBIForUSCitizens → `CBI for US Citizens | Second Passport | GFC` (43)
- AntiguaVsGrenada → `Antigua vs Grenada CBI Comparison | GFC` (39)
- Article (dynamic) → `{article.title} | GFC` (variable)

**Utility (noindex — minimal)**
- Unsubscribe → `Unsubscribe | GFC` (17)
- NotFound → `Page Not Found | GFC` (20)

### Brand-suffix handling
The auto-suffix appends " | Global Freedom Capital" (26 chars). To stay under 60, each new title above either:
1. Includes the abbreviated `GFC` already (and bypasses auto-suffix since it contains "Global Freedom Capital"… ⚠️) → need to update `PageSEO` check.

**Adjustment to `PageSEO.tsx`**: change the brand-detection check so titles ending in `| GFC` are also recognized as already-branded (otherwise suffix doubles). Single-line change:
```ts
const fullTitle = (title.includes("Global Freedom Capital") || title.endsWith("| GFC"))
  ? title
  : `${title} | Global Freedom Capital`;
```

### Files modified (~28)
- `src/components/PageSEO.tsx` (suffix logic)
- 9 core pages: Index, About, Contact, ForAttorneys, RealEstate, Insights, CBIHub, GoldenVisaHub, Destinations
- 12 destination pages (CBI + Golden Visa)
- 6 resource/blog pages + Article.tsx
- Unsubscribe.tsx, NotFound.tsx

### Out of scope
- Meta descriptions (already optimized)
- Canonicals, JSON-LD, og tags
- Layout/copy/design

