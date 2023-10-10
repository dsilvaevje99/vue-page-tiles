<template>
  <div>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="w-max inline-flex justify-center gap-x-1.5 rounded-full bg-cyan-700 p-2 shadow-sm hover:bg-cyan-800"
        >
          <PlusIcon class="h-8 w-8 text-white" />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <MenuItems
          class="absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 w-max origin-top-center rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="grid grid-cols-3 gap-2 p-2">
            <MenuItem
              v-for="(tile, index) in tiles"
              :key="`tile-${tile.title}-${index}`"
              class="bg-gray-100 p-2"
            >
              <button @click="$emit('add', tile)">{{ tile.title }}</button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import tiles from "../../tiles";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { PlusIcon } from "@heroicons/vue/20/solid";

const emit = defineEmits(["add"]);
</script>
