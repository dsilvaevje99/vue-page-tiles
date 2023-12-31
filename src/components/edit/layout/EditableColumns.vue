<template>
  <div class="grid grid-flow-row sm:grid-flow-col sm:auto-cols-fr">
    <div v-for="(_, index) in columns" :key="`col-${index}`">
      <PageTileEditor
        v-model="value[index]"
        :disable-tiles="['Columns']"
        :locale-config="newLocaleConfig"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from "vue";
import type { LocaleConfig, TileTemplate } from "../../../interfaces";
import { PageTileEditor } from "../../..";

const props = defineProps({
  state: {
    type: Array as () => TileTemplate[],
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  localeConfig: {
    type: Object as () => LocaleConfig,
    required: false,
  },
});

const emit = defineEmits(["update"]);

const tile = computed(() => props.state[props.index]);
const columns = computed({
  get() {
    return tile.value.data?.columns || [[], []];
  },
  set(newVal) {
    const oldItem = tile.value;
    emit("update", {
      ...oldItem,
      data: {
        ...oldItem.data,
        columns: newVal,
      },
    });
  },
});
const newLocaleConfig = computed(() =>
  props.localeConfig
    ? { ...props.localeConfig, hideLocaleSwitcher: true }
    : undefined
);

const value: TileTemplate[][] = reactive(
  JSON.parse(JSON.stringify(columns.value)) // deep copy required to prevent weird mutation issues
);
watch(value, () => {
  columns.value = value;
});
</script>
