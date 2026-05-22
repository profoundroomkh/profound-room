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
          background: 'rgba(5,5,5,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom:
            '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '18px 18px',
            color: '#f2e1d0',
          }}
        >
          <button
            onClick={() => setOpen(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#f2e1d0',
              letterSpacing: '3px',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            ☰ MENU
          </button>

          <div
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              letterSpacing: '4px',
              fontSize: '12px',
              whiteSpace: 'nowrap',
            }}
          >
            PROFOUND ROOM
          </div>

          <a
            href='https://line.me/R/ti/p/@637fbbyh'
            target='_blank'
            style={{
              color: '#f2e1d0',
              textDecoration: 'none',
              letterSpacing: '2px',
              fontSize: '12px',
            }}
          >
            LINE
          </a>
        </div>
      </header>

      <HamburgerMenu
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}
