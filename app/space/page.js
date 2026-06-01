import Link from 'next/link'
import Header from '../../components/Header'

export default function SpacePage() {
  const spaces = [
    {
      title: '空間氛圍',
      image: '/images/gallery-1.jpg',
      href: '/space/atmosphere',
    },

    {
      title: '沐浴空間',
      image: '/images/bath-1.jpg',
      href: '/space/bath',
    },

    {
      title: '私人房間',
      image: '/images/private-room-2.jpg',
      href: '/space/private-room',
    },

    {
      title: '空間細節',
      image: '/images/gallery-4.jpg',
      href: '/space/detail',
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
          
   高雄男士放鬆空間

            <br />
            放鬆空間
          </h1>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(320px,1fr))',
              gap: '24px',
            }}
          >
            {spaces.map((space, index) => (
              <Link
                key={index}
                href={space.href}
                style={{
                  textDecoration: 'none',
                }}
              >
                <div>
                  <img
                    src={space.image}
                    alt={space.title}
                    style={{
                      width: '100%',
                      borderRadius: '24px',
                      minHeight: '520px',
                      objectFit: 'cover',
                      marginBottom: '16px',
                    }}
                  />

                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: '300',
                      color: '#f2e1d0',
                    }}
                  >
                    {space.title}
                  </h3>
                </div>
              </Link>
            ))}
                    </div>

          <section
            style={{
              maxWidth: '900px',
              margin: '100px auto 0',
              color: '#c9b8aa',
              lineHeight: '2',
              fontSize: '16px',
            }}
          >
            <h2
              style={{
                color: '#f2e1d0',
                fontSize: '32px',
                fontWeight: '300',
                marginBottom: '24px',
              }}
            >
              高雄 Gay SPA 與男士放鬆空間
            </h2>

            <p>
              PROFOUND ROOM 深寓位於高雄，
              為預約制男士放鬆空間與 Gay SPA。
              <br /><br />

              空間規劃包含私人房間、
              沐浴空間與獨立療程區域，
              重視隱私、舒適與沉浸式體驗。
              <br /><br />

              無論是初次體驗男士按摩，
              或正在尋找高雄 Gay SPA、
              高雄男士按摩與私人放鬆空間，
              都能在深寓享受安靜且自在的休息時光。
            </p>
          </section>

        </div>
      </main>
    </>
  )
}
