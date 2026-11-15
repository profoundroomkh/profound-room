'use client'

import Image from 'next/image'
import styles from './HomePromotion.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

const offers = [
  {
    title: '深夜加成｜5 折優惠',
    image: '/images/promotion/late-night.webp',
    alt: '深夜加成 5 折優惠，活動期間 11.15 至 12.06。',
    summary: '活動期間深夜加成全面享 5 折優惠。',
  },
  {
    title: '外縣市｜專屬折抵',
    image: '/images/promotion/out-of-town.webp',
    alt: '外縣市彩虹專屬折抵，提前一日以上預約並憑交通票根折抵 200 元。',
    summary: '提前一日以上預約，憑高鐵、台鐵或客運票根折抵 200 元；票根日期須在預約日前三日內，優惠不重複，擇優使用。',
  },
  {
    title: '雙人同行｜兩堂聯票',
    image: '/images/promotion/duo-ticket.webp',
    alt: '雙人同行兩堂聯票，提前一日以上預約，折抵 600 元；雙手聯彈不適用。',
    summary: '提前一日以上預約，同一人預約兩位師傅或雙人同行，可折抵 600 元；雙手聯彈不適用。',
  },
]

export default function HomePromotion() {
  return (
    <section id="top-three" className={styles.section} aria-labelledby="top-three-title">
      <div className={styles.container}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>SEASONAL PROMOTION · 11.15—12.06</p>
          <h2 id="top-three-title">彩虹月優惠活動</h2>
          <p className={styles.lead}>
            以本期活動為主題，整合深夜加成、外縣市折抵與雙人同行優惠；
            活動圖卡與使用提醒集中呈現。
          </p>
        </header>

        <div className={styles.heroGrid}>
          <figure className={styles.heroPoster}>
            <Image
              src="/images/promotion/rainbow-month.webp"
              alt="深寓彩虹月優惠活動主視覺，活動期間 11.15 至 12.06。"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 54vw"
            />
          </figure>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>PROFOUND ROOM · LIMITED OFFER</p>
            <h2>本期優惠<br /><span>一次看清楚</span></h2>
            <div className={styles.dateBlock}>
              <span>活動期間</span>
              <strong>11.15 <i>—</i> 12.06</strong>
            </div>
            <p className={styles.heroNote}>
              依各優惠適用條件選擇一項使用。票根與預約日期等細節，請於預約時向官方 LINE 確認。
            </p>
            <a className={styles.primaryLink} href={LINE_URL} target="_blank" rel="noreferrer">
              LINE 詢問優惠
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className={styles.offerHeading}>
          <p className={styles.kicker}>THE OFFERS</p>
          <h2>期間優惠</h2>
          <span>適用條件依各活動圖卡說明</span>
        </div>

        <div className={styles.offerGrid}>
          {offers.map((offer, index) => (
            <article className={styles.offerCard} key={offer.image}>
              <div className={styles.offerLabel}>
                <span>0{index + 1}</span>
                <h3>{offer.title}</h3>
              </div>
              <figure className={styles.offerPoster}>
                <Image
                  src={offer.image}
                  alt={offer.alt}
                  fill
                  sizes="(max-width: 680px) 88vw, (max-width: 1000px) 44vw, 31vw"
                />
              </figure>
              <p className={styles.offerSummary}>{offer.summary}</p>
            </article>
          ))}
        </div>

        <aside className={styles.policy} aria-label="優惠使用提醒">
          <div className={styles.policyCopy}>
            <p className={styles.kicker}>PLEASE NOTE</p>
            <h2>優惠不併用</h2>
            <p>符合資格的優惠中，請擇一使用；適用條件與可使用方案，請於預約時洽官方 LINE 確認。</p>
            <a href={LINE_URL} target="_blank" rel="noreferrer">洽詢官方 LINE <span aria-hidden="true">↗</span></a>
          </div>
          <figure className={styles.policyPoster}>
            <Image
              src="/images/promotion/offer-policy.webp"
              alt="優惠不併用；符合資格的優惠請擇一使用，適用條件請於預約時洽官方 LINE。"
              fill
              sizes="(max-width: 760px) 88vw, 34vw"
            />
          </figure>
        </aside>

        <footer className={styles.footer}>
          <span>PROFOUND ROOM · 深寓</span>
          <a href="/#all-therapists">查看師傅與班表</a>
        </footer>
      </div>
    </section>
  )
}
