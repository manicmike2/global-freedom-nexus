

## Optimize All Meta Descriptions (≤160 chars, SEO-formatted)

### Problem
Current meta descriptions vary in length and structure. Several exceed the 160-char SERP display limit (Google truncates with "..."), and many bury the value prop or omit a clear CTA. Need a consistent, conversion-focused format across all 30 indexed pages.

### Formula
**[Primary Keyword] + [Value/Benefit for HNW audience] + [CTA] + GFC mention**

Each description:
- ≤160 chars
- Leads with primary keyword (matches title tag)
- States concrete benefit (investment range, timeline, EU access, etc.)
- Ends with CTA ("Book a free consultation", "Speak with our advisors", "Get expert guidance")
- Mentions Global Freedom Capital or GFC for brand recall

### New descriptions (final length in parens)

**Core pages**
- Index → `Citizenship by investment & Golden Visa advisory for HNW families. Second passports, EU residency, expert guidance. Book a free consultation with GFC.` (151)
- About → `Meet Tatiana Muntean, founder of Global Freedom Capital. Trusted CBI advisor for HNW families and immigration attorneys. Book a private consultation.` (149)
- Contact → `Book a confidential CBI or Golden Visa consultation with Global Freedom Capital. Expert advisory for HNW families seeking second citizenship.` (143)
- ForAttorneys → `White-label CBI partnership for U.S. immigration attorneys. Expand your practice with Global Freedom Capital's investment migration expertise.` (143)
- RealEstate → `CBI and Golden Visa real estate opportunities across the Caribbean and Europe. Qualifying investments from $200K. Speak with GFC advisors.` (139)
- Insights → `Strategic insights on citizenship by investment, Golden Visas, and global mobility for HNW families. Expert analysis from Global Freedom Capital.` (147)
- CBIHub → `Compare leading citizenship by investment programs: Antigua, St Kitts, Grenada, Dominica, Saint Lucia, São Tomé, Sierra Leone. Free consultation with GFC.` (155)
- GoldenVisaHub → `Compare European Golden Visa programs: Portugal, Greece, Hungary, Bulgaria, Latvia. EU residency from €250K. Expert advisory from Global Freedom Capital.` (155)
- Destinations → `Explore all CBI and Golden Visa destinations advised by Global Freedom Capital. Second passports and EU residency for HNW families. Free consultation.` (151)

**CBI destinations**
- AntiguaBarbuda → `Antigua & Barbuda citizenship by investment from $230,000. Visa-free access to 150+ countries. Expert advisory from GFC. Book a free consultation.` (148)
- SaintKittsNevis → `St Kitts & Nevis citizenship by investment — the world's longest-running CBI program. Second passport, 150+ visa-free countries. Free consultation with GFC.` (157)
- Grenada → `Grenada citizenship by investment with E-2 U.S. treaty access. Second passport, 145+ visa-free countries. Expert advisory from GFC. Book a free consultation.` (157)
- Dominica → `Dominica citizenship by investment from $200,000 — one of the most affordable CBI programs. 145+ visa-free countries. Free consultation with GFC.` (148)
- SaintLucia → `Saint Lucia citizenship by investment — flexible options including government bonds. 146+ visa-free countries. Expert advisory from GFC. Book a consultation.` (159)
- SaoTomePrincipe → `São Tomé & Príncipe citizenship by investment from $90,000. Discreet second passport program. Expert advisory from Global Freedom Capital. Free consultation.` (158)
- SierraLeone → `Sierra Leone Go For Gold citizenship from $140,000. Fast 2–4 month processing, family-friendly structuring. Expert advisory from GFC. Book a consultation.` (155)

**Golden Visa destinations**
- Portugal → `Portugal Golden Visa from €500K — EU residency with citizenship pathway after 5 years. Expert advisory from Global Freedom Capital. Free consultation.` (151)
- Greece → `Greece Golden Visa from €250,000 — Europe's most affordable EU residency program. Schengen access. Expert advisory from GFC. Book a free consultation.` (151)
- Hungary → `Hungary Guest Investor Program from €250,000 — EU residency through real estate funds. Schengen access. Expert advisory from GFC. Free consultation.` (149)
- Bulgaria → `Bulgaria Golden Visa — EU residency through investment with pathway to citizenship. Schengen access. Expert advisory from Global Freedom Capital.` (146)
- Latvia → `Latvia Golden Visa from €60,000 — EU residency through business or real estate investment. Schengen access. Expert advisory from GFC. Free consultation.` (155)

**Resources / blog**
- BlogIndex → `Expert guides on citizenship by investment, Golden Visas, and global mobility for HNW families. Insights and analysis from Global Freedom Capital.` (148)
- ResourcesFAQ → `Answers to common questions on citizenship by investment, Golden Visas, costs, timelines, and eligibility. Expert guidance from Global Freedom Capital.` (153)
- BestCBI2026 → `Compare the best citizenship by investment programs in 2026: Antigua, St Kitts, Grenada, Dominica, Saint Lucia. Expert analysis from GFC.` (138)
- GoldenVisaVsCBI → `Golden Visa vs citizenship by investment: key differences in cost, timeline, and rights. Expert comparison guide from Global Freedom Capital.` (143)
- CBIForUSCitizens → `Citizenship by investment for U.S. citizens: 2026 guide on tax, dual citizenship, and second passport options. Expert advisory from GFC.` (137)
- AntiguaVsGrenada → `Antigua & Barbuda vs Grenada CBI compared: investment costs, processing times, visa-free access. Expert analysis from Global Freedom Capital.` (143)
- Article (dynamic) → keeps current dynamic excerpt logic (already trimmed in `Article.tsx`).

**Utility (noindex — minimal)**
- Unsubscribe → `Unsubscribe from Global Freedom Capital email communications.` (60)
- NotFound → `The page you're looking for doesn't exist. Return to Global Freedom Capital.` (76)

### Files modified (~28)
- 9 core pages: Index, About, Contact, ForAttorneys, RealEstate, Insights, CBIHub, GoldenVisaHub, Destinations
- 12 destination pages (CBI + Golden Visa)
- 6 resource/blog pages
- Unsubscribe.tsx, NotFound.tsx
- `Article.tsx` (verify dynamic truncation only — no change if already ≤160)

### Out of scope
- Title tags (already optimized)
- Canonicals, JSON-LD, og tags
- Layout/copy/design
- Article body content

