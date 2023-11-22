<template>
  <component
    :is="header"
    :class="`text-${fontSize} text-${
      attrs?.align || 'center'
    } text-ellipsis overflow-x-clip`"
  >
    {{ locale ? (data?.text as TextLocale)[locale] : data?.text }}
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Data, Attributes, TextLocale } from "../../../interfaces";

const props = defineProps({
  data: Object as () => Data,
  attrs: Object as () => Attributes,
  locale: {
    type: String,
    required: false,
  },
});

const header = computed(() => props.attrs?.headerType || "h1");
const fontSize = computed(() => props.attrs?.fontSize || "4xl");
</script>
