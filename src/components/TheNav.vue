<template>
  <nav class="sticky bottom-0 z-10 bg-[#fdfdfd]">
    <ul class="flex items-center justify-around border-t ">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="h-8 w-8" /> {{ page }}
        <!-- <ph-clock v-if="page === 'выполняемые'" class="h-8 w-8" />
          <ph-list-bullets v-else-if="page === 'активные'" class="h-8 w-8" />
          <ph-chart-bar v-else class="h-8 w-8" /> {{ page }} -->
      </NavItem>
    </ul>
  </nav>
</template>

<script setup>
import { NAV_ITEMS } from '../constants'
import NavItem from './NavItem.vue'

defineProps(['currentPage'])

const emit = defineEmits(['navigate'])
</script>
