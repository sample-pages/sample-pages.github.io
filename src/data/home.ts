// File: src/data/home.ts
/** 正式素材を使う場合は public/images/ に配置してパスを設定（未設定ならプレースホルダー表示） */
export const assets: { themeLogo?: string; aboutImage?: string } = {
  // themeLogo: '/images/theme-logo.svg',
  // aboutImage: '/images/about_1.webp',
};

export type Recommended = {
  slug: string;
  label: string;
  glyph: string;
  color: string;
  image?: string;
};

export const recommended: Recommended[] = [
  { slug: 'future', label: '未来にふれる', glyph: '未', color: '#5b8def' },
  { slug: 'stage', label: '知のステージ', glyph: '講', color: '#e8618c' },
  { slug: 'science', label: '科学をのぞく', glyph: '科', color: '#3bb3a6' },
  { slug: 'knowledge', label: '知を深める', glyph: '学', color: '#8a6fd1' },
  { slug: 'special', label: 'とっておきの体験', glyph: '特', color: '#f5962a' },
  { slug: 'food', label: '食を楽しむ', glyph: '食', color: '#d99a1e' },
  { slug: 'wa', label: '和にふれる', glyph: '和', color: '#c8553d' },
  { slug: 'music', label: '音楽にひたる', glyph: '音', color: '#4fa3d1' },
  { slug: 'society', label: '社会を見つめる', glyph: '社', color: '#6a9c4a' },
];

export type OfficialContent = {
  href: string;
  en: string;
  title: string;
  alt: string;
  color: string;
  image?: string;
};

export const officialContents: OfficialContent[] = [
  { href: '/prix/', en: 'VOTE', title: '駒場グランプリ', alt: '駒場グランプリ抽選の様子', color: '#e8618c' },
  { href: '/goods/', en: 'GOODS', title: '公式グッズ', alt: '第77回公式グッズ', color: '#f5962a' },
  { href: '/eve/', en: 'OFFICIAL', title: '委員会公式企画一覧', alt: 'opening', color: '#5b8def' },
  { href: '/online/', en: 'ONLINE', title: 'オンラインで楽しむ駒場祭', alt: 'オンラインの駒場祭', color: '#3bb3a6' },
];

export const information = [
  { en: 'media', label: '取材について', href: '/media/' },
  { en: 'garbage', label: 'ごみ分別のお願い', href: '/garbage/' },
  { en: 'accessibility', label: 'バリアフリー', href: '/accessibility/' },
  { en: 'notices', label: 'ご来場の際の注意点', href: '/notices/' },
  { en: 'pamphlet', label: '電子版パンフレット', href: '/pamphlet/' },
  { en: 'access', label: 'アクセス・キャンパスマップ', href: '/access/' },
  { en: 'info', label: '案内所・落とし物・迷子', href: '/info/' },
  { en: 'faq', label: 'よくあるご質問', href: '/faq/' },
];

export type Sponsor = {
  name: string;
  href?: string;
  logo?: string;
};

// ダミーデータ。実在の協賛企業名・ロゴ・リンクは許諾を得たうえで差し替える
const dummy = (prefix: string, count: number): Sponsor[] =>
  Array.from({ length: count }, (_, i) => ({ name: `${prefix} ${String.fromCharCode(65 + i)}` }));

export const sponsorTiers: { size: 'lg' | 'md'; items: Sponsor[] }[] = [
  { size: 'lg', items: [{ name: '協賛企業 サンプル', href: 'https://example.com' }, ...dummy('協賛企業', 6)] },
  { size: 'md', items: dummy('賛助企業', 7) },
];