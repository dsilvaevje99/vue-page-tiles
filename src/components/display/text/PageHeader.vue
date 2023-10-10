<template>
  <h1 class="text-2xl text-center">{{ data?.text }}</h1>
</template>

<script setup lang="ts">
defineProps({
  data: Object,
});
</script>
