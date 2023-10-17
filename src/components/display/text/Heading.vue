<template>
  <component
    :is="header"
    :class="`text-${fontSize} text-${
      attributes?.align || 'center'
    } text-ellipsis overflow-hidden`"
  >
    {{ data?.text }}
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Data, Attributes } from "../../../interfaces";

const props = defineProps({
  data: Object as () => Data,
  attributes: Object as () => Attributes,
});

const header = computed(() => props.attributes?.headerType || "h1");
const fontSize = computed(() => props.attributes?.fontSize || "4xl");
</script>
