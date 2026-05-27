import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "2ex6a65q", // in prod stored in .env or better
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});