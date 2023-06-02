<template>
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-col flex-grow ">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activities="activities"
      :activity-select-options="activitySelectOptions"
      @set-timeline-item-activity="setTimelineItemActivity"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @create-activity="createActivity"
      @delete-activity="deleteActivity"
      @set-activity-seconds-to-complete="setActivitySecondsToComplete"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>

<script setup>
import { ref, computed } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './page/TheTimeline.vue'
import TheActivities from './page/TheActivities.vue'
import TheProgress from './page/TheProgress.vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import {
  normalizePageHash,
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities
} from './function'

const currentPage = ref(normalizePageHash())
const activities = ref(generateActivities())
const timelineItems = ref(generateTimelineItems())
const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

function goTo (page) {
  currentPage.value = page
}

function createActivity (activity) {
  activities.value.push(activity)
}

function deleteActivity (activity) {
  timelineItems.value.forEach(timelineItems => {
    if (timelineItems.activityId === activity.id) {
      timelineItems.activityId = null
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function setTimelineItemActivity ({ timelineItem, activity }) {
  timelineItem.activityId = activity?.id || null
}

function setActivitySecondsToComplete (activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete
}
</script>
