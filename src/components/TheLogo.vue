<template>
  <a class="inline-flex items-center gap-1 font-semibold" :href="`#${PAGE_TIMELINE}`">
    <PhClockCountdown class="h-7 w-7" />
    <span>OnTrack</span>
  </a>
</template>

<script setup>
import { PhClockCountdown } from '@phosphor-icons/vue'
import { PAGE_TIMELINE } from '../constants'
</script>
