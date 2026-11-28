import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import HomePromotion from '../components/HomePromotion'
import ScrollReveal from '../components/ScrollReveal'
import TherapistDirectory from '../components/TherapistDirectory'
import HomepageLowerSection from '../components/HomepageLowerSection'
import PricingSection from '../components/PricingSection'
import { loadBookingSchedule } from '../lib/bookingSchedule'

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Design reminder: preserve Profound Room's restrained black-and-warm-gold identity;
// the therapist directory uses controlled motion and explicit booking states.
export default async function Home() {
  const initialScheduleFeed = await loadBookingSchedule()
  return (
    <>
      <Header />
      <main
        id="main"
        style={{
          backgroundColor: '#050505',
          color: '#f2e1d0',
          minHeight: '100vh',
          fontFamily: 'serif',
        }}
      >
        <HomePromotion />
        <TherapistDirectory initialScheduleFeed={initialScheduleFeed} />
        <PricingSection />
        <HomepageLowerSection />

        <ScrollReveal as="section" style={{ '--reveal-distance': '24px' }}>
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              padding: '80px 24px 100px',
            }}
          >
            <h2
              style={{
                fontSize: '36px',
                fontWeight: 300,
                marginBottom: '24px',
                color: '#f2e1d0',
              }}
            >
              高雄 Gay SPA 與男士按摩服務
            </h2>

            <p
              style={{
                color: '#c9b8aa',
                lineHeight: '2',
                fontSize: '17px',
              }}
            >
              PROFOUND ROOM 深寓提供高雄預約制 Gay SPA、男士按摩、精油舒壓與深層放鬆服務。
              <br /><br />
              另有直男按摩與直男同志按摩專屬方案，價格與一般師傅不同，預約前請先確認價目。
              <br /><br />
              深寓無固定實體店面，依客人需求提供外出到府（飯店／旅館／客住處）或臨時租借外部場地（共享空間／計時工作室）。
              <br /><br />
              如果你正在尋找高雄 Gay SPA、高雄男士按摩、高雄同志按摩或高雄預約制 SPA，歡迎透過官方 LINE 詢問師傅、時段與服務地點安排。
            </p>
          </div>
        </ScrollReveal>

        <HomeHero />
      </main>
    </>
  )
}
