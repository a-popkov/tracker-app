import { PhClock, PhListBullets, PhChartBar } from '@phosphor-icons/vue'

export const BUTTON_TYPE_PRIMARY = 'primary'
export const BUTTON_TYPE_DANGER = 'danger'
export const BUTTON_TYPE_NEUTRAL = 'neutral'

export const BUTTON_TYPES = [BUTTON_TYPE_PRIMARY, BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL]

export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activity'
export const PAGE_PROGRESS = 'progress'
export const HOURS_IN_DAY = 24
export const MIDNIGHT_HOUR = 0

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: PhClock,
  [PAGE_ACTIVITIES]: PhListBullets,
  [PAGE_PROGRESS]: PhChartBar
}

export const PERIOD_SELECT_OPTIONS = [
  {
    value: 15,
    label: '0:15'
  },
  {
    value: 30,
    label: '0:30'
  },
  {
    value: 45,
    label: '0:45'
  }
]
