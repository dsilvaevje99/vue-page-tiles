import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

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

import Accordion from "./components/display/text/Accordion.vue";
import EditableAccordion from "./components/edit/text/EditableAccordion.vue";

const components = {
  Heading,
  EditableHeading,
  Paragraph,
  EditableParagraph,
  VerticalSpacer,
  EditableVerticalSpacer,
  Columns,
  EditableColumns,
  Banner,
  EditableBanner,
  Accordion,
  EditableAccordion,
};

const app = createApp(App);

Object.entries(components).forEach(([name, component]) => {
  app.component(name, component);
});

app.mount("#app");
