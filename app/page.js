export default function Home() {
  const masters = [
    {
      name: "Luke",
      specialty: "深層舒壓 / 精油放鬆",
      intro: "溫柔細膩的放鬆節奏，適合初次體驗。",
      image:
        "https://i.ibb.co/rKJ3ZLDs/72279-B09-5-CD5-4-ACC-AE7-C-40-C5-E0-C2-D6-E7.png",
    },
    {
      name: "Luke",
      specialty: "肌肉按摩 / 沉浸療癒",
      intro: "偏力量感按摩，適合壓力與疲勞釋放。",
      image:
  "https://i.ibb.co/rKJ3ZLDs/72279-B09-5-CD5-4-ACC-AE7-C-40-C5-E0-C2-D6-E7.png",
    },
  ]

  return (
    <main style={{
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
            'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.95)), url(https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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

          <a
            href="https://line.me/R/ti/p/@637fbbyh"
            target="_blank"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              border: '1px solid #c7b19d',
              color: '#f2e1d0',
              textDecoration: 'none',
              borderRadius: '999px',
              letterSpacing: '3px',
              transition: '0.3s',
            }}
          >
            LINE 預約
          </a>
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
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop"
            style={{
              width: '100%',
              borderRadius: '24px',
              objectFit: 'cover',
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
              深寓是一間採完全預約制的放鬆空間。
              我們重視隱私、氛圍與情緒沉澱，
              希望每一次到訪，都像進入一段與外界隔絕的深夜旅程。
            </p>
          </div>
        </div>
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
                src={master.image}
                style={{
                  width: '100%',
                  height: '360px',
                  objectFit: 'cover',
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

 <section
  style={{
    borderTop: "1px solid rgba(255,255,255,0.08)",
    marginTop: "120px",
    paddingTop: "60px",
    paddingBottom: "40px",
    textAlign: "center",
    color: "#cbb79d",
    lineHeight: "2",
  }}
>
  <div
    style={{
      maxWidth: "700px",
      margin: "0 auto",
      padding: "0 24px",
      fontSize: "14px",
      letterSpacing: "1px",
    }}
  >
    <p style={{ marginBottom: "24px", color: "#e7d8c2" }}>
      深寓 PROFOUND ROOM 為預約制放鬆空間，
      <br />
      未滿十八歲請勿瀏覽與預約。
    </p>

    <p style={{ opacity: 0.85 }}>
      我們專注於身心舒壓與專業按摩體驗，
      <br />
      提供安靜、放鬆且具界線感的服務環境。
    </p>

    <p style={{ opacity: 0.75, marginTop: "24px" }}>
      本館不提供任何非法或逾越專業界線之服務，
      <br />
      亦不接受相關要求與暗示。
      <br />
      若有違反情形，本館將立即終止服務，
      <br />
      並保留相關法律權利。
    </p>

    <div
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "center",
        color: "#f2e1d0",
        fontSize: "15px",
      }}
    >
      <div>
        ☎︎　+886 980945321
      </div>

      <div>
        ✉︎　profoundroom.kh@gmail.com
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
