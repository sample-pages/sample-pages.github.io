import { defineConfig } from 'astro/config';

export default defineConfig({
  // 公開先のオリジンに変更（canonical / OGP の絶対URL生成に使用）
  site: 'https://sample-pages.github.io',
  // 原典と同じく /77/ 配下で配信する。ルート直下で配信するなら削除
  base: '/9',
  trailingSlash: 'always',
});