export default function Home() {
  const masters = [
    {
      name: "Ryan",
      specialty: "深層舒壓 / 精油放鬆",
      intro: "溫柔細膩的放鬆節奏，適合初次體驗。",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Luke",
      specialty: "肌肉按摩 / 沉浸療癒",
      intro: "偏力量感按摩，適合壓力與疲勞釋放。",
      image:
        "https://ibb.co/rKJ3ZLDs",
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
                  href="https://line.me/"
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

      {/* FOOTER */}
      <footer
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '40px 24px',
          textAlign: 'center',
          color: '#8d7868',
          letterSpacing: '2px',
        }}
      >
        PROFOUND ROOM ・ 深寓
      </footer>
    </main>
  )
}
