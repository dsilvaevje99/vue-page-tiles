import type { TileTemplate } from "./interfaces";

export const HEADING_TEMPLATE: TileTemplate = {
  display: "Heading",
  edit: "EditableHeading",
  data: {
    text: "",
  },
};

export const PARAGRAPH_TEMPLATE: TileTemplate = {
  display: "Paragraph",
  edit: "EditableParagraph",
  data: {
    text: "",
  },
};

export const VERTICAL_SPACER_TEMPLATE: TileTemplate = {
  display: "VerticalSpacer",
  edit: "EditableVerticalSpacer",
  attrs: {
    height: "",
  },
};

export const COLUMNS_TEMPLATE: TileTemplate = {
  display: "Columns",
  edit: "EditableColumns",
  data: {
    columns: [[], []],
  },
  attrs: {
    gap: 8,
  },
};

export const BANNER_TEMPLATE: TileTemplate = {
  display: "Banner",
  edit: "EditableBanner",
  data: {
    text: "",
  },
  attrs: {
    bannerType: "info",
  },
};

export const ACCORDION_TEMPLATE: TileTemplate = {
  display: "Accordion",
  edit: "EditableAccordion",
  data: {
    text: "",
    secondaryText: "",
  },
};
