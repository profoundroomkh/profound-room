'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  getScheduleDayIndex,
  scheduleDays,
  scheduleRows,
} from '../data/weeklySchedule'
import styles from './WeeklySchedule.module.css'
import useTaiwanDateKey from './useTaiwanDateKey'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

function getTimeClass(time) {
  if (time === '詢問') return styles.ask
  if (time === '—') return styles.empty
  return styles.open
}

export default function WeeklySchedule() {
  const dateKey = useTaiwanDateKey()
  const todayIndex = getScheduleDayIndex(dateKey)
  const [activeDay, setActiveDay] = useState(() => (todayIndex >= 0 ? todayIndex : 0))

  useEffect(() => {
    if (todayIndex >= 0) setActiveDay(todayIndex)
  }, [todayIndex])

  const selectedDay = scheduleDays[activeDay]
  const selectedRows = useMemo(
    () => scheduleRows.filter((therapist) => therapist.times[activeDay] !== '—'),
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
        <p className={styles.range}>9/28–10/4 <span>每日 00:00 自動切換狀態</span></p>
        <p className={styles.note}>
          公開班表只顯示師傅與服務時間，不公開客人或內部預約資料。
        </p>
      </div>

      <div className={styles.mobileSchedule}>
        <div className={styles.dayTabs} role="tablist" aria-label="選擇班表日期">
          {scheduleDays.map((day, index) => (
            <button
              key={day.key}
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
                <div className={styles.mobileItem} key={therapist.id}>
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
              {scheduleDays.map((day) => <th scope="col" key={day.key}>{day.label} {day.date}</th>)}
            </tr>
          </thead>
          <tbody>
            {scheduleRows.map((therapist) => (
              <tr key={therapist.id}>
                <th scope="row">
                  <span className={styles.name}>{therapist.name}</span>
                  {therapist.tag && <span className={styles.tag}>{therapist.tag}</span>}
                </th>
                {therapist.times.map((time, index) => (
                  <td className={getTimeClass(time)} key={`${therapist.id}-${scheduleDays[index].key}`}>{time}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.footerRow}>
        <p className={styles.caption}>
          班表會依台灣時間每日 00:00 自動切換「可預約／休息中」；實際空檔與服務細節，請以官方 LINE 回覆為準。
        </p>
        <a className={styles.cta} href={LINE_URL} target="_blank" rel="noreferrer">
          LINE 詢問本週空檔 <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
