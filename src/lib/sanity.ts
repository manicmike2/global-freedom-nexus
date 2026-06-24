import { createClient } from "@sanity/client";

/**
 * Sanity client for Global Freedom Capital. projectId/dataset are public
 * (production is public-read), safe to inline. Used at build time by the
 * content-snapshot script; available for client-side reads if ever needed.
 */
export const sanityClient = createClient({
  projectId: "qzkrznia",
  dataset: "production",
  apiVersion: "2024-06-01",
  useCdn: true,
});
