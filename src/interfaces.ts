export interface Tile {
  title: string;
  display: Object;
  edit: Object;
  data: {
    text?: string;
  };
}

export interface PageContent {
  content: Tile[];
}
