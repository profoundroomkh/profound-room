import Header from '../../../components/Header'

const images = [
  '/images/studio-second-1.jpg',
  '/images/studio-second-2.jpg',
  '/images/studio-second-3.jpg',
  '/images/studio-second-4.jpg',
]

export default function SecondStudioPage() {
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
            STUDIO 02
          </p>

          <h1
            style={{
              fontSize: '72px',
              fontWeight: '300',
              marginBottom: '40px',
            }}
          >
            第二工作室
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              lineHeight: '2',
              maxWidth: '700px',
              marginBottom: '80px',
            }}
          >
            深寓第二工作室，延續安靜、舒適與獨立的療癒氛圍，
            提供預約制放鬆體驗。
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
              gap: '24px',
            }}
          >
            {images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`高雄 Gay SPA 第二工作室 ${index + 1}`}
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
