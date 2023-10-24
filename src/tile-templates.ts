import type { TileTemplate } from "./interfaces";

import Heading from "./components/display/text/Heading.vue";
import EditableHeading from "./components/edit/text/EditableHeading.vue";

import Paragraph from "./components/display/text/Paragraph.vue";
import EditableParagraph from "./components/edit/text/EditableParagraph.vue";

import VerticalSpacer from "./components/display/layout/VerticalSpacer.vue";
import EditableVerticalSpacer from "./components/edit/layout/EditableVerticalSpacer.vue";

import Columns from "./components/display/layout/Columns.vue";
import EditableColumns from "./components/edit/layout/EditableColumns.vue";

import Banner from "./components/display/text/Banner.vue";
import EditableBanner from "./components/edit/text/EditableBanner.vue";

export const HEADING_TEMPLATE: TileTemplate = {
  display: Heading,
  edit: () => EditableHeading,
  data: {
    text: "",
  },
};

export const PARAGRAPH_TEMPLATE: TileTemplate = {
  display: Paragraph,
  edit: () => EditableParagraph,
  data: {
    text: "",
  },
};

export const VERTICAL_SPACER_TEMPLATE: TileTemplate = {
  display: VerticalSpacer,
  edit: () => EditableVerticalSpacer,
  attributes: {
    height: "",
  },
};

export const COLUMNS_TEMPLATE: TileTemplate = {
  display: Columns,
  edit: () => EditableColumns,
  data: {
    columns: [[], []],
  },
  attributes: {
    gap: 8,
  },
};

export const BANNER_TEMPLATE: TileTemplate = {
  display: Banner,
  edit: () => EditableBanner,
  data: {
    text: "",
  },
  attributes: {
    bannerType: "info",
  },
};
