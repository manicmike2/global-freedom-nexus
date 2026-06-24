// Destination content sourced from Sanity via the build-time snapshot
// (scripts/fetch-content.mjs -> src/content/destinations.json).
import destinations from "@/content/destinations.json";
import type { DestinationPageData } from "@/components/DestinationPageTemplate";

const map = destinations as Record<string, DestinationPageData>;

export function getDestination(slug: string): DestinationPageData {
  const d = map[slug];
  if (!d) throw new Error(`Unknown destination slug: "${slug}"`);
  return d;
}
