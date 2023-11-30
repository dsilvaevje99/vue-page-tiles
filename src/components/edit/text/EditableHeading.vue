<template>
  <div class="flex flex-col">
    <div
      contenteditable
      placeholder="Click to edit heading"
      :class="`p-2 text-${fontSize} w-auto min-w-[20rem] max-w-full text-${alignment} self-${alignment}`"
      @input="(e) => (value = (e.target as HTMLDivElement).innerText)"
    >
      {{ value }}
    </div>
    <LangAccordion v-if="otherLocale" :locale="otherLocale" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { TileTemplate, TextLocale } from "../../../interfaces";
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
  const tileText = tile.value.data?.text;
  const found =
    typeof tileText === "object"
      ? Object.keys(tileText).find((locale) => locale !== props.locale)
      : false;
  if (found && (tileText as unknown as TextLocale)[found])
    return [found, (tileText as unknown as TextLocale)[found]];
});
const alignment = computed(() => tile.value.attrs?.align || "center");
const fontSize = computed(() => tile.value.attrs?.fontSize || "4xl");
</script>
