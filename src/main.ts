import { createApp } from "vue";
import "../style.css";
import App from "./App.vue";

import PageHeader from "./components/display/text/PageHeader.vue";
import EditablePageHeader from "./components/edit/text/EditablePageHeader.vue";

const app = createApp(App);

app
  .component("PageHeader", PageHeader)
  .component("EditablePageHeader", EditablePageHeader);

app.mount("#app");
