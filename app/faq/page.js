import Header from '../../components/Header'
import TrackedLink from '../../components/TrackedLink'
import styles from './faq.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

export const metadata = {
  title: '常見問題｜深寓 PROFOUND ROOM｜高雄 Gay SPA',
  description:
    '查看深寓 PROFOUND ROOM 高雄 Gay SPA 的預約制、第一次體驗、位置、服務流程與男士按摩常見問題。',
  keywords: [
    '高雄 Gay SPA FAQ',
    '高雄男士按摩常見問題',
    '高雄預約制 SPA',
    '深寓常見問題',
  ],
  alternates: {
    canonical: 'https://profoundroom.com/faq',
  },
  openGraph: {
    title: '常見問題｜深寓 PROFOUND ROOM',
    description: '高雄預約制 Gay SPA 與男士放鬆空間的常見問題。',
    url: 'https://profoundroom.com/faq',
    type: 'website',
  },
}

const faqs = [
  {
    question: '第一次預約 Gay SPA 會很尷尬嗎？',
    answer:
      '其實大部分第一次來訪的人都會緊張。PROFOUND ROOM 更重視放鬆感、隱私與舒適節奏，不需要有壓力。',
  },
  {
    question: '工作室是完全預約制嗎？',
    answer:
      '是的，目前採完全預約制，為了維護空間品質與隱私感，不接受現場臨時來訪。',
  },
  {
    question: '預約完成後會提供地址嗎？',
    answer:
      '完成預約後會提供詳細位置資訊。高雄車站 1 號出口往建國路、中山路方向，往左走約 3 分鐘即可到達。',
  },
  {
    question: '男士 SPA 與一般按摩有什麼不同？',
    answer:
      '比起一般商業按摩，男士預約制 SPA 更重視氛圍、沉浸感與情緒放鬆。',
  },
  {
    question: '第一次預約需要準備什麼？',
    answer:
      '保持放鬆即可。若有任何想詢問的內容，也可以提前透過 LINE 詢問。',
  },
  {
    question: '空間會有其他客人嗎？',
    answer:
      'PROFOUND ROOM 為預約制空間，會盡可能保留安靜與隱私感。',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className={styles.page} id="faq">
        <div className={styles.shell}>
          <p className={styles.eyebrow}>FAQ</p>
          <h1 className={styles.title}>常見問題</h1>
          <p className={styles.lead}>
            關於預約制男士 SPA、第一次體驗與空間相關問題，都整理在這裡。
          </p>

          <section className={styles.faqList} aria-label="常見問題列表">
            {faqs.map((faq, index) => (
              <details className={styles.item} key={faq.question} open={index === 0 || index === 2}>
                <summary className={styles.question}>{faq.question}</summary>
                <p className={styles.answer}>{faq.answer}</p>
              </details>
            ))}
          </section>

          <section className={styles.ctaCard} aria-label="開始預約">
            <p>
              如果還有其他問題，歡迎先透過 LINE 詢問；確認日期與時段後，再提供完整位置資訊。
            </p>
            <TrackedLink
              className={styles.cta}
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
              eventName="reservation_intent"
              eventParameters={{ source: 'faq_page' }}
            >
              LINE 立即預約
            </TrackedLink>
            <TrackedLink
              className={styles.secondary}
              href="/reservation"
              eventName="reservation_guide_click"
              eventParameters={{ source: 'faq_page' }}
            >
              查看完整預約說明
            </TrackedLink>
          </section>
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
