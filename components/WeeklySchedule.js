'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  FULLY_BOOKED_LABEL,
  PENDING_UPDATE_LABEL,
  getScheduleDayIndex,
  scheduleDays,
  scheduleRows,
} from '../data/weeklySchedule'
import styles from './WeeklySchedule.module.css'
import useTaiwanDateKey from './useTaiwanDateKey'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

function getTimeClass(time) {
  if (time === FULLY_BOOKED_LABEL) return styles.full
  if (time === PENDING_UPDATE_LABEL) return styles.pending
  if (time === '詢問') return styles.ask
  if (time === '—') return styles.empty
  return styles.open
}

function openTherapistProfile(therapistId) {
  window.dispatchEvent(new CustomEvent('profound:open-profile', {
    detail: { therapistId },
  }))
}

export default function WeeklySchedule() {
  const dateKey = useTaiwanDateKey()
  const todayIndex = getScheduleDayIndex(dateKey)
  const [activeDay, setActiveDay] = useState(() => (todayIndex >= 0 ? todayIndex : 0))
  const [viewMode, setViewMode] = useState('day')
  const [selectedTherapistId, setSelectedTherapistId] = useState(scheduleRows[0]?.id || '')
  const scheduleRange = `${scheduleDays[0].date}–${scheduleDays[scheduleDays.length - 1].date}`
  const selectedTherapist = useMemo(
    () => scheduleRows.find((therapist) => therapist.id === selectedTherapistId) || scheduleRows[0],
    [selectedTherapistId],
  )

  useEffect(() => {
    if (todayIndex >= 0) setActiveDay(todayIndex)
  }, [todayIndex])

  const selectedDay = scheduleDays[activeDay]
  const selectedRows = useMemo(
    () => scheduleRows.filter((therapist) => therapist.times[activeDay] !== '—'),
    [activeDay],
  )
  const quickDays = useMemo(() => {
    const firstDay = todayIndex >= 0 ? todayIndex : 0
    return [0, 1, 2]
      .map((offset) => {
        const index = firstDay + offset
        return index < scheduleDays.length ? { day: scheduleDays[index], index } : null
      })
      .filter(Boolean)
  }, [todayIndex])

  return (
    <section
      id="weekly-schedule"
      className={styles.section}
      aria-labelledby="weekly-schedule-title"
    >
      <div className={styles.headingRow}>
        <div>
          <p className={styles.eyebrow}>WEEKLY SCHEDULE</p>
          <h2 id="weekly-schedule-title">本週＋下週師傅班表</h2>
        </div>
        <p className={styles.intro}>
          先選日期查看當日班表，或選擇師傅查看整週排班，再透過官方 LINE 確認實際空檔與預約細節。
        </p>
      </div>

      <div className={styles.metaRow}>
        <p className={styles.range}>{scheduleRange} <span>每日 00:00 自動切換狀態</span></p>
        <p className={styles.note}>
          公開班表只顯示師傅與服務時間，不公開客人或內部預約資料。
        </p>
      </div>

      <div className={styles.viewModeSwitch} role="group" aria-label="班表查看方式">
        <button
          type="button"
          className={viewMode === 'day' ? styles.viewModeActive : styles.viewModeButton}
          onClick={() => setViewMode('day')}
          aria-pressed={viewMode === 'day'}
        >
          按日期查看
        </button>
        <button
          type="button"
          className={viewMode === 'therapist' ? styles.viewModeActive : styles.viewModeButton}
          onClick={() => setViewMode('therapist')}
          aria-pressed={viewMode === 'therapist'}
        >
          按師傅看整週
        </button>
      </div>

      {viewMode === 'therapist' ? (
        <section className={styles.therapistWeekView} aria-labelledby="therapist-week-title">
          <div className={styles.therapistWeekHeader}>
            <div>
              <p className={styles.therapistWeekEyebrow}>THERAPIST VIEW</p>
              <h3 id="therapist-week-title">選師傅看整週</h3>
              <p className={styles.therapistWeekIntro}>選擇一位師傅，就能一次查看這段期間每天的服務時間。</p>
            </div>
            <label className={styles.therapistPicker}>
              <span>選擇師傅</span>
              <select
                value={selectedTherapist?.id || ''}
                onChange={(event) => setSelectedTherapistId(event.target.value)}
              >
                {scheduleRows.map((therapist) => (
                  <option key={therapist.id} value={therapist.id}>
                    {therapist.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {selectedTherapist && (
            <>
              <div className={styles.therapistWeekIdentity}>
                <div>
                  <p className={styles.therapistWeekName}>{selectedTherapist.name}</p>
                  {selectedTherapist.tag && <span className={styles.therapistWeekTag}>{selectedTherapist.tag}</span>}
                </div>
                <button
                  type="button"
                  className={styles.profileLink}
                  onClick={() => openTherapistProfile(selectedTherapist.id)}
                  aria-label={`查看 ${selectedTherapist.name} 的照片與完整資料`}
                >
                  查看照片與資料
                </button>
              </div>

              <div className={styles.therapistWeekGrid}>
                {scheduleDays.map((day, index) => {
                  const time = selectedTherapist.times[index]
                  const displayTime = time === '—' ? '休息' : time
                  return (
                    <article className={styles.therapistDayCard} key={day.key}>
                      <div>
                        <p className={styles.therapistDayLabel}>週{day.label}</p>
                        <p className={styles.therapistDayDate}>{day.date}</p>
                      </div>
                      <p className={`${styles.therapistDayTime} ${getTimeClass(time)}`}>{displayTime}</p>
                    </article>
                  )
                })}
              </div>
            </>
          )}
          <p className={styles.therapistWeekHint}>「休息」代表當日未排班；「待更新」代表班次尚未提供；「詢問」請先透過官方 LINE 確認；「預約滿」代表當日名額已滿。</p>
        </section>
      ) : (
        <>
          <nav className={styles.quickSwitch} aria-label="快速查看近期班表">
            <p className={styles.quickLabel}>快速查看</p>
            <div className={styles.quickButtons}>
              {quickDays.map(({ day, index }, quickIndex) => (
                <button
                  key={day.key}
                  type="button"
                  className={activeDay === index ? styles.quickButtonActive : styles.quickButton}
                  onClick={() => setActiveDay(index)}
                  aria-current={activeDay === index ? 'date' : undefined}
                >
                  <span className={styles.quickTitle}>
                    {quickIndex === 0 ? '今天' : quickIndex === 1 ? '明天' : '後天'}
                  </span>
                  <span className={styles.quickDate}>{day.label} {day.date}</span>
                </button>
              ))}
            </div>
          </nav>

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
                        <button
                          type="button"
                          className={styles.profileLink}
                          onClick={() => openTherapistProfile(therapist.id)}
                          aria-label={`查看 ${therapist.name} 的照片與完整資料`}
                        >
                          查看照片
                        </button>
                      </div>
                      <p className={`${styles.mobileTime} ${getTimeClass(time)}`}>{time}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <p className={styles.mobileHint}>未列出代表當日未排班；「待更新」代表班次尚未提供；「詢問」請先透過官方 LINE 確認；「預約滿」代表當日名額已滿。</p>
          </div>

          <div className={styles.desktopTableWrap}>
            <table>
              <caption className={styles.srOnly}>{scheduleRange} 深寓師傅班表</caption>
              <thead>
                <tr>
                  <th scope="col">師傅</th>
                  {scheduleDays.map((day, index) => (
                    <th
                      scope="col"
                      key={day.key}
                      className={activeDay === index ? styles.dayColumnActive : undefined}
                    >
                      {day.label} {day.date}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map((therapist) => (
                  <tr key={therapist.id}>
                    <th scope="row">
                      <span className={styles.name}>{therapist.name}</span>
                      {therapist.tag && <span className={styles.tag}>{therapist.tag}</span>}
                      <button
                        type="button"
                        className={styles.profileLink}
                        onClick={() => openTherapistProfile(therapist.id)}
                        aria-label={`查看 ${therapist.name} 的照片與完整資料`}
                      >
                        查看照片
                      </button>
                    </th>
                    {therapist.times.map((time, index) => (
                      <td
                        className={`${getTimeClass(time)} ${activeDay === index ? styles.dayColumnActive : ''}`}
                        key={`${therapist.id}-${scheduleDays[index].key}`}
                      >
                        {time}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

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
