'use client'

export default function HamburgerMenu({ open, setOpen }) {
  return (
    <div
      className={`
        fixed inset-0 z-[999]
        bg-black
        transition-all duration-500
        ${
          open
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }
      `}
    >
      <div className="p-8 md:p-16 h-full overflow-y-auto">
        <div className="flex items-center justify-between mb-20">
          <h2
            className="
              text-white
              text-sm
              tracking-[0.4em]
            "
          >
            PROFOUND ROOM
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="
              text-white
              text-3xl
              hover:opacity-70
              duration-300
            "
          >
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-20 text-white">
          <div>
            <p
              className="
                text-[#c6a36a]
                text-sm
                tracking-[0.3em]
                mb-8
              "
            >
              SPACE
            </p>

            <ul className="space-y-5 text-4xl font-light">
              <li>
                <a href="/">Home</a>
              </li>

              <li>Atmosphere</li>

              <li>Shower Area</li>

              <li>Private Room</li>

              <li>Details</li>
            </ul>
          </div>

          <div>
            <p
              className="
                text-[#c6a36a]
                text-sm
                tracking-[0.3em]
                mb-8
              "
            >
              EXPERIENCE
            </p>

            <ul className="space-y-5 text-4xl font-light">
              <li>Reservation</li>

              <li>FAQ</li>

              <li>Gallery</li>

              <li>
                <a href="/blog">Journal</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-10">
          <p
            className="
              text-white/50
              leading-8
              max-w-2xl
            "
          >
            PROFOUND ROOM is a private Gay SPA and
            men’s relaxation space in Kaohsiung,
            designed for deep rest, quiet moments,
            and immersive atmosphere.
          </p>
        </div>
      </div>
    </div>
  )
}
