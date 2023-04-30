import { HeaderMenu, TopInkColor, TopInkCardIcon } from "~~/types/type";

export const topInkColors: TopInkColor[] = [
  "#009900",
  "#ffa500",
  "#0000ff",
  "#8b4513",
  "#ff0000",
  "#ffd700",
];

const topInkCardIcon: TopInkCardIcon[] = [
  "topink-t.png",
  "topink-o.png",
  "topink-p.png",
  "topink-i.png",
  "topink-n.png",
  "topink-k.png",
];

export const headerMenus: HeaderMenu[] = [
  {
    title: "mission",
    text: "ミッション",
    icon: topInkCardIcon[0],
    color: topInkColors[0],
  },
  {
    title: "businesses",
    text: "事業紹介",
    icon: topInkCardIcon[1],
    color: topInkColors[1],
  },
  {
    title: "aboutUs",
    text: "私たち",
    icon: topInkCardIcon[2],
    color: topInkColors[2],
  },
  {
    title: "office",
    text: "会社情報",
    icon: topInkCardIcon[3],
    color: topInkColors[3],
  },
  {
    title: "recruit",
    text: "採用情報",
    icon: topInkCardIcon[4],
    color: topInkColors[4],
  },
  {
    title: "contact",
    text: "お問合せ",
    icon: topInkCardIcon[5],
    color: topInkColors[5],
  },
];
