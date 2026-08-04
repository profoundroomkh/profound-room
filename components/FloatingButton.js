'use client'

import { useEffect, useState } from 'react'

export default function FloatingButton() {
  const [visible, setVisible] = useState(false)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 650)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLineClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'line_click', {
        event_category: 'booking',
        event_label: 'FloatingButton',
      })
    }
  }

  return (
    <a
      href="https://line.me/R/ti/p/@637fbbyh"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleLineClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'fixed',
        right: '22px',
        bottom: '22px',
        zIndex: 9999,

        width: hover ? '170px' : '60px',
        height: '60px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',

        borderRadius: '999px',

        background: 'rgba(12,12,12,.72)',
        backdropFilter: 'blur(18px)',

        border: '1px solid rgba(255,255,255,.08)',

        boxShadow: '0 12px 32px rgba(0,0,0,.28)',

        color: '#f2e1d0',
        textDecoration: 'none',

        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0)'
          : 'translateY(25px)',

        pointerEvents: visible ? 'auto' : 'none',

        transition: 'all .35s ease',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="#d6b27b"
        style={{ flexShrink: 0 }}
      >
        <path d="M19.365 9.969c0-4.163-4.17-7.549-9.296-7.549S.773 5.806.773 9.969c0 3.732 3.311 6.857 7.784 7.449.303.066.715.203.819.465.094.239.062.613.031.855l-.133.8c-.041.236-.188.924.81.504.998-.419 5.385-3.171 7.347-5.428 1.355-1.485 1.934-2.993 1.934-5.645z"/>
      </svg>

      <span
        style={{
          marginLeft: hover ? '12px' : '0px',
          opacity: hover ? 1 : 0,
          width: hover ? '90px' : '0px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          transition: 'all .25s ease',
          color: '#d6b27b',
          fontSize: '14px',
          letterSpacing: '1px',
        }}
      >
        LINE 預約
      </span>
    </a>
  )
}
