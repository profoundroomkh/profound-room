'use client'

import { useEffect, useState } from 'react'
import { taiwanWeekStart, validateScheduleFeed } from '../lib/bookingSchedule'

const EMPTY_FEED = { status: 'loading', days: [], rows: [] }
const UNAVAILABLE_FEED = { status: 'unavailable', days: [], rows: [], message: '目前無法讀取最新班表，請透過官方 LINE 確認。' }

export default function usePublicScheduleFeed(dateKey, initialFeed) {
  const [feed, setFeed] = useState(() => initialFeed || EMPTY_FEED)

  useEffect(() => {
    let active = true
    let sequence = 0
    const controller = new AbortController()
    const load = async () => {
      const requestId = ++sequence
      // Immediately discard an old week on Sunday; don't show stale shifts while loading.
      setFeed(previous => previous.status === 'ready' && previous.weekStart !== taiwanWeekStart()
        ? EMPTY_FEED : previous)
      try {
        const response = await fetch('/api/booking-schedule', {
          cache: 'no-store', headers: { accept: 'application/json' }, signal: controller.signal,
        })
        if (!response.ok) throw new Error('Schedule feed unavailable')
        const data = validateScheduleFeed(await response.json())
        if (active && requestId === sequence) setFeed(data)
      } catch {
        if (active && requestId === sequence && !controller.signal.aborted) setFeed(UNAVAILABLE_FEED)
      }
    }
    const refreshWhenVisible = () => {
      if (document.visibilityState === 'visible') load()
    }
    load()
    window.addEventListener('focus', load)
    document.addEventListener('visibilitychange', refreshWhenVisible)
    return () => {
      active = false
      controller.abort()
      window.removeEventListener('focus', load)
      document.removeEventListener('visibilitychange', refreshWhenVisible)
    }
  }, [dateKey])
  return feed
}
