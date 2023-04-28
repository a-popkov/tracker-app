<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b p-3 bg-[#fdfdfd]">
    <TheLogo @click="emit('goToTimeline')" />
    <TheHeaderProgress @click="emit('goToProgress')" />
  </header>
</template>

<script setup>
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'

const emit = defineEmits(['goToTimeline', 'goToProgress'])
</script>

<style scoped></style>
