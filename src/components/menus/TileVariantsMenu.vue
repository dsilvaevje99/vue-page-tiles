<template>
  <Popover
    class="relative"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <slot></slot>
    <!-- Menu button -->
    <div v-if="open">
      <PopoverPanel
        static
        class="absolute left-1/2 transform -translate-x-1/2 z-10 w-max origin-top-center rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div v-if="variantMenuKey === 'headerType'">
          <HeaderTypeMenuOptions @add="handleAddHeaderVariant" />
        </div>
        <div v-else class="flex-col">
          <div v-for="(tile, index) in variants" :key="`tile-variant-${index}`">
            <button
              class="base-transition bg-gray-100 hover:bg-cyan-700 hover:text-white p-2"
              @click="$emit('add', tile)"
            >
              {{ tile.attributes![variantMenuKey as keyof Attributes] }}
            </button>
          </div>
        </div>
      </PopoverPanel>
    </div>
  </Popover>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Attributes, TileTemplate } from "../../interfaces";
import HeaderTypeMenuOptions from "./HeaderTypeMenuOptions.vue";
import { Popover, PopoverPanel } from "@headlessui/vue";

const props = defineProps({
  variants: {
    type: Array as () => TileTemplate[],
    required: true,
  },
  variantMenuKey: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["add"]);

const open = ref<boolean>(false);

const handleAddHeaderVariant = (variant: String) => {
  const template = props.variants.find(
    (v) => v.attributes?.headerType === variant
  );
  if (template) emit("add", template);
};
</script>
