import './globals.css'

export const metadata = {
  title: '高雄 Gay SPA｜PROFOUND ROOM 男士預約制放鬆空間',

  description:
    'PROFOUND ROOM 為高雄預約制 Gay SPA 與男士放鬆空間，提供私密、沉浸式的深層舒壓體驗。位於高雄亞洲新灣區附近，採完全預約制。',

  keywords: [
    '高雄 Gay SPA',
    '高雄男士SPA',
    'Kaohsiung Gay Spa',
    '高雄同志SPA',
    '高雄按摩',
    '高雄放鬆空間',
    '男士按摩',
    '預約制SPA',
    'gay massage kaohsiung',
    'private spa for men'
  ],

  openGraph: {
    title: 'PROFOUND ROOM｜高雄預約制男士 SPA',

    description:
      'A private relaxation space for men in Kaohsiung.',

    url: 'https://profound-room.vercel.app',

    siteName: 'PROFOUND ROOM',

    locale: 'zh_TW',

    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  )
}
