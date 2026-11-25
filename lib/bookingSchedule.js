const DEFAULT_API_BASE_URL = 'https://profoundrb-hcxv5k9i.manus.space'

export function unavailableSchedule() {
  return { status: 'unavailable', days: [], rows: [], message: '目前無法讀取最新班表，請透過官方 LINE 確認。' }
}

export function taiwanWeekStart(now = new Date()) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Taipei', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now).map(({ type, value }) => [type, value]))
  const day = new Date(`${parts.year}-${parts.month}-${parts.day}T00:00:00Z`)
  day.setUTCDate(day.getUTCDate() - day.getUTCDay())
  return day.toISOString().slice(0, 10)
}

export function validateScheduleFeed(feed, now = new Date()) {
  const weekStart = taiwanWeekStart(now)
  if (feed?.status !== 'ready' || feed.timezone !== 'Asia/Taipei'
    || feed.weekStartsOn !== 'Sunday' || feed.weekStart !== weekStart
    || !Array.isArray(feed.days) || feed.days.length !== 14
    || !Array.isArray(feed.rows)) throw new Error('Invalid public schedule')

  const start = new Date(`${weekStart}T00:00:00Z`).getTime()
  const labels = ['日', '一', '二', '三', '四', '五', '六']
  const days = feed.days.map((day, index) => {
    const date = new Date(start + index * 86400000)
    const key = date.toISOString().slice(0, 10)
    if (day.key !== key) throw new Error('Schedule dates do not match current week')
    return { key, label: labels[date.getUTCDay()], date: `${date.getUTCMonth() + 1}/${date.getUTCDate()}` }
  })
  const ids = new Set()
  const rows = feed.rows.map(row => {
    if (typeof row.id !== 'string' || ids.has(row.id) || typeof row.name !== 'string'
      || typeof row.tag !== 'string' || !Array.isArray(row.times) || row.times.length !== 14
      || row.times.some(time => typeof time !== 'string')) throw new Error('Invalid schedule row')
    ids.add(row.id)
    return { id: row.id, name: row.name, tag: row.tag, times: row.times }
  })
  return {
    status: 'ready', timezone: 'Asia/Taipei', weekStartsOn: 'Sunday', weekStart,
    checkedAt: feed.checkedAt, days, rows,
  }
}

/** Server-only connection: default is the stable production booking domain, never the temporary preview URL. */
export async function loadBookingSchedule() {
  const apiBaseUrl = (process.env.BOOKING_SCHEDULE_API_BASE_URL || DEFAULT_API_BASE_URL).replace(/\/+$/, '')
  const input = encodeURIComponent(JSON.stringify({ json: {} }))
  try {
    const response = await fetch(`${apiBaseUrl}/api/trpc/bookingSources.getWebsiteSchedule?input=${input}`, {
      cache: 'no-store', headers: { accept: 'application/json' }, signal: AbortSignal.timeout(10_000),
    })
    if (!response.ok) return unavailableSchedule()
    const payload = await response.json()
    return validateScheduleFeed(payload?.result?.data?.json)
  } catch {
    return unavailableSchedule()
  }
}
