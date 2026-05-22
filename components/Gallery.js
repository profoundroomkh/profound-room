export default function Gallery() {
  const images = [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
  ]

  return (
    <section
      style={{
        background: '#050505',
        color: '#f2e1d0',
        padding: '140px 24px',
        textAlign: 'center',
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
        GALLERY
      </p>

      <h2
        style={{
          fontSize: '54px',
          fontWeight: '300',
          marginBottom: '80px',
          lineHeight: '1.3',
        }}
      >
        Space Atmosphere
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              background: '#111',
              aspectRatio: '4/5',
            }}
          >
            <img
              src={image}
              alt='Kaohsiung Gay Spa'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
