import { therapists as therapistProfiles } from '../data/therapists'
import { FULLY_BOOKED_LABEL, PENDING_UPDATE_LABEL } from '../data/weeklySchedule'

const profileIds = new Set(therapistProfiles.map((therapist) => therapist.id))

export function createPublicScheduleWindow(feed) {
  if (feed?.status !== 'ready' || !Array.isArray(feed.days) || !Array.isArray(feed.rows)) return null

  return {
    days: feed.days,
    rows: feed.rows.map((row) => ({
      ...row,
      profileAvailable: profileIds.has(row.id),
    })),
  }
}

export function getTherapistsWithPublicSchedule(profiles, scheduleWindow, dateKey) {
  const rowById = new Map((scheduleWindow?.rows || []).map((row) => [row.id, row]))
  const dayIndex = scheduleWindow?.days.findIndex((day) => day.key === dateKey) ?? -1
  const firstDayIndex = dayIndex >= 0 ? dayIndex : 0

  return profiles.map((profile) => {
    const row = rowById.get(profile.id)
    const time = dayIndex >= 0 ? row?.times[dayIndex] : undefined
    const isSchedulePending = !scheduleWindow || !row || dayIndex < 0 || time === PENDING_UPDATE_LABEL
    const isFullyBooked = time === FULLY_BOOKED_LABEL
      || (typeof time === 'string' && (time.includes('預約滿') || time.includes('已滿')))
    const isScheduledToday = !isSchedulePending && time !== '—' && !isFullyBooked
    const hasWeeklySchedule = Boolean(row && row.times
      .slice(firstDayIndex, firstDayIndex + 7)
      .some((shift) => shift !== '—' && shift !== PENDING_UPDATE_LABEL))

    return {
      ...profile,
      hasWeeklySchedule,
      isSchedulePending,
      isFullyBooked,
      isScheduledToday,
      status: profile.bookingPaused
        ? 'paused'
        : isSchedulePending
          ? 'pending'
          : isScheduledToday
            ? 'available'
            : 'advance',
    }
  })
}
