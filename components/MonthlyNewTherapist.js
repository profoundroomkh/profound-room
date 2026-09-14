'use client'

import Image from 'next/image'
import { useState } from 'react'
import { therapists } from '../data/therapists'
import TrackedLink from './TrackedLink'
import ScrollReveal from './ScrollReveal'
import styles from './MonthlyNewTherapist.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'
const featuredTherapists = therapists.filter((therapist) => therapist.isNew)

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
  const [activeIndex, setActiveIndex] = useState(0)

  if (!featuredTherapists.length) return null

  const therapist = featuredTherapists[activeIndex]
  const isStraight = therapist.category === 'straight'
  const previousIndex = (activeIndex - 1 + featuredTherapists.length) % featuredTherapists.length
  const nextIndex = (activeIndex + 1) % featuredTherapists.length

  return (
    <ScrollReveal
      as="section"
      id="therapists"
      aria-labelledby="monthly-new-therapist-title"
      className={styles.section}
      style={{ '--reveal-distance': '16px' }}
    >
      <div className={styles.headingRow}>
        <div>
          <p className={styles.eyebrow}>NEW THIS MONTH</p>
          <h2 id="monthly-new-therapist-title">新師上陣</h2>
        </div>
        <p className={styles.intro}>先認識目前新師，了解風格、方案與支援時間。</p>
      </div>

      <article className={styles.card}>
        <div className={styles.mediaFrame}>
          <button
            type="button"
            className={`${styles.arrowButton} ${styles.previousButton}`}
            onClick={() => setActiveIndex(previousIndex)}
            aria-label="查看上一位新師"
          >
            ‹
          </button>
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
              priority={activeIndex === 0}
              sizes="(max-width: 700px) 34vw, 180px"
              className={styles.image}
            />
            <span className={styles.imageShade} />
            <span className={styles.newBadge}>NEW</span>
          </button>
          <button
            type="button"
            className={`${styles.arrowButton} ${styles.nextButton}`}
            onClick={() => setActiveIndex(nextIndex)}
            aria-label="查看下一位新師"
          >
            ›
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.kickerRow}>
            <p className={styles.kicker}>{isStraight ? 'NEW STRAIGHT THERAPIST' : 'NEW THERAPIST'}</p>
            <span className={styles.counter}>{activeIndex + 1} / {featuredTherapists.length}</span>
          </div>
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
          <p className={styles.supportPeriod}>{therapist.supportPeriod || '支援時間請洽官方 LINE'}</p>
          <div className={styles.actions}>
            <button type="button" className={styles.profileButton} onClick={() => openTherapistSection(therapist)}>
              查看資料
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
              LINE 詢問／預約
            </TrackedLink>
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}
