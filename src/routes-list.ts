// All canonical, prerenderable routes. Keep in sync with src/App.tsx.
// Redirects (Navigate) are intentionally excluded — Vercel/SPA handles those.
import articles from "./content/articles.json";

export const prerenderRoutes: string[] = [
  "/",
  "/about",
  "/real-estate",
  "/destinations",
  "/for-attorneys",
  "/insights",
  "/contact",
  "/unsubscribe",
  // Hubs
  "/citizenship-by-investment",
  "/golden-visa",
  // CBI destinations
  "/citizenship-by-investment/antigua-barbuda",
  "/citizenship-by-investment/saint-kitts-nevis",
  "/citizenship-by-investment/grenada",
  "/citizenship-by-investment/dominica",
  "/citizenship-by-investment/saint-lucia",
  "/citizenship-by-investment/sao-tome-and-principe",
  "/citizenship-by-investment/sierra-leone",
  "/citizenship-by-investment/turkey",
  // Golden Visa destinations
  "/golden-visa/portugal",
  "/golden-visa/greece",
  "/golden-visa/latvia",
  "/golden-visa/hungary",
  "/golden-visa/bulgaria",
  "/golden-visa/malta",
  "/golden-visa/uae",
  "/golden-visa/panama",
  // Resources
  "/resources/blog",
  "/resources/blog/best-citizenship-by-investment-programs-2026",
  "/resources/blog/antigua-vs-grenada-cbi",
  "/resources/blog/citizenship-by-investment-us-citizens",
  "/resources/blog/golden-visa-vs-citizenship-by-investment",
  "/resources/faq",
  // Sanity-driven blog articles (/insights/:slug)
  ...articles.map((a: { slug: string }) => `/insights/${a.slug}`),
];
