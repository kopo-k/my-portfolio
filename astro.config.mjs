import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/my-portfolio/',
  site: 'https://kopo-k.github.io',
  integrations: [tailwind()],
  build: {
    assets: 'assets'
  }
});




