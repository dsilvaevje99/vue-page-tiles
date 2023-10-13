<template>
  <div
    contenteditable
    placeholder="Click to edit heading"
    :class="`p-2 text-${fontSize} w-auto min-w-[20rem] max-w-full text-${alignment} self-${alignment}`"
    @input="(e) => (value = (e.target as HTMLDivElement).innerText)"
  >
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { TileTemplate } from "../../../interfaces";

const props = defineProps({
  state: {
    type: Array as () => TileTemplate[],
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update"]);

const tile = computed(() => props.state[props.index]);
const value = computed({
  get() {
    return tile.value.data.text || "";
  },
  set(newVal: string) {
    const oldItem = tile.value;
    emit("update", {
      ...oldItem,
      data: {
        ...oldItem.data,
        text: newVal,
      },
    });
  },
});
const alignment = computed(() => tile.value.attributes?.align || "center");
const fontSize = computed(() => tile.value.attributes?.fontSize || "4xl");
</script>
