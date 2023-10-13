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
          unmount
        >
          <div class="grid grid-cols-3 gap-2 p-2">
            <MenuItem
              v-for="(tile, index) in tiles"
              :key="`tile-${tile.title}-${index}`"
            >
              <TileVariantsMenu
                v-if="tile.variants && tile.variants.length >= 1"
                :variants="tile.variants"
                :variant-menu-key="tile.variantMenuKey!"
                @add="(tile: TileTemplate) => $emit('add', tile)"
              >
                <PopoverButton
                  class="base-transition w-full bg-gray-100 hover:bg-cyan-700 hover:text-white p-2 text-center"
                  @click="$emit('add', tile.variants[0])"
                >
                  <component
                    :is="tile.icon"
                    class="h-4 w-4 mx-auto"
                  ></component>
                  <span>{{ tile.title }}</span>
                </PopoverButton>
              </TileVariantsMenu>
              <button
                v-else
                class="base-transition bg-gray-100 hover:bg-cyan-700 hover:text-white p-2 text-center"
                @click="$emit('add', tile.template)"
              >
                <component :is="tile.icon" class="h-4 w-4 mx-auto"></component>
                <span>{{ tile.title }}</span>
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import tiles from "../../tile-list";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  PopoverButton,
} from "@headlessui/vue";
import { PlusIcon } from "@heroicons/vue/20/solid";
import TileVariantsMenu from "./TileVariantsMenu.vue";
import type { TileTemplate } from "../../interfaces";

defineEmits(["add"]);
</script>
