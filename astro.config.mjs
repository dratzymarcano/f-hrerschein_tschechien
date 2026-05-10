// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://koeln-fuehrerschein.de',
  trailingSlash: 'always',
  output: 'hybrid',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});