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
            為什麼越來越多人
            <br />
            選擇預約制男士 SPA？
          </h1>

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
              預約制空間最大的差異，
              是能保有更完整的隱私感與安靜節奏。
            </p>

            <p style={{ marginBottom: '42px' }}>
              與大量來客的商業按摩相比，
              男士預約制 SPA
              更重視情緒、放鬆與沉浸體驗。
            </p>

            <p>
              對現代人而言，
              真正奢侈的，
              有時只是能安靜休息的一段時間。
            </p>
          </div>
        </article>
      </main>
    </>
  )
}
