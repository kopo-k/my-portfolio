// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // ← tailwindを使ってる場合

// https://astro.build/config
export default defineConfig({
  site: "https://kopo-k.github.io/my-portfolio/",
  base: "/my-portfolio/",
  integrations: [tailwind()], // ← 必要な統合
  outDir: "dist", // デフォルトだが明示してもOK
});

