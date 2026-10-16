import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://pierrickdeniel.com',
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
    domains: {
      fr: 'https://pierrickdeniel.fr',
    },
  },
  integrations: [
    mdx(),
    sitemap({
      // Case studies are server-rendered routes, so the integration does not see them.
      customPages: ['bredouille', 'cercle-32'].flatMap((slug) => [
        `https://pierrickdeniel.com/projects/${slug}`,
        `https://pierrickdeniel.fr/projects/${slug}`,
      ]),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
        },
      },
    }),
  ],
});
