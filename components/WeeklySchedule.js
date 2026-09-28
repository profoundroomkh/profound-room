'use client'

import { useMemo, useState } from 'react'
import styles from './WeeklySchedule.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

const days = [
  { label: '一', date: '9/28' },
  { label: '二', date: '9/29' },
  { label: '三', date: '9/30' },
  { label: '四', date: '10/1' },
  { label: '五', date: '10/2' },
  { label: '六', date: '10/3' },
  { label: '日', date: '10/4' },
]

const schedule = [
  {
    name: 'Andy／安迪',
    tag: '直男方案',
    times: ['全天', '全天', '全天', '全天', '全天', '全天', '全天'],
  },
  {
    name: 'Hugo／雨果',
    tag: '現場師傅',
    times: ['現場師傅', '現場師傅', '現場師傅', '現場師傅', '現場師傅', '現場師傅', '現場師傅'],
  },
  {
    name: 'Alan／艾倫',
    times: ['—', '11:00–20:00', '11:00–15:00', '11:00–20:00', '11:00–20:00', '—', '—'],
  },
  {
    name: 'Oni／歐尼',
    times: ['—', '11:00–18:00', '11:00–15:00', '11:00–20:00', '11:00–20:00', '11:00–20:00', '—'],
  },
  {
    name: 'Noah／諾亞',
    times: ['—', '11:00–22:00', '11:00–22:00', '—', '11:00–22:00', '11:00–22:00', '11:00–22:00'],
  },
  {
    name: 'Gugu／咕咕',
    times: ['12:00–21:00', '—', '12:00–21:00', '—', '12:00–21:00', '12:00–21:00', '12:00–21:00'],
  },
  {
    name: 'Dylan／迪倫',
    times: ['12:00–22:00', '12:00–22:00', '12:00–22:00', '12:00–22:00', '12:00–22:00', '12:00–22:00', '12:00–22:00'],
  },
  {
    name: 'Kai／凱',
    tag: '提前一天預約',
    times: ['14:00–24:00', '14:00–24:00', '14:00–24:00', '14:00–24:00', '14:00–24:00', '14:00–24:00', '—'],
  },
  {
    name: 'Owen／歐文',
    times: ['—', '—', '19:30–23:30', '19:30–23:30', '19:30–23:30', '19:30–23:30', '—'],
  },
  {
    name: 'Odin／奧丁',
    times: ['14:00–20:00', '20:00 起', '20:00 起', '20:00 起', '20:00 起', '20:00 起', '20:00 起'],
  },
  {
    name: 'Raven／雷文',
    times: ['詢問', '詢問', '詢問', '詢問', '詢問', '詢問', '詢問'],
  },
  {
    name: 'Milo／米洛',
    times: ['—', '—', '—', '—', '22:30–23:30', '22:30–23:30', '22:30–23:30'],
  },
  {
    name: 'Alpha／阿法',
    times: ['—', '—', '—', '—', '—', '10:00–20:00', '—'],
  },
]

function getTimeClass(time) {
  if (time === '詢問') return styles.ask
  if (time === '—') return styles.empty
  return styles.open
}

export default function WeeklySchedule() {
  const [activeDay, setActiveDay] = useState(0)
  const selectedDay = days[activeDay]
  const selectedRows = useMemo(
    () => schedule.filter((therapist) => therapist.times[activeDay] !== '—'),
    [activeDay],
  )

  return (
    <section className={styles.section} aria-labelledby="weekly-schedule-title">
      <div className={styles.headingRow}>
        <div>
          <p className={styles.eyebrow}>WEEKLY SCHEDULE</p>
          <h2 id="weekly-schedule-title">本週師傅班表</h2>
        </div>
        <p className={styles.intro}>
          先選日期查看當日班表，再透過官方 LINE 確認實際空檔與預約細節。
        </p>
      </div>

      <div className={styles.metaRow}>
        <p className={styles.range}>9/28–10/4 <span>每週更新</span></p>
        <p className={styles.note}>
          公開班表只顯示師傅與服務時間，不公開客人或內部預約資料。
        </p>
      </div>

      <div className={styles.mobileSchedule}>
        <div className={styles.dayTabs} role="tablist" aria-label="選擇班表日期">
          {days.map((day, index) => (
            <button
              key={day.date}
              type="button"
              role="tab"
              aria-selected={activeDay === index}
              className={activeDay === index ? styles.dayTabActive : styles.dayTab}
              onClick={() => setActiveDay(index)}
            >
              <strong>{day.label}</strong>
              <span>{day.date}</span>
            </button>
          ))}
        </div>

        <div className={styles.dayCard} role="tabpanel">
          <div className={styles.dayCardHeader}>
            <h3>週{selectedDay.label} {selectedDay.date}</h3>
            <span>{selectedRows.length} 位排班</span>
          </div>
          <div className={styles.mobileList}>
            {selectedRows.map((therapist) => {
              const time = therapist.times[activeDay]
              return (
                <div className={styles.mobileItem} key={therapist.name}>
                  <div>
                    <p className={styles.mobileName}>{therapist.name}</p>
                    {therapist.tag && <span className={styles.mobileTag}>{therapist.tag}</span>}
                  </div>
                  <p className={`${styles.mobileTime} ${getTimeClass(time)}`}>{time}</p>
                </div>
              )
            })}
          </div>
        </div>
        <p className={styles.mobileHint}>未列出代表當日未排班；「詢問」請先透過官方 LINE 確認。</p>
      </div>

      <div className={styles.desktopTableWrap}>
        <table>
          <caption className={styles.srOnly}>9 月 28 日至 10 月 4 日深寓師傅週班表</caption>
          <thead>
            <tr>
              <th scope="col">師傅</th>
              {days.map((day) => <th scope="col" key={day.date}>{day.label} {day.date}</th>)}
            </tr>
          </thead>
          <tbody>
            {schedule.map((therapist) => (
              <tr key={therapist.name}>
                <th scope="row">
                  <span className={styles.name}>{therapist.name}</span>
                  {therapist.tag && <span className={styles.tag}>{therapist.tag}</span>}
                </th>
                {therapist.times.map((time, index) => (
                  <td className={getTimeClass(time)} key={`${therapist.name}-${days[index].date}`}>{time}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
