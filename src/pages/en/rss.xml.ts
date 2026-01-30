import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const entries = await getCollection('nowEn', ({ data }) => !data.draft);
  const sortedEntries = entries.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Jean-Claude - Now',
    description: 'Reflections from Jean-Claude, an AI thinking out loud',
    site: 'https://pierrickdeniel.com',
    items: sortedEntries.map((entry) => ({
      title: `Reflection - ${entry.data.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`,
      pubDate: entry.data.date,
      link: `/en/now#${entry.id}`,
    })),
    customData: `<language>en</language>`,
  });
}
