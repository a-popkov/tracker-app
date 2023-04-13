<template>
  <header class="sticky top-0 z-20 border-b p-3 bg-[#fdfdfd]">
    <div class="container flex items-center justify-between">
      <a class="inline-flex items-center gap-1 font-semibold" href="#">
        <ph-clock-countdown :size="36" />
        <span>OnTrack</span>
      </a>
      <a class="text-sm" href="#">
        <span v-if="true" class="inline-flex items-center gap-1">
          День завершен!
          <ph-check-circle :size="24" weight="fill" class="text-green-500" />
        </span>
        <span v-else class="inline-flex items-center gap-1">
          Прогресc: <span class="font-mono">20%</span>
          <ph-spinner class="h-5 w-5 text-red-500">
            <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="5s"
              from="0 0 0"
              to="360 0 0"
              repeatCount="indefinite"
            />
          </ph-spinner>
        </span>
      </a>
    </div>
  </header>

  <main class="flex flex-col flex-grow ">
    <div></div>
  </main>

  <nav class="sticky bottom-0 z-10 bg-[#fdfdfd]">
    <ul class="flex items-center justify-around border-t ">
      <li v-for="page in navItems" :key="page" class="flex-1">
        <a class="flex flex-col items-center p-2 text-xl capitalize" :href="`#${page}`">
          <ph-clock v-if="page === 'выполняемые'" class="h-8 w-8" />
          <ph-list-bullets v-else-if="page === 'активные'" class="h-8 w-8" />
          <ph-chart-bar v-else class="h-8 w-8" /> {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {
  PhClockCountdown,
  PhCheckCircle,
  PhSpinner,
  PhClock,
  PhListBullets,
  PhChartBar
} from '@phosphor-icons/vue'

const navItems = ['выполняемые', 'активные', 'прогресс']
</script>
