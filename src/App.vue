<template>
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-col flex-grow ">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
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
import { normalizePageHash, generateTimelineItems, generateActivitySelectOptions } from './function'

const currentPage = ref(normalizePageHash())
const timelineItems = generateTimelineItems()

const activities = ['Coding', 'Reading', 'Training']

function goTo (page) {
  currentPage.value = page
}

const activitySelectOptions = generateActivitySelectOptions(activities)
</script>
