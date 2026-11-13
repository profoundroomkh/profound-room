export const FULLY_BOOKED_LABEL = '預約滿'
export const PENDING_UPDATE_LABEL = '待更新'

const previousWeekDays = [
  { key: '2026-10-26', label: '一', date: '10/26' },
  { key: '2026-10-27', label: '二', date: '10/27' },
  { key: '2026-10-28', label: '三', date: '10/28' },
  { key: '2026-10-29', label: '四', date: '10/29' },
  { key: '2026-10-30', label: '五', date: '10/30' },
  { key: '2026-10-31', label: '六', date: '10/31' },
  { key: '2026-11-01', label: '日', date: '11/1' },
]

const currentWeekDays = [
  { key: '2026-11-02', label: '一', date: '11/2' },
  { key: '2026-11-03', label: '二', date: '11/3' },
  { key: '2026-11-04', label: '三', date: '11/4' },
  { key: '2026-11-05', label: '四', date: '11/5' },
  { key: '2026-11-06', label: '五', date: '11/6' },
  { key: '2026-11-07', label: '六', date: '11/7' },
  { key: '2026-11-08', label: '日', date: '11/8' },
]

const upcomingWeekDays = [
  { key: '2026-11-09', label: '一', date: '11/9' },
  { key: '2026-11-10', label: '二', date: '11/10' },
  { key: '2026-11-11', label: '三', date: '11/11' },
  { key: '2026-11-12', label: '四', date: '11/12' },
  { key: '2026-11-13', label: '五', date: '11/13' },
  { key: '2026-11-14', label: '六', date: '11/14' },
  { key: '2026-11-15', label: '日', date: '11/15' },
]

const midNovemberDays = [
  { key: '2026-11-16', label: '一', date: '11/16' },
  { key: '2026-11-17', label: '二', date: '11/17' },
  { key: '2026-11-18', label: '三', date: '11/18' },
  { key: '2026-11-19', label: '四', date: '11/19' },
  { key: '2026-11-20', label: '五', date: '11/20' },
  { key: '2026-11-21', label: '六', date: '11/21' },
  { key: '2026-11-22', label: '日', date: '11/22' },
]

const lateNovemberDays = [
  { key: '2026-11-23', label: '一', date: '11/23' },
  { key: '2026-11-24', label: '二', date: '11/24' },
  { key: '2026-11-25', label: '三', date: '11/25' },
  { key: '2026-11-26', label: '四', date: '11/26' },
  { key: '2026-11-27', label: '五', date: '11/27' },
  { key: '2026-11-28', label: '六', date: '11/28' },
  { key: '2026-11-29', label: '日', date: '11/29' },
]

const endNovemberDays = [
  { key: '2026-11-30', label: '一', date: '11/30' },
  { key: '2026-12-01', label: '二', date: '12/1' },
  { key: '2026-12-02', label: '三', date: '12/2' },
  { key: '2026-12-03', label: '四', date: '12/3' },
  { key: '2026-12-04', label: '五', date: '12/4' },
  { key: '2026-12-05', label: '六', date: '12/5' },
  { key: '2026-12-06', label: '日', date: '12/6' },
]

const therapistDetails = [
  { id: 'manson', name: 'Manson' },
  { id: 'jeff', name: 'Jeph／哲夫' },
  { id: 'hale', name: 'Hale／海爾' },
  { id: 'max', name: 'Max／麥斯', tag: '直男方案' },
  { id: 'hugo', name: 'Hugo／雨果', tag: '現場師傅' },
  { id: 'andy', name: 'Andy／安迪', tag: '直男方案' },
  { id: 'alan', name: 'Alan／艾倫' },
  { id: 'oni', name: 'Oni／歐尼' },
  { id: 'noah', name: 'Noah／諾亞' },
  { id: 'gugu', name: 'Gugu／古古' },
  { id: 'dylan', name: 'Dylan／迪倫' },
  { id: 'kai', name: 'Kai／凱', tag: '提前一天預約' },
  { id: 'owen', name: 'Owen／歐文' },
  { id: 'odin', name: 'Odin／奧丁' },
  { id: 'raven', name: 'Raven／雷文' },
  { id: 'milo', name: 'Milo／米洛' },
  { id: 'lucian', name: 'Lucian／洛森', profileAvailable: false },
  { id: 'ansel', name: 'Ansel／安索' },
  { id: 'zac', name: 'Zac／札克', isPublished: false, tag: '深夜師傅' },
]

const previousWeekTimes = {
  manson: [...Array(6).fill(PENDING_UPDATE_LABEL), '09:00–22:00'],
  hale: ['—', '—', '—', '—', '—', '—', '—'],
  max: Array(7).fill('00:00–17:00'),
  hugo: ['全天', '全天', '—', '全天', '全天', '全天', '全天'],
  andy: ['全天', '全天', '13:00 已滿、22:00 起', '全天', '全天', '全天', '—'],
  alan: ['16:00–20:00', '16:00–20:00', '14:00–16:00', '16:00–20:00', '16:00–20:00', '—', '—'],
  oni: ['12:00–20:00', '—', '12:00–16:00', '12:00–22:00', '12:00–20:00', '—', '—'],
  noah: ['11:00–22:00', '11:00–22:00', '11:00–22:00', '—', '11:00–22:00', '11:00–22:00', '11:00–22:00'],
  gugu: ['12:00–21:00', '—', '12:00–21:00', '—', '—', '—', '—'],
  dylan: ['15:00–22:00', '15:00–22:00', '15:00–22:00', '15:00–22:00（預約滿）', '12:00–18:00（預約滿）', '15:00–22:00', '15:00–22:00'],
  kai: ['14:00–24:00', '14:00–24:00', '14:00–24:00', '14:00–24:00', '—', '14:00–24:00', '—'],
  owen: ['全天', '19:30–23:30', '全天', '19:30–23:30', '—', '—', '—'],
  odin: ['20:00 起', '20:00 起', '20:00（僅此預約時段）', '20:00（僅此預約時段）', '23:30 後', '19:00 起', '19:00 起'],
  raven: Array(7).fill('全天'),
  milo: ['22:30–23:30', '22:30–23:30', '22:30–23:30', '22:30–23:30', '22:30–23:30', '—', '—'],
  lucian: ['—', '—', '—', '—', '—', '20:30–01:00', '18:00–02:00'],
  ansel: ['—', '—', '—', '—', '—', '22:30–02:00', '22:30–02:00'],
  zac: ['15:00–02:00', '—', '—', '—', '—', '—', '—'],
}

const currentWeekTimes = {
  manson: Array(7).fill('09:00–22:00'),
  hale: ['—', '11:00–23:00', '11:00–23:00', '11:00–23:00', '11:00–23:00', '—', '—'],
  max: Array(7).fill('00:00–17:00'),
  hugo: Array(7).fill('全天'),
  andy: ['—', '—', '—', '—', '20:30 起', '15:00 後', '全天'],
  alan: ['—', '—', '—', '16:00–20:00', FULLY_BOOKED_LABEL, '—', '—'],
  oni: ['—', '—', '—', '12:00–22:00（其他時段可詢問）', FULLY_BOOKED_LABEL, '—', '—'],
  noah: ['11:00–22:00', '11:00–22:00', '11:00–22:00', '—', '11:00–22:00', '11:00–22:00', '11:00–22:00'],
  gugu: Array(7).fill('—'),
  dylan: ['12:00–22:00', '12:00–22:00', '18:00–22:00', '12:00–22:00', '12:00–22:00', '12:00–22:00', '12:00–22:00'],
  kai: ['14:00–24:00', '14:00–24:00', '14:00–24:00', '14:00–24:00', '14:00–24:00', '14:00–24:00', '—'],
  owen: ['19:30–23:30', '19:30–23:30', '19:30–23:30', '19:30–23:30', '19:30–23:30', FULLY_BOOKED_LABEL, '全天'],
  odin: ['20:00（僅此預約時段）', '20:00（僅此預約時段）', '20:00（僅此預約時段）', '20:00（僅此預約時段）', '20:00（僅此預約時段）', '16:00–20:00', '16:00–20:00'],
  raven: Array(7).fill('全天'),
  milo: ['22:30 後', '—', '22:30 後', '22:30 後', '22:30 後', '全天（詢問）', '22:30 後'],
  lucian: ['20:30–01:00', '—', '—', '20:30–01:00', '20:30–01:00', '20:30–01:00', '—'],
  ansel: Array(7).fill('—'),
  zac: Array(7).fill('—'),
}

const upcomingWeekTimes = {
  manson: Array(7).fill('09:00–22:00'),
  jeff: [PENDING_UPDATE_LABEL, '全天', '全天', '全天', '全天', '全天', '全天'],
  hale: ['—', '—', '11:00–23:00', '11:00–23:00', '11:00–23:00', '11:00–23:00', '11:00–23:00'],
  max: Array(7).fill('00:00–17:00'),
  hugo: Array(7).fill('全天'),
  andy: Array(7).fill('—'),
  dylan: ['12:00–17:30', '12:00–22:00', '12:00–22:00', '12:00–22:00', '12:00–22:00', '12:00–22:00', '12:00–22:00'],
  noah: ['11:00–22:00', '11:00–22:00', '11:00–22:00', '—', '11:00–22:00', '11:00–22:00', '11:00–22:00'],
  gugu: ['—', '—', '12:00–21:00', '12:00–21:00', '12:00–21:00', '12:00–21:00', '12:00–21:00'],
  milo: Array(7).fill('—'),
  raven: ['全天', '—', '—', '—', '全天', '全天', '全天'],
  odin: ['20:00（僅此預約時段）', '20:00（僅此預約時段）', '20:00（僅此預約時段）', '20:00（僅此預約時段）', '20:00（僅此預約時段）', '16:00–20:00', '16:00–20:00'],
  kai: ['14:00–24:00', '14:00–24:00', '14:00–24:00', '14:00–24:00', '14:00–24:00', '14:00–24:00', '—'],
  alan: ['16:00–20:00', '16:00–20:00', '16:00–18:00', '16:00–20:00', FULLY_BOOKED_LABEL, '—', '—'],
  oni: ['12:00–22:00（其他時段可詢問）', '12:00–22:00（其他時段可詢問）', '12:00–17:00（其他時段可詢問）', '12:00–22:00（其他時段可詢問）', '12:00–22:00（其他時段可詢問）', '12:00–16:00（其他時段可詢問）', '—'],
  lucian: ['22:30 後', '20:30–01:00', '20:30–01:00', '—', '22:30 後', '—', '20:30–01:00'],
  owen: ['19:30–23:30', '全天', '—', '—', '—', '—', '—'],
}

const midNovemberTimes = {
  manson: Array(7).fill('09:00–22:00'),
  hale: ['11:00–23:00', '11:00–23:00', '11:00–23:00', '11:00–23:00', '11:00–23:00', '—', '—'],
  hugo: Array(7).fill('全天'),
  lucian: ['—', '—', '—', ...Array(4).fill(PENDING_UPDATE_LABEL)],
}

const lateNovemberTimes = {
  manson: Array(7).fill('09:00–22:00'),
  hale: ['11:00–23:00', '11:00–23:00', '11:00–23:00', '11:00–23:00', '11:00–23:00', '—', '—'],
  hugo: Array(7).fill('全天'),
}

const endNovemberTimes = {
  manson: ['09:00–22:00', ...Array(6).fill(PENDING_UPDATE_LABEL)],
  hale: ['11:00–23:00', ...Array(6).fill(PENDING_UPDATE_LABEL)],
  hugo: ['全天', ...Array(6).fill(PENDING_UPDATE_LABEL)],
}

function makeRows(timesByTherapist) {
  return therapistDetails.map((therapist) => ({
    ...therapist,
    times: timesByTherapist[therapist.id] || Array(7).fill(PENDING_UPDATE_LABEL),
  }))
}

const scheduleWeeks = [
  { days: previousWeekDays, rows: makeRows(previousWeekTimes) },
  { days: currentWeekDays, rows: makeRows(currentWeekTimes) },
  { days: upcomingWeekDays, rows: makeRows(upcomingWeekTimes) },
  { days: midNovemberDays, rows: makeRows(midNovemberTimes) },
  { days: lateNovemberDays, rows: makeRows(lateNovemberTimes) },
  { days: endNovemberDays, rows: makeRows(endNovemberTimes) },
]

export function getScheduleWeek(dateKey = '2026-11-01') {
  const exactWeek = scheduleWeeks.find((week) => week.days.some((day) => day.key === dateKey))
  if (exactWeek) return exactWeek
  return dateKey < currentWeekDays[0].key ? scheduleWeeks[0] : scheduleWeeks[scheduleWeeks.length - 1]
}

export function getScheduleWindow(dateKey = getTaiwanDateKey()) {
  const start = new Date(`${dateKey}T00:00:00Z`)
  const weekdayLabels = ['日', '一', '二', '三', '四', '五', '六']
  const knownDays = scheduleWeeks.flatMap((week) => week.days)
  const days = Array.from({ length: 8 }, (_, offset) => {
    const date = new Date(start.getTime() + offset * 24 * 60 * 60 * 1000)
    const key = date.toISOString().slice(0, 10)
    const known = knownDays.find((day) => day.key === key)
    return known || {
      key,
      label: weekdayLabels[date.getUTCDay()],
      date: `${date.getUTCMonth() + 1}/${date.getUTCDate()}`,
    }
  })
  const rows = therapistDetails.map((therapist) => ({
    ...therapist,
    times: days.map((day) => {
      const week = scheduleWeeks.find((candidate) => candidate.days.some((known) => known.key === day.key))
      if (!week) return PENDING_UPDATE_LABEL
      const dayIndex = week.days.findIndex((known) => known.key === day.key)
      return week.rows.find((row) => row.id === therapist.id)?.times[dayIndex] || PENDING_UPDATE_LABEL
    }),
  }))
  return { days, rows }
}

// Static exports preserve compatibility for consumers that need a default week.
export const scheduleDays = previousWeekDays
export const scheduleRows = scheduleWeeks[0].rows.filter((therapist) => therapist.isPublished !== false)

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
  return getScheduleWeek(dateKey).days.findIndex((day) => day.key === dateKey)
}

export function hasWeeklySchedule(therapistId, dateKey = '2026-11-01') {
  const { rows } = getScheduleWeek(dateKey)
  const schedule = rows.find((therapist) => therapist.id === therapistId)
  return Boolean(schedule && schedule.times.some((shift) => shift !== '—' && shift !== PENDING_UPDATE_LABEL))
}

export function getDailyTherapists(therapists, dateKey) {
  const week = getScheduleWeek(dateKey)
  const dayIndex = week.days.findIndex((day) => day.key === dateKey)

  const todaySchedule = Object.fromEntries(
    week.rows.map((therapist) => [therapist.id, therapist.times[dayIndex]]),
  )

  return therapists.map((therapist) => {
    const shift = todaySchedule[therapist.id]
    const isSchedulePending = shift === undefined || shift === PENDING_UPDATE_LABEL
    const isFullyBooked = shift === FULLY_BOOKED_LABEL
      || (typeof shift === 'string' && (shift.includes('預約滿') || shift.includes('已滿')) && !shift.includes('起'))
    const isScheduledToday = !isSchedulePending && shift !== '—' && !isFullyBooked

    return {
      ...therapist,
      hasWeeklySchedule: isSchedulePending ? false : hasWeeklySchedule(therapist.id, dateKey),
      isSchedulePending,
      isFullyBooked,
      isScheduledToday,
      status: therapist.bookingPaused ? 'paused' : isScheduledToday ? 'available' : 'advance',
    }
  })
}
