<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)">
      <Ph-X class="h-8" />
    </BaseButton>
    <select
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-xl"
      @change="emit('select', +$event.target.value)"
    >
      <option selected disabled value="">{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}</option
      >
    </select>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue'
import { PhX } from '@phosphor-icons/vue'
import { validateSelectOptions } from '../validators'

defineProps({
  selected: Number,
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  },
  placeholder: {
    required: true,
    type: String
  }
})

const emit = defineEmits({
  select (value) {
    return typeof value === 'number'
  }
})
</script>
