import Header from '../../components/Header'

export default function ReservationPage() {
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
        <div
          style={{
            maxWidth: '1000px',
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
            RESERVATION
          </p>

          <h1
            style={{
              fontSize: '72px',
              fontWeight: '300',
              lineHeight: '1.2',
              marginBottom: '40px',
            }}
          >
            Reservation
            <br />
            Guide
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              lineHeight: '2',
              fontSize: '18px',
              maxWidth: '700px',
              marginBottom: '100px',
            }}
          >
            深寓 PROFOUND ROOM 為高雄預約制
            Gay SPA 與男士放鬆空間，
            <br />
            希望每一次到訪，都能保有安靜、
            界線感與舒適節奏。
          </p>

          <div
            style={{
              background: '#111',
              borderRadius: '32px',
              padding: '60px 36px',
              marginBottom: '40px',
              border:
                '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <p
              style={{
                color: '#cbb79d',
                letterSpacing: '3px',
                marginBottom: '18px',
              }}
            >
              HOW TO RESERVE
            </p>

            <p
              style={{
                lineHeight: '2.2',
                color: '#e8d7c5',
              }}
            >
              加入官方 LINE 後，
              <br />
              提供希望預約日期與時段，
              <br />
              我們將協助安排適合的服務時段。
            </p>
          </div>

          <div
            style={{
              background: '#111',
              borderRadius: '32px',
              padding: '60px 36px',
              marginBottom: '40px',
              border:
                '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <p
              style={{
                color: '#cbb79d',
                letterSpacing: '3px',
                marginBottom: '18px',
              }}
            >
              APPOINTMENT ONLY
            </p>

            <p
              style={{
                lineHeight: '2.2',
                color: '#e8d7c5',
              }}
            >
              為維護空間品質與隱私感，
              <br />
              本館採完全預約制，
              <br />
              不接受現場臨時來訪。
            </p>
          </div>

          <div
            style={{
              background: '#111',
              borderRadius: '32px',
              padding: '60px 36px',
              marginBottom: '40px',
              border:
                '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <p
              style={{
                color: '#cbb79d',
                letterSpacing: '3px',
                marginBottom: '18px',
              }}
            >
              LOCATION
            </p>

            <p
              style={{
                lineHeight: '2.2',
                color: '#e8d7c5',
              }}
            >
              空間鄰近高雄車站，
              <br />
              完成預約後將提供詳細位置資訊。
            </p>
          </div>

          <div
            style={{
              background: '#111',
              borderRadius: '32px',
              padding: '60px 36px',
              marginBottom: '80px',
              border:
                '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <p
              style={{
                color: '#cbb79d',
                letterSpacing: '3px',
                marginBottom: '18px',
              }}
            >
              CHANGE & CANCELLATION
            </p>

            <p
              style={{
                lineHeight: '2.2',
                color: '#e8d7c5',
              }}
            >
              若需更改或取消預約，
              <br />
              請提前告知，
              <br />
              以利安排後續時段。
            </p>
          </div>

          
        </div>
      </main>
    </>
  )
}
