<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t p-4 bg-white">
    <input
      type="text"
      placeholder="Activity name"
      class="w-full rounded border px-4 text-xl"
      v-model="name"
    />
    <BaseButton :disabled="name.trim() === ''">
      <PhPlus class="w-6 h-6" />
    </BaseButton>
  </form>
</template>

<script setup>
import { nextTick, ref } from 'vue'
import { PhPlus } from '@phosphor-icons/vue'
import BaseButton from './BaseButton.vue'
import { id } from '../function'
import { isActivityValid } from '../validators'

const name = ref('')
const emit = defineEmits({ submit: isActivityValid })

async function submit () {
  emit('submit', {
    id: id(),
    name: name.value,
    secondsToComplete: 0
  })

  name.value = ''

  await nextTick(() => {
    window.scrollTo(0, document.body.scrollHeight)
  })
}
</script>
