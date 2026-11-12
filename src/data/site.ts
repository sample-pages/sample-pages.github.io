// File: src/data/site.ts
export const site = {
  title: '第77回駒場祭公式ウェブサイト',
  shortTitle: '第77回駒場祭',
  description:
    '東京大学の学園祭「駒場祭」の公式ウェブサイトです。第77回駒場祭は「まほろば」をテーマに、11月21日（土）〜23日（月・祝）の3日間、駒場Iキャンパスにて開催されます。',
  themeColor: '#f5962a',
  theme: 'まほろば',
  ogImage: '/ogp-ja-1200x630.png',
  officialUrl: 'https://www.komabasai.net/77/',
  // 非公式である旨のバナー表示（公開する場合は true のままにする）
  showCloneNotice: true,
  event: {
    year: 2026,
    start: { date: '11/21', day: '土' },
    end: { date: '23', day: '月・祝' },
    hours: '9:00〜18:00（最終日は17:00まで）',
  },
  organizer: {
    name: '東京大学 第77期駒場祭委員会',
    address: '〒153-8902 東京都目黒区駒場3-8-1 東京大学構内 キャンパスプラザA棟103号室',
    tel: '03-5454-4349',
    email: 'committee[at]komabasai.net',
  },
  sns: [
    { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/komabasai_pr' },
    { name: 'X', icon: 'x', href: 'https://x.com/komabasai' },
    { name: 'LINE', icon: 'line', href: 'https://page.line.me/pxx4411t' },
    { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@komabasai_pr' },
  ],
} as const;