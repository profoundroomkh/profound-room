import Header from '../../components/Header'
import TherapistDirectory from '../../components/TherapistDirectory'
import styles from './page.module.css'

export const metadata = {
  title: '每週師傅班表｜深寓 PROFOUND ROOM',
  description: '查看深寓 PROFOUND ROOM 本週師傅班表、每日服務時間與可預約狀態。',
  alternates: {
    canonical: 'https://profoundroom.com/weekly-schedule',
  },
}

export default function WeeklySchedulePage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.intro} aria-labelledby="schedule-page-title">
          <p className={styles.eyebrow}>PROFOUND ROOM · WEEKLY SCHEDULE</p>
          <h1 id="schedule-page-title">每週師傅班表</h1>
          <p>選擇日期查看當日排班，點擊師傅名稱旁的「查看照片」即可開啟完整資料。</p>
        </section>
        <TherapistDirectory showDirectory={false} />
      </main>
    </>
  )
}
