'use client'

import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 28px',
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <button
          onClick={() => setOpen(true)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#f2e1d0',
            fontSize: '14px',
            letterSpacing: '3px',
            cursor: 'pointer',
          }}
        >
          ☰ MENU
        </button>

        <div
          style={{
            color: '#f2e1d0',
            letterSpacing: '6px',
            fontSize: '14px',
          }}
        >
          PROFOUND ROOM
        </div>

        <a
          href='https://line.me'
          style={{
            color: '#cbb79d',
            textDecoration: 'none',
            fontSize: '14px',
            letterSpacing: '2px',
          }}
        >
          RESERVE
        </a>
      </header>

      <HamburgerMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}
