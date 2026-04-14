/**
 * Centralized destination → route mapping for deep-linking.
 */

export type DestinationRoute = {
  page: string;
  anchor?: string;
};

export const destinationRoutes: Record<string, DestinationRoute> = {
  // Caribbean → individual CBI pages
  "Grenada":            { page: "/citizenship-by-investment/grenada" },
  "Saint Kitts & Nevis":{ page: "/citizenship-by-investment/saint-kitts-nevis" },
  "Antigua & Barbuda":  { page: "/citizenship-by-investment/antigua-barbuda" },
  "Dominica":           { page: "/citizenship-by-investment/dominica" },
  "Saint Lucia":        { page: "/citizenship-by-investment/saint-lucia" },
  "São Tomé & Príncipe":{ page: "/citizenship-by-investment/sao-tome-and-principe" },
  "Sierra Leone":       { page: "/citizenship-by-investment/sierra-leone" },

  // Europe → individual Golden Visa pages
  "Portugal":           { page: "/golden-visa/portugal" },
  "Greece":             { page: "/golden-visa/greece" },
  "Latvia":             { page: "/golden-visa/latvia" },
  "Hungary":            { page: "/golden-visa/hungary" },
  "Bulgaria":           { page: "/golden-visa/bulgaria" },

  // Global → hub pages with anchors (no individual pages yet)
  "Turkey":             { page: "/citizenship-by-investment", anchor: "turkey" },
  "UAE":                { page: "/golden-visa", anchor: "uae" },
  "Panama":             { page: "/golden-visa", anchor: "panama" },
};

/**
 * Get the full path for a destination name.
 */
export function getDestinationPath(name: string): string {
  const route = destinationRoutes[name];
  if (!route) return "/destinations";
  if (route.anchor) return `${route.page}#${route.anchor}`;
  return route.page;
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
