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
            高雄深夜放鬆空間
            <br />
            與一般按摩有什麼不同？
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
              比起傳統按摩，
              越來越多人開始重視空間氛圍、
              安靜感與完整放鬆節奏。
            </p>

            <p style={{ marginBottom: '42px' }}>
              深夜男士放鬆空間，
              更偏向沉浸式體驗，
              從燈光、香氣到節奏，
              都會影響整體感受。
            </p>

            <p>
              對許多人而言，
              真正需要的不是快速按摩，
              而是一段能暫時離開壓力的時間。
            </p>
          </div>
        </article>
      </main>
    </>
  )
}
