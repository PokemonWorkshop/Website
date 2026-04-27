import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const sdk = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/sdk" }),
  schema: ({ image }) => z.object({ seoDescription: z.string(), cover: image().array().nullable(), title: z.string() }),
});

export const collections = { sdk };
