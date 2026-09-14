'use client'

import Image from 'next/image'
import TrackedLink from './TrackedLink'
import ScrollReveal from './ScrollReveal'
import { therapists } from '../data/therapists'
import styles from './StraightMaleTherapists.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

export default function StraightMaleTherapists() {
  const straightTherapists = therapists.filter((therapist) => therapist.category === 'straight')

  if (!straightTherapists.length) return null

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

      <div className={styles.cardGrid}>
        {straightTherapists.map((therapist) => (
          <article className={styles.card} key={therapist.id}>
            <div className={styles.imageWrap}>
              <Image
                src={therapist.images[0]}
                alt={`${therapist.name} 直男師傅`}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                className={styles.image}
              />
              <span className={styles.imageShade} />
              <span className={styles.badge}>NEW</span>
              <span className={styles.imageHint}>{therapist.images.length} 張照片</span>
            </div>

            <div className={styles.content}>
              <p className={styles.kicker}>STRAIGHT THERAPIST</p>
              <div className={styles.nameRow}>
                <h3>{therapist.name}</h3>
                <span>獨立方案</span>
              </div>
              <p className={styles.specialty}>{therapist.specialty}</p>

              <div className={styles.metrics}>
                <span>{therapist.height} cm</span>
                <span>{therapist.weight} kg</span>
                <span>{therapist.age} 歲</span>
              </div>

              <dl className={styles.details}>
                <div>
                  <dt>角色</dt>
                  <dd>{therapist.role}</dd>
                </div>
                <div>
                  <dt>尺寸</dt>
                  <dd>{therapist.size || '未提供'}</dd>
                </div>
                <div>
                  <dt>支援時間</dt>
                  <dd>{therapist.supportPeriod || '請洽官方 LINE'}</dd>
                </div>
              </dl>

              <div className={styles.actions}>
                <TrackedLink
                  href={LINE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.bookingButton}
                  eventName="reservation_intent"
                  eventParameters={{
                    source: 'straight_therapist_section',
                    therapist: therapist.name,
                    therapist_id: therapist.id,
                  }}
                >
                  LINE 詢問／預約 {therapist.name}
                </TrackedLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </ScrollReveal>
  )
}
