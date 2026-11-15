# 配色ガイド

## 初期配色

現在の初期配色は `checker` です。白と黒をサイト全体の基調にし、コーラル、イエロー、ブルーグリーンを小面積のアクセントに使っています。チェック柄は背景の端や細い装飾に限定して、本文の読みやすさを優先しています。

## プリセット

- `checker`: 白黒チェック＋コーラル
- `coral`: コーラル・ピンク系
- `blue`: ブルー・青緑系
- `lavender`: ラベンダー・紫系

## 色を選ぶ場所

`src/data/theme.ts` の次の行を変更します。

```ts
export const activePalette = "checker" as const;
```

カラーコードの編集も同じファイルで行えます。パレットの各項目は、サイトの共通CSS変数へ自動で反映されます。

## 色の役割

- `paper`: ページの基本背景
- `paperDeep`: 薄い背景・カード
- `ink`: 文字・濃い背景
- `inkSoft`: 補助テキスト
- `orange`: メインアクセント
- `orangeDeep`: 見出し・リンクの強調色
- `yellow`: ハイライト
- `cyan`: 第2アクセント
- `pink`: 装飾色
- `white`: 文字・カードの白
- `checkerLight` / `checkerDark`: チェック柄
