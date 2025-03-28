import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_TOKEN, // No `NEXT_PUBLIC_` prefix here for server-side use
  useCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN === 'true'
});
