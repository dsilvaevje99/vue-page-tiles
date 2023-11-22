<template>
  <PageTiles
    :page="testState"
    tinymce-enabled
    :locale="testState.localeConfig.currLocale"
  />
  <div class="py-1 my-6 bg-gray-400">{{ JSON.stringify(testState) }}</div>
  <PageTileEditor
    v-model="testState.content"
    :locale-config="testState.localeConfig"
  />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import PageTileEditor from "./components/PageTileEditor.vue";
import PageTiles from "./components/PageTiles.vue";

const testState = reactive({
  content: [],
  localeConfig: { locales: ["no", "es", "en"], currLocale: "no" },
});
</script>
