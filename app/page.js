
import Header from '../components/Header'
import HomeHero from "../components/HomeHero"
import ScrollReveal from '../components/ScrollReveal'
import TherapistDirectory from '../components/TherapistDirectory'
import HomepageLowerSection from '../components/HomepageLowerSection'
import PricingSection from '../components/PricingSection'

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
        <ScrollReveal as="section" style={{ '--reveal-distance': '30px' }}>
          <div
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
                alt="深寓高雄 Gay SPA 空間氛圍"
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
                    高雄車站 1 號出口往建國路、中山路方向，往左走約 3 分鐘即可到達。
                    <br />
                    為保留安靜與隱私感，
                    <br />
                    採預約完成後提供詳細位置。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" style={{ '--reveal-distance': '24px' }}>
          <div
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
          </div>
        </ScrollReveal>

        <TherapistDirectory />
        <PricingSection />
        <HomepageLowerSection />
      </main>
    </>
  )
}
