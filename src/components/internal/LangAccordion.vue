<template>
  <div class="w-max max-w-full mx-auto mt-1">
    <Disclosure v-slot="{ open }" defaultOpen>
      <DisclosureButton
        :class="`flex justify-between px-2 py-1 text-left text-sm min-w-max ${
          open ? 'bg-gray-300 w-full' : 'bg-gray-200'
        }  hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-700 focus-visible:ring-opacity-75`"
      >
        <span class="flex items-center">
          <LanguageIcon class="h-4 w-4 mr-2 inline-block" />
          <span v-if="open">
            Translation for locale:
            <span class="font-bold ml-2">{{ locale[0] }}</span>
          </span>
        </span>
        <ChevronUpIcon
          :class="`h-4 w-4 ${open ? 'rotate-180 transform ml-4' : ''}`"
        />
      </DisclosureButton>
      <DisclosurePanel class="px-2 py-1 text-sm text-gray-500 bg-gray-200">
        <div v-if="tinymceEnabled" v-html="locale[1]"></div>
        <span v-else>{{ locale[1] }}</span>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon, LanguageIcon } from "@heroicons/vue/20/solid";

defineProps({
  locale: {
    type: Array as () => String[],
    required: true,
  },
  tinymceEnabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
