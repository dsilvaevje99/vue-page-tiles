<template>
  <div
    v-if="modelValue.length > 0"
    class="page-tile-editor flex flex-col w-full"
  >
    <LangSwitcher
      v-if="
        localeConfig &&
        localeConfig.locales.length >= 2 &&
        !localeConfig.hideLocaleSwitcher
      "
      :locale-config="localeConfig"
      @change="(locale: string) => (localeConfig as LocaleConfig).currLocale = locale"
    />
    <div
      v-for="(component, index) in modelValue"
      :key="`tile-${index}`"
      class="p-10 pt-0 group"
    >
      <div
        class="base-transition relative border-b-2 border-transparent group-hover:border-cyan-700 group-hover:bg-gray-100 flex flex-col pb-7"
      >
        <component
          class="bg-transparent"
          :is="component.edit()"
          :state="modelValue"
          :index="index"
          :tinymce-api-key="tinymceApiKey"
          :locale="localeConfig?.currLocale"
          :locale-config="localeConfig"
          @update="(content: TileTemplate) => handleContentChanged(content, index)"
        ></component>
        <tile-actions
          class="hidden group-hover:block"
          @add="(tile: TileTemplate) => handleAddTile(tile, index)"
          @delete="() => handleDeleteTile(index)"
          :disable-tiles="disableTiles"
        />
      </div>
    </div>
  </div>
  <div v-else class="flex flex-col w-full items-center p-10">
    <p class="text-xl font-bold text-center text-gray-400 mb-4">
      Start by adding your first tile
    </p>
    <add-tile-menu @add="handleAddTile" :disable-tiles="disableTiles" />
  </div>
</template>

<script setup lang="ts">
import "../style.css"; // needed for CSS to be included in build
import TileActions from "./internal/menus/TileActions.vue";
import AddTileMenu from "./internal/menus/AddTileMenu.vue";
import LangSwitcher from "./internal/LangSwitcher.vue";
import type { TileTemplate, LocaleConfig } from "../interfaces";

const props = defineProps({
  modelValue: {
    type: Array as () => TileTemplate[],
    required: true,
  },
  disableTiles: {
    type: Array as () => String[],
    required: false,
    default: [],
  },
  tinymceApiKey: {
    type: String,
    required: false,
    default: import.meta.env.VITE_TINYMCE_API_KEY,
  },
  localeConfig: {
    type: Object as () => LocaleConfig,
    required: false,
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

<style>
.tox-editor-container {
  z-index: 50 !important;
}
</style>
