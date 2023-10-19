<template>
  <div class="flex-col">
    <div
      v-for="({ bannerType }, index) in BANNER_VARIANTS"
      :key="`tile-columns-variant-${index}`"
    >
      <button
        class="base-transition bg-gray-100 hover:bg-cyan-700 hover:text-white p-2 w-full"
        @click="$emit('add', index)"
      >
        <span class="capitalize">{{ bannerType }}</span> banner
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BANNER_VARIANTS } from "../../../tile-list";

defineEmits(["add"]);
</script>
