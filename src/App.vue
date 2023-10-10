<template>
  <PageTiles :page="testState" />
  <div class="py-1 my-6 bg-gray-400"></div>
  <PageTileEditor v-model="testState.content" />
</template>

<script setup lang="ts">
import { reactive } from "vue";
import PageTileEditor from "./components/PageTileEditor.vue";
import PageTiles from "./components/PageTiles.vue";

const testState = reactive({
  content: [],
});
</script>
