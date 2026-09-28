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

    const scheduleRefresh = () => {
      timer = window.setTimeout(() => {
        setDateKey(getTaiwanDateKey())
        scheduleRefresh()
      }, getMillisecondsUntilTaiwanMidnight())
    }

    scheduleRefresh()
    return () => window.clearTimeout(timer)
  }, [])

  return dateKey
}
