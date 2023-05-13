<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <form
      @submit.prevent="emit('createActivity', newActivity)"
      class="sticky bottom-[57px] flex gap-2 border-t p-4 bg-white"
    >
      <input
        type="text"
        placeholder="Activity name"
        class="w-full rounded border px-4 text-xl"
        :value="newActivity"
        @input="newActivity = $event.target.value"
      />
      <BaseButton>
        <PhPlus class="w-6 h-6" />
      </BaseButton>
    </form>
  </div>
</template>

<script setup>
import ActivityItem from '../components/ActivityItem.vue'
import BaseButton from '../components/BaseButton.vue'
import { isActivityValid, validateActivities } from '../validators'
import { PhPlus } from '@phosphor-icons/vue'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})

const emit = defineEmits({
  createActivity: isActivityValid,
  deleteActivity: isActivityValid
})

let newActivity = ''
</script>
