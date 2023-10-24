<template>
  <div
    class="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-1/2 z-40"
  >
    <div class="flex justify-center">
      <button
        @click=""
        class="mr-6 w-max inline-flex justify-center gap-x-1.5 rounded-full bg-gray-700 p-2 shadow-sm hover:bg-gray-800 self-center"
      >
        <EllipsisHorizontalIcon class="h-4 w-4 text-white" />
      </button>
      <AddTileMenu
        @add="(tile) => $emit('add', tile)"
        :disable-tiles="disableTiles"
      />
      <button
        @click="$emit('delete')"
        class="ml-6 w-max inline-flex justify-center gap-x-1.5 rounded-full bg-red-700 p-2 shadow-sm hover:bg-red-800 self-center"
      >
        <TrashIcon class="h-4 w-4 text-white" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EllipsisHorizontalIcon, TrashIcon } from "@heroicons/vue/20/solid";
import AddTileMenu from "./AddTileMenu.vue";

defineEmits(["add", "delete"]);
defineProps({
  disableTiles: {
    type: Array as () => String[],
    required: false,
    default: [],
  },
});
</script>
