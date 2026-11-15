/**
 * サイト全体の配色設定。
 * activePalette を変更すると、サイト全体の色をまとめて切り替えられます。
 * HEX値は各パレット内で自由に変更できます。
 */
export const activePalette = "checker" as const;

export const palettes = {
  checker: {
    paper: "#f5f3ed",
    paperDeep: "#e2dfd6",
    ink: "#222326",
    inkSoft: "#57595d",
    orange: "#e87552",
    orangeDeep: "#b84c35",
    yellow: "#efce56",
    cyan: "#70aeb7",
    pink: "#d99aa2",
    white: "#fffefa",
    line: "rgba(34, 35, 38, 0.18)",
    checkerLight: "#fffefa",
    checkerDark: "#222326",
  },
  coral: {
    paper: "#f8f0eb",
    paperDeep: "#eadbd4",
    ink: "#30252a",
    inkSoft: "#6b565d",
    orange: "#e78b76",
    orangeDeep: "#b95748",
    yellow: "#efc77b",
    cyan: "#8ab9b4",
    pink: "#e9a4a4",
    white: "#fffaf6",
    line: "rgba(48, 37, 42, 0.16)",
    checkerLight: "#fffaf6",
    checkerDark: "#30252a",
  },
  blue: {
    paper: "#eff3f4",
    paperDeep: "#d9e3e6",
    ink: "#172a36",
    inkSoft: "#50636d",
    orange: "#db795b",
    orangeDeep: "#a94f3a",
    yellow: "#e9c95c",
    cyan: "#68a9c0",
    pink: "#cf9ba7",
    white: "#fbfdfd",
    line: "rgba(23, 42, 54, 0.16)",
    checkerLight: "#fbfdfd",
    checkerDark: "#172a36",
  },
  lavender: {
    paper: "#f3f0f7",
    paperDeep: "#e0d9eb",
    ink: "#292438",
    inkSoft: "#625b74",
    orange: "#d87c68",
    orangeDeep: "#a94f51",
    yellow: "#e9cd78",
    cyan: "#83b5b5",
    pink: "#c59abd",
    white: "#fffdfd",
    line: "rgba(41, 36, 56, 0.16)",
    checkerLight: "#fffdfd",
    checkerDark: "#292438",
  },
} as const;

export type PaletteName = keyof typeof palettes;
export const palette = palettes[activePalette];
