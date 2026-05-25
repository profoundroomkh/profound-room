import Header from '../../components/Header'

export default function SpacePage() {
  const sections = [
    {
      title: '空間氛圍',
      images: [
        '/images/gallery-1.jpg',
        '/images/gallery-2.jpg',
        '/images/gallery-3.jpg',
        '/images/gallery-4.jpg',
      ],
    },

    {
      title: '沐浴空間',
      images: ['/images/hero.jpg'],
    },

    {
      title: '私人房間',
      images: ['/images/hero.jpg'],
    },

    {
      title: '空間細節',
      images: ['/images/hero.jpg'],
    },
  ]

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
            maxWidth: '1400px',
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
            SPACE
          </p>

          <h1
            style={{
              fontSize: '72px',
              fontWeight: '300',
              lineHeight: '1.2',
              marginBottom: '40px',
            }}
          >
            A Quiet Space
            <br />
            For Deep Rest
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              lineHeight: '2',
              maxWidth: '700px',
              marginBottom: '100px',
              fontSize: '18px',
            }}
          >
            PROFOUND ROOM 深寓為高雄預約制男士
            Gay SPA 空間，
            <br />
            以安靜、沉浸與深夜放鬆為核心。
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '120px',
            }}
          >
            {sections.map((section, index) => (
              <section key={index}>
                <h2
                  style={{
                    fontSize: '42px',
                    fontWeight: '300',
                    marginBottom: '40px',
                    color: '#f2e1d0',
                  }}
                >
                  {section.title}
                </h2>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns:
                      'repeat(auto-fit,minmax(320px,1fr))',
                    gap: '24px',
                  }}
                >
                  {section.images.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      alt={section.title}
                      style={{
                        width: '100%',
                        borderRadius: '24px',
                        minHeight: '520px',
                        objectFit: 'cover',
                      }}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
