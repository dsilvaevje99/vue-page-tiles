import type { TileTemplate } from "./interfaces";

import Heading from "./components/display/text/Heading.vue";
import EditableHeading from "./components/edit/text/EditableHeading.vue";

import Paragraph from "./components/display/text/Paragraph.vue";
import EditableParagraph from "./components/edit/text/EditableParagraph.vue";

export const HEADING_TEMPLATE: TileTemplate = {
  display: Heading,
  edit: EditableHeading,
  data: {
    text: "",
  },
};

export const PARAGRAPH_TEMPLATE: TileTemplate = {
  display: Paragraph,
  edit: EditableParagraph,
  data: {
    text: "",
  },
};
