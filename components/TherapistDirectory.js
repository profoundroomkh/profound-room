'use client'

// Design reminder: "靜謐選師廊道" — preserve the existing deep-black and warm-gold
// atmosphere, keep motion user-controlled, and make booking state unmistakable.

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { therapistFilters, therapists } from '../data/therapists'
import styles from './TherapistDirectory.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

function trackBooking(therapist) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'line_click', {
      event_category: 'booking',
      event_label: therapist.name,
      therapist_id: therapist.id,
    })
  }
}

export default function TherapistDirectory() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [notice, setNotice] = useState('')
  const closeButtonRef = useRef(null)
  const lastTriggerRef = useRef(null)

  const visibleTherapists = useMemo(() => {
    if (activeFilter === 'new') return therapists.filter((item) => item.isNew)
    if (activeFilter === 'available') {
      return therapists.filter((item) => item.status === 'available')
    }
    if (activeFilter === 'paused') {
      return therapists.filter((item) => item.status === 'paused')
    }
    return therapists
  }, [activeFilter])

  useEffect(() => {
    if (!selected) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelected(null)
      if (selected.images.length > 1 && event.key === 'ArrowRight') {
        setCurrentImage((index) => (index + 1) % selected.images.length)
      }
      if (selected.images.length > 1 && event.key === 'ArrowLeft') {
        setCurrentImage(
          (index) => (index - 1 + selected.images.length) % selected.images.length,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      lastTriggerRef.current?.focus()
    }
  }, [selected])

  useEffect(() => {
    if (!notice) return undefined
    const timeout = window.setTimeout(() => setNotice(''), 3200)
    return () => window.clearTimeout(timeout)
  }, [notice])

  const openDetails = (therapist, trigger) => {
    lastTriggerRef.current = trigger
    setCurrentImage(0)
    setSelected(therapist)
  }

  const handleBooking = async (therapist) => {
    if (therapist.status !== 'available') return

    const bookingText = `您好，我想預約 ${therapist.name} 師傅。\n希望日期：\n希望時段：${therapist.supportPeriod ? `（支援時間：${therapist.supportPeriod}）` : ''}\n課程：90 分鐘／120 分鐘`
    trackBooking(therapist)
    window.open(LINE_URL, '_blank', 'noopener,noreferrer')

    try {
      await navigator.clipboard.writeText(bookingText)
      setNotice(`已複製 ${therapist.name} 的預約文字，LINE 已開啟`)
    } catch {
      setNotice(`LINE 已開啟，請告知客服想預約 ${therapist.name}`)
    }
  }

  return (
    <section id="therapists" className={styles.section}>
      <div className={styles.headingRow}>
        <div>
          <p className={styles.eyebrow}>THERAPISTS</p>
          <h2>找到適合你的放鬆節奏</h2>
        </div>
        <p className={styles.intro}>
          先瀏覽師傅風格與資料，需要時再展開完整圖集。照片不會自動切換，選擇由你掌握。
        </p>
      </div>

      <div className={styles.filterBar} aria-label="篩選師傅">
        {therapistFilters.map((filter) => {
          const count =
            filter.id === 'all'
              ? therapists.length
              : filter.id === 'new'
                ? therapists.filter((item) => item.isNew).length
                : therapists.filter((item) => item.status === filter.id).length

          return (
            <button
              key={filter.id}
              type="button"
              className={activeFilter === filter.id ? styles.filterActive : styles.filter}
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={activeFilter === filter.id}
            >
              {filter.label}
              <span>{count}</span>
            </button>
          )
        })}
      </div>

      <p className={styles.resultCount} aria-live="polite">
        顯示 {visibleTherapists.length} 位師傅
      </p>

      <div className={styles.grid}>
        {visibleTherapists.map((therapist) => (
          <article
            key={therapist.id}
            className={`${styles.card} ${
              therapist.status === 'paused' ? styles.cardPaused : ''
            }`}
          >
            <button
              type="button"
              className={styles.mediaButton}
              onClick={(event) => openDetails(therapist, event.currentTarget)}
              aria-label={`查看 ${therapist.name} 的完整資料與照片`}
            >
              <span className={styles.media}>
                <Image
                  src={therapist.images[0]}
                  alt=""
                  fill
                  sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 33vw"
                  className={styles.backdropImage}
                />
                <Image
                  src={therapist.images[0]}
                  alt={`${therapist.name} 師傅`}
                  fill
                  sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 33vw"
                  className={styles.mainImage}
                />
                <span className={styles.imageShade} />
                <span
                  className={
                    therapist.status === 'available'
                      ? styles.statusAvailable
                      : styles.statusPaused
                  }
                >
                  {therapist.status === 'available' ? '可預約' : '休息中'}
                </span>
                {therapist.isNew && <span className={styles.newBadge}>NEW</span>}
                <span className={styles.photoCount}>{therapist.images.length} 張</span>
              </span>
            </button>

            <div className={styles.cardBody}>
              <div className={styles.nameRow}>
                <h3>{therapist.name}</h3>
                <span>VIEW PROFILE</span>
              </div>
              <p className={styles.specialty}>{therapist.specialty}</p>
              <p className={styles.metrics}>
                <span>{therapist.height}cm</span>
                <span>{therapist.weight}kg</span>
                <span>{therapist.age}歲</span>
              </p>
              <p className={styles.detailsLine}>
                {therapist.role}
                {therapist.size && <span>｜ {therapist.size}</span>}
              </p>
              {therapist.supportPeriod && (
                <p className={styles.supportPeriod}>
                  <span>支援時間</span>
                  {therapist.supportPeriod}
                </p>
              )}

              <div className={styles.cardActions}>
                <button
                  type="button"
                  className={styles.profileButton}
                  onClick={(event) => openDetails(therapist, event.currentTarget)}
                >
                  查看資料
                </button>
                <button
                  type="button"
                  className={styles.bookingButton}
                  disabled={therapist.status !== 'available'}
                  onClick={() => handleBooking(therapist)}
                >
                  {therapist.status === 'available' ? '預約此師傅' : '暫停接單'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div
          className={styles.modalBackdrop}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null)
          }}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="therapist-dialog-title"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.closeButton}
              onClick={() => setSelected(null)}
              aria-label="關閉師傅資料"
            >
              ×
            </button>

            <div className={styles.modalMedia}>
              <Image
                src={selected.images[currentImage]}
                alt={`${selected.name} 師傅照片 ${currentImage + 1}`}
                fill
                sizes="(max-width: 799px) 100vw, 55vw"
                className={styles.modalImage}
                priority
              />

              {selected.images.length > 1 && (
                <>
                  <button
                    type="button"
                    className={styles.previousButton}
                    onClick={() =>
                      setCurrentImage(
                        (index) =>
                          (index - 1 + selected.images.length) % selected.images.length,
                      )
                    }
                    aria-label="上一張照片"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className={styles.nextButton}
                    onClick={() =>
                      setCurrentImage((index) => (index + 1) % selected.images.length)
                    }
                    aria-label="下一張照片"
                  >
                    ›
                  </button>
                </>
              )}

              <div className={styles.dots} aria-label="照片頁數">
                {selected.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    className={index === currentImage ? styles.dotActive : styles.dot}
                    onClick={() => setCurrentImage(index)}
                    aria-label={`查看第 ${index + 1} 張照片`}
                    aria-current={index === currentImage ? 'true' : undefined}
                  />
                ))}
              </div>
            </div>

            <div className={styles.modalContent}>
              <p className={styles.modalEyebrow}>
                {selected.isNew ? 'NEW THERAPIST' : 'THERAPIST PROFILE'}
              </p>
              <h3 id="therapist-dialog-title">{selected.name}</h3>
              <p className={styles.modalSpecialty}>{selected.specialty}</p>

              <dl className={styles.profileData}>
                <div>
                  <dt>身高</dt>
                  <dd>{selected.height} cm</dd>
                </div>
                <div>
                  <dt>體重</dt>
                  <dd>{selected.weight} kg</dd>
                </div>
                <div>
                  <dt>年齡</dt>
                  <dd>{selected.age} 歲</dd>
                </div>
                <div>
                  <dt>角色</dt>
                  <dd>{selected.role}</dd>
                </div>
                {selected.size && (
                  <div>
                    <dt>資料</dt>
                    <dd>{selected.size}</dd>
                  </div>
                )}
                {selected.supportPeriod && (
                  <div className={styles.profileDataWide}>
                    <dt>支援時間</dt>
                    <dd>{selected.supportPeriod}</dd>
                  </div>
                )}
              </dl>

              <div className={styles.modalStatus}>
                <span
                  className={
                    selected.status === 'available'
                      ? styles.statusIndicatorAvailable
                      : styles.statusIndicatorPaused
                  }
                />
                {selected.status === 'available'
                  ? '目前開放預約'
                  : '目前暫停接單，恢復時間請留意公告'}
              </div>

              <button
                type="button"
                className={styles.modalBookingButton}
                disabled={selected.status !== 'available'}
                onClick={() => handleBooking(selected)}
              >
                {selected.status === 'available'
                  ? `複製預約文字並前往 LINE`
                  : '暫停接單'}
              </button>
              {selected.status === 'available' && (
                <p className={styles.bookingHint}>
                  將自動複製含有「{selected.name}」的預約文字，日期與時段可在 LINE 中補上。
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className={notice ? styles.noticeVisible : styles.notice} role="status">
        {notice}
      </div>
    </section>
  )
}
