'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import styles from './TopTherapists.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

const topTherapists = [
  {
    id: 'dylan',
    rank: '01',
    name: 'Dylan',
    chineseName: '迪倫',
    image: '/images/therapist-Dylan-2.JPG',
    kicker: 'SEPTEMBER NO.1',
    description: <>9 月熱門第一名<br />人氣穩定・預約前請先確認班表</>,
  },
  {
    id: 'owen',
    rank: '02',
    name: 'Owen',
    chineseName: '歐文',
    image: '/images/therapist-Owen-2.JPG',
    kicker: 'SEPTEMBER NO.2',
    description: <>9 月熱門第二名<br />新師上線・自然沉穩・放鬆感十足</>,
  },
  {
    id: 'oni',
    rank: '03',
    name: 'Oni',
    chineseName: '歐尼',
    image: '/images/therapist-Oni-2.JPG',
    kicker: 'SEPTEMBER NO.3',
    description: <>9 月熱門第三名<br />熟客喜愛・手感與氣質各有特色</>,
  },
]

function openProfile(event, therapistId) {
  const trigger = document.getElementById(`${therapistId}-profile-trigger`)
  if (!trigger) return

  event.preventDefault()
  trigger.scrollIntoView({ behavior: 'smooth', block: 'center' })
  window.setTimeout(() => trigger.click(), 250)
}

export default function TopTherapists() {
  const cardsRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToCard = (index) => {
    const cards = cardsRef.current
    const card = cards?.children[index]
    if (!cards || !card) return

    cards.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
    setActiveIndex(index)
  }

  return (
    <section className={styles.section} id="top-three" aria-labelledby="top-three-title">
      <div className={styles.sectionHead}>
        <p className={styles.eyebrow}>SEPTEMBER HIGHLIGHTS</p>
        <h2 id="top-three-title">9 月熱門師傅</h2>
        <div className={styles.rule} aria-hidden="true"><span>TOP 3</span></div>
        <p className={styles.lead}>本月人氣排名，先看熱門師傅，再依班表安排你的放鬆時間。</p>
      </div>

      <div className={styles.cards} ref={cardsRef}>
        {topTherapists.map((therapist) => (
          <article className={styles.card} key={therapist.id}>
            <div className={styles.rank}>{therapist.rank}</div>
            <div className={`${styles.photoWrap} ${styles[therapist.id]}`}>
              <Image
                src={therapist.image}
                alt={`${therapist.name}／${therapist.chineseName}`}
                fill
                sizes="(max-width: 680px) 78vw, (max-width: 1100px) 31vw, 360px"
              />
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardKicker}>{therapist.kicker}</p>
              <h3>{therapist.name} <span>／{therapist.chineseName}</span></h3>
              <p className={styles.description}>{therapist.description}</p>
              <div className={styles.cardActions}>
                <a
                  href="#therapists"
                  onClick={(event) => openProfile(event, therapist.id)}
                >
                  查看資料
                </a>
                <a href={LINE_URL} target="_blank" rel="noreferrer">LINE 詢問</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.carouselControls} aria-label="切換熱門師傅">
        <button
          type="button"
          className={styles.carouselButton}
          onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          aria-label="上一位熱門師傅"
        >
          <span aria-hidden="true">←</span>
        </button>
        <span className={styles.carouselStatus}>
          {activeIndex + 1} / {topTherapists.length}　左右滑動查看
        </span>
        <button
          type="button"
          className={styles.carouselButton}
          onClick={() => scrollToCard(Math.min(topTherapists.length - 1, activeIndex + 1))}
          disabled={activeIndex === topTherapists.length - 1}
          aria-label="下一位熱門師傅"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className={styles.sectionFoot}>
        <a href="#therapists">查看全部師傅與每日班表　↗</a>
      </div>
    </section>
  )
}
