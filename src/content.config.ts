import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Now collection - Jean-Claude's reflections (no titles, just dates)
const now = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/now' }),
  schema: z.object({
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    audio: z.string().optional(),
  }),
});

export const collections = { now };
