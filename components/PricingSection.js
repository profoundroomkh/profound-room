import TrackedLink from './TrackedLink'
import ScrollReveal from './ScrollReveal'
import styles from './PricingSection.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

const packages = [
  {
    name: '一般指定師傅',
    duration: '100 分鐘',
    price: 'NT$2,200',
    service: '基本服務項目：指壓・油壓・體推・機能保養',
  },
  {
    name: '直男師傅',
    duration: '100 分鐘',
    price: 'NT$2,700',
    service: '基本服務項目：指壓・油壓・體推・機能保養',
  },
  {
    name: '不指定師傅',
    duration: '100 分鐘',
    price: 'NT$2,000',
    service: '基本服務項目：指壓・油壓・體推・機能保養',
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
          高雄預約制 Gay SPA 與男士按摩方案。100 分鐘基本服務含指壓、油壓、體推、機能保養；另提供直男按摩與直男同志按摩專屬方案。
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
            <p className={styles.serviceItems}>{item.service}</p>
          </ScrollReveal>
        ))}
      </div>

      <div className={styles.serviceNote}>
        <span className={styles.serviceLabel}>加時服務</span>
        <div className={styles.serviceDetails}>
          <p><strong>每加時 30 分鐘</strong>｜NT$500</p>
          <p>現場加時：服務後 1 小時內，由師傅轉告客服確認可否加時。</p>
        </div>
      </div>

      <div className={styles.infoStack}>
        <details className={styles.infoPanel}>
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

        <details className={styles.infoPanel}>
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

      <section className={styles.policyText} aria-labelledby="policy-title">
        <p className={styles.policyEyebrow}>POLICY</p>
        <h3 id="policy-title">優惠與訂金政策</h3>

        <aside className={styles.depositAlert} role="note" aria-label="首次預約訂金重要提醒">
          <div className={styles.depositAlertHeader}>
            <span className={styles.depositAlertBadge}>重要提醒</span>
            <span className={styles.depositAlertRule}>首次預約適用</span>
          </div>
          <p className={styles.depositAlertTitle}>首次預約的客人，一律都要匯訂金</p>
          <p className={styles.depositAlertException}>沒有例外！訂金 NT$500／每位師傅，完成消費後全額折抵。</p>
          <p className={styles.depositAlertTransfer}>
            匯款資訊請洽官方 LINE；不方便轉帳，可至超商使用中國信託無卡存款完整支付訂金。
          </p>
        </aside>

        <div className={styles.featuredPolicy} role="note" aria-label="優惠僅可擇一使用">
          <strong>優惠僅可擇一使用</strong>
          <span>提前一天預約、壽星優惠、優惠券不得併用</span>
        </div>

        <div className={styles.policyBlock}>
          <h4>優惠</h4>
          <div className={styles.policyRows}>
            <div className={styles.policyItem}>
              <strong>提前一天預約</strong>
              <span>折抵 NT$100</span>
            </div>
            <div className={styles.policyItem}>
              <strong>壽星＋提前一天預約</strong>
              <span>折抵 NT$200</span>
            </div>
            <div className={styles.policyItem}>
              <strong>優惠券</strong>
              <span>須提前一天預約，依券面規則</span>
            </div>
            <div className={styles.policyItem}>
              <strong>不指定師傅</strong>
              <span>不可使用任何優惠</span>
            </div>
          </div>
        </div>

        <div className={styles.policyBlock}>
          <h4>訂金政策</h4>
          <p className={styles.depositLead}>首次預約每位師傅先付 NT$500，完成消費後折抵</p>
          <div className={styles.depositTimeline}>
            <div className={styles.depositStep}>
              <strong>6 小時以上</strong>
              <span>訂金保留一次<br />30 天內改期使用</span>
            </div>
            <div className={styles.depositStep}>
              <strong>2–6 小時</strong>
              <span>訂金保留 50%<br />另 50% 轉為改期金</span>
            </div>
            <div className={styles.depositStep}>
              <strong>2 小時內／No-show</strong>
              <span>訂金恕不退還</span>
            </div>
          </div>
          <ul className={styles.policyNotes}>
            <li>改期 1 次，須於指定期限內使用</li>
            <li>重大緊急狀況請主動聯繫</li>
          </ul>
        </div>

        <p className={styles.policyFootnote}>詳細規則以預約頁公告為準</p>
      </section>

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
