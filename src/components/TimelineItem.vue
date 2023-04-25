<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <a href="#" :class="hourLinkClasses">{{ timelineItem.hour }}:00</a>
    <div class="flex gap-2">
      <button
        class="rounded p-3 bg-gray-100 enabled:hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Ph-X class="h-8" />
      </button>
      <select name="" id="" class="w-full truncate rounded bg-gray-100 py-1 px-2 text-xl">
        <option selected disabled value="">Отдых</option>
        <option v-for="{ value, label } in options" :key="value" :value="value">
          {{ label }}</option
        >
        <!-- <option value="">Программирование</option>
        <option value="">Спорт</option>
        <option value="">Обучение</option> -->
      </select>
    </div>
  </li>
</template>

<script setup>
import { PhX } from '@phosphor-icons/vue'

const props = defineProps(['timelineItem'])
const options = [
  {
    value: 1,
    label: 'Программирование'
  },
  {
    value: 2,
    label: 'Спорт'
  },
  {
    value: 3,
    label: 'Обучение'
  }
]

const hourLinkClasses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono text-lg',
  props.timelineItem.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]
</script>
