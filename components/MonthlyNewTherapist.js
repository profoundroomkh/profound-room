'use client'

import Image from 'next/image'
import { therapists } from '../data/therapists'
import TrackedLink from './TrackedLink'
import ScrollReveal from './ScrollReveal'
import styles from './MonthlyNewTherapist.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'
const bart = therapists.find((therapist) => therapist.id === 'bart')

function openBartProfile() {
  const trigger = document.getElementById('bart-profile-trigger')

  if (trigger) {
    trigger.scrollIntoView({ block: 'center', behavior: 'smooth' })
    trigger.click()
    return
  }

  document.getElementById('therapists')?.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  })
}

export default function MonthlyNewTherapist() {
  if (!bart) return null

  return (
    <ScrollReveal as="section" className={styles.section} style={{ '--reveal-distance': '24px' }}>
      <div className={styles.headingRow}>
        <div>
          <p className={styles.eyebrow}>NEW THIS MONTH</p>
          <h2 id="monthly-new-therapist-title">本月新師</h2>
        </div>
        <p className={styles.intro}>
          新加入深寓的師傅，先認識他的風格與固定支援時間。
        </p>
      </div>

      <article className={styles.card}>
        <button
          type="button"
          className={styles.imageButton}
          onClick={openBartProfile}
          aria-label="查看 Bart／巴特 的完整資料與照片"
        >
          <Image
            src={bart.images[0]}
            alt="Bart／巴特 師傅"
            fill
            sizes="(max-width: 700px) 100vw, 45vw"
            className={styles.image}
          />
          <span className={styles.imageShade} />
          <span className={styles.newBadge}>NEW</span>
          <span className={styles.imageHint}>點擊查看完整資料</span>
        </button>

        <div className={styles.content}>
          <p className={styles.kicker}>NEW THERAPIST</p>
          <div className={styles.nameRow}>
            <h3>{bart.name}</h3>
            <span>可預約</span>
          </div>
          <p className={styles.specialty}>{bart.specialty}</p>

          <div className={styles.metrics}>
            <span>{bart.height} cm</span>
            <span>{bart.weight} kg</span>
            <span>{bart.age} 歲</span>
          </div>

          <dl className={styles.details}>
            <div>
              <dt>角色</dt>
              <dd>{bart.role}</dd>
            </div>
            <div>
              <dt>支援時間</dt>
              <dd>{bart.supportPeriod}</dd>
            </div>
          </dl>

          <div className={styles.actions}>
            <button type="button" className={styles.profileButton} onClick={openBartProfile}>
              查看完整資料
            </button>
            <TrackedLink
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.bookingButton}
              eventName="reservation_intent"
              eventParameters={{
                source: 'homepage_new_therapist',
                therapist: bart.name,
                therapist_id: bart.id,
              }}
            >
              LINE 預約 Bart
            </TrackedLink>
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}
