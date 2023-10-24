<template>
  <div
    v-if="tinymceEnabled"
    v-html="locale ? (data?.text as TextLocale)[locale] : data?.text"
  ></div>
  <p v-else class="text-ellipsis overflow-hidden">
    {{ locale ? (data?.text as TextLocale)[locale] : data?.text }}
  </p>
</template>

<script setup lang="ts">
import { Data, TextLocale } from "../../../interfaces";

defineProps({
  data: Object as () => Data,
  tinymceEnabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  locale: {
    type: String,
    required: false,
  },
});
</script>

<script lang="ts">
// this prevents a console warning for not including attributes in props
export default {
  inheritAttrs: false,
};
</script>
