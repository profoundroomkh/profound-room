'use client'

export default function FloatingButton() {
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
        background: 'rgba(15,15,15,0.82)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '999px',
        padding: '14px 22px',
        minWidth: '170px',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        color: '#f2e1d0',
        boxShadow: '0 10px 40px rgba(0,0,0,0.28)',
        transition: '0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          fontSize: '9px',
          letterSpacing: '3px',
          color: '#cbb79d',
          marginBottom: '4px',
        }}
      >
        RESERVE NOW
      </div>

      <div
        style={{
          fontSize: '15px',
          fontWeight: '400',
        }}
      >
        LINE 預約
      </div>
    </a>
  )
}
