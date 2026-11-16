export const site = {
  name: "第9回うぃーすた全国交流会",
  shortName: "うぃーすた",
  description:
    "吃音のある人たちが、同年代の仲間と出会い、話し、聴き合う全国交流会。自分のペースで過ごせるつながりの場をつくります。",
  event: {
    edition: "第9回",
    title: "第9回うぃーすた全国交流会",
    status: "ended",
    date: "2027年10月9日（土）〜10日（日）",
    startDate: "2026-07-18",
    endDate: "2026-07-19",
    venue: "未定",
    address: "未定",
    host:"うぃーすた全国交流会実行委員会",
    cohost:"全国言友会 吃音のある中高生交流会"
  },
  social: {
    x: "https://x.com/westu__2026",
    instagram: "https://instagram.com/westu_zenkoku",
    youtube: "https://www.youtube.com/@westu_kansai",
  },
  contact: {
    general: "westu.zenkoku.2026@gmail.com",
    junior: "chukosei.tsudoi@gmail.com",
  },
};

export const navigation = [
  {
    label: "うぃーすた全国交流会について",
    href: "",
    children: [
      {
        label: "吃音とは",
        href: "/about/#kitsuon",
      },
      {
        label: "うぃーすたとは",
        href: "/about/#westu",
      },
      {
        label: "うぃーすた全国交流会とは",
        href: "/about/#westu-zenkoku",
      },
      {
        label: "テーマ",
        href: "/theme/",
      },
    ],
  },
  {
    label: "中高生交流会",
    href: "",
    children: [
      {
        label: "プログラム",
        href: "/program/",
      },
      {
        label: "タイムテーブル",
        href: "/timetable/",
      },
    ],
  },
  {
    label: "お知らせ",
    href: "",
  },
  {
    label: "開催概要",
    href: "",
    children: [
      {
        label: "プログラム",
        href: "/program/",
      },
      {
        label: "タイムテーブル",
        href: "/timetable/",
      },
    ],
  },
  {
    label: "注意事項",
    href: "",
    children: [
      {
        label: "よくある質問",
        href: "/attention/",
      },
    ],
  },
  {
    label: "お申し込み",
    href: "",
    children: [
      {
        label: "参加プラン",
        href: "/program/",
      },
      {
        label: "お申し込みに関するご注意",
        href: "/timetable/",
      },
      {
        label: "アレルギー対応について",
        href: "/timetable/",
      },
    ],
  },
  {
    label: "お問い合わせ",
    href: "/contact/",
  },
];
