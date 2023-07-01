export type Staff = {
  name: string;
  image: string;
  directorJob: string;
  directorOffice: string;
  message: string;
};

export type HeaderMenuTitle =
  | "mission"
  | "business"
  | "aboutUs"
  | "office"
  | "recruit"
  | "contact";

export type HeaderMenuText =
  | "あなたの人生を、もっと彩る。"
  | "ミッション"
  | "事業紹介"
  | "私たち"
  | "会社情報"
  | "採用情報"
  | "お問合せ";

export type TopInkCardIcon =
  | "topink-t.png"
  | "topink-o.png"
  | "topink-p.png"
  | "topink-i.png"
  | "topink-n.png"
  | "topink-k.png";

export type TopInkColor = string;

export type HeaderMenu = {
  title: HeaderMenuTitle;
  text: HeaderMenuText;
  icon: TopInkCardIcon;
  color: TopInkColor;
};
