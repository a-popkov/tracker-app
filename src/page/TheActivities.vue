<template>
  <div class="flex flex-col grow">
    <ul class="divide-y grow" v-if="activities.length">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
        @set-seconds-to-complete="setSecondsToComplete(activity, $event)"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>

<script setup>
import ActivityItem from '../components/ActivityItem.vue'
import TheActivitiesEmptyState from '../components/TheActivitiesEmptyState.vue'
import TheActivityForm from '../components/TheActivityForm.vue'
import { isActivityValid, validateActivities, isNumber } from '../validators'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})

const emit = defineEmits({
  setActivitySecondsToComplete (activity, secondsToComplete) {
    return [isActivityValid(activity), isNumber(secondsToComplete)].every(Boolean)
  },
  createActivity: isActivityValid,
  deleteActivity: isActivityValid
})

function setSecondsToComplete (activity, secondsToComplete) {
  emit('setActivitySecondsToComplete', activity, secondsToComplete)
}
</script>
