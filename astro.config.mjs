// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alberts.me',

  //site: 'https://albertsj1.github.io',
  //base: '/alberts.me',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});