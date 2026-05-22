export default function Gallery() {
  const images = [
    '/images/gallery-1.jpg',
    '/images/gallery-2.jpg',
    '/images/gallery-3.jpg',
    '/images/gallery-4.jpg',
  ]

  return (
    <section className="bg-[#0a0a0a] text-white px-6 md:px-20 py-28">
      <p
        className="
          text-[#c6a36a]
          text-sm
          tracking-[0.3em]
          mb-6
        "
      >
        GALLERY
      </p>

      <h2 className="text-4xl md:text-6xl font-light mb-16">
        Space Atmosphere
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="
              aspect-[4/5]
              overflow-hidden
              rounded-[24px]
            "
          >
            <img
              src={image}
              alt="Kaohsiung Gay Spa"
              className="
                w-full h-full
                object-cover
                hover:scale-105
                duration-700
              "
            />
          </div>
        ))}
      </div>
    </section>
  )
}
