<template>
  <component
    :is="header"
    :class="`text-${fontSize} text-${
      attributes?.align || 'center'
    } text-ellipsis overflow-hidden`"
  >
    {{ locale ? (data?.text as TextLocale)[locale] : data?.text }}
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Data, Attributes, TextLocale } from "../../../interfaces";

const props = defineProps({
  data: Object as () => Data,
  attributes: Object as () => Attributes,
  locale: {
    type: String,
    required: false,
  },
});

const header = computed(() => props.attributes?.headerType || "h1");
const fontSize = computed(() => props.attributes?.fontSize || "4xl");
</script>
