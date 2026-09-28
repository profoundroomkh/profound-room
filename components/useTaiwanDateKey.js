'use client'

import { useEffect, useState } from 'react'
import {
  getMillisecondsUntilTaiwanMidnight,
  getTaiwanDateKey,
} from '../data/weeklySchedule'

export default function useTaiwanDateKey() {
  const [dateKey, setDateKey] = useState(() => getTaiwanDateKey())

  useEffect(() => {
    let timer
    const refreshDate = () => setDateKey(getTaiwanDateKey())
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') refreshDate()
    }

    const scheduleRefresh = () => {
      timer = window.setTimeout(() => {
        refreshDate()
        scheduleRefresh()
      }, getMillisecondsUntilTaiwanMidnight())
    }

    scheduleRefresh()
    window.addEventListener('focus', refreshDate)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('focus', refreshDate)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return dateKey
}
