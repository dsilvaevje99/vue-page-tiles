<template>
  <div>
    <div
      :class="`flex p-4 rounded-md ${
        bannerType === 'info' ? 'bg-gray-300' : 'bg-yellow-200'
      }`"
    >
      <InformationCircleIcon v-if="bannerType === 'info'" class="h-6 w-6" />
      <ExclamationTriangleIcon v-else class="h-6 w-6" />
      <div v-if="tinymceApiKey" class="flex-1 ml-4">
        <Editor
          v-model="value"
          :api-key="tinymceApiKey"
          :init="{
            plugins: 'lists link',
            menubar: '',
            toolbar:
              'undo redo | blocks forecolor bold italic underline link removeformat | bullist numlist | alignleft aligncenter alignright alignjustify',
            placeholder: 'Click to edit banner',
          }"
          :inline="true"
        />
      </div>
      <textarea
        v-else
        v-model="value"
        class="flex-1 ml-4"
        placeholder="Click to edit banner"
        rows="2"
      ></textarea>
    </div>
    <LangAccordion
      v-if="otherLocale"
      :locale="otherLocale"
      :tinymce-enabled="!!tinymceApiKey"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { TextLocale, TileTemplate } from "../../../interfaces";
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/vue/24/outline";
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
const bannerType = computed(() => tile.value.attributes?.bannerType || "info");
const otherLocale = computed(() => {
  const found = Object.keys(tile.value.data?.text as TextLocale).find(
    (locale) => locale !== props.locale
  );
  if (found && (tile.value.data?.text as TextLocale)[found])
    return [found, (tile.value.data?.text as TextLocale)[found]];
});
</script>
