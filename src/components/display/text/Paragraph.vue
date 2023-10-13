<template>
  <p>{{ data?.text }}</p>
</template>

<script setup lang="ts">
import { Data } from "../../../interfaces";

defineProps({
  data: Object as () => Data,
});
</script>
