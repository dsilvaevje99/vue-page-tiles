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
        class="base-transition relative border-b-2 border-transparent group-hover:border-cyan-700 group-hover:bg-gray-100 flex flex-col pb-7"
      >
        <component
          class="bg-transparent"
          :is="component.edit"
          :state="modelValue"
          :index="index"
          @update="(content: TileTemplate) => handleContentChanged(content, index)"
        ></component>
        <tile-actions
          class="hidden group-hover:block"
          @add="(tile: TileTemplate) => handleAddTile(tile, index)"
          @delete="() => handleDeleteTile(index)"
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
import "../style.css"; // needed for CSS to be included in build
import TileActions from "./menus/TileActions.vue";
import AddTileMenu from "./menus/AddTileMenu.vue";
import type { TileTemplate } from "../interfaces";

const props = defineProps({
  modelValue: {
    type: Array as () => TileTemplate[],
    required: true,
    default: {
      content: [],
    },
  },
  //customComponents: Array, <- can maybe be added later? It works, but components would have to be available both in edit and display apps
});

const emit = defineEmits(["update:modelValue"]);

const handleAddTile = (tile: TileTemplate, index?: number) => {
  if (index !== undefined) props.modelValue.splice(index + 1, 0, tile);
  else props.modelValue.push(tile);
};

const handleDeleteTile = (index: number) => {
  props.modelValue.splice(index, 1);
};

const handleContentChanged = (newContent: TileTemplate, index: number) => {
  const copy: TileTemplate[] = [...props.modelValue];
  copy[index] = newContent;
  emit("update:modelValue", copy);
};
</script>
