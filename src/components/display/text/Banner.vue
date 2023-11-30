<template>
  <div class="md:hidden">
    <Disclosure v-slot="{ open }">
      <DisclosureButton
        :class="`flex justify-between w-full  min-w-0 text-left p-4 rounded-md ${
          bannerType === 'info' ? 'bg-gray-300' : 'bg-yellow-200'
        }`"
      >
        <InformationCircleIcon
          v-if="bannerType === 'info'"
          class="h-6 w-6 shrink-0"
        />
        <ExclamationTriangleIcon v-else class="h-6 w-6 shrink-0" />
        <div
          v-if="tinymceEnabled"
          :class="`ml-4 flex-1 ${open ? '' : 'line-clamp-1'}`"
          v-html="locale ? (data?.text as TextLocale)[locale] : data?.text"
        ></div>
        <p v-else :class="`ml-4 flex-1 ${open ? '' : 'line-clamp-1'}`">
          {{ locale ? (data?.text as TextLocale)[locale] : data?.text }}
        </p>
        <ChevronUpIcon
          :class="`shrink-0 h-6 w-6 ml-4 ${open ? 'rotate-180 transform' : ''}`"
        />
      </DisclosureButton>
    </Disclosure>
  </div>
  <div
    :class="`hidden md:flex p-4 rounded-md ${
      bannerType === 'info' ? 'bg-gray-300' : 'bg-yellow-200'
    }`"
  >
    <InformationCircleIcon v-if="bannerType === 'info'" class="h-6 w-6" />
    <ExclamationTriangleIcon v-else class="h-6 w-6" />
    <div
      v-if="tinymceEnabled"
      class="flex-1 ml-4"
      v-html="locale ? (data?.text as TextLocale)[locale] : data?.text"
    ></div>
    <p v-else class="flex-1 ml-4">
      {{ locale ? (data?.text as TextLocale)[locale] : data?.text }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Disclosure, DisclosureButton } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
import { Attributes, Data, TextLocale } from "../../../interfaces";
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  data: {
    type: Object as () => Data,
    required: true,
  },
  attrs: {
    type: Object as () => Attributes,
    required: true,
  },
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

const bannerType = computed(() => props.attrs.bannerType || "info");
/* const accordionProps = computed(() => {
  return {
    ...props,
    data: {
      text: "",
      secondaryText: "",
    }
  }
}) */
</script>
