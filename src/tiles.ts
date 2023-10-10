import PageHeader from "./components/display/text/PageHeader.vue";
import EditablePageHeader from "./components/edit/text/EditablePageHeader.vue";

export default {
  PageHeader: {
    title: "Page header",
    display: PageHeader,
    edit: EditablePageHeader,
    data: {
      text: "",
    },
  },
};
