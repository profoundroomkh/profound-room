import { loadBookingSchedule } from '../../../lib/bookingSchedule'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const feed = await loadBookingSchedule()
  return Response.json(feed, {
    status: feed.status === 'ready' ? 200 : 503,
    headers: { 'Cache-Control': 'no-store, max-age=0, must-revalidate' },
  })
}
