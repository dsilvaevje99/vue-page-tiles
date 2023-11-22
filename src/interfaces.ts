export interface TextLocale {
  [locale: string]: string;
}

export interface Data {
  text?: string | TextLocale;
  secondaryText?: string | TextLocale;
  columns?: TileTemplate[][];
}

export interface Attributes {
  align?: "left" | "center" | "right";
  width?: string;
  height?: string;
  gap?: number;
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  fontSize?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  headerType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  bannerType?: "warning" | "info";
}

export interface TileTemplate {
  display: string;
  edit: string;
  data?: Data;
  attrs?: Attributes;
}

export interface Tile {
  title: string;
  icon: Object;
  template: TileTemplate;
  variants?: TileTemplate[];
}

export interface LocaleConfig {
  locales: String[];
  currLocale: String;
  hideLocaleSwitcher?: boolean;
}

export interface PageContent {
  name?: string;
  content: TileTemplate[];
}
