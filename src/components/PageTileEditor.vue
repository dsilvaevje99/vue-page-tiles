<template>
  <div
    id="vue-page-tiles-edit-container"
    class="flex flex-col w-full"
    v-if="modelValue.length > 0"
  >
    <div
      v-for="(component, index) in modelValue"
      :key="index"
      class="p-10 pt-0 group"
    >
      <div
        class="relative border-b-2 border-transparent group-hover:border-cyan-700 flex flex-col pb-7"
      >
        <component
          :is="component.edit"
          :state="modelValue"
          :index="index"
          @update="(c: Tile) => handleContentChanged(c, index)"
        ></component>
        <add-tile-menu
          class="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block z-50"
          @add="handleAddTile"
        />
      </div>
    </div>
  </div>
  <div
    id="vue-page-tiles-edit-container"
    class="flex flex-col w-full items-center p-10"
    v-else
  >
    <p class="text-xl font-bold text-center text-gray-400 mb-4">
      Start by adding your first tile
    </p>
    <add-tile-menu @add="handleAddTile" />
  </div>
</template>

<script setup lang="ts">
import "../../style.css";
import AddTileMenu from "./menus/AddTileMenu.vue";
import type { Tile } from "../interfaces";

const props = defineProps({
  modelValue: {
    type: Array as () => Tile[],
    required: true,
    default: {
      content: [],
    },
  },
  //customComponents: Array, <- can maybe be added later? It works, but components would have to be available both in edit and display apps
});

const emit = defineEmits(["update:modelValue"]);

const handleAddTile = (tile: Tile) => {
  props.modelValue.push(tile);
};

const handleContentChanged = (newContent: Tile, index: number) => {
  const copy: Tile[] = [...props.modelValue];
  copy[index] = newContent;
  emit("update:modelValue", copy);
};
</script>
