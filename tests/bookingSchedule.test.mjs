import test from 'node:test'
import assert from 'node:assert/strict'
import { taiwanWeekStart, validateScheduleFeed, loadBookingSchedule } from '../lib/bookingSchedule.js'

const now = new Date('2026-11-26T01:00:00+08:00')
function fixture() {
  const days = Array.from({ length: 14 }, (_, index) => ({ key: new Date(Date.UTC(2026, 10, 22 + index)).toISOString().slice(0, 10) }))
  return {
    status: 'ready', timezone: 'Asia/Taipei', weekStartsOn: 'Sunday', weekStart: '2026-11-22',
    checkedAt: now.toISOString(), days,
    rows: [{ id: 'kai', name: 'Kai', tag: '', times: Array(14).fill('—'), editToken: 'private' }],
    appointments: [{ guest: 'must-not-expose' }],
  }
}

test('week switches at Sunday 00:00 Asia/Taipei, not UTC or Monday', () => {
  assert.equal(taiwanWeekStart(new Date('2026-11-28T23:59:59.999+08:00')), '2026-11-22')
  assert.equal(taiwanWeekStart(new Date('2026-11-29T00:00:00+08:00')), '2026-11-29')
  assert.equal(taiwanWeekStart(new Date('2027-01-01T00:00:00+08:00')), '2026-12-27')
})

test('only safe public fields pass through the proxy', () => {
  const feed = validateScheduleFeed(fixture(), now)
  assert.equal(feed.days[0].label, '日')
  assert.equal(feed.days[13].key, '2026-12-05')
  assert.equal(feed.rows[0].times.length, 14)
  assert.deepEqual(Object.keys(feed.rows[0]).sort(), ['id', 'name', 'tag', 'times'])
  assert.doesNotMatch(JSON.stringify(feed), /editToken|appointments|must-not-expose/)
})

test('rejects stale previous week even if backend returned a ready response', () => {
  assert.throws(() => validateScheduleFeed(fixture(), new Date('2026-11-29T00:00:00+08:00')))
})

test('rejects missing dates, duplicate staff and invalid time arrays', () => {
  const badDates = fixture()
  badDates.days[3].key = '2026-11-30'
  assert.throws(() => validateScheduleFeed(badDates, now))
  const duplicate = fixture()
  duplicate.rows.push(duplicate.rows[0])
  assert.throws(() => validateScheduleFeed(duplicate, now))
  const missingTimes = fixture()
  missingTimes.rows[0].times.pop()
  assert.throws(() => validateScheduleFeed(missingTimes, now))
})

test('upstream failure is unavailable, never a static fallback; server fetch disables cache', async () => {
  const originalFetch = globalThis.fetch
  globalThis.fetch = async (url, options) => {
    assert.match(url, /bookingSources.getWebsiteSchedule/)
    assert.equal(options.cache, 'no-store')
    return { ok: false, status: 404 }
  }
  try {
    const feed = await loadBookingSchedule()
    assert.equal(feed.status, 'unavailable')
    assert.deepEqual(feed.rows, [])
    assert.deepEqual(feed.days, [])
  } finally {
    globalThis.fetch = originalFetch
  }
})
