<template>
  <div
    :class="`grid grid-flow-row sm:grid-flow-col sm:auto-cols-fr gap-${gap}`"
  >
    <div v-for="(col, index) in columns" :key="`col-d-${index}`">
      <component
        v-for="tile in col"
        :key="`col-tile-d-${index}`"
        :is="{ ...tile.display }"
        :data="tile.data"
        :attributes="tile.attributes"
        :tinymce-enabled="tinymceEnabled"
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
  tinymceEnabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const columns = computed(() => props.data?.columns);
const gap = computed(() => props.attributes?.gap);
</script>
