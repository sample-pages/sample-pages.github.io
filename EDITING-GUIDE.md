# 編集ガイド

## 開催情報を変更する

`src/data/site.ts` を開き、`site.event` の値を編集します。

```ts
export const site = {
  event: {
    edition: "第8回",
    date: "2026年7月18日（土）〜19日（日）",
    venue: "大阪国際ユースホステル・羽衣青少年センター",
  },
};
```

## ページ本文を変更する

ページごとの `.astro` ファイルを直接編集します。

| ページ | ファイル |
|---|---|
| トップ | `src/pages/index.astro` |
| うぃーすたについて | `src/pages/about/index.astro` |
| 開催記録 | `src/pages/event/index.astro` |
| プログラム | `src/pages/program/index.astro` |
| タイムテーブル | `src/pages/timetable/index.astro` |
| 中高生交流会 | `src/pages/chukosei/index.astro` |
| お知らせ | `src/pages/news/index.astro` |
| 注意事項 | `src/pages/attention/index.astro` |
| FAQ | `src/pages/faq/index.astro` |
| 参加・申し込み | `src/pages/application/index.astro` |
| お問い合わせ | `src/pages/contact/index.astro` |

## お知らせ・プログラム・FAQ

- お知らせ：`src/data/news.ts`
- プログラム：`src/data/program.ts`
- FAQ：`src/data/faq.ts`

## デザインを変更する

全ページ共通のスタイルは `src/styles/global.css` にあります。CSSはセレクタ・プロパティごとに改行して記述しています。

共通ヘッダー・フッター・セクション見出しは `src/components/` にあります。

## 配色を変更する

`src/data/theme.ts` の `activePalette` を編集します。

```ts
export const activePalette = "checker" as const;
```

選択できるプリセットは `checker`、`coral`、`blue`、`lavender` です。個別の色を調整する場合も、同じファイル内のHEX値を変更してください。全ページへ自動反映されます。詳しくは `PALETTE-GUIDE.md` を参照してください。

## 「うぃーすたについて」のスクロール演出を編集する

- セクションの順序・文章：`src/pages/about/index.astro`
- 背景色面・タイポグラフィ・アニメーション：`src/styles/global.css`
- スクロールに応じた背景切り替え：`src/pages/about/index.astro` 内の `data-about-scene` スクリプト

`data-about-scene` の値に応じて、背景レイヤーが切り替わります。CSSの背景パターンや色はテーマ設定のCSS変数を参照します。
