'use client'

import { useState, useEffect } from 'react'

import Header from '../components/Header'
import FAQ from '../components/FAQ'
import Gallery from '../components/Gallery'
  export default function Home() {
const [currentIndexes, setCurrentIndexes] =
  useState([0, 0, 0, 0])
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndexes((prev) =>
      prev.map((current, i) => {
        return (
          (current + 1) %
          masters[i].images.length
        )
      })
    )
  }, 2500)

  return () => clearInterval(interval)
}, [])
   const masters = [
  {
    name: "Luke",
    specialty: "深層舒壓 / 精油放鬆",
    intro: `165 / 58 / 30 / 不分

重視互動與陪伴感，
喜歡讓人慢慢放鬆下來的節奏。

手法以穩定舒壓與沉浸放鬆為主，
希望每一次療程，
都能帶來舒服且安心的放鬆感受。`,
    images: [
      "/images/therapist-luke.jpg",
      "/images/therapist-luke-2.jpg",
      "/images/therapist-luke-3.jpg",
    ],
  },

  
     {
  name: "Zac",
  specialty: "舒壓放鬆 / 沉浸陪伴",
  intro: `170 / 66 / 30 / 不分

Zac 師傅，重視放鬆過程中的舒適感與節奏感。
透過穩定手法與自然互動，
陪你慢慢卸下生活累積的疲憊。

喜歡在安靜的空間裡，
讓身體與情緒都能獲得適當放鬆。
希望每一次療程，
都能帶來專屬於自己的沉澱與休息時光。`,
  images: [
    "/images/therapist-Zac-1.JPG",
    "/images/therapist-Zac-2.JPG",
    "/images/therapist-Zac-3.JPG",
    "/images/therapist-Zac-4.JPG",
  ],
},
     {
    name: "Odin",
    specialty: "深度放鬆 / 手法細膩",
    intro: `170 / 68 / 32 / 不分
      
奧丁師傅，重視每次放鬆的深度與感受。
以細膩節奏與沉穩手感，陪你慢慢卸下疲憊。
在安靜私密的空間裡，
找回身心最舒服的狀態。
讓每次相遇，都成為與疲憊短暫告別的片刻。
讓每次到訪，都像進入一段專屬自己的放鬆時光。`,
    images: [
      "/images/therapist-Odin.JPG",
       "/images/therapist-Odin-1.JPG",
      "/images/therapist-Odin-2.JPG",
      "/images/therapist-Odin-3.JPG",
      "/images/therapist-Odin-4.JPG",
    ],
 },
     {
  name: "Hu",
  specialty: "舒壓放鬆 / 輕柔陪伴",
  intro: `164 / 50 / 26 / 不分

Hu 師傅，重視療程中的舒適感與陪伴感。
透過細膩節奏與溫和互動，
陪你慢慢卸下日常累積的疲憊。

喜歡在安靜放鬆的氛圍裡，
讓身體與思緒都能獲得適當休息。
希望每一次療程，
都能成為專屬於自己的放鬆時光。`,
  images: [
    "/images/therapist-Hu-1.JPG",
    "/images/therapist-Hu-2.JPG",
  ],
},
     {
  name: "Raven",
  specialty: "待上線",
  intro: `166/47/0`,
  images: [
    "/images/therapist-Raven-1.JPG",
    "/images/therapist-Raven-2.JPG",
    "/images/therapist-Raven-3.JPG",
    "/images/therapist-Raven-4.JPG",
  ],
},
]

return (
  <>
    <Header />

    <div
  style={{
    minHeight: "100vh",
    backgroundColor: "#050505",
    color: "#f2e1d0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px 24px",
    paddingTop: "120px",
  }}
>
  <h1
    style={{
      fontSize: "42px",
      letterSpacing: "8px",
      marginBottom: "32px",
      fontWeight: "300",
    }}
  >
    深寓
  </h1>

  <div
    style={{
      maxWidth: "700px",
      lineHeight: "2.2",
      color: "#cbb79d",
      fontSize: "15px",
    }}
  >
    <p style={{ marginBottom: "24px", color: "#f2e1d0" }}>
      深寓 PROFOUND ROOM 為預約制放鬆空間，
      <br />
      未滿十八歲請勿瀏覽與預約。
    </p>

    <p>
      我們專注於身心舒壓與專業按摩體驗，
      <br />
      提供安靜、放鬆且具界線感的服務環境。
    </p>

    <p style={{ marginTop: "24px", opacity: 0.75 }}>
      本館不提供任何非法或逾越專業界線之服務，
      <br />
      亦不接受相關要求與暗示。
      <br />
      若有違反情形，本館將立即終止服務，
      <br />
      並保留相關法律權利。
    </p>
  </div>

  <a
    href="#main"
    style={{
      marginTop: "48px",
      border: "1px solid #cbb79d",
      padding: "16px 40px",
      borderRadius: "999px",
      color: "#f2e1d0",
      textDecoration: "none",
      letterSpacing: "2px",
    }}
  >
    我已滿十八歲
  </a>
</div>
    <main id="main" style={{
      backgroundColor: '#050505',
      color: '#f2e1d0',
      minHeight: '100vh',
      fontFamily: 'serif'
    }}>

      {/* HERO */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '40px 24px',
         background:
  'linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.92)), url(/images/hero.jpg)',
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            border: '1px solid rgba(242,225,208,0.2)',
            borderRadius: '999px',
            padding: '80px 60px',
            background: 'rgba(0,0,0,0.45)',
            backdropFilter: 'blur(4px)',
            maxWidth: '700px'
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              letterSpacing: '12px',
              marginBottom: '16px',
              fontWeight: 300,
            }}
          >
            深寓
          </h1>

          <h2
            style={{
              fontSize: '28px',
              letterSpacing: '8px',
              marginBottom: '20px',
              fontWeight: 300,
            }}
          >
            PROFOUND ROOM
          </h2>

          <p
            style={{
              color: '#c7b19d',
              marginBottom: '36px',
              letterSpacing: '4px',
            }}
          >
            預約制放鬆空間
          </p>

        
        </div>
      </section>

      {/* ABOUT */}
<section
  style={{
    padding: '100px 24px',
    maxWidth: '1100px',
    margin: '0 auto',
  }}
>
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: '50px',
      alignItems: 'center',
    }}
  >
    <img
      src="/images/hero.jpg"
      style={{
        width: '100%',
        borderRadius: '24px',
        objectFit: 'contain',
        minHeight: '420px',
      }}
    />

    <div>
      <p
        style={{
          color: '#b9977d',
          letterSpacing: '4px',
          marginBottom: '12px',
        }}
      >
        ABOUT
      </p>

      <h2
        style={{
          fontSize: '42px',
          marginBottom: '24px',
          fontWeight: 300,
        }}
      >
        沉浸式的私密放鬆體驗
      </h2>

      <p
        style={{
          color: '#c9b8aa',
          lineHeight: '1.9',
          fontSize: '17px',
        }}
      >
        高雄 Gay SPA 與男士按摩空間。
<br />
<br />
深寓提供預約制放鬆體驗、
精油舒壓與私人空間服務。
<br />
<br />
如果你正在尋找高雄 Gay SPA、
高雄男士按摩或高雄預約制 SPA，
歡迎來深寓體驗放鬆時光。
      </p>

      <div
  style={{
    marginTop: '32px',
    color: '#cbb79d',
    lineHeight: '2',
    fontSize: '15px',
    letterSpacing: '1px',
    opacity: 0.88,
  }}
>
  <p>
    空間鄰近高雄車站，
    <br />
    步行約五分鐘即可抵達。
    <br />
    為保留安靜與隱私感，
    <br />
    採預約完成後提供詳細位置。
  </p>
</div>
    </div>
  </div>
</section>
<section
  style={{
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 24px 100px',
  }}
>
  <h2
    style={{
      fontSize: '36px',
      fontWeight: 300,
      marginBottom: '24px',
      color: '#f2e1d0',
    }}
  >
    高雄 Gay SPA 與男士放鬆空間
  </h2>

  <p
    style={{
      color: '#c9b8aa',
      lineHeight: '2',
      fontSize: '17px',
    }}
  >
    PROFOUND ROOM 深寓為高雄預約制 Gay SPA，
    提供男士按摩、精油舒壓、
    深層放鬆與私人空間體驗。
    <br /><br />
    我們相信真正的放鬆，
    不只是按摩本身，
    更來自於安靜舒適的環境、
    專業服務與適當的距離感。
    <br /><br />
    如果你正在尋找高雄 Gay SPA、
    高雄男士按摩、
    高雄預約制 SPA 或私人放鬆空間，
    深寓希望能成為你的選擇之一。
  </p>
</section>
      {/* MASTERS */}
      <section
        style={{
          padding: '0 24px 120px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p
            style={{
              color: '#b9977d',
              letterSpacing: '4px',
              marginBottom: '12px',
            }}
          >
            THERAPISTS
          </p>

          <h2
            style={{
              fontSize: '42px',
              fontWeight: 300,
            }}
          >
            師傅介紹
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: '28px',
          }}
        >
          {masters.map((master, index) => (
            <div
              key={index}
              style={{
                background: '#111',
                borderRadius: '28px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
             <img
  src={
    master.images[
      currentIndexes[index]
    ]
  }
  alt={master.name}
  style={{
    width: '100%',
    height: '420px',
    objectFit: 'contain',
    background: '#000',
    display: 'block',
  }}
/>
              <div style={{ padding: '28px' }}>
                <h3
                  style={{
                    fontSize: '28px',
                    marginBottom: '8px',
                    fontWeight: 300,
                  }}
                >
                  {master.name}
                </h3>

                <p
                  style={{
                    color: '#b9977d',
                    marginBottom: '16px',
                  }}
                >
                  {master.specialty}
                </p>

                <p
                  style={{
                    color: '#c9b8aa',
                    lineHeight: '1.8',
                    marginBottom: '24px',
                  }}
                >
                  {master.intro}
                </p>

                <a
                  href="https://line.me/R/ti/p/@637fbbyh"
                  target="_blank"
                  style={{
                    display: 'inline-block',
                    padding: '12px 22px',
                    borderRadius: '999px',
                    border: '1px solid #b9977d',
                    color: '#f2e1d0',
                    textDecoration: 'none',
                  }}
                >
                  預約此師傅
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
{/* PRICING */}
<section
  style={{
    padding: "0 24px 120px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  }}
>
  <p
    style={{
      color: "#b9977d",
      letterSpacing: "4px",
      marginBottom: "12px",
    }}
  >
    PRICING
  </p>

  <h2
    style={{
      fontSize: "42px",
      fontWeight: 300,
      marginBottom: "50px",
    }}
  >
    課程方案
  </h2>

  <div
  style={{
    background: '#111',
    borderRadius: '32px',
    padding: '60px 36px',
    border:
      '1px solid rgba(255,255,255,0.06)',
  }}
>
  <p
    style={{
      color: '#cbb79d',
      letterSpacing: '3px',
      marginBottom: '24px',
      fontSize: '13px',
    }}
  >
    SERVICE MENU
  </p>

  <div style={{ marginBottom: '42px' }}>
    <h3
      style={{
        fontSize: '30px',
        fontWeight: '300',
        marginBottom: '14px',
      }}
    >
      深層放鬆｜120 MIN｜2400
    </h3>

    <p
      style={{
        color: 'rgba(255,255,255,0.6)',
        lineHeight: '2',
      }}
    >
      Session Includes
      <br />
      指壓｜油壓｜體推｜機能保養
    </p>
  </div>

  <div style={{ marginBottom: '42px' }}>
    <h3
      style={{
        fontSize: '30px',
        fontWeight: '300',
        marginBottom: '14px',
      }}
    >
      沉浸舒壓｜90 MIN｜2000
    </h3>

    <p
      style={{
        color: 'rgba(255,255,255,0.6)',
        lineHeight: '2',
      }}
    >
      Session Includes
      <br />
      指壓｜油壓｜體推｜機能保養
    </p>
  </div>

  <div style={{ marginBottom: '42px' }}>
    <h3
      style={{
        fontSize: '30px',
        fontWeight: '300',
        marginBottom: '14px',
      }}
    >
      輕放鬆體驗｜60 MIN｜1600
    </h3>

    <p
      style={{
        color: 'rgba(255,255,255,0.6)',
        lineHeight: '2',
      }}
    >
      Session Includes
      <br />
      指壓｜油壓
    </p>
  </div>

  <div style={{ marginBottom: '42px' }}>
    <h3
      style={{
        fontSize: '30px',
        fontWeight: '300',
        marginBottom: '14px',
      }}
    >
      四手同步｜120 MIN｜4600
    </h3>

    <p
      style={{
        color: 'rgba(255,255,255,0.6)',
        lineHeight: '2',
      }}
    >
      Session Includes
      <br />
      指壓｜油壓｜體推｜機能保養
    </p>
  </div>

  <div style={{ marginBottom: '42px' }}>
    <p
      style={{
        color: '#cbb79d',
        letterSpacing: '3px',
        marginBottom: '14px',
        fontSize: '13px',
      }}
    >
      ADVANCE RESERVATION
    </p>

    <p
      style={{
        color: 'rgba(255,255,255,0.68)',
        lineHeight: '2',
      }}
    >
      提前一天完成預約，
      <br />
      可享 100 元預約折抵。
    </p>
  </div>

  <div style={{ marginBottom: '42px' }}>
    <p
      style={{
        color: '#cbb79d',
        letterSpacing: '3px',
        marginBottom: '14px',
        fontSize: '13px',
      }}
    >
      NIGHT SERVICE
    </p>

    <p
      style={{
        color: 'rgba(255,255,255,0.68)',
        lineHeight: '2',
      }}
    >
      22:00 後｜+500 / 位
    </p>
  </div>

  <div>
    <p
      style={{
        color: '#cbb79d',
        letterSpacing: '3px',
        marginBottom: '14px',
        fontSize: '13px',
      }}
    >
      INFORMATION
    </p>

    <p
      style={{
        color: 'rgba(255,255,255,0.68)',
        lineHeight: '2',
      }}
    >
      外出服務依距離酌收費用。
      <br />
      Adults Only｜18+
    </p>
  </div>
</div>
</section>
{/* VISIT GUIDE */}
<section
  style={{
    padding: '0 24px 120px',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
  }}
>
  <p
    style={{
      color: '#b9977d',
      letterSpacing: '4px',
      marginBottom: '12px',
    }}
  >
    VISIT GUIDE
  </p>

  <h2
    style={{
      fontSize: '42px',
      fontWeight: 300,
      marginBottom: '50px',
    }}
  >
    來訪須知
  </h2>

  <div
    style={{
      background: '#111',
      borderRadius: '32px',
      padding: '60px 30px',
      border: '1px solid rgba(255,255,255,0.06)',
      lineHeight: '2.3',
      color: '#e8d7c5',
    }}
  >
    <div style={{ marginBottom: '42px' }}>
      <p
        style={{
          color: '#b9977d',
          letterSpacing: '3px',
          marginBottom: '12px',
        }}
      >
        RESERVATION
      </p>

      <p>
        加入官方 LINE 後，
        <br />
        提供希望預約時段即可安排。
      </p>
    </div>

    <div style={{ marginBottom: '42px' }}>
      <p
        style={{
          color: '#b9977d',
          letterSpacing: '3px',
          marginBottom: '12px',
        }}
      >
        APPOINTMENT ONLY
      </p>

      <p>
        為維護空間品質，
        <br />
        恕不接受現場臨時來訪。
      </p>
    </div>

    <div style={{ marginBottom: '42px' }}>
      <p
        style={{
          color: '#b9977d',
          letterSpacing: '3px',
          marginBottom: '12px',
        }}
      >
        LOCATION
      </p>

      <p>
        完成預約後，
        <br />
        將提供詳細位置資訊。
      </p>
    </div>

    <div>
      <p
        style={{
          color: '#b9977d',
          letterSpacing: '3px',
          marginBottom: '12px',
        }}
      >
        CHANGE & CANCELLATION
      </p>

      <p>
        若需更改或取消預約，
        <br />
        請提前告知。
      </p>
    </div>
  </div>
</section>
 <section
  style={{
    borderTop: "1px solid rgba(255,255,255,0.08)",
    marginTop: "120px",
    paddingTop: "60px",
    paddingBottom: "40px",
    textAlign: "center",
    color: "#cbb79d",
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      alignItems: "center",
      color: "#f2e1d0",
      fontSize: "15px",
      letterSpacing: "1px",
    }}
  >
    <a
      href="tel:+886980945321"
      style={{
        color: "#f2e1d0",
        textDecoration: "none",
      }}
    >
      ☎︎　+886 980945321
    </a>

    <a
      href="mailto:profoundroom.kh@gmail.com"
      style={{
        color: "#f2e1d0",
        textDecoration: "none",
      }}
    >
      ✉︎　profoundroom.kh@gmail.com
    </a>
  </div>
</section>
{/* FLOATING LINE BUTTON */}
<a
  href="https://line.me/R/ti/p/@637fbbyh"
  target="_blank"
  style={{
    position: "fixed",
    right: "24px",
    bottom: "24px",
    zIndex: 999,
    background: "#1c1c1c",
    color: "#f2e1d0",
    padding: "14px 22px",
    borderRadius: "999px",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.12)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    letterSpacing: "2px",
    fontSize: "14px",
    transition: "0.3s",
  }}
>
  LINE 預約
</a>        
<Gallery />
<FAQ />
    <section
  style={{
    background: '#050505',
    padding: '120px 24px',
  }}
>
  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
    }}
  >
    <p
      style={{
        color: '#cbb79d',
        letterSpacing: '4px',
        fontSize: '13px',
        marginBottom: '20px',
      }}
    >
      JOURNAL
    </p>

    <h2
      style={{
        color: '#f2e1d0',
        fontSize: '56px',
        fontWeight: '300',
        lineHeight: '1.3',
        marginBottom: '70px',
      }}
    >
      Deep Night
      <br />
      Journal
    </h2>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit,minmax(320px,1fr))',
        gap: '28px',
      }}
    >
      <a
        href='/journal/first-men-spa-experience'
        style={{
          background: '#111',
          borderRadius: '28px',
          padding: '40px 32px',
          textDecoration: 'none',
          border:
            '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <h3
          style={{
            color: '#f2e1d0',
            fontSize: '28px',
            fontWeight: '300',
            lineHeight: '1.5',
            marginBottom: '18px',
          }}
        >
          第一次男士 SPA，
          會很尷尬嗎？
        </h3>

        <p
          style={{
            color: 'rgba(255,255,255,0.65)',
            lineHeight: '2',
          }}
        >
          很多人第一次接觸男士 SPA 時，
          真正擔心的其實不是按摩本身，
          而是空間是否讓人安心。
        </p>
      </a>

      <a
        href='/journal/mens-spa-vs-normal-massage'
        style={{
          background: '#111',
          borderRadius: '28px',
          padding: '40px 32px',
          textDecoration: 'none',
          border:
            '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <h3
          style={{
            color: '#f2e1d0',
            fontSize: '28px',
            fontWeight: '300',
            lineHeight: '1.5',
            marginBottom: '18px',
          }}
        >
          男士 SPA 與一般按摩，
          最大差別是什麼？
        </h3>

        <p
          style={{
            color: 'rgba(255,255,255,0.65)',
            lineHeight: '2',
          }}
        >
          真正影響體驗的，
          往往不是按摩本身，
          而是空間、節奏與沉浸感。
        </p>
      </a>

      <a
  href='/journal/kaohsiung-gay-spa'
  style={{
    background: '#111',
    borderRadius: '28px',
    padding: '40px 32px',
    textDecoration: 'none',
    border:
      '1px solid rgba(255,255,255,0.06)',
  }}
>
  <h3
    style={{
      color: '#f2e1d0',
      fontSize: '28px',
      fontWeight: '300',
      lineHeight: '1.5',
      marginBottom: '18px',
    }}
  >
    高雄 Gay SPA 如何選擇？
  </h3>

  <p
    style={{
      color: 'rgba(255,255,255,0.65)',
      lineHeight: '2',
    }}
  >
    第一次接觸男士 SPA 時，
    該如何選擇適合自己的放鬆空間？
  </p>
</a>
    </div>
  </div>
</section>
</main>
    
    </>
)
}
