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
          class="border-solid border-2 border-gray-400 hover:border-gray-900 hover:text-gray-900 rounded-3xl p-1 mx-1 text-xs"
          @click="() => (height = '5rem')"
        >
          5rem
        </button>
        <button
          class="border-solid border-2 border-gray-400 hover:border-gray-900 hover:text-gray-900 rounded-3xl p-1 mx-1 text-xs"
          @click="() => (height = '6rem')"
        >
          6rem
        </button>
        <button
          class="border-solid border-2 border-gray-400 hover:border-gray-900 hover:text-gray-900 rounded-3xl p-1 mx-1 text-xs"
          @click="() => (height = '7rem')"
        >
          7rem
        </button>
        <button
          class="border-solid border-2 border-gray-400 hover:border-gray-900 hover:text-gray-900 rounded-3xl p-1 mx-1 text-xs"
          @click="() => (height = '10rem')"
        >
          10rem
        </button>
        <button
          class="border-solid border-2 border-gray-400 hover:border-gray-900 hover:text-gray-900 rounded-3xl p-1 mx-1 text-xs"
          @click="() => (height = '15rem')"
        >
          15rem
        </button>
        <button
          class="border-solid border-2 border-gray-400 hover:border-gray-900 hover:text-gray-900 rounded-3xl p-1 mx-1 text-xs"
          @click="() => (height = '20rem')"
        >
          20rem
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

const spacerRef = ref<HTMLDivElement>();
const heightTimer = ref();

const attributes = computed(() => props.state[props.index].attributes);
const height = computed({
  get() {
    return attributes.value?.height || "1rem";
  },
  set(newHeight: string) {
    const oldItem = props.state[props.index];
    emit("update", {
      ...oldItem,
      attributes: {
        ...attributes.value,
        height: newHeight,
      },
    });
  },
});

onMounted(() => {
  const fontSize = Number(
    window
      .getComputedStyle(document.body)
      .getPropertyValue("font-size")
      .match(/\d+/)![0]
  );
  const resizeObserver = new ResizeObserver(() => {
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
