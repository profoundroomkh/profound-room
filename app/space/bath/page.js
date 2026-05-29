import Header from '../../../components/Header'

const images = [
  '/images/bath-1.jpg',
  '/images/bath-2.jpg',
]

export default function BathPage() {
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
            BATH SPACE
          </p>

          <h1
            style={{
              fontSize: '72px',
              fontWeight: '300',
              marginBottom: '40px',
            }}
          >
            沐浴空間
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              lineHeight: '2',
              maxWidth: '700px',
              marginBottom: '80px',
            }}
          >
            獨立衛浴空間，提供沐浴用品與舒適環境，
            讓身心在療程前後都能完整放鬆。
          </p>

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
                alt={`高雄 Gay SPA 沐浴空間 ${index + 1}`}
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
