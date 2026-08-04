'use client'

import { useEffect, useState } from 'react'

export default function FloatingButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
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
    style={{
      position: 'fixed',
      right: '20px',
      bottom: '20px',
      zIndex: 9999,

      width: visible ? '150px' : '58px',
      height: '58px',

      overflow: 'hidden',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      background: 'rgba(12,12,12,.78)',
      backdropFilter: 'blur(20px)',

      border: '1px solid rgba(255,255,255,.08)',
      borderRadius: '999px',

      color: '#f2e1d0',
      textDecoration: 'none',

      boxShadow: '0 12px 35px rgba(0,0,0,.25)',

      opacity: visible ? 1 : 0,
      transform: visible
        ? 'translateY(0)'
        : 'translateY(30px)',

      pointerEvents: visible ? 'auto' : 'none',

      transition: 'all .35s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.width = '150px'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.width = '58px'
    }}
  >
    <span
      style={{
        fontSize: '22px',
        flexShrink: 0,
      }}
    >
      💬
    </span>

    <span
      style={{
        marginLeft: '10px',
        whiteSpace: 'nowrap',
        fontSize: '14px',
        color: '#d8c1a0',
      }}
    >
      LINE 預約
    </span>
  </a>
)
}
