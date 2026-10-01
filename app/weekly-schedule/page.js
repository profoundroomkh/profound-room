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
        <TherapistDirectory showDirectory={false} />
      </main>
    </>
  )
}
