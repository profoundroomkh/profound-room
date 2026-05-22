import './globals.css'

export const metadata = {
  title:
    'PROFOUND ROOM 深寓｜高雄預約制 Gay SPA 與男士放鬆空間',

  description:
    'PROFOUND ROOM 深寓為高雄預約制男士 Gay SPA 空間，提供沉浸式按摩放鬆、深夜舒壓、私人放鬆體驗與安靜療癒空間。',

  keywords: [
    '高雄 Gay SPA',
    '高雄男士SPA',
    'Kaohsiung Gay Spa',
    '高雄同志SPA',
    '高雄按摩',
    '高雄放鬆空間',
    '男士按摩',
    '高雄男按摩',
    '預約制SPA',
    '高雄舒壓',
    '高雄深夜按摩',
    '高雄同志按摩',
    'gay massage kaohsiung',
    'private spa for men',
    'mens spa kaohsiung',
  ],

  openGraph: {
    title:
      'PROFOUND ROOM 深寓｜高雄預約制 Gay SPA',

    description:
      'A private relaxation space for men in Kaohsiung.',

    url: 'https://profound-room.vercel.app',

    siteName: 'PROFOUND ROOM',

    images: ['/images/hero.jpg'],

    locale: 'zh_TW',

    type: 'website',
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  )
}
