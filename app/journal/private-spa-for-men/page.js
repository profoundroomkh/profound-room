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
    padding: "70px 40px",
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
      letterSpacing: "4px",
      fontSize: "13px",
      marginBottom: "16px",
    }}
  >
    PROFOUND ROOM
  </p>

  <h2
    style={{
      fontSize: "36px",
      fontWeight: 300,
      marginBottom: "20px",
      color: "#f2e1d0",
    }}
  >
    開始您的深寓體驗
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
    如果您正在尋找高雄預約制男士 SPA，
    不妨探索深寓的療癒師與服務方案，
    找到最適合自己的放鬆方式。
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "18px",
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
        background: "#c8a886",
        color: "#050505",
        borderRadius: "999px",
        textDecoration: "none",
        fontWeight: 600,
        letterSpacing: "2px",
      }}
    >
      查看療癒師
    </a>

    <a
      href="/#pricing"
      style={{
        minWidth: "190px",
        height: "56px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid rgba(200,168,134,.35)",
        color: "#f2e1d0",
        borderRadius: "999px",
        textDecoration: "none",
        letterSpacing: "2px",
      }}
    >
      查看方案
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
        border: "1px solid rgba(255,255,255,.12)",
        color: "#f2e1d0",
        borderRadius: "999px",
        textDecoration: "none",
        letterSpacing: "2px",
      }}
    >
      LINE 預約
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
