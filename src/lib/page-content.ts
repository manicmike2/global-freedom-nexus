// Page content (SEO + hero) sourced from Sanity via the build-time snapshot
// (scripts/fetch-content.mjs -> src/content/pages.json). Keyed by page id with
// the "page-" prefix stripped, e.g. "home", "about", "cbi-hub".
import pages from "@/content/pages.json";

export type PageLink = { label: string; href: string };
export type PageHero = {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  image?: string | null;
  ctaPrimary?: PageLink | null;
  ctaSecondary?: PageLink | null;
} | null;
export type PageContent = {
  seo: { title?: string; description?: string } | null;
  hero: PageHero;
};

const map = pages as Record<string, PageContent>;

export function getPage(key: string): PageContent {
  return map[key] ?? { seo: null, hero: null };
}
