<template>
  <input
    type="text"
    v-model="value"
    class="p-2 text-2xl text-center w-max self-center"
    placeholder="Click to edit header"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Tile } from "../../../interfaces";

const props = defineProps({
  state: {
    type: Array as () => Tile[],
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update"]);

const value = computed({
  get() {
    return props.state[props.index].data.text || "";
  },
  set(newVal: string) {
    const oldItem = props.state[props.index];
    emit("update", {
      ...oldItem,
      data: {
        ...oldItem.data,
        text: newVal,
      },
    });
  },
});
</script>
