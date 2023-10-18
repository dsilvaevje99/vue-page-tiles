<template>
  <Editor
    v-if="tinymceApiKey"
    v-model="value"
    :api-key="tinymceApiKey"
    :init="{
      plugins: 'lists link image table',
      menubar: 'edit view insert format table',
      toolbar:
        'undo redo | blocks forecolor bold italic underline blockquote link removeformat | bullist numlist | alignleft aligncenter alignright alignjustify | image table',
      placeholder: 'Click to edit paragraph',
    }"
    :inline="true"
  />
  <textarea
    v-else
    v-model="value"
    class="p-2 w-full"
    placeholder="Click to edit paragraph"
    rows="5"
  ></textarea>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { TileTemplate } from "../../../interfaces";
import Editor from "@tinymce/tinymce-vue";

const props = defineProps({
  state: {
    type: Array as () => TileTemplate[],
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  tinymceApiKey: {
    type: String,
    required: false,
    default: import.meta.env.VITE_TINYMCE_API_KEY,
  },
});

const emit = defineEmits(["update"]);

const value = computed({
  get() {
    return props.state[props.index].data?.text || "";
  },
  set(newVal: string) {
    const oldItem = props.state[props.index];
    emit("update", {
      ...oldItem,
      data: {
        ...oldItem.data,
        text: newVal,
      },
    });
  },
});
</script>
