<template>
  <div>
    <Disclosure v-slot="{ open }" defaultOpen>
      <DisclosureButton
        :class="`p-3 bg-gray-300 text-left flex justify-between items-center w-full rounded-md ${
          open && 'rounded-b-none'
        }`"
      >
        <Editor
          v-if="tinymceApiKey"
          class="w-full p-1"
          v-model="text"
          :api-key="tinymceApiKey"
          :init="{
            plugins: '',
            menubar: '',
            toolbar:
              'undo redo | blocks forecolor bold italic underline removeformat | alignleft aligncenter alignright alignjustify',
            placeholder: 'Click to edit accordion header',
          }"
          :inline="true"
          @click.stop
          @keydown.stop
        />
        <div
          v-else
          contenteditable
          placeholder="Click to edit accordion header"
          class="p-1 w-max min-w-[20rem] max-w-full"
          @click.stop
          @keydown.stop
          @input.stop="(e) => (text = (e.target as HTMLDivElement).innerText)"
        >
          {{ text }}
        </div>
        <ChevronUpIcon
          :class="`h-6 w-6 ml-4 ${open ? 'rotate-180 transform' : ''}`"
        />
      </DisclosureButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 h-0 opacity-0"
        enter-to-class="transform scale-100 h-auto opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 h-auto opacity-100"
        leave-to-class="transform scale-95 h-0 opacity-0"
      >
        <DisclosurePanel class="bg-gray-200 w-full p-4 rounded-b-md">
          <Editor
            v-if="tinymceApiKey"
            v-model="secondaryText"
            :api-key="tinymceApiKey"
            :init="{
              plugins: 'lists link image table',
              menubar: 'edit view insert format table',
              toolbar:
                'undo redo | blocks forecolor bold italic underline blockquote link removeformat | bullist numlist | alignleft aligncenter alignright alignjustify | image table',
              placeholder: 'Click to edit accordion body',
            }"
            :inline="true"
          />
          <textarea
            v-else
            v-model="secondaryText"
            class="p-1 w-full"
            placeholder="Click to edit accordion body"
            rows="5"
          ></textarea>
        </DisclosurePanel>
      </transition>
    </Disclosure>
    <LangAccordion v-if="otherLocale" :locale="otherLocale" tinymce-enabled />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { TextLocale, TileTemplate } from "../../../interfaces";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
import Editor from "@tinymce/tinymce-vue";
import LangAccordion from "../../internal/LangAccordion.vue";

const props = defineProps({
  state: {
    type: Array as () => TileTemplate[],
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  tinymceApiKey: {
    type: String,
    required: false,
    default: import.meta.env.VITE_TINYMCE_API_KEY,
  },
  locale: {
    type: String,
    required: false,
  },
});

const emit = defineEmits(["update"]);

const tile = computed(() => props.state[props.index]);
const text = computed({
  get() {
    return props.locale
      ? (tile.value.data?.text as TextLocale)[props.locale] || ""
      : (tile.value.data?.text as string) || "";
  },
  set(newVal: string) {
    const oldItem = tile.value;
    emit("update", {
      ...oldItem,
      data: {
        ...oldItem.data,
        text: props.locale
          ? { ...(oldItem.data?.text as TextLocale), [props.locale]: newVal }
          : newVal,
      },
    });
  },
});
const secondaryText = computed({
  get() {
    return props.locale
      ? (tile.value.data?.secondaryText as TextLocale)[props.locale] || ""
      : (tile.value.data?.secondaryText as string) || "";
  },
  set(newVal: string) {
    const oldItem = tile.value;
    emit("update", {
      ...oldItem,
      data: {
        ...oldItem.data,
        secondaryText: props.locale
          ? {
              ...(oldItem.data?.secondaryText as TextLocale),
              [props.locale]: newVal,
            }
          : newVal,
      },
    });
  },
});
const otherLocale = computed(() => {
  const foundText =
    typeof text.value === "object"
      ? Object.keys(tile.value.data?.text as TextLocale).find(
          (locale) => locale !== props.locale
        )
      : false;
  const foundSecondary =
    typeof secondaryText.value === "object"
      ? Object.keys(tile.value.data?.secondaryText as TextLocale).find(
          (locale) => locale !== props.locale
        )
      : false;
  const foundAndHasValue =
    foundText && (tile.value.data?.text as TextLocale)[foundText];
  const foundSecondaryAndHasValue =
    foundSecondary &&
    (tile.value.data?.secondaryText as TextLocale)[foundSecondary];
  if (foundAndHasValue || foundSecondaryAndHasValue)
    return [
      (foundText || foundSecondary) as string,
      `<div>${
        foundAndHasValue && (tile.value.data?.text as TextLocale)[foundText]
      }${
        foundAndHasValue &&
        foundSecondaryAndHasValue &&
        '<div class="w-full pt-1 mb-1 border-solid border-b-[1px] border-gray-400"></div>'
      }${
        foundSecondaryAndHasValue &&
        (tile.value.data?.secondaryText as TextLocale)[foundSecondary]
      }</div>`,
    ];
});
</script>
