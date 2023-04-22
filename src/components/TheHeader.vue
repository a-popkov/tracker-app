<template>
  <header class="sticky top-0 z-20 border-b p-3 bg-[#fdfdfd]">
    <div class="container flex items-center justify-between">
      <TheLogo @click="emit('goToTimeline')" />
      <TheHeaderProgress @click="emit('goToProgress')" />
    </div>
  </header>
</template>

<script setup>
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'

const emit = defineEmits(['goToTimeline', 'goToProgress'])
</script>

<style scoped></style>
