<template>
  <p class="text-ellipsis overflow-hidden">{{ data?.text }}</p>
</template>

<script setup lang="ts">
import { Data } from "../../../interfaces";

defineProps({
  data: Object as () => Data,
});
</script>
