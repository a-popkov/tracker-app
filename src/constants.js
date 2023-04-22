import { PhClock, PhListBullets, PhChartBar } from '@phosphor-icons/vue'

export const PAGE_TIMELINE = 'выполняемые'
export const PAGE_ACTIVITIES = 'активные'
export const PAGE_PROGRESS = 'прогресс'

export const NAV_ITEMS = {
  [PAGE_TIMELINE]: PhClock,
  [PAGE_ACTIVITIES]: PhListBullets,
  [PAGE_PROGRESS]: PhChartBar
}
