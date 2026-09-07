'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { trackEvent, trackAgeConfirmation } from './analytics'
import styles from './HomeHero.module.css'

const AGE_GATE_KEY = 'profound-age-confirmed'
const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

export default function HomeHero() {
  const [showAgeGate, setShowAgeGate] = useState(null)
  const [showEventImage, setShowEventImage] = useState(false)

  useEffect(() => {
    const confirmed = window.sessionStorage.getItem(AGE_GATE_KEY) === 'true'
    setShowAgeGate(!confirmed)
  }, [])

  useEffect(() => {
    if (!showAgeGate && !showEventImage) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [showAgeGate, showEventImage])

  useEffect(() => {
    if (!showEventImage) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setShowEventImage(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showEventImage])

  const confirmAge = () => {
    window.sessionStorage.setItem(AGE_GATE_KEY, 'true')
    trackAgeConfirmation()
    setShowAgeGate(false)
  }

  return (
    <>
      <section className={styles.hero} aria-labelledby="home-hero-title">
        <div className={styles.heroBackdrop} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>KAOHSIUNG · MEN&apos;S SPA</p>
            <h1 id="home-hero-title">高雄 Gay SPA</h1>
            <h2>男士按摩與放鬆空間</h2>
            <p className={styles.positioning}>預約制 · 獨立包廂 · 高雄車站附近</p>

            <div className={styles.heroActions}>
              <a
                className={styles.primaryAction}
                href={LINE_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent('reservation_intent', { source: 'hero' })}
              >
                LINE 立即預約
              </a>
              <a
                className={styles.secondaryAction}
                href="#therapists"
                onClick={() => trackEvent('therapist_explore_click', { source: 'hero' })}
              >
                探索師傅
              </a>
            </div>
          </div>

          <aside className={`${styles.supportCard} ${styles.eventCard}`} aria-label="中秋雙師限定活動資訊">
            <div className={styles.supportHeading}>
              <p>MONTHLY EVENT</p>
              <span>本月限定活動</span>
            </div>
            <div className={styles.supportMain}>
              <button
                type="button"
                className={`${styles.supportPhoto} ${styles.eventPhoto}`}
                onClick={() => setShowEventImage(true)}
                aria-label="放大查看中秋雙師限定活動圖"
              >
                <Image
                  src="/images/mid-autumn-dual-therapist-event.png"
                  alt="中秋雙師限定禮遇活動圖"
                  fill
                  sizes="112px"
                />
              </button>
              <div className={styles.supportDetails}>
                <h2>中秋雙師</h2>
                <p>9/7–9/30</p>
                <p>90 分 NT$3,500</p>
                <p>120 分 NT$4,300</p>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent('reservation_intent', {
                    source: 'mid_autumn_event_card',
                  })}
                >
                  LINE 詢問活動
                </a>
              </div>
            </div>
          </aside>

          <div className={styles.introCard}>
            <p className={styles.introLabel}>ABOUT</p>
            <h2>高雄 Gay Spa 與男士按摩空間</h2>
            <p>
              深寓提供預約制放鬆體驗、精油舒壓與私人空間服務。
              <br />
              安靜、隱私、專業按摩。
            </p>
          </div>
        </div>
      </section>

      {showEventImage && (
        <div
          className={styles.eventLightboxBackdrop}
          role="presentation"
          onClick={() => setShowEventImage(false)}
        >
          <div
            className={styles.eventLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="中秋雙師限定活動圖"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.eventLightboxClose}
              onClick={() => setShowEventImage(false)}
              aria-label="關閉活動圖放大檢視"
            >
              關閉
            </button>
            <Image
              src="/images/mid-autumn-dual-therapist-event.png"
              alt="中秋雙師限定禮遇活動：雙師 90 分鐘 3,500 元、雙師 120 分鐘 4,300 元，活動期間 9/7 至 9/30"
              width={1920}
              height={1920}
              sizes="min(92vw, 720px)"
            />
          </div>
        </div>
      )}

      {showAgeGate && (
        <div className={styles.ageGateBackdrop} role="presentation">
          <div
            className={styles.ageGate}
            role="dialog"
            aria-modal="true"
            aria-labelledby="age-gate-title"
            aria-describedby="age-gate-description"
          >
            <p className={styles.ageGateMark}>深寓</p>
            <p className={styles.ageGateBrand}>PROFOUND ROOM</p>
            <h2 id="age-gate-title">年齡確認</h2>
            <p id="age-gate-description" className={styles.ageGateCopy}>
              本網站內容與服務僅限年滿 18 歲者瀏覽與預約。
              <br />
              本館提供預約制男士按摩與放鬆服務，請尊重服務界線與相關規範。
            </p>
            <button type="button" className={styles.ageConfirm} onClick={confirmAge}>
              我已滿 18 歲，進入官網
            </button>
            <a className={styles.ageLeave} href="https://www.google.com/">
              離開網站
            </a>
          </div>
        </div>
      )}
    </>
  )
}
