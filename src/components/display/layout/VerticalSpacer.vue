<template>
  <div class="w-full block" :style="{ height }"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Attributes } from "../../../interfaces";

const props = defineProps({
  attrs: Object as () => Attributes,
});

const height = computed(() => (props.attrs?.height ? props.attrs.height : 0));
</script>

<script lang="ts">
// this prevents a console warning for not including data in props
export default {
  inheritAttrs: false,
};
</script>
