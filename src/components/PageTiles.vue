<template>
  <div
    v-if="page.content.length > 0"
    id="page-tile-displayer"
    class="flex flex-col w-full"
  >
    <component
      v-for="(tile, index) in page.content"
      :key="`tile-d-${index}`"
      :is="tile.display"
      :data="tile.data"
      :attrs="tile.attrs"
      :tinymce-enabled="tinymceEnabled"
      :locale="locale"
    ></component>
  </div>
  <div v-else>
    <slot name="no-content">
      <p class="text-xl font-bold text-center text-gray-400 mb-4">
        No page content yet
      </p>
    </slot>
  </div>
</template>

<script setup lang="ts">
import type { PageContent } from "../interfaces";

defineProps({
  page: {
    type: Object as () => PageContent,
    required: true,
  },
  tinymceEnabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  locale: {
    type: String,
    required: false,
  },
});
</script>
