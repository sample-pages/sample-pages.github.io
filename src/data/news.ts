// File: src/data/news.ts
export type News = {
  slug: string;
  title: string;
  summary: string;
  isNew?: boolean;
  body?: string;
};

// 新しい順に並べる
export const news: News[] = [
  { slug: 'update_2', title: '公式ウェブサイトの更新', summary: '公式ウェブサイトを更新しました。', isNew: true },
  { slug: 'media', title: '「取材について」の更新', summary: '「取材について」ページを更新しました。' },
  { slug: 'update', title: '公式ウェブサイトの更新', summary: '公式ウェブサイトを更新しました。' },
  { slug: 'anniversary', title: '東京大学150周年について', summary: '東京大学は2027年に創立150年を迎えます。' },
  { slug: 'release', title: '公式ウェブサイトの公開', summary: '公式ウェブサイトを公開しました。' },
];