export default function FloatingButton() {
  return (
    <a
      href='https://line.me/R/ti/p/@637fbbyh'
      target='_blank'
      style={{
        position: 'fixed',
        right: '24px',
        bottom: '24px',
        zIndex: 9999,
        background:
          'rgba(15,15,15,0.88)',
        backdropFilter: 'blur(14px)',
        border:
          '1px solid rgba(255,255,255,0.08)',
        borderRadius: '999px',
        padding: '16px 24px',
        textDecoration: 'none',
        color: '#f2e1d0',
        boxShadow:
          '0 10px 40px rgba(0,0,0,0.35)',
      }}
    >
      <div
        style={{
          fontSize: '11px',
          letterSpacing: '3px',
          color: '#cbb79d',
          marginBottom: '6px',
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
