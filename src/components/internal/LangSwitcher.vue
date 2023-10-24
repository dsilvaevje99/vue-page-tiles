<template>
  <div
    class="sticky top-4 left-1/2 -translate-x-1/2 w-max z-50 flex bg-cyan-900 text-white rounded-full p-1 mb-4"
  >
    <button
      v-for="(locale, index) in localeConfig.locales"
      :key="`locale-btn-${locale}`"
      :class="`px-2 py-1 hover:bg-cyan-700
        ${index === 0 && 'rounded-l-full'} 
        ${index === localeConfig.locales.length - 1 && 'rounded-r-full'}
        ${
          locale === localeConfig.currLocale &&
          'bg-cyan-700 border-solid border-white border-2'
        }`"
      @click="$emit('change', locale)"
    >
      {{ locale }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { LocaleConfig } from "../../interfaces";

defineProps({
  localeConfig: {
    type: Object as () => LocaleConfig,
    required: true,
  },
});

defineEmits(["change"]);
</script>
