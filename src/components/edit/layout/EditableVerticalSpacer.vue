<template>
  <div
    ref="spacerRef"
    id="vertical-spacer"
    class="min-h-[5rem] w-full bg-yellow-50 flex items-center justify-center text-gray-400"
    :style="{ height }"
  >
    <div class="flex flex-col items-center">
      <p>
        Current space height:
        <span class="text-gray-900 pl-2">{{ height }}</span>
      </p>
      <div class="flex pt-1">
        <button
          v-for="h in standardHeights"
          class="border-solid border-2 border-gray-400 hover:border-gray-900 hover:text-gray-900 rounded-3xl p-1 mx-1 text-xs"
          @click="() => (height = h)"
        >
          {{ h }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
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

const standardHeights = [
  "0.5rem",
  "1rem",
  "2rem",
  "3rem",
  "5rem",
  "7rem",
  "10rem",
  "15rem",
];

const spacerRef = ref<HTMLDivElement>();
const heightTimer = ref();

const attrs = computed(() => props.state[props.index].attrs);
const height = computed({
  get() {
    return attrs.value?.height || "1rem";
  },
  set(newHeight: string) {
    const oldItem = props.state[props.index];
    emit("update", {
      ...oldItem,
      attrs: {
        ...attrs.value,
        height: newHeight,
      },
    });
  },
});

let firstLoad = true;
onMounted(() => {
  const fontSize = Number(
    window
      .getComputedStyle(document.body)
      .getPropertyValue("font-size")
      .match(/\d+/)![0]
  );
  const resizeObserver = new ResizeObserver(() => {
    if (firstLoad) {
      firstLoad = false;
      return;
    }
    clearTimeout(heightTimer.value);
    heightTimer.value = setTimeout(() => {
      height.value = `${spacerRef.value!.clientHeight / fontSize}rem`;
    }, 150);
  });
  resizeObserver.observe(spacerRef.value!);
});
</script>

<style scoped>
#vertical-spacer {
  resize: vertical;
  overflow: auto;
}
</style>
