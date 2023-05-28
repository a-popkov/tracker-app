<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <PhTrash class="w-6 h-6" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div>
      <BaseSelect
        class="font-mono"
        placeholder="h:mm"
        :options="PERIOD_SELECT_OPTIONS"
        :selected="secondsToComplete"
        @select="secondsToComplete = $event"
      />
    </div>
  </li>
</template>

<script setup>
import { PhTrash } from '@phosphor-icons/vue'
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '../constants'
import { isActivityValid, isUndefined } from '../validators'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

const secondsToComplete = ref(0)

const emit = defineEmits({
  delete: isUndefined
})
</script>
