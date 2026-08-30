'use client'

import { useEffect, useState } from 'react'

export default function FloatingButton() {
  const [visible, setVisible] = useState(false)

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
      window.gtag('event', 'reservation_intent', {
        source: 'floating_button',
      })
    }
  }

  return (
    <a
      href="https://line.me/R/ti/p/@637fbbyh"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleLineClick}
      aria-label="立即預約"
      style={{
        position: 'fixed',
        right: '22px',
        bottom: '22px',
        width: '58px',
        height: '58px',
        borderRadius: '50%',
        background: 'rgba(10,10,10,0.72)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(214,178,123,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        zIndex: 9999,
        boxShadow: '0 12px 30px rgba(0,0,0,.25)',
        color: '#d6b27b',

        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0) scale(1)'
          : 'translateY(20px) scale(.9)',

        pointerEvents: visible ? 'auto' : 'none',

        transition:
          'opacity .35s ease, transform .35s ease, box-shadow .25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1.08)'
        e.currentTarget.style.boxShadow =
          '0 16px 40px rgba(0,0,0,.35)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow =
          '0 12px 30px rgba(0,0,0,.25)'
      }}
    >
      <span
        style={{
          fontSize: '22px',
          fontWeight: 300,
          letterSpacing: '1px',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        ✦
      </span>
    </a>
  )
}
