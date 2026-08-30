'use client'

import Header from '../components/Header'
import HomeHero from "../components/HomeHero"
import TherapistDirectory from '../components/TherapistDirectory'
import HomepageLowerSection from '../components/HomepageLowerSection'

// Design reminder: preserve Profound Room's restrained black-and-warm-gold identity;
// the therapist directory uses controlled motion and explicit booking states.
export default function Home() {
  return (
  <>
    <Header />
    <HomeHero />


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
        高雄 Gay Spa 與男士按摩空間。
<br />
<br />
深寓提供預約制放鬆體驗、
精油舒壓與私人空間服務。
<br />
<br />
如果你正在尋找高雄gayspa、
高雄男士按摩或高雄預約制SPA，
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
    空間鄰近高雄車站，Himan三溫暖旁，
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
    高雄 Gay Spa 與男士放鬆空間
  </h2>

  <p
    style={{
      color: '#c9b8aa',
      lineHeight: '2',
      fontSize: '17px',
    }}
  >
    PROFOUND ROOM 深寓為高雄預約制 Gayspa，
    提供男士按摩、精油舒壓、
    深層放鬆與私人空間體驗。
    <br /><br />
    我們相信真正的放鬆，
    不只是按摩本身，
    更來自於安靜舒適的環境、
    專業服務與適當的距離感。
    <br /><br />
    如果你正在尋找高雄gayspa、
    高雄同志按摩、
    高雄預約制 SPA 或私人放鬆空間，
    深寓希望能成為你的選擇之一。
  </p>
</section>
      <TherapistDirectory />
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
<HomepageLowerSection />
</main>
    
    </>
)
}
