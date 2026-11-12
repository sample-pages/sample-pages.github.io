// File: src/data/navigation.ts
export type NavItem = {
  label: string;
  href: string;
  icon?: 'map' | 'clock' | 'user';
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const navigation: NavGroup[] = [
  {
    title: '駒場祭について',
    items: [
      { label: '駒場祭とは', href: '/about/' },
      { label: 'テーマ', href: '/theme/' },
      { label: '地域の皆様との交流', href: '/community/' },
      { label: '公式テーマソング', href: '/song/' },
      { label: '公式マスコット「こまっけろ」', href: '/kero/' },
      { label: '協賛・賛助いただいた皆様', href: '/sponsors/' },
      { label: '他大学の学園祭との連携', href: '/festival-partnerships/' },
      { label: '環境配慮について', href: '/eco/' },
    ],
  },
  {
    title: '企画情報',
    items: [
      { label: '企画検索', href: '/project/' },
      { label: 'おすすめ企画', href: '/recommended/' },
      { label: 'ステージタイムテーブル', href: '/timetable/' },
      { label: '企画索引', href: '/list/' },
      { label: 'マイページ', href: '/mypage/' },
    ],
  },
  {
    title: 'ご案内',
    items: [
      { label: '電子版パンフレット', href: '/pamphlet/' },
      { label: 'ご来場の際の注意点', href: '/notices/' },
      { label: 'アクセス・キャンパスマップ', href: '/access/' },
      { label: '案内所・落とし物・迷子', href: '/info/' },
      { label: 'よくあるご質問', href: '/faq/' },
      { label: 'ごみ分別のお願い', href: '/garbage/' },
      { label: 'バリアフリー', href: '/accessibility/' },
      { label: '取材について', href: '/media/' },
    ],
  },
  {
    title: '公式コンテンツ',
    items: [
      { label: '委員会公式企画一覧', href: '/eve/' },
      { label: '公式グッズ', href: '/goods/' },
      { label: '駒場グランプリ', href: '/prix/' },
      { label: 'オンラインで楽しむ駒場祭', href: '/online/' },
      { label: 'Opening', href: '/project/C001/' },
      { label: 'Finale', href: '/project/C002/' },
      { label: '装飾紹介', href: '/deco/' },
    ],
  },
];

export const quickLinks: NavItem[] = [
  { label: 'マップ', href: '/access/', icon: 'map' },
  { label: 'タイムテーブル', href: '/timetable/', icon: 'clock' },
  { label: 'マイページ', href: '/mypage/', icon: 'user' },
];

export const footerLinks: NavItem[] = [
  { label: 'サイトマップ', href: '/sitemap/' },
  { label: 'プライバシーポリシー', href: '/privacypolicy/' },
  { label: 'サイトポリシー', href: '/sitepolicy/' },
  { label: '駒場祭に関する情報の取扱指針', href: '/infopolicy/' },
];