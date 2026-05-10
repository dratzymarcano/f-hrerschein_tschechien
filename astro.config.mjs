// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://koeln-fuehrerschein.de',
  trailingSlash: 'always',
  output: 'static',
  adapter: cloudflare(),
  integrations: [sitemap()],
  build: {
    format: 'directory'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});