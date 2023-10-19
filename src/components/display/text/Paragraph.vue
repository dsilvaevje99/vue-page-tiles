<template>
  <div v-if="tinymceEnabled" v-html="data?.text"></div>
  <p v-else class="text-ellipsis overflow-hidden">{{ data?.text }}</p>
</template>

<script setup lang="ts">
import { Data } from "../../../interfaces";

defineProps({
  data: Object as () => Data,
  tinymceEnabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<script lang="ts">
// this prevents a console warning for not including attributes in props
export default {
  inheritAttrs: false,
};
</script>
