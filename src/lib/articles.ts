// Blog articles are now sourced from Sanity. The build-time snapshot
// (scripts/fetch-content.mjs) writes src/content/articles.json, which this
// module re-exports through the existing `Article` interface and helpers so
// the rest of the app is unchanged.
import data from "@/content/articles.json";

export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  featured?: boolean;
  cluster: string;
  content: string;
}

export const articles: Article[] = data as Article[];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const topicClusters = [
  { cluster: "Citizenship by Investment", articles: articles.filter((a) => a.cluster === "Citizenship by Investment") },
  { cluster: "Golden Visas", articles: articles.filter((a) => a.cluster === "Golden Visas") },
  { cluster: "Second Citizenship for Americans", articles: articles.filter((a) => a.cluster === "Second Citizenship for Americans") },
  { cluster: "Global Mobility Strategy", articles: articles.filter((a) => a.cluster === "Global Mobility Strategy") },
];
