import Header from '../../components/Header'
import BookingTemplate from '../../components/BookingTemplate'
import TrackedLink from '../../components/TrackedLink'
import styles from './reservation.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

export const metadata = {
  title: '預約方式｜深寓 PROFOUND ROOM｜高雄 Gay SPA',
  description:
    '了解深寓 PROFOUND ROOM 高雄 Gay SPA 與男士按摩的預約方式、預約流程、位置說明與改期取消規則。',
  keywords: [
    '高雄 Gay SPA 預約',
    '高雄男士按摩預約',
    '高雄預約制 SPA',
    '深寓預約',
  ],
  alternates: {
    canonical: 'https://profoundroom.com/reservation',
  },
  openGraph: {
    title: '預約方式｜深寓 PROFOUND ROOM',
    description: '高雄預約制 Gay SPA 與男士放鬆空間的預約流程與注意事項。',
    url: 'https://profoundroom.com/reservation',
    type: 'website',
  },
}

const steps = [
  ['01', '加入官方 LINE'],
  ['02', '提供日期與時段'],
  ['03', '客服確認時段'],
  ['04', '取得詳細位置'],
]

const reservationSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '深寓 PROFOUND ROOM 預約流程',
  description: '高雄預約制 Gay SPA 與男士放鬆空間的預約方式。',
  step: steps.map(([name, text]) => ({
    '@type': 'HowToStep',
    name,
    text,
  })),
}

export default function ReservationPage() {
  return (
    <>
      <Header />
      <main className={styles.page} id="reservation">
        <div className={styles.shell}>
          <p className={styles.eyebrow}>RESERVATION GUIDE</p>
          <h1 className={styles.title}>預約方式</h1>
          <p className={styles.lead}>
            深寓 PROFOUND ROOM 為高雄預約制 Gay SPA 與男士放鬆空間，
            希望每一次到訪，都能保有安靜、界線感與舒適節奏。
          </p>

          <div className={styles.actions}>
            <TrackedLink
              className={styles.primaryCta}
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
              eventName="reservation_intent"
              eventParameters={{ source: 'reservation_page_top' }}
            >
              LINE 立即預約
            </TrackedLink>
          </div>

          <section className={styles.section} aria-labelledby="reservation-flow-title">
            <h2 className={styles.sectionHeading} id="reservation-flow-title">
              四步驟開始預約
            </h2>
            <p className={styles.sectionLead}>
              第一次來訪也不用複雜，依照以下流程即可開始。
            </p>
            <div className={styles.steps}>
              {steps.map(([number, text]) => (
                <div className={styles.step} key={number}>
                  <span className={styles.stepNumber}>{number}</span>
                  <span className={styles.stepText}>{text}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-label="預約格式">
            <BookingTemplate />
          </section>

          <section className={styles.section} aria-labelledby="appointment-only-title">
            <h2 className={styles.sectionHeading} id="appointment-only-title">
              預約前請先知道
            </h2>
            <div className={styles.infoCard}>
              <p>本館採完全預約制，不接受現場臨時來訪。</p>
              <p>客服確認日期與時段後，才算完成預約。</p>
              <p>若需改期或取消，請提前告知，以利安排後續時段。</p>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="location-title">
            <h2 className={styles.sectionHeading} id="location-title">
              位置與到店
            </h2>
            <div className={styles.infoCard}>
              <p>
                高雄車站 1 號出口往建國路、中山路方向，往左走約 3 分鐘即可到達。
              </p>
              <p>完成預約後將提供詳細位置資訊。</p>
            </div>
            <p className={styles.locationLine}>
              為保留安靜與隱私感，詳細位置會在預約確認後提供。
            </p>
          </section>

          <div className={styles.actions}>
            <TrackedLink
              className={styles.primaryCta}
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
              eventName="reservation_intent"
              eventParameters={{ source: 'reservation_page_bottom' }}
            >
              LINE 立即預約
            </TrackedLink>
            <TrackedLink
              className={styles.secondaryCta}
              href="/faq"
              eventName="faq_click"
              eventParameters={{ source: 'reservation_page' }}
            >
              先查看常見問題
            </TrackedLink>
          </div>

          <p className={styles.footerNote}>
            Adults Only｜18+　·　優惠與課程內容依官網公告及預約時確認為準。
          </p>
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reservationSchema) }}
      />
    </>
  )
}
