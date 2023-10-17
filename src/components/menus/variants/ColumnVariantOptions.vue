<template>
  <div class="flex-col">
    <div
      v-for="({ columns }, index) in COLUMNS_VARIANTS"
      :key="`tile-columns-variant-${index}`"
    >
      <button
        class="base-transition bg-gray-100 hover:bg-cyan-700 hover:text-white p-2 w-full"
        @click="$emit('add', index)"
      >
        {{ columns.length }} columns
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { COLUMNS_VARIANTS } from "../../../tile-list";

defineEmits(["add"]);
</script>
