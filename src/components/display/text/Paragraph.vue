<template>
  <p>{{ data?.text }}</p>
</template>

<script setup lang="ts">
defineProps({
  data: Object,
});
</script>
