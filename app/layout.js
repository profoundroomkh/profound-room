import BackgroundMusic from '../components/BackgroundMusic'
import './globals.css'
import Script from 'next/script'

export const metadata = {
  verification: {
    google:
      'lLXC421Mze9xeGmQsBV33sdP3ipp6apLvDdqnB7rwFU',
  },

  metadataBase: new URL('https://profoundroom.com'),

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  
  alternates: {
  canonical: "https://profoundroom.com",
},

  title:
    '深寓 PROFOUND ROOM｜高雄同志按摩 Gay SPA｜直男按摩與男士放鬆空間',

  description:
    'PROFOUND ROOM 深寓提供高雄預約制同志按摩 Gay SPA、男士按摩、直男按摩與直男同志按摩專屬方案，也服務屏東市來客；無固定實體店面，依需求安排到府或臨時外部場地。',

  keywords: [
    '高雄 Gay SPA',
    '高雄男士SPA',
    'Kaohsiung Gay Spa',
    '高雄同志SPA',
    '高雄按摩',
    '高雄放鬆空間',
    '男士按摩',
    '高雄男按摩',
    '直男同志按摩',
    '直男按摩',
    '高雄直男同志按摩',
    '高雄直男按摩',
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
    '屏東市按摩',
    '屏東市男士按摩',
    '屏東市直男按摩',
    '屏東市直男同志按摩',
    '屏東市同志按摩',
    '屏東到高雄按摩',
    '屏東男士按摩推薦',
  ],
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
},
  openGraph: {
    title: '高雄同志按摩 Gay SPA｜高雄直男按摩與男士按摩｜深寓 PROFOUND ROOM',
    description: '高雄預約制同志按摩 Gay SPA、男士按摩與直男同志按摩服務；無固定實體店面，依需求安排到府或外部場地。',
    url: 'https://profoundroom.com',
    siteName: 'PROFOUND ROOM 深寓',
    images: [
      {
        url: '/images/profound-logo-mark.png',
        width: 720,
        height: 911,
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
      <BackgroundMusic />
      <div id="google_translate_element" className="googleTranslateElement" aria-hidden="true" />
      {children}
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          window.googleTranslateElementInit = function () {
            if (window.google && window.google.translate) {
              new window.google.translate.TranslateElement(
                {
                  pageLanguage: 'zh-TW',
                  includedLanguages: 'en',
                  autoDisplay: false,
                },
                'google_translate_element'
              );
            }
          };
        `}
      </Script>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
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

          gtag('config', 'G-4E0CTT77GH', {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
          });
        `}
      </Script>
    </body>
  </html>
)
}
