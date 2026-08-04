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
    style={{
      position: 'fixed',
      right: '22px',
      bottom: '22px',
      width: '58px',
      height: '58px',
      borderRadius: '50%',
      background: 'rgba(15,15,15,.75)',
      backdropFilter: 'blur(18px)',
      border: '1px solid rgba(255,255,255,.08)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',
      zIndex: 9999,
      boxShadow: '0 12px 30px rgba(0,0,0,.25)',
      transition: '.3s',
    }}
  >
    <img
      src="/images/line-icon.svg"
      alt="LINE"
      style={{
        width: '26px',
        height: '26px',
      }}
    />
  </a>
)
}
