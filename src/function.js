import { PAGE_TIMELINE, MIDNIGHT_HOUR, HOURS_IN_DAY, SECOND_IN_HOUR } from './constants'
import { isNull, isPageValid } from './validators'

export function normalizePageHash () {
  const page = window.location.hash.slice(1)
  if (isPageValid(page)) {
    return page
  }
  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}

export function normalizeSelectValue (value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function generateActivities () {
  return ['Coding', 'Reading'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours * SECOND_IN_HOUR
  }))
}

export function id () {
  return (
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substring(2)
  )
}

export function generateTimelineItems () {
  const timelineItems = []

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    timelineItems.push({ hour })
  }

  return timelineItems
}

export function generateActivitySelectOptions (activities) {
  return activities.map(activity => ({
    label: activity.name,
    value: activity.id
  }))
}
