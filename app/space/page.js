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
      image: '/images/bath-2.jpg',
      href: '/space/bath',
    },

    {
      title: '私人房間',
      image: '/images/private-room-2',
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
            A Quiet Space
            <br />
            For Deep Rest
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
        </div>
      </main>
    </>
  )
}
