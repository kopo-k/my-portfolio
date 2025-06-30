// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://kopo-k.github.io/my-portfolio",
  base: "/my-portfolio/",
  integrations: [tailwind()],
});
