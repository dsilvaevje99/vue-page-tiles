<template>
  <div class="w-full block" :style="{ height }"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Attributes } from "../../../interfaces";

const props = defineProps({
  attributes: Object as () => Attributes,
});

const height = computed(() =>
  props.attributes?.height ? props.attributes.height : 0
);
</script>
