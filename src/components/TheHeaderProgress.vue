<template>
  <a class="text-sm" :href="`#${PAGE_PROGRESS}`">
    <span v-if="true" class="inline-flex items-center gap-1">
      День завершен!
      <PhCheckCircle weight="fill" class="h-5 w-5 text-green-500" />
    </span>
    <span v-else class="inline-flex items-center gap-1">
      Прогресc: <span class="font-mono">20%</span>
      <PhSpinner class="h-5 w-5 text-red-500">
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
      </PhSpinner>
    </span>
  </a>
</template>

<script setup>
import { PhCheckCircle, PhSpinner } from '@phosphor-icons/vue'
import { PAGE_PROGRESS } from '../constants'
</script>
