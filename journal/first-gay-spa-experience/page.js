import Header from '../../../components/Header'

export default function ArticlePage() {
  return (
    <>
      <Header />

      <main
        style={{
          background: '#050505',
          color: '#f2e1d0',
          minHeight: '100vh',
          padding: '140px 24px',
        }}
      >
        <article
          style={{
            maxWidth: '820px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              color: '#cbb79d',
              letterSpacing: '4px',
              fontSize: '13px',
              marginBottom: '24px',
            }}
          >
            JOURNAL
          </p>

          <h1
            style={{
              fontSize: '64px',
              fontWeight: '300',
              lineHeight: '1.3',
              marginBottom: '40px',
            }}
          >
            第一次體驗 Gay SPA 前，
            <br />
            可以先知道的事
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              lineHeight: '2.2',
              fontSize: '18px',
              marginBottom: '80px',
            }}
          >
            第一次接觸男士 SPA、
            Gay SPA 或預約制放鬆空間時，
            多數人其實都會緊張。
          </p>

          <img
            src='/images/hero.jpg'
            style={{
              width: '100%',
              borderRadius: '28px',
              marginBottom: '80px',
            }}
          />

          <div
            style={{
              lineHeight: '2.4',
              color: '#e8d7c5',
              fontSize: '18px',
            }}
          >
            <p style={{ marginBottom: '42px' }}>
              對第一次體驗的人來說，
              真正重要的其實不是流程，
              而是空間是否讓人感到放鬆、
              安全與沒有壓力。
            </p>

            <p style={{ marginBottom: '42px' }}>
              預約制男士 SPA
              通常更重視隱私感與安靜氛圍，
              與一般商業按摩空間相比，
              會更偏向沉浸式體驗。
            </p>

            <p style={{ marginBottom: '42px' }}>
              多數空間會在預約完成後，
              才提供完整位置資訊，
              這也是為了維護來訪者的隱私。
            </p>

            <p style={{ marginBottom: '42px' }}>
              若是第一次預約，
              其實不需要過度擔心。
              放鬆、乾淨與尊重彼此界線，
              才是最重要的事情。
            </p>

            <p>
              PROFOUND ROOM 深寓
              希望提供的，
              是一種能讓情緒慢下來的深夜空間。
            </p>
          </div>
        </article>
      </main>
    </>
  )
}
