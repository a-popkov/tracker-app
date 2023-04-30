import { NAV_ITEMS, MIDNIGHT_HOUR, HOURS_IN_DAY } from './constants'

export function isPageValid (page) {
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isTimelineItemValid ({ hour }) {
  return typeof hour === 'number' && hour >= MIDNIGHT_HOUR && hour < HOURS_IN_DAY
}
