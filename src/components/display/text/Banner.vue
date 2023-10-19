<template>
  <div
    :class="`flex p-4 rounded-md ${
      bannerType === 'info' ? 'bg-gray-300' : 'bg-yellow-200'
    }`"
  >
    <InformationCircleIcon v-if="bannerType === 'info'" class="h-6 w-6" />
    <ExclamationTriangleIcon v-else class="h-6 w-6" />
    <div v-if="tinymceEnabled" class="flex-1 ml-4" v-html="data.text"></div>
    <p v-else class="flex-1 ml-4">{{ data.text }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Attributes, Data } from "../../../interfaces";
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  data: {
    type: Object as () => Data,
    required: true,
  },
  attributes: {
    type: Object as () => Attributes,
    required: true,
  },
  tinymceEnabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const bannerType = computed(() => props.attributes.bannerType || "info");
</script>
