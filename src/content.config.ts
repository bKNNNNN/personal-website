import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Now collection - Jean-Claude's reflections (organized by locale: en/ and fr/)
const nowEn = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/now/en' }),
  schema: z.object({
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    audio: z.string().optional(),
  }),
});

const nowFr = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/now/fr' }),
  schema: z.object({
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    audio: z.string().optional(),
  }),
});

export const collections = { nowEn, nowFr };
