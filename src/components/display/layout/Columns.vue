<template>
  <div :class="`grid grid-cols-${columns?.length} gap-${gap}`">
    <div v-for="(col, index) in columns" :key="`col-d-${index}`">
      <component
        v-for="tile in col"
        :key="`col-tile-d-${index}`"
        :is="tile.display"
        :data="tile.data"
        :attributes="tile.attributes"
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Attributes, Data } from "../../../interfaces";

const props = defineProps({
  data: Object as () => Data,
  attributes: Object as () => Attributes,
});

const columns = computed(() => props.data?.columns);
const gap = computed(() => props.attributes?.gap);
</script>
