import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/pages' }),
  schema: ({ image }) => z.object({ seoDescription: z.string(), cover: image().array().nullable(), title: z.string(), tags: z.string().array().nullish() }),
});

const tags = defineCollection({
  loader: file('./src/content/tags.json'),
  schema: z.object({ en: z.string(), fr: z.string() }),
});

export const collections = { pages, tags };
