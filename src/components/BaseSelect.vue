<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="select(null)">
      <Ph-X class="w-6 h-6" />
    </BaseButton>
    <select
      class="w-full truncate rounded bg-gray-100 py-1 px-2 text-xl"
      @change="select($event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
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
import { computed } from 'vue'
import BaseButton from './BaseButton.vue'
import { BUTTON_TYPE_NEUTRAL } from '../constants'
import { PhX } from '@phosphor-icons/vue'
import { validateSelectOptions, isUndefinedOrNull, isSelectValueValid } from '../validators'
import { normalizeSelectValue } from '../function'

const props = defineProps({
  selected: [Number, String],
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
  select: isSelectValueValid
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

function select (value) {
  emit('select', normalizeSelectValue(value))
}
</script>
