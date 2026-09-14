'use client'

import Image from 'next/image'
import { therapists } from '../data/therapists'
import TrackedLink from './TrackedLink'
import ScrollReveal from './ScrollReveal'
import styles from './MonthlyNewTherapist.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'
const featuredIds = ['bart', 'andy']
const featuredTherapists = featuredIds
  .map((id) => therapists.find((therapist) => therapist.id === id))
  .filter(Boolean)

function openTherapistSection(therapist) {
  const trigger = document.getElementById(`${therapist.id}-profile-trigger`)

  if (trigger) {
    trigger.scrollIntoView({ block: 'center', behavior: 'smooth' })
    trigger.click()
    return
  }

  const sectionId = therapist.category === 'straight' ? 'straight-therapists' : 'all-therapists'
  document.getElementById(sectionId)?.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  })
}

export default function MonthlyNewTherapist() {
  if (!featuredTherapists.length) return null

  return (
    <ScrollReveal
      as="section"
      id="therapists"
      aria-labelledby="monthly-new-therapist-title"
      className={styles.section}
      style={{ '--reveal-distance': '24px' }}
    >
      <div className={styles.headingRow}>
        <div>
          <p className={styles.eyebrow}>NEW THIS MONTH</p>
          <h2 id="monthly-new-therapist-title">本月新師</h2>
        </div>
        <p className={styles.intro}>
          新加入深寓的師傅，先認識他的風格、方案與支援時間。
        </p>
      </div>

      <div className={styles.cardGrid}>
        {featuredTherapists.map((therapist) => {
          const isStraight = therapist.category === 'straight'

          return (
            <article className={styles.card} key={therapist.id}>
              <button
                type="button"
                className={styles.imageButton}
                onClick={() => openTherapistSection(therapist)}
                aria-label={`查看 ${therapist.name} 的完整資料與照片`}
              >
                <Image
                  src={therapist.images[0]}
                  alt={`${therapist.name} 師傅`}
                  fill
                  sizes="(max-width: 700px) 100vw, 45vw"
                  className={styles.image}
                />
                <span className={styles.imageShade} />
                <span className={styles.newBadge}>NEW</span>
                <span className={styles.imageHint}>點擊查看完整資料</span>
              </button>

              <div className={styles.content}>
                <p className={styles.kicker}>{isStraight ? 'NEW STRAIGHT THERAPIST' : 'NEW THERAPIST'}</p>
                <div className={styles.nameRow}>
                  <h3>{therapist.name}</h3>
                  <span>{isStraight ? '直男｜專屬價目' : '可預約'}</span>
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
                  {isStraight && (
                    <div>
                      <dt>專屬價目</dt>
                      <dd>90 分 NT$2,500｜120 分 NT$2,900</dd>
                    </div>
                  )}
                  <div>
                    <dt>支援時間</dt>
                    <dd>{therapist.supportPeriod || '請洽官方 LINE'}</dd>
                  </div>
                </dl>

                <div className={styles.actions}>
                  <button type="button" className={styles.profileButton} onClick={() => openTherapistSection(therapist)}>
                    {isStraight ? '查看直男方案' : '查看完整資料'}
                  </button>
                  <TrackedLink
                    href={LINE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.bookingButton}
                    eventName="reservation_intent"
                    eventParameters={{
                      source: 'homepage_new_therapist',
                      therapist: therapist.name,
                      therapist_id: therapist.id,
                    }}
                  >
                    {isStraight ? `LINE 詢問／預約 ${therapist.name}` : `LINE 預約 ${therapist.name}`}
                  </TrackedLink>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </ScrollReveal>
  )
}
