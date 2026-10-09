'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { therapists } from '../data/therapists'
import { getDailyTherapists } from '../data/weeklySchedule'
import TrackedLink from './TrackedLink'
import ScrollReveal from './ScrollReveal'
import useTaiwanDateKey from './useTaiwanDateKey'
import styles from './MonthlyNewTherapist.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

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

function canBookTherapist(therapist) {
  return !therapist.isFullyBooked && (therapist.status === 'available' || therapist.hasWeeklySchedule)
}

function getBookingButtonLabel(therapist) {
  if (therapist.isFullyBooked) return '預約已滿'
  if (therapist.status === 'available') return '可預約'
  if (therapist.hasWeeklySchedule) return '提前預約'
  return '暫停預約等週更新'
}

export default function MonthlyNewTherapist({ anchorId = 'therapists' }) {
  const dateKey = useTaiwanDateKey()
  const featuredTherapists = useMemo(
    () => getDailyTherapists(therapists, dateKey).filter((therapist) => therapist.isNew),
    [dateKey],
  )
  const [activeIndex, setActiveIndex] = useState(0)

  if (!featuredTherapists.length) return null

  const therapist = featuredTherapists[activeIndex]
  const isStraight = therapist.category === 'straight'
  const availabilityLabel = isStraight ? '直男｜專屬價目' : getBookingButtonLabel(therapist)
  const previousIndex = (activeIndex - 1 + featuredTherapists.length) % featuredTherapists.length
  const nextIndex = (activeIndex + 1) % featuredTherapists.length

  return (
    <ScrollReveal
      as="section"
      {...(anchorId ? { id: anchorId } : {})}
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
            <span>{availabilityLabel}</span>
          </div>
          <p className={styles.specialty}>{therapist.specialty}</p>
          <div className={styles.metrics}>
            <span>{therapist.height} cm</span>
            <span>{therapist.weight} kg</span>
            <span>{therapist.age} 歲</span>
          </div>
          {therapist.supportPeriod && <p className={styles.supportPeriod}>{therapist.supportPeriod}</p>}
          <div className={styles.actions}>
            <button type="button" className={styles.profileButton} onClick={() => openTherapistSection(therapist)}>
              查看資料
            </button>
            {canBookTherapist(therapist) ? (
              <TrackedLink
                href={LINE_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.bookingButton}
                aria-label={`${getBookingButtonLabel(therapist)}：前往 LINE 詢問`}
                eventName="reservation_intent"
                eventParameters={{
                  source: 'homepage_new_therapist',
                  therapist: therapist.name,
                  therapist_id: therapist.id,
                }}
              >
                {getBookingButtonLabel(therapist)}
              </TrackedLink>
            ) : (
              <span className={`${styles.bookingButton} ${styles.bookingButtonDisabled}`}>
                {getBookingButtonLabel(therapist)}
              </span>
            )}
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}
