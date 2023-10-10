<template>
  <div v-if="page.content.length > 0" class="flex flex-col w-full">
    <component
      v-for="tile in page.content"
      :key="`tile-d-${tile.title}`"
      :is="tile.display"
      :data="tile.data"
    ></component>
  </div>
  <div v-else>
    <p class="text-xl font-bold text-center text-gray-400 mb-4">
      No page content yet
    </p>
  </div>
</template>

<script setup lang="ts">
import type { PageContent } from "../interfaces";

defineProps({
  page: {
    type: Object as () => PageContent,
    required: true,
  },
});
</script>
