import Header from '../../components/Header'
import TrackedLink from '../../components/TrackedLink'
import styles from './faq.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

export const metadata = {
  title: '常見問題｜深寓 PROFOUND ROOM｜高雄 Gay SPA',
  description:
    '查看深寓 PROFOUND ROOM 高雄 Gay SPA 的預約制、第一次體驗、服務地點安排、服務流程與男士按摩常見問題。',
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
    description: '高雄預約制 Gay SPA 與男士按摩服務的常見問題。',
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
    question: '服務是完全預約制嗎？',
    answer:
      '是的，深寓採完全預約制，不接受未經確認的現場到訪。深寓無固定實體店面，服務地點會依需求事先協調。',
  },
  {
  question: '服務地點如何安排？',
  answer:
    '深寓無固定實體店面，依客人需求提供外出到府（飯店／旅館／客住處）或臨時租借外部場地（共享空間／計時工作室）。預約時請先與官方 LINE 客服確認安排。',
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
    question: '取消或改期時需要注意什麼？',
    answer:
      '如需取消或改期，請儘早透過官方 LINE 聯繫客服；若遇突發疾病、交通事故或其他重大緊急狀況，也請主動告知，以便協助安排。',
  },
  {
    question: '服務地點會有其他使用者嗎？',
    answer:
      '深寓無固定實體店面，服務地點依預約安排而定。若使用外部場地，場地使用方式與隱私細節請在預約前向客服確認。',
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
            關於預約制男士 SPA、第一次體驗與服務安排的問題，都整理在這裡。
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
              如果還有其他問題，歡迎先透過 LINE 詢問；客服會依需求確認日期、時段與服務地點安排。
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
