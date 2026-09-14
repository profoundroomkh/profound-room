'use client'

import ScrollReveal from './ScrollReveal'
import styles from './StraightMaleTherapists.module.css'

export default function StraightMaleTherapists() {

  return (
    <ScrollReveal
      as="section"
      className={styles.section}
      id="straight-therapists"
      aria-labelledby="straight-therapists-title"
      style={{ '--reveal-distance': '24px' }}
    >
      <div className={styles.headingRow}>
        <div>
          <p className={styles.eyebrow}>STRAIGHT MEN&apos;S LIST</p>
          <h2 id="straight-therapists-title">直男師傅</h2>
        </div>
        <p className={styles.intro}>
          直男師傅為獨立方案，價格與一般師傅不同，預約前請先確認下方專屬價目。
        </p>
      </div>

      <div className={styles.priceNotice} role="note" aria-label="直男師傅專用價格提醒">
        <div>
          <p className={styles.noticeKicker}>STRAIGHT MEN&apos;S PRICING</p>
          <h3>直男師傅｜專屬價目</h3>
          <p className={styles.noticeText}>以下價格僅適用於直男師傅，與一般師傅方案不同，請勿混用。</p>
          <p className={styles.audience}>接待客群：男性、女性、第三性皆可</p>
        </div>
        <div className={styles.priceGrid}>
          <div className={styles.priceCard}>
            <span>90 分鐘</span>
            <strong>NT$2,500</strong>
            <small>指壓・油壓・龍筋機能保養</small>
          </div>
          <div className={styles.priceCard}>
            <span>120 分鐘</span>
            <strong>NT$2,900</strong>
            <small>指壓・油壓・體推・龍筋機能保養</small>
          </div>
        </div>
      </div>

      <div className={styles.directoryNote}>
        <p className={styles.directoryNoteText}>
          Andy 已列入上方 15 位師傅列表，照片、完整資料與預約入口請直接查看 Andy 卡片。
        </p>
        <a href="#all-therapists" className={styles.directoryLink}>
          查看 15 位師傅列表
        </a>
      </div>
    </ScrollReveal>
  )
}
