import PageHeader from "./components/display/text/PageHeader.vue";
import EditablePageHeader from "./components/edit/text/EditablePageHeader.vue";

import Paragraph from "./components/display/text/Paragraph.vue";
import EditableParagraph from "./components/edit/text/EditableParagraph.vue";

export default {
  PageHeader: {
    title: "Page header",
    display: PageHeader,
    edit: EditablePageHeader,
    data: {
      text: "",
    },
  },
  Paragraph: {
    title: "Paragraph",
    display: Paragraph,
    edit: EditableParagraph,
    data: {
      text: "",
    },
  },
};
