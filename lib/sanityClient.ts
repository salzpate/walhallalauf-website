import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "nr3qhqby",
  dataset: "production",
  apiVersion: "2025-03-04",
  useCdn: false,
});
