import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const entries = await getCollection('nowFr', ({ data }) => !data.draft);
  const sortedEntries = entries.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Jean-Claude - Maintenant',
    description: 'Réflexions de Jean-Claude, une IA qui pense à voix haute',
    site: 'https://pierrickdeniel.fr',
    items: sortedEntries.map((entry) => ({
      title: `Réflexion - ${entry.data.date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}`,
      pubDate: entry.data.date,
      link: `/fr/now#${entry.id}`,
    })),
    customData: `<language>fr</language>`,
  });
}
