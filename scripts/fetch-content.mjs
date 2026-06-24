// Build-time content snapshot: fetch content from Sanity and write local JSON
// the app imports. Runs before `vite build` so prerendered pages are static.
// Re-runs on every deploy (incl. the Sanity → Vercel rebuild webhook).
import { createClient } from "@sanity/client";
import { promises as fs } from "node:fs";
import path from "node:path";

const client = createClient({
  projectId: "qzkrznia",
  dataset: "production",
  apiVersion: "2024-06-01",
  useCdn: false, // always fetch fresh at build
});

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return isNaN(d.getTime()) ? "" : d.toLocaleString("en-US", { month: "long", year: "numeric" });
}

const POSTS_QUERY = /* groq */ `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc){
    "slug": slug.current, title, excerpt, "content": body,
    "category": coalesce(category->title, ""), cluster, readTime, featured, publishedAt
  }
`;

const DESTINATIONS_QUERY = /* groq */ `
  *[_type == "destination" && defined(slug.current)]{
    "slug": slug.current,
    country, "type": programType, tagline, label,
    heroDescription, heroSubDescription,
    "image": image.asset->url + "?w=1000&q=80&auto=format&fit=max",
    imageAlt,
    "seoTitle": seo.title, "seoDescription": seo.description,
    canonicalPath,
    highlights[]{icon, title, desc},
    investmentOptions[]{title, amount, desc},
    timeline[]{step, title, desc},
    eligibility,
    faqHeading,
    faqItems[]{question, answer},
    ctaHeading, ctaDescription
  }
`;

async function main() {
  const outDir = path.resolve("src/content");
  await fs.mkdir(outDir, { recursive: true });

  // Blog
  const posts = await client.fetch(POSTS_QUERY);
  const articles = posts.map((p) => ({
    slug: p.slug, title: p.title ?? "", category: p.category ?? "", date: formatDate(p.publishedAt),
    readTime: p.readTime ?? "", excerpt: p.excerpt ?? "", featured: !!p.featured,
    cluster: p.cluster ?? "", content: p.content ?? "",
  }));
  await fs.writeFile(path.join(outDir, "articles.json"), JSON.stringify(articles, null, 2) + "\n");
  console.log(`[fetch-content] wrote ${articles.length} articles`);

  // Destinations -> map keyed by slug, in DestinationPageData shape
  const dests = await client.fetch(DESTINATIONS_QUERY);
  const bySlug = {};
  for (const d of dests) {
    const isCbi = d.type !== "golden-visa";
    bySlug[d.slug] = {
      country: d.country ?? "",
      type: isCbi ? "cbi" : "golden-visa",
      tagline: d.tagline ?? "",
      label: d.label ?? "",
      heroDescription: d.heroDescription ?? "",
      heroSubDescription: d.heroSubDescription ?? "",
      image: d.image ?? "",
      imageAlt: d.imageAlt ?? "",
      seoTitle: d.seoTitle ?? "",
      seoDescription: d.seoDescription ?? "",
      canonicalPath: d.canonicalPath ?? (isCbi ? `/citizenship-by-investment/${d.slug}` : `/golden-visa/${d.slug}`),
      highlights: (d.highlights ?? []).map((h) => ({ icon: h.icon ?? "Globe", title: h.title ?? "", desc: h.desc ?? "" })),
      investmentOptions: (d.investmentOptions ?? []).map((o) => ({ title: o.title ?? "", amount: o.amount ?? "", desc: o.desc ?? "" })),
      timeline: (d.timeline ?? []).map((t) => ({ step: t.step ?? "", title: t.title ?? "", desc: t.desc ?? "" })),
      eligibility: d.eligibility ?? [],
      faqItems: (d.faqItems ?? []).map((f) => ({ question: f.question ?? "", answer: f.answer ?? "" })),
      faqHeading: d.faqHeading ?? "",
      ctaHeading: d.ctaHeading ?? "",
      ctaDescription: d.ctaDescription ?? "",
      hubPath: isCbi ? "/citizenship-by-investment" : "/golden-visa",
      hubLabel: isCbi ? "All CBI programs" : "All Golden Visa programs",
    };
  }
  await fs.writeFile(path.join(outDir, "destinations.json"), JSON.stringify(bySlug, null, 2) + "\n");
  console.log(`[fetch-content] wrote ${Object.keys(bySlug).length} destinations`);
}

main().catch((err) => {
  console.error("[fetch-content] failed:", err);
  process.exit(1);
});
