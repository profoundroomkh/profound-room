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
        <section
  style={{
    marginTop: "100px",
    padding: "72px 40px",
    borderRadius: "28px",
    background:
      "linear-gradient(180deg, rgba(18,18,18,.75), rgba(8,8,8,.95))",
    border: "1px solid rgba(255,255,255,.08)",
    textAlign: "center",
  }}
>
  <p
    style={{
      color: "#b9977d",
      letterSpacing: "5px",
      fontSize: "13px",
      marginBottom: "14px",
    }}
  >
    PROFOUND ROOM
  </p>

  <h2
    style={{
      color: "#f2e1d0",
      fontSize: "36px",
      fontWeight: 300,
      marginBottom: "18px",
    }}
  >
    準備開始您的放鬆時光？
  </h2>

  <p
    style={{
      maxWidth: "560px",
      margin: "0 auto 42px",
      color: "#cbb79d",
      lineHeight: "2",
      fontSize: "16px",
    }}
  >
    探索不同風格的療癒師，
    找到最適合自己的按摩體驗，
    或直接加入 LINE 完成預約。
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "16px",
      flexWrap: "wrap",
    }}
  >
    <a
      href="/#therapists"
      style={{
        minWidth: "190px",
        height: "56px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#b9977d",
        color: "#050505",
        borderRadius: "999px",
        textDecoration: "none",
        fontWeight: 600,
        letterSpacing: "2px",
        transition: ".3s",
      }}
    >
      探索療癒師
    </a>

    <a
      href="https://line.me/R/ti/p/@637fbbyh"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        minWidth: "190px",
        height: "56px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid rgba(185,151,125,.45)",
        color: "#f2e1d0",
        borderRadius: "999px",
        textDecoration: "none",
        letterSpacing: "2px",
        transition: ".3s",
      }}
    >
      LINE 立即預約
    </a>
  </div>
</section>
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
