'use client'

import Image from 'next/image'
import styles from './WeeklyScheduleImage.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

export default function WeeklyScheduleImage() {
  return (
    <section className={styles.section} aria-labelledby="weekly-schedule-title">
      <div className={styles.headingRow}>
        <div>
          <p className={styles.eyebrow}>WEEKLY SCHEDULE</p>
          <h2 id="weekly-schedule-title">本週師傅班表</h2>
        </div>
        <p className={styles.intro}>
          先看本週師傅安排，再透過官方 LINE 確認當日空檔與預約細節。
        </p>
      </div>

      <div className={styles.metaRow}>
        <p className={styles.range}>9/28–10/4 <span>每週更新</span></p>
        <p className={styles.note}>
          公開班表只顯示師傅與服務時間，不公開客人或內部預約資料。
        </p>
      </div>

      <a
        className={styles.imageLink}
        href="/images/weekly-schedule-current.png"
        target="_blank"
        rel="noreferrer"
        aria-label="開啟本週師傅班表大圖"
      >
        <Image
          src="/images/weekly-schedule-current.png"
          alt="深寓 9 月 28 日至 10 月 4 日師傅週班表"
          width={2560}
          height={1440}
          sizes="(max-width: 700px) calc(100vw - 32px), 1152px"
          className={styles.image}
          priority={false}
        />
        <span className={styles.zoomHint}>點擊查看大圖</span>
      </a>

      <div className={styles.footerRow}>
        <p className={styles.caption}>
          班表為每週更新預覽；實際空檔與服務細節，請以官方 LINE 回覆為準。
        </p>
        <a className={styles.cta} href={LINE_URL} target="_blank" rel="noreferrer">
          LINE 詢問本週空檔 <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
