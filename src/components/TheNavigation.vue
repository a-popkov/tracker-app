<template>
  <nav class="sticky bottom-0 z-10 bg-[#fdfdfd]">
    <ul class="flex items-center justify-around border-t ">
      <li v-for="(icon, page) in navItems" :key="page" class="flex-1">
        <a
          class="flex flex-col items-center p-2 md:text-xl text-[14px] capitalize"
          :href="`#${page}`"
        >
          <component :is="icon" class="h-8 w-8" /> {{ page }}
          <!-- <ph-clock v-if="page === 'выполняемые'" class="h-8 w-8" />
          <ph-list-bullets v-else-if="page === 'активные'" class="h-8 w-8" />
          <ph-chart-bar v-else class="h-8 w-8" /> {{ page }} -->
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { PhClock, PhListBullets, PhChartBar } from '@phosphor-icons/vue'
const navItems = { выполняемые: PhClock, активные: PhListBullets, прогресс: PhChartBar }

// export default {}
</script>
