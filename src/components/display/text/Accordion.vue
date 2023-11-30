<template>
  <div>
    <Disclosure v-slot="{ open }">
      <DisclosureButton
        :class="`p-4 bg-gray-300 flex justify-between items-center w-full rounded-md text-left ${
          open && 'rounded-b-none'
        }`"
      >
        <div
          v-if="tinymceEnabled"
          class="flex-1"
          v-html="locale ? (data?.text as TextLocale)[locale] : data?.text"
        ></div>
        <p v-else class="flex-1">
          {{ locale ? (data?.text as TextLocale)[locale] : data?.text }}
        </p>
        <ChevronUpIcon
          :class="`h-6 w-6 ml-4 ${open ? 'rotate-180 transform' : ''}`"
        />
      </DisclosureButton>
      <transition
        enter-active-class="transition origin-top duration-150 ease-out"
        enter-from-class="transform scale-y-0 opacity-0"
        enter-to-class="transform scale-y-100 opacity-100"
        leave-active-class="transition origin-top duration-100 ease-out"
        leave-from-class="transform scale-y-100 opacity-100"
        leave-to-class="transform scale-y-0 opacity-0"
      >
        <DisclosurePanel class="bg-gray-200 w-full p-4 rounded-b-md">
          <div
            v-if="tinymceEnabled"
            v-html="locale ? (data?.secondaryText as TextLocale)[locale] : data?.secondaryText"
          ></div>
          <p v-else>
            {{
              locale
                ? (data?.secondaryText as TextLocale)[locale]
                : data?.secondaryText
            }}
          </p>
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </div>
</template>

<script setup lang="ts">
import { Data, TextLocale } from "../../../interfaces";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";

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
