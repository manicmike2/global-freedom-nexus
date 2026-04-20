

## Generate `llms.txt` for AI Discoverability

### What is llms.txt
A markdown-formatted file at `/llms.txt` that helps LLMs (ChatGPT, Claude, Gemini, Perplexity) understand site structure, primary content, and context. Modeled on the [llmstxt.org](https://llmstxt.org) spec — a single H1 (site name), short blockquote summary, optional details paragraph, then H2 sections with curated `[title](url): description` links.

### Approach
Create two static files in `/public/` (served at root):

1. **`public/llms.txt`** — concise index (recommended spec format)
2. **`public/llms-full.txt`** — expanded version with richer descriptions for each page (optional but improves Claude/GPT retrieval quality)

Both will be plain markdown, no React, no build step. Routes resolve at `https://www.globalfreedomcapital.com/llms.txt` and `/llms-full.txt`.

### File 1: `public/llms.txt` (concise)

Structure:
```
# Global Freedom Capital

> Expert advisory for citizenship by investment (CBI) and Golden Visa
> residency programs, serving high-net-worth families, family offices,
> and U.S. immigration attorneys.

Founded by Tatiana Muntean (Investment Migration Council member), 
Global Freedom Capital provides confidential, conflict-free guidance 
across Caribbean CBI programs and European Golden Visa pathways. 
The firm is an advisory — not a law firm — and does not provide 
legal, tax, or financial advice.

## Core
- [Home](https://www.globalfreedomcapital.com/): Investment migration advisory overview
- [About Tatiana Muntean](https://www.globalfreedomcapital.com/about): Founder and lead advisor
- [Contact](https://www.globalfreedomcapital.com/contact): Book a private consultation
- [For Immigration Attorneys](https://www.globalfreedomcapital.com/for-attorneys): White-label partnership framework

## Citizenship by Investment (Caribbean & emerging programs)
- [CBI Programs Hub](.../citizenship-by-investment): Compare all CBI programs
- [Antigua & Barbuda](.../citizenship-by-investment/antigua-barbuda): From $230K
- [Saint Kitts & Nevis](.../citizenship-by-investment/saint-kitts-nevis): World's oldest CBI
- [Grenada](.../citizenship-by-investment/grenada): Only CBI with U.S. E-2 treaty access
- [Dominica](.../citizenship-by-investment/dominica): From $200K
- [Saint Lucia](.../citizenship-by-investment/saint-lucia): Flexible bond options
- [São Tomé & Príncipe](.../citizenship-by-investment/sao-tome-and-principe): From $90K
- [Sierra Leone](.../citizenship-by-investment/sierra-leone): Fast-track from $140K

## Golden Visa & EU Residency by Investment
- [Golden Visa Hub](.../golden-visa): Compare EU residency programs
- [Portugal](.../golden-visa/portugal): EU citizenship pathway after 5 years
- [Greece](.../golden-visa/greece): From €250K
- [Hungary](.../golden-visa/hungary): Guest Investor Visa from €250K
- [Bulgaria](.../golden-visa/bulgaria): EU residency with citizenship pathway
- [Latvia](.../golden-visa/latvia): From €60K, Schengen access

## Resources & Insights
- [Blog](.../resources/blog): Investment migration guides
- [FAQ](.../resources/faq): Common questions on CBI & Golden Visas
- [Best CBI Programs 2026](.../resources/blog/best-citizenship-by-investment-programs-2026)
- [Golden Visa vs CBI](.../resources/blog/golden-visa-vs-citizenship-by-investment)
- [CBI for U.S. Citizens](.../resources/blog/citizenship-by-investment-us-citizens)
- [Antigua vs Grenada Compared](.../resources/blog/antigua-vs-grenada-citizenship-comparison)
- [Insights](.../insights): Strategic analysis
- [Real Estate](.../real-estate): Qualifying investment properties
- [Destinations Overview](.../destinations): All jurisdictions

## Optional
- [Sitemap](.../sitemap.xml)
- [Robots](.../robots.txt)
```

### File 2: `public/llms-full.txt` (expanded)
Same structure but each link gets a 2–3 sentence description covering: investment threshold, processing time, key benefit (e.g., visa-free count, Schengen access, E-2 eligibility), and family inclusion. This gives LLMs deeper context for accurate citation when users ask "what's the cheapest CBI?" or "which Caribbean passport gives U.S. business access?".

### Bonus: discoverability
- Reference both files in `public/robots.txt` via `Sitemap:`-style hint comments (LLM crawlers are starting to look here).
- No need to modify `index.html` — files served directly from `/public/` work at root URL on Vite/Vercel/Netlify.

### Files created
- `public/llms.txt` (~2.5 KB)
- `public/llms-full.txt` (~7 KB)
- `public/robots.txt` (append `# LLM index: /llms.txt` comment)

### Out of scope
- Dynamic generation from articles array (static is fine — small site)
- Backend, JSON-LD, or component changes
- Per-page `<meta name="llm-*">` tags (not a standard)

