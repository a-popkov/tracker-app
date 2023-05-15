<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t p-4 bg-white">
    <input
      type="text"
      placeholder="Activity name"
      class="w-full rounded border px-4 text-xl"
      v-model="activity"
    />
    <BaseButton :disabled="activity.trim() === ''">
      <PhPlus class="w-6 h-6" />
    </BaseButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { PhPlus } from '@phosphor-icons/vue'
import BaseButton from './BaseButton.vue'
import { isActivityValid } from '../validators'

const activity = ref('')
const emit = defineEmits({ submit: isActivityValid })

function submit () {
  emit('submit', activity.value)

  activity.value = ''
}
</script>
