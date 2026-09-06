import Image from 'next/image'
import TrackedLink from './TrackedLink'
import ScrollReveal from './ScrollReveal'
import styles from './PricingSection.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

const packages = [
  {
    name: '深層放鬆',
    duration: '120 分鐘',
    price: 'NT$2,400',
  },
  {
    name: '沉浸舒壓',
    duration: '90 分鐘',
    price: 'NT$2,000',
  },
  {
    name: '四手同步',
    duration: '120 分鐘',
    price: 'NT$4,600',
  },
]

export default function PricingSection() {
  return (
    <ScrollReveal
      as="section"
      className={styles.pricingSection}
      id="pricing"
      aria-labelledby="pricing-title"
      style={{ '--reveal-distance': '26px' }}
    >
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>PRICING</p>
        <h2 id="pricing-title">課程方案</h2>
        <p className={styles.sectionLead}>
          高雄預約制 Gay SPA 與男士按摩方案，先看價格，再依需求選擇適合的放鬆方式。
        </p>
      </div>

      <div className={styles.packageGrid}>
        {packages.map((item, index) => (
          <ScrollReveal
            as="article"
            className={styles.packageCard}
            key={item.name}
            delay={index * 65}
          >
            <h3>{item.name}</h3>
            <p className={styles.duration}>{item.duration}</p>
            <p className={styles.price}>{item.price}</p>
          </ScrollReveal>
        ))}

        <ScrollReveal
          as="article"
          className={`${styles.packageCard} ${styles.flexibleCard}`}
          delay={packages.length * 65}
        >
          <h3>不指定師傅方案</h3>
          <p className={styles.flexiblePrice}>90 分鐘｜NT$1,800</p>
          <p className={styles.flexiblePrice}>120 分鐘｜NT$2,200</p>
          <p className={styles.cardNote}>已是優惠價格，不得再使用其他折扣。</p>
        </ScrollReveal>
      </div>

      <div className={styles.serviceNote}>
        <span className={styles.serviceLabel}>SERVICE INCLUDES</span>
        <strong>指壓｜油壓｜體推｜機能保養</strong>
      </div>

      <div className={styles.infoStack}>
        <details className={styles.infoPanel} open>
          <summary>
            <span>
              <span className={styles.panelKicker}>NIGHT SERVICE</span>
              <span className={styles.panelTitle}>夜間服務</span>
            </span>
            <span className={styles.chevron} aria-hidden="true">⌄</span>
          </summary>
          <div className={styles.panelBody}>
            <p>預約時間 22:00 後｜+300／位</p>
            <p>預約時間 00:00 後｜+500／位</p>
          </div>
        </details>

        <details className={styles.infoPanel} open>
          <summary>
            <span>
              <span className={styles.panelKicker}>HOME SERVICE</span>
              <span className={styles.panelTitle}>到府服務</span>
            </span>
            <span className={styles.chevron} aria-hidden="true">⌄</span>
          </summary>
          <div className={styles.panelBody}>
            <p>到府服務依距離酌收費用。</p>
            <p>距離高雄車站 5 公里內｜+300</p>
            <p>距離高雄車站 5–10 公里｜+500</p>
            <p>距離高雄車站 10 公里以上｜+800（客服報價）</p>
          </div>
        </details>
      </div>

      <div className={styles.policyVisual}>
        <Image
          src="/images/deposit-policy-guide.png"
          alt="深寓優惠與訂金政策圖解"
          width={1856}
          height={2304}
          sizes="(max-width: 700px) 100vw, 560px"
        />
        <p>優惠與訂金政策圖解；完整規則仍以預約頁文字說明為準。</p>
      </div>

      <div className={styles.policyRow}>
        <span>Adults Only｜18+</span>
        <span>優惠不得併用</span>
      </div>

      <TrackedLink
        className={styles.bookingCta}
        href={LINE_URL}
        target="_blank"
        rel="noreferrer"
        eventName="reservation_intent"
        eventParameters={{ source: 'pricing_section' }}
      >
        LINE 立即預約 <span aria-hidden="true">→</span>
      </TrackedLink>
    </ScrollReveal>
  )
}
