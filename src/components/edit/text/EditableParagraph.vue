<template>
  <div :class="{ 'flex flex-wrap': otherLocale }">
    <div :class="{ 'flex-1 min-w-[70%] mr-2 mb-1': otherLocale }">
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
    </div>
    <LangAccordion
      v-if="otherLocale"
      :locale="otherLocale"
      :tinymce-enabled="!!tinymceApiKey"
      class="mt-0"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { TextLocale, TileTemplate } from "../../../interfaces";
import Editor from "@tinymce/tinymce-vue";
import LangAccordion from "../../internal/LangAccordion.vue";

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
  locale: {
    type: String,
    required: false,
  },
});

const emit = defineEmits(["update"]);

const tile = computed(() => props.state[props.index]);
const value = computed({
  get() {
    return props.locale
      ? (tile.value.data?.text as TextLocale)[props.locale] || ""
      : (tile.value.data?.text as string) || "";
  },
  set(newVal: string) {
    const oldItem = tile.value;
    emit("update", {
      ...oldItem,
      data: {
        ...oldItem.data,
        text: props.locale
          ? { ...(oldItem.data?.text as TextLocale), [props.locale]: newVal }
          : newVal,
      },
    });
  },
});
const otherLocale = computed(() => {
  const found =
    typeof value.value === "object"
      ? Object.keys(value.value).find((locale) => locale !== props.locale)
      : false;
  if (found && (value.value as unknown as TextLocale)[found])
    return [found, (value.value as unknown as TextLocale)[found]];
});
</script>
