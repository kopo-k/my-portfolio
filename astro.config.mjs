// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: "https://kopo-k.github.io/my-portfolio/",
  base: isProd ? "/my-portfolio/" : "/",  // ← 開発と本番で切り替える
  integrations: [tailwind()],
});