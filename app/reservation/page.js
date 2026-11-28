import Image from 'next/image'
import Header from '../../components/Header'
import BookingTemplate from '../../components/BookingTemplate'
import TrackedLink from '../../components/TrackedLink'
import styles from './reservation.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

export const metadata = {
  title: '預約方式｜深寓 PROFOUND ROOM｜高雄 Gay SPA',
  description:
    '了解深寓 PROFOUND ROOM 高雄 Gay SPA 與男士按摩的預約方式、預約流程、服務地點安排與改期取消規則。',
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
    description: '高雄預約制 Gay SPA 與男士按摩服務的預約流程、地點安排與注意事項。',
    url: 'https://profoundroom.com/reservation',
    type: 'website',
  },
}

const steps = [
  ['01', '加入官方 LINE'],
  ['02', '提供日期與時段'],
  ['03', '客服確認時段'],
  ['04', '確認服務地點'],
]

const reservationSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '深寓 PROFOUND ROOM 預約流程',
  description: '高雄預約制 Gay SPA 與男士按摩服務的預約方式及地點安排。',
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
            深寓 PROFOUND ROOM 提供高雄預約制 Gay SPA 與男士按摩服務，
            希望每一次預約，都能保有安靜、界線感與舒適節奏。
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

          <div className={styles.policyVisual}>
            <Image
              src="/images/booking-benefits-guide.png"
              alt="深寓優惠使用須知圖解"
              width={1856}
              height={910}
              sizes="(max-width: 720px) 100vw, 560px"
            />
            <p>優惠使用須知；詳細適用方式請洽官方 LINE。</p>
          </div>

          <section className={styles.section} aria-labelledby="appointment-only-title">
            <h2 className={styles.sectionHeading} id="appointment-only-title">
              預約前請先知道
            </h2>
            <div className={styles.infoCard}>
              <p className={styles.infoEyebrow}>付款方式</p>
              <p>一般付款方式僅提供：現金、LINE Pay Money 轉帳、網銀轉帳。</p>
              <div className={styles.divider} aria-hidden="true" />
              <p>深寓採完全預約制，不接受未經確認的現場到訪；服務地點依需求事先安排。</p>
              <p>客服確認日期與時段後，才算完成預約。</p>
              <div className={styles.divider} aria-hidden="true" />
              <p className={styles.infoEyebrow}>取消與改期</p>
              <p className={styles.infoHighlight}>如需取消或改期，請儘早聯繫官方 LINE 客服。</p>
              <p>如遇突發疾病、交通事故或其他重大緊急狀況，也請主動告知客服，以便協助安排。</p>
              <div className={styles.divider} aria-hidden="true" />
              <p className={styles.infoEyebrow}>現場取消提醒</p>
              <p className={styles.infoHighlight}>師傅抵達現場後取消預約，需支付 NT$500 車馬費。</p>
              <p>該筆車馬費將全額補貼予師傅；若師傅另有收取其他費用，請告知客服。</p>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="location-title">
            <h2 className={styles.sectionHeading} id="location-title">
              服務地點安排
            </h2>
            <div className={styles.infoCard}>
              <p>無固定實體店面，依客人需求提供外出到府（飯店／旅館／客住處）或臨時租借外部場地（共享空間／計時工作室）。</p>
              <p>預約時請先透過官方 LINE 客服確認服務地點、時段與相關安排。</p>
            </div>
            <p className={styles.locationLine}>
              外部場地須依需求及可預約狀況協調，實際安排以客服確認為準。
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
