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
    "slug": slug.current,
    title,
    excerpt,
    "content": body,
    "category": coalesce(category->title, ""),
    cluster,
    readTime,
    featured,
    publishedAt
  }
`;

async function main() {
  const outDir = path.resolve("src/content");
  await fs.mkdir(outDir, { recursive: true });

  const posts = await client.fetch(POSTS_QUERY);
  const articles = posts.map((p) => ({
    slug: p.slug,
    title: p.title ?? "",
    category: p.category ?? "",
    date: formatDate(p.publishedAt),
    readTime: p.readTime ?? "",
    excerpt: p.excerpt ?? "",
    featured: !!p.featured,
    cluster: p.cluster ?? "",
    content: p.content ?? "",
  }));

  await fs.writeFile(path.join(outDir, "articles.json"), JSON.stringify(articles, null, 2) + "\n");
  console.log(`[fetch-content] wrote ${articles.length} articles -> src/content/articles.json`);
}

main().catch((err) => {
  console.error("[fetch-content] failed:", err);
  process.exit(1);
});
