export const FULLY_BOOKED_LABEL = '預約滿'
export const PENDING_UPDATE_LABEL = '待更新'

export const scheduleDays = [
  { key: '2026-10-25', label: '日', date: '10/25' },
  { key: '2026-10-26', label: '一', date: '10/26' },
  { key: '2026-10-27', label: '二', date: '10/27' },
  { key: '2026-10-28', label: '三', date: '10/28' },
  { key: '2026-10-29', label: '四', date: '10/29' },
  { key: '2026-10-30', label: '五', date: '10/30' },
  { key: '2026-10-31', label: '六', date: '10/31' },
  { key: '2026-11-01', label: '日', date: '11/1' },
]

const allScheduleRows = [
  {
    id: 'hale',
    name: 'Hale／海爾',
    times: ['—', '—', '—', '—', '—', '—', '—', '詢問'],
  },
  {
    id: 'max',
    name: 'Max／麥斯',
    tag: '直男方案',
    times: ['00:00–17:00', '00:00–17:00', '00:00–17:00', '00:00–17:00', '00:00–17:00', '00:00–17:00', '00:00–17:00', '00:00–17:00'],
  },
  {
    id: 'hugo',
    name: 'Hugo／雨果',
    tag: '現場師傅',
    times: ['全天', '詢問', '詢問', '詢問', '詢問', '詢問', '詢問', '詢問'],
  },
  {
    id: 'andy',
    name: 'Andy／安迪',
    tag: '直男方案',
    times: ['—', '全天（詢問）', '全天（詢問）', '全天（詢問）', '全天（詢問）', '全天（詢問）', '全天（詢問）', '全天（詢問）'],
  },
  {
    id: 'alan',
    name: 'Alan／艾倫',
    times: ['—', '詢問', '詢問', '詢問', '詢問', '詢問', '詢問', '詢問'],
  },
  {
    id: 'oni',
    name: 'Oni／歐尼',
    times: ['—', '14:30–17:30（120分）／18:00（90分）', '12:00–22:00', '12:00–16:00', '12:00–22:00', '12:00–20:00', '—', '—'],
  },
  {
    id: 'noah',
    name: 'Noah／諾亞',
    times: ['11:00–22:00', '11:00–22:00', '11:00–22:00', '11:00–22:00', '—', '11:00–22:00', '11:00–22:00', '11:00–22:00'],
  },
  {
    id: 'gugu',
    name: 'Gugu／古古',
    times: ['12:00–21:00', '12:00–21:00', '—', '12:00–21:00', '—', '12:00–21:00', '12:00–21:00', '12:00–21:00'],
  },
  {
    id: 'dylan',
    name: 'Dylan／迪倫',
    times: ['12:00–22:00', '12:00–22:00', '12:00–22:00', '12:00–22:00', '12:00–22:00', '12:00–22:00', '12:00–22:00', '12:00–22:00'],
  },
  {
    id: 'kai',
    name: 'Kai／凱',
    tag: '提前一天預約',
    times: ['—', '14:00–24:00', '14:00–24:00', '14:00–24:00', '14:00–24:00', '14:00–24:00', '14:00–24:00', '—'],
  },
  {
    id: 'owen',
    name: 'Owen／歐文',
    times: ['全天', '全天', '19:30–23:30', '全天', '19:30–23:30', '—', '—', '—'],
  },
  {
    id: 'odin',
    name: 'Odin／奧丁',
    times: ['—', '20:00 起', '20:00 起', '20:00 起', '20:00 起', '20:00 起', '19:00 起', '19:00 起'],
  },
  {
    id: 'raven',
    name: 'Raven／雷文',
    times: ['全天', '全天', '全天', '全天', '全天', '全天', '全天', '全天'],
  },
  {
    id: 'milo',
    name: 'Milo／米洛',
    times: ['22:30–23:30', '22:30–23:30', '22:30–23:30', '22:30–23:30', '22:30–23:30', '22:30–23:30', '—', '—'],
  },
  {
    id: 'zac',
    name: 'Zac／札克',
    isPublished: false,
    tag: '深夜師傅',
    times: ['15:00–02:00', '17:30–23:30（120分）／00:00（90分）', '15:00–02:00', '15:00–02:00', '15:00–02:00', '15:00–02:00', '15:00–02:00', '15:00–02:00'],
  },
]

// 暫時下架的師傅保留原班表資料，之後只需恢復 isPublished 即可重新上架。
export const scheduleRows = allScheduleRows.filter((therapist) => therapist.isPublished !== false)

const scheduleByDate = Object.fromEntries(
  scheduleDays.map((day, dayIndex) => [
    day.key,
    Object.fromEntries(scheduleRows.map((therapist) => [therapist.id, therapist.times[dayIndex]])),
  ]),
)

// 班表現在直接控制每日狀態；若當日有「全天」便顯示可預約。
const fixedStatusOverrides = {}

export function getTaiwanDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Taipei',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date)
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]))
  return `${values.year}-${values.month}-${values.day}`
}

export function getMillisecondsUntilTaiwanMidnight(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Taipei',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]))
  const seconds = (Number(values.hour) * 60 * 60) + (Number(values.minute) * 60) + Number(values.second)
  return Math.max(1000, ((24 * 60 * 60) - seconds) * 1000 + 500)
}

export function getScheduleDayIndex(dateKey) {
  return scheduleDays.findIndex((day) => day.key === dateKey)
}

export function hasWeeklySchedule(therapistId) {
  const schedule = scheduleRows.find((therapist) => therapist.id === therapistId)
  return Boolean(schedule && schedule.times.some((shift) => shift !== '—' && shift !== PENDING_UPDATE_LABEL))
}

export function getDailyTherapists(therapists, dateKey) {
  const todaySchedule = scheduleByDate[dateKey]
  if (!todaySchedule) return therapists

  return therapists.map((therapist) => {
    const shift = todaySchedule[therapist.id]
    if (shift === undefined) return therapist

    const isSchedulePending = shift === PENDING_UPDATE_LABEL

    return {
      ...therapist,
      hasWeeklySchedule: isSchedulePending ? false : hasWeeklySchedule(therapist.id),
      isSchedulePending,
      isFullyBooked: shift === FULLY_BOOKED_LABEL,
      status: fixedStatusOverrides[therapist.id]
        || (shift === '—' || shift === FULLY_BOOKED_LABEL || isSchedulePending ? 'paused' : 'available'),
    }
  })
}
