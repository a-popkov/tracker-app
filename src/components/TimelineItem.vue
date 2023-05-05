<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="selectedActivityId"
      :options="options"
      placeholder="Программирование"
      @select="selectedActivityId = $event"
    />
  </li>
</template>

<script setup>
import { ref } from 'vue'
import { isTimelineItemValid } from '../validators'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  }
})

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

const selectedActivityId = ref(1)
</script>
