import Header from '../../../components/Header'

export default function AtmospherePage() {
  const images = [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
  ]

  return (
    <>
      <Header />

      <main
        style={{
          background: '#050505',
          padding: '140px 24px',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          <h1
            style={{
              color: '#f2e1d0',
              fontSize: '64px',
              fontWeight: '300',
              marginBottom: '60px',
            }}
          >
            空間氛圍
          </h1>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(320px,1fr))',
              gap: '24px',
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                style={{
                  width: '100%',
                  borderRadius: '24px',
                  minHeight: '520px',
                  objectFit: 'cover',
                }}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
