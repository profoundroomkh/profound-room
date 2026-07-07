import FloatingButton from '../components/FloatingButton'
import './globals.css'
import Script from 'next/script'

export const metadata = {
  verification: {
    google:
      'lLXC421Mze9xeGmQsBV33sdP3ipp6apLvDdqnB7rwFU',
  },

  metadataBase: new URL('https://profoundroom.com'),

  title:
    '深寓 PROFOUND ROOM｜高雄 Gay SPA｜男士按摩與放鬆空間',

  description:
    'PROFOUND ROOM 深寓為高雄預約制 Gay SPA 與男士放鬆空間，提供專業按摩、精油舒壓、私人空間與沉浸式療癒體驗。',

  keywords: [
    '高雄 Gay SPA',
    '高雄男士SPA',
    'Kaohsiung Gay Spa',
    '高雄同志SPA',
    '高雄按摩',
    '高雄放鬆空間',
    '男士按摩',
    '高雄男按摩',
    '高雄舒壓',
    '高雄深夜按摩',
    '高雄同志按摩',
    'Gay Massage Kaohsiung',
    'Kaohsiung Gay Massage',
    '高雄男士按摩推薦',
    '高雄同志SPA推薦',
    '高雄預約制按摩',
    '高雄私人按摩',
    '高雄舒壓按摩',
  ],

  openGraph: {
    title: '高雄 Gay SPA｜PROFOUND ROOM 深寓',
    description: '高雄預約制男士放鬆空間與專業按摩體驗',
    url: 'https://profoundroom.com',
    siteName: 'PROFOUND ROOM 深寓',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
 return (
  <html lang="zh-Hant">
    <body>
      <FloatingButton />

      {children}

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4E0CTT77GH"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            dataLayer.push(arguments);
          }

          window.gtag = gtag;

          gtag('js', new Date());

          gtag('config', 'G-4E0CTT77GH');
        `}
      </Script>
    </body>
  </html>
)
｝
