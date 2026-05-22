'use client'

import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        className="
          fixed top-0 left-0 w-full z-50
          flex items-center justify-between
          px-6 md:px-10 py-5
          bg-black/40 backdrop-blur-md
          border-b border-white/10
        "
      >
        <button
          onClick={() => setOpen(true)}
          className="
            text-white
            tracking-[0.25em]
            text-sm
            hover:opacity-70
            duration-300
          "
        >
          ☰ MENU
        </button>

        <h1
          className="
            text-white
            text-sm
            tracking-[0.4em]
          "
        >
          PROFOUND ROOM
        </h1>

        <a
          href="https://line.me"
          target="_blank"
          className="
            text-[#c6a36a]
            text-sm
            tracking-[0.2em]
            hover:opacity-70
            duration-300
          "
        >
          RESERVE
        </a>
      </header>

      <HamburgerMenu open={open} setOpen={setOpen} />
    </>
  )
}
