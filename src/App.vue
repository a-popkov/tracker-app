<template>
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-col flex-grow ">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @create-activity="createActivity"
      @delete-activity="deleteActivity"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>

<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './page/TheTimeline.vue'
import TheActivities from './page/TheActivities.vue'
import TheProgress from './page/TheProgress.vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import {
  id,
  normalizePageHash,
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities
} from './function'

const currentPage = ref(normalizePageHash())
const activities = ref(generateActivities())
const activitySelectOptions = generateActivitySelectOptions(activities.value)
const timelineItems = generateTimelineItems()

function goTo (page) {
  currentPage.value = page
}

function createActivity (name) {
  activities.value.push({
    id: id(),
    name,
    secondsToComplete: 0
  })
}

function deleteActivity (activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}
</script>
