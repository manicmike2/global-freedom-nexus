/**
 * Centralized destination → route mapping for deep-linking.
 * Used across homepage cards, service pages, and internal links.
 */

export type DestinationRoute = {
  page: string;
  anchor: string;
};

export const destinationRoutes: Record<string, DestinationRoute> = {
  // Caribbean → CBI page
  "Grenada":            { page: "/citizenship-by-investment", anchor: "grenada" },
  "Saint Kitts & Nevis":{ page: "/citizenship-by-investment", anchor: "saint-kitts-nevis" },
  "Antigua & Barbuda":  { page: "/citizenship-by-investment", anchor: "antigua-barbuda" },
  "Dominica":           { page: "/citizenship-by-investment", anchor: "dominica" },

  // Europe → Golden Visas page
  "Portugal":           { page: "/golden-visas", anchor: "portugal" },
  "Greece":             { page: "/golden-visas", anchor: "greece" },
  "Malta":              { page: "/golden-visas", anchor: "malta" },

  // Global → Golden Visas page (UAE, Panama) or CBI (Turkey)
  "Turkey":             { page: "/citizenship-by-investment", anchor: "turkey" },
  "UAE":                { page: "/golden-visas", anchor: "uae" },
  "Panama":             { page: "/golden-visas", anchor: "panama" },
};

/**
 * Get the full path with anchor hash for a destination name.
 */
export function getDestinationPath(name: string): string {
  const route = destinationRoutes[name];
  if (!route) return "/destinations";
  return `${route.page}#${route.anchor}`;
}

/**
 * Slug helper: convert destination name to anchor ID.
 */
export function toAnchorId(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
