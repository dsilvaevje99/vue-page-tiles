<template>
  <div class="flex-col">
    <div
      v-for="(variant, index) in HEADING_VARIANTS"
      :key="`tile-heading-variant-${index}`"
    >
      <button
        :class="`base-transition bg-gray-100 hover:bg-cyan-700 hover:text-white p-2 w-full text-${variant.size}`"
        @click="$emit('add', variant.type)"
      >
        Heading {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HEADING_VARIANTS } from "../../tile-list";

defineEmits(["add"]);
</script>
