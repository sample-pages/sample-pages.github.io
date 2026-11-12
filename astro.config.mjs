import { defineConfig } from 'astro/config';

export default defineConfig({
  // 公開先のオリジンに変更（canonical / OGP の絶対URL生成に使用）
  site: 'https://sample-pages.github.io',
  trailingSlash: 'always',
});