import Image from 'next/image'
import TrackedLink from './TrackedLink'
import ScrollReveal from './ScrollReveal'
import styles from './HomepageLowerSection.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

const faqs = [
  {
    question: '是否採完全預約制？',
    answer: '是的，PROFOUND ROOM 為高雄完全預約制 Gay SPA 與男士放鬆空間。',
  },
  {
    question: '第一次預約會尷尬嗎？',
    answer: '許多第一次接觸男士 SPA 的來訪者，也會在預約前感到緊張，但實際進入空間後通常很快就能放鬆。',
  },
  {
    question: '服務地點如何安排？',
    answer: '無固定實體店面，依客人需求提供外出到府（飯店／旅館／客住處）或臨時租借外部場地（共享空間／計時工作室）。',
  },
  {
    question: '需要提前多久預約？',
    answer: '建議提前 1–3 天預約，熱門時段通常較快額滿；提前預約可享有相關折扣。',
  },
  {
    question: '取消或改期時需要注意什麼？',
    answer: '如需取消或改期，請儘早透過官方 LINE 聯繫客服；若遇突發狀況，也請主動告知，以便協助安排。',
  },
]

const journalItems = [
  {
    title: '高雄直男按摩是什麼？方案與預約方式一次看',
    description: '整理直男按摩、直男同志按摩專屬方案、師傅班表與第一次預約流程。',
    href: '/journal/kaohsiung-straight-massage',
  },
  {
    title: '高雄直男按摩價格怎麼算？',
    description: '90 分鐘與 120 分鐘專屬方案、服務內容與預約方式一次了解。',
    href: '/journal/kaohsiung-straight-massage-price',
  },
  {
    title: '第一次直男按摩怎麼預約？',
    description: '從選師傅、看班表到透過 LINE 確認預約的完整流程。',
    href: '/journal/first-straight-massage-booking',
  },
  {
    title: '第一次男士 SPA，會很尷尬嗎？',
    description: '第一次接觸男士 SPA 時，真正擔心的往往是空間是否讓人安心。',
    href: '/journal/first-men-spa-experience',
  },
  {
    title: '男士 SPA 與一般按摩，最大差別是什麼？',
    description: '真正影響體驗的，往往不是按摩本身，而是空間、節奏與沉浸感。',
    href: '/journal/mens-spa-vs-normal-massage',
  },
  {
    title: '高雄 Gay SPA 如何選擇？',
    description: '從預約方式、環境與服務內容，找到適合自己的放鬆空間。',
    href: '/journal/kaohsiung-gay-spa',
  },
]

export default function HomepageLowerSection() {
  return (
    <div className={styles.lowerSection}>
      <ScrollReveal
        as="section"
        className={styles.reservationSection}
        id="reservation-flow"
        aria-labelledby="reservation-flow-title"
        style={{ '--reveal-distance': '24px' }}
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>RESERVATION FLOW</p>
          <h2 id="reservation-flow-title">預約流程</h2>
          <p className={styles.sectionLead}>四個步驟，讓第一次來訪也能輕鬆開始。</p>
        </div>

        <ol className={styles.steps}>
          <li>
            <span className={styles.stepNumber}>01</span>
            <strong>加入官方 LINE</strong>
          </li>
          <li>
            <span className={styles.stepNumber}>02</span>
            <strong>提供日期與時段</strong>
          </li>
          <li>
            <span className={styles.stepNumber}>03</span>
            <strong>客服確認時段</strong>
          </li>
          <li>
            <span className={styles.stepNumber}>04</span>
            <strong>取得詳細位置</strong>
          </li>
        </ol>

        <TrackedLink
          className={styles.outlineCta}
          href="/reservation"
          eventName="reservation_guide_click"
          eventParameters={{ source: 'homepage_reservation_flow' }}
        >
          查看完整預約說明
        </TrackedLink>
      </ScrollReveal>

      <ScrollReveal as="section" className={styles.locationSection} id="location" aria-labelledby="location-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>SERVICE LOCATION</p>
          <h2 id="location-title">服務地點安排</h2>
        </div>

        <div className={styles.locationCard}>
          <div className={styles.locationDetails}>
            <h3>無固定實體店面</h3>
            <p className={styles.locationRoute}>依客人需求提供外出到府（飯店／旅館／客住處）</p>
            <p className={styles.locationPrivacy}>或臨時租借外部場地（共享空間／計時工作室）。</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        className={styles.faqSection}
        id="faq"
        aria-labelledby="faq-title"
        style={{ '--reveal-distance': '24px' }}
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>RESERVATION GUIDE</p>
          <h2 id="faq-title">常見問題</h2>
          <p className={styles.sectionLead}>預約前想先了解的事，都整理在這裡。</p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <details className={styles.faqItem} key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <span className={styles.faqIcon} aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        <TrackedLink
          className={styles.textLink}
          href="/faq"
          eventName="faq_click"
          eventParameters={{ source: 'homepage_faq' }}
        >
          查看完整 FAQ <span aria-hidden="true">→</span>
        </TrackedLink>
      </ScrollReveal>

      <ScrollReveal
        as="section"
        className={styles.journalSection}
        id="journal"
        aria-labelledby="journal-title"
        style={{ '--reveal-distance': '24px' }}
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>JOURNAL</p>
          <h2 id="journal-title">Deep Night Journal</h2>
          <p className={styles.sectionLead}>在進入深寓之前，先讀一點關於放鬆的文字。</p>
        </div>

        <div className={styles.journalGrid}>
          {journalItems.map((item, index) => (
            <TrackedLink
              className={styles.journalCard}
              href={item.href}
              key={item.href}
              eventName="journal_article_click"
              eventParameters={{ source: 'homepage_journal', article: item.href }}
            >
              <span className={styles.journalIndex}>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </TrackedLink>
          ))}
        </div>

        <TrackedLink
          className={styles.textLink}
          href="/journal"
          eventName="journal_index_click"
          eventParameters={{ source: 'homepage_journal' }}
        >
          前往 Journal／旅程 <span aria-hidden="true">→</span>
        </TrackedLink>
      </ScrollReveal>

      <ScrollReveal
        as="footer"
        className={styles.footer}
        style={{ '--reveal-distance': '18px' }}
      >
        <div className={styles.footerBrand}>
          <Image
            src="/images/profound-logo-symbol.png"
            alt="深寓 PROFOUND ROOM"
            width={64}
            height={68}
          />
          <div>
            <strong>深寓</strong>
            <span>Profound Room</span>
          </div>
        </div>

        <div className={styles.footerActions}>
          <TrackedLink
            href="https://www.instagram.com/profound_room/"
            target="_blank"
            rel="noreferrer"
            eventName="social_click"
            eventParameters={{ platform: 'instagram', source: 'homepage_footer' }}
          >
            Instagram
          </TrackedLink>
          <TrackedLink
            href="https://www.threads.com/@profound_room"
            target="_blank"
            rel="noreferrer"
            eventName="social_click"
            eventParameters={{ platform: 'threads', source: 'homepage_footer' }}
          >
            Threads
          </TrackedLink>
          <TrackedLink
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
            eventName="reservation_intent"
            eventParameters={{ source: 'homepage_footer' }}
          >
            LINE 立即預約
          </TrackedLink>
          <TrackedLink
            href="mailto:profoundroom.kh@gmail.com"
            eventName="contact_click"
            eventParameters={{ platform: 'email', source: 'homepage_footer' }}
          >
            profoundroom.kh@gmail.com
          </TrackedLink>
          <TrackedLink
            href="/reservation"
            eventName="reservation_guide_click"
            eventParameters={{ source: 'homepage_footer' }}
          >
            預約說明
          </TrackedLink>
        </div>

        <p className={styles.footerNote}>Adults Only｜18+　·　預約制男士按摩與私人放鬆空間</p>
      </ScrollReveal>
    </div>
  )
}
