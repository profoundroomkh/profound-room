export const FULLY_BOOKED_LABEL = '預約滿'

export const scheduleDays = [
  { key: '2026-10-04', label: '日', date: '10/4' },
  { key: '2026-10-05', label: '一', date: '10/5' },
  { key: '2026-10-06', label: '二', date: '10/6' },
  { key: '2026-10-07', label: '三', date: '10/7' },
  { key: '2026-10-08', label: '四', date: '10/8' },
  { key: '2026-10-09', label: '五', date: '10/9' },
  { key: '2026-10-10', label: '六', date: '10/10' },
  { key: '2026-10-11', label: '日', date: '10/11' },
]

export const scheduleRows = [
  {
    id: 'andy',
    name: 'Andy／安迪',
    tag: '直男方案',
    times: ['全天', '00:00–15:30、22:30後', '00:00–07:00、10:30–20:30', '09:00–12:30', '00:00–18:30、23:00後', '09:00–12:30', '09:00', '09:00'],
  },
  {
    id: 'hugo',
    name: 'Hugo／雨果',
    tag: '現場師傅',
    times: ['全天', '全天', '全天', '全天', '全天', '全天', '全天', '全天'],
  },
  {
    id: 'alan',
    name: 'Alan／艾倫',
    times: ['—', '16:00–18:00', '16:00–18:00', '16:00–18:00', '16:00–18:00', '—', '—', '—'],
  },
  {
    id: 'oni',
    name: 'Oni／歐尼',
    times: ['—', '19:30–21:00', '16:00–17:00', '16:00–18:00', '—', '—', '—', '—'],
  },
  {
    id: 'noah',
    name: 'Noah／諾亞',
    times: ['11:00–22:00', '—', '11:00–22:00', '11:00–22:00', '—', '11:00–22:00', '11:00–22:00', '11:00–22:00'],
  },
  {
    id: 'gugu',
    name: 'Gugu／古古',
    times: ['12:00–21:00', '12:00–21:00', '—', '12:00–21:00', '—', '12:00–21:00', '12:00–21:00', '12:00–21:00'],
  },
  {
    id: 'dylan',
    name: 'Dylan／迪倫',
    times: ['12:00–22:00', '12:00–22:00', '12:00、17:00–22:00', '12:00、16:00–22:00', '12:00–18:00', '14:30–16:00、20:30–22:00', '12:00–22:00', '12:00–22:00'],
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
    times: ['21:00–23:30', '22:00–23:30', '19:30–23:30', '全天', '19:30–23:30', '—', '—', '—'],
  },
  {
    id: 'odin',
    name: 'Odin／奧丁',
    times: ['20:00 起', '20:00–21:00', '20:00–21:00', FULLY_BOOKED_LABEL, '20:00–21:00', '全天', '全天', '16:00–21:00'],
  },
  {
    id: 'raven',
    name: 'Raven／雷文',
    times: ['詢問', '全天', '全天', '00:00–13:30、18:00後', '全天', '全天', '全天', '全天'],
  },
  {
    id: 'milo',
    name: 'Milo／米洛',
    times: [FULLY_BOOKED_LABEL, FULLY_BOOKED_LABEL, '22:30–23:30', '22:30–23:30', FULLY_BOOKED_LABEL, '—', '—', '—'],
  },
  {
    id: 'bart',
    name: 'Alpha／阿法',
    times: ['—', '—', '—', '—', '—', '10:00–12:30、17:00–18:00', '10:00–20:00', '10:00–18:00'],
  },
  {
    id: 'zac',
    name: 'Zac／札克',
    tag: '深夜師傅',
    times: ['15:00–02:00', '15:00–18:00、22:30後', '15:00–02:00', '15:00–02:00', '15:00–02:00', '—', '—', '—'],
  },
]

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
  return Boolean(schedule && schedule.times.some((shift) => shift !== '—'))
}

export function getDailyTherapists(therapists, dateKey) {
  const todaySchedule = scheduleByDate[dateKey]
  if (!todaySchedule) return therapists

  return therapists.map((therapist) => {
    const shift = todaySchedule[therapist.id]
    if (shift === undefined) return therapist

    return {
      ...therapist,
      hasWeeklySchedule: hasWeeklySchedule(therapist.id),
      isFullyBooked: shift === FULLY_BOOKED_LABEL,
      status: fixedStatusOverrides[therapist.id]
        || (shift === '—' || shift === FULLY_BOOKED_LABEL ? 'paused' : 'available'),
    }
  })
}
