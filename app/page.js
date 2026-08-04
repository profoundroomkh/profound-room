'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import FAQ from '../components/FAQ'
import Gallery from '../components/Gallery'

export default function Home() {

const [currentIndexes, setCurrentIndexes] =
  useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0,])
  const [showAllMasters, setShowAllMasters] = useState(false)
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
    name: "Oni",
    isNew: true,
    height: 174,
    weight: 72,
    age: 34,
    role: "不分1",
    size: "未補充",
    specialty: "經驗豐富・穩定手感",
    images: [
      "/images/therapist-Oni-1.JPG",
      "/images/therapist-Oni-2.JPG",
    ],
  },

  {
    name: "Alan",
    isNew: true,
    height: 170,
    weight: 68,
    age: 33,
    role: "不分1",
    size: "16/5",
    specialty: "成熟穩重・經驗豐富",
    images: [
      "/images/therapist-Alan-1.JPG",
      "/images/therapist-Alan-2.JPG",
    ],
  },

  {
    name: "Owen",
    isNew: true,
    height: 166,
    weight: 55,
    age: 29,
    role: "不分",
    size: "未補充",
    specialty: "薄肌・反差",
    images: [
      "/images/therapist-Owen-1.JPG",
      "/images/therapist-Owen-2.JPG",
      "/images/therapist-Owen-3.JPG",
    ],
  },

  {
    name: "Milo",
    isNew: true,
    height: 174,
    weight: 63,
    age: 29,
    role: "1",
    size: "未補充",
    specialty: "溫暖陪伴・奶狗",
    images: [
      "/images/therapist-Milo-1.JPG",
      "/images/therapist-Milo-2.JPG",
      "/images/therapist-Milo-3.JPG",
    ],
  },

  {
    name: "Kai",
    isNew: false,
    height: 175,
    weight: 70,
    age: 30,
    role: "1",
    size: "15/5",
    specialty: "陽剛穩重・厚實手感",
    images: [
      "/images/therapist-Kai-1.JPG",
      "/images/therapist-Kai-2.JPG",
      "/images/therapist-Kai-3.JPG",
      "/images/therapist-Kai-4.JPG",
    ],
  },

  {
    name: "Odin",
    isNew: false,
    height: 170,
    weight: 68,
    age: 32,
    role: "不分",
    size: "15/5",
    specialty: "深度放鬆・手感細膩",
    images: [
      "/images/therapist-Odin.JPG",
      "/images/therapist-Odin-1.JPG",
      "/images/therapist-Odin-2.JPG",
      "/images/therapist-Odin-3.JPG",
      "/images/therapist-Odin-4.JPG",
    ],
  },

  {
    name: "Zac",
    isNew: false,
    height: 170,
    weight: 66,
    age: 30,
    role: "不分",
    size: "未補充",
    specialty: "刺青台客・健談好聊",
    images: [
      "/images/therapist-Zac-1.JPG",
      "/images/therapist-Zac-2.JPG",
      "/images/therapist-Zac-3.JPG",
      "/images/therapist-Zac-4.JPG",
    ],
  },

  {
    name: "Vincent",
    isNew: false,
    height: 175,
    weight: 65,
    age: 32,
    role: "不分1",
    size: "未補充",
    specialty: "健談互動・輕鬆陪伴",
    images: [
      "/images/therapist-Vincent-1.JPG",
      "/images/therapist-Vincent-2.JPG",
      "/images/therapist-Vincent-3.JPG",
    ],
  },

  {
    name: "Noah",
    isNew: false,
    height: 175,
    weight: 75,
    age: 30,
    role: "不分",
    size: "未補充",
    specialty: "舒壓放鬆・自然陪伴",
    images: [
      "/images/therapist-Noah.JPG",
      "/images/therapist-Noah-1.JPG",
      "/images/therapist-Noah-2.JPG",
    ],
  },

  {
    name: "Hu",
    isNew: false,
    height: 164,
    weight: 50,
    age: 26,
    role: "不分",
    size: "未補充",
    specialty: "少年感・纖瘦身形",
    images: [
      "/images/therapist-Hu-1.JPG",
      "/images/therapist-Hu-2.JPG",
    ],
  },

  {
    name: "Raven",
    isNew: false,
    height: 166,
    weight: 47,
    age: 18,
    role: "0",
    size: "未補充",
    specialty: "少年感・神秘反差",
    images: [
      "/images/therapist-Raven-1.JPG",
      "/images/therapist-Raven-2.JPG",
      "/images/therapist-Raven-3.JPG",
      "/images/therapist-Raven-4.JPG",
    ],
  },

  {
    name: "Ansel（暫時休息）",
    isNew: false,
    height: 165,
    weight: 58,
    age: 30,
    role: "不分",
    size: "15/4.5",
    specialty: "濃眉多毛・男友陪伴",
    images: [
      "/images/therapist-luke.jpg",
      "/images/therapist-luke-2.jpg",
      "/images/therapist-luke-3.jpg",
    ],
  },
]
const newMasters = masters.filter(master => master.isNew)

const regularMasters = masters.filter(master => !master.isNew)
return (
  <>
    <Header />

<div
  style={{
    minHeight: "100svh",
    background:
      "linear-gradient(rgba(0,0,0,.72), rgba(0,0,0,.88)), url('/images/hero-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#f2e1d0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px 24px",
   paddingTop: "80px",
paddingBottom: "40px",
  }}
>
  <div
  style={{
    maxWidth: "980px",
    width: "100%",
    padding: "72px 90px",
    borderRadius: "24px",

    background:
      "linear-gradient(180deg, rgba(18,18,18,.42), rgba(8,8,8,.58))",

    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",

    border: "1px solid rgba(214,178,123,.12)",

    boxShadow:
      "0 30px 80px rgba(0,0,0,.35)",
    marginTop: "30px",
  }}
>
      
    <p
      style={{
        color: "#b9977d",
        letterSpacing: "6px",
        fontSize: "13px",
        marginBottom: "18px",
      }}
    >
      KAOHSIUNG • MEN'S SPA
    </p>

   <h1
  style={{
    fontSize: "82px",
    fontWeight: 300,
    letterSpacing: "14px",
    lineHeight: 1,
    marginBottom: "14px",
  }}
>
  深寓
</h1>
    <h2
  style={{
    fontSize: "30px",
    letterSpacing: "10px",
    fontWeight: 300,
    color: "#f5eadb",
    marginBottom: "18px",
  }}
>
  PROFOUND ROOM
</h2>

    <p
  style={{
    color: "#b9977d",
    fontSize: "15px",
    letterSpacing: "5px",
    marginBottom: "10px",
  }}
>
</p>

<p
  style={{
    fontSize: "22px",
    color: "#f2e1d0",
    marginBottom: "20px",
    fontWeight: 300,
  }}
>
  預約制放鬆空間
</p>
   <p
  style={{
    color: "#c8b29a",
    fontSize: "16px",
    lineHeight: "2",
    maxWidth: "560px",
    margin: "0 auto 42px",
  }}
>
  安靜、隱私、專業按摩。
  <br />
  每一次停留，都是一段專屬於自己的放鬆時光。
</p>

    <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "36px",
  }}
>
  <a
    href="https://line.me/R/ti/p/@637fbbyh"
    target="_blank"
    style={{
      minWidth: "180px",
      height: "56px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      background: "#b9977d",
      color: "#050505",

      borderRadius: "999px",
      textDecoration: "none",
      fontWeight: 600,
    }}
  >
    立即預約
  </a>

  <a
    href="#therapists"
    style={{
      minWidth: "180px",
      height: "56px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      border: "1px solid rgba(255,255,255,.18)",
      color: "#f2e1d0",

      borderRadius: "999px",
      textDecoration: "none",
    }}
  >
    探索療癒師
  </a>
</div>
<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "34px",
    color: "#b9977d",
    fontSize: "13px",
    letterSpacing: "2px",
  }}
>
  <span>預約制</span>

  <span
    style={{
      opacity: 0.3,
      color: "#6b5a47",
    }}
  >
    │
  </span>

  <span>獨立包廂</span>
<span style={{ opacity: 0.3, color: "#6b5a47" }}>
    │
  </span>

  <span>LINE 預約</span>
</div>

    <p
      style={{
        opacity: 0.6,
        fontSize: "13px",
        lineHeight: "2",
        marginBottom: "36px",
      }}
    >
      未滿十八歲請勿瀏覽與預約。
      <br />
      本館不提供任何非法或逾越專業界線之服務，
      若有違反情形將立即終止服務並保留法律權利。
    </p>

    <a
      href="#main"
      style={{
        display: "inline-block",
        background: "#b9977d",
        color: "#050505",
        padding: "16px 44px",
        borderRadius: "999px",
        textDecoration: "none",
        fontWeight: 600,
        letterSpacing: "2px",
      }}
    >
      我已滿十八歲
    </a>
  </div>
</div>

<main
  id="main"
  style={{
    backgroundColor: "#050505",
    color: "#f2e1d0",
    minHeight: "100vh",
    fontFamily: "serif",
  }}
>
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
id="therapists"
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

  <p
  style={{
    color: '#cbb79d',
    letterSpacing: '6px',
    marginBottom: '12px',
    fontSize: '14px',
  }}
>
  NEW ARRIVAL
</p>

<h2
  style={{
    color: '#f2e1d0',
    fontSize: '42px',
    fontWeight: '300',
    marginBottom: '50px',
  }}
>
  新 師 上 陣
</h2>
              
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: '28px',
          }}
        >
{newMasters.map((master, index) => (
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
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  }}
>
  {master.name}

  {master.isNew && (
    <span
      style={{
        background: '#b9977d',
        color: '#050505',
        fontSize: '11px',
        fontWeight: '600',
        padding: '4px 10px',
        borderRadius: '999px',
        letterSpacing: '1px',
      }}
    >
      NEW
    </span>
  )}
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
    color: "#f2e1d0",
    fontSize: "15px",
    marginTop: "8px",
    marginBottom: "10px",
    letterSpacing: "1px",
  }}
>
  {master.height} / {master.weight} / {master.age}
</p>

<p
  style={{
    color: "#b9977d",
    fontSize: "14px",
    marginBottom: "18px",
  }}
>
  {master.role}
  {master.size && ` ｜ ${master.size}`}
</p>
                <a
  href="https://line.me/R/ti/p/@637fbbyh"
  target="_blank"
  onClick={() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'line_click', {
        event_category: 'booking',
        event_label: 'LINE',
      })
    }
  }}
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
            <div
  style={{
    textAlign: 'center',
    marginTop: '100px',
    marginBottom: '60px',
  }}
>
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
      color: '#f2e1d0',
      fontSize: '42px',
      fontWeight: '300',
    }}
  >
    全 部 師 傅
  </h2>
</div>
      <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
    gap: '28px',
  }}
>
  {regularMasters.map((master, index) => (
    <div
      key={master.name}
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
      currentIndexes[
        masters.findIndex(m => m.name === master.name)
      ]
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
    color: "#f2e1d0",
    fontSize: "20px",
    fontWeight: "500",
    marginBottom: "10px",
    letterSpacing: "1px",
  }}
>
  {master.height} / {master.weight} / {master.age}
</p>

<p
  style={{
    color: "#cbb79d",
    fontSize: "18px",
    marginBottom: "24px",
    letterSpacing: "1px",
  }}
>
  {master.role}
  {master.size && ` ｜ ${master.size}`}
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
id="pricing"
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
<div
  style={{
    marginTop: '40px',
    padding: '28px',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '24px',
  }}
>
  <h3
    style={{
      fontSize: '24px',
      fontWeight: 300,
      marginBottom: '16px',
    }}
  >
    不指定師傅方案
  </h3>

  <p
    style={{
      color: '#c9b8aa',
      lineHeight: '2',
    }}
  >
    90 分鐘｜NT$1,800
    <br />
    120 分鐘｜NT$2,200
  </p>

  <p
    style={{
      color: '#b9977d',
      fontSize: '14px',
      marginTop: '16px',
      lineHeight: '1.8',
    }}
  >
    ※ 不指定師傅方案為獨立優惠價格，恕不與其他優惠活動併用。
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
    color: '#b9977d',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '1px',
    marginBottom: '18px',
  }}
>
  優 惠 須 知
</p>

<p
  style={{
    color: 'rgba(255,255,255,0.68)',
    lineHeight: '2',
    marginBottom: '42px',
  }}
>
  ※ 各項優惠恕不併用，每次消費僅限擇一優惠方案適用。
  <br />
  <br />

  提前一天完成預約，可享 NT$100 預約折抵。
  <br />
  <br />

  🎂 當月壽星首次消費，提前預約可享 NT$200 優惠折抵。
  <br />
  優惠需於預約時主動告知，並於到訪時出示有效證件驗證後方可適用。
  <br />
  <br />

  🎟️ 加入官方 LINE，可不定期獲得專屬優惠券與限定活動優惠。
  <br />
  優惠券使用方式與適用期間依活動公告為準。

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
      預約時間 22:00 後｜+300 / 位
        <br />
      預約時間 00:00 後｜+500 / 位
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
      到府服務依距離酌收費用。
      <br />
        距離高雄車站5公里內+300
<br />
        距離高雄車站5-10公里+500
<br />
        距離高雄車站10公里以上+800（客服報價）
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
      ☎︎　+886 尚未提供
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
