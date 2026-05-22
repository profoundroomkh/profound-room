'use client'

export default function HamburgerMenu({
  open,
  setOpen,
}) {
  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#050505',
        zIndex: 9999,
        color: '#f2e1d0',
        padding: '40px 28px',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '80px',
        }}
      >
        <div
          style={{
            letterSpacing: '3px',
            fontSize: '13px',
          }}
        >
          PROFOUND ROOM
        </div>

        <button
          onClick={() => setOpen(false)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#f2e1d0',
            fontSize: '28px',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>
      </div>

      <div style={{ marginBottom: '80px' }}>
        <p
          style={{
            color: '#cbb79d',
            letterSpacing: '4px',
            marginBottom: '24px',
            fontSize: '13px',
          }}
        >
          SPACE
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
            fontSize: '26px',
            fontWeight: '300',
          }}
        >
          <a
            href='/'
            style={{
              color: '#f2e1d0',
              textDecoration: 'none',
            }}
          >
            首頁
          </a>

          <a
            href='/space'
            style={{
              color: '#f2e1d0',
              textDecoration: 'none',
            }}
          >
            空間氛圍
          </a>

          <div>沐浴空間</div>

          <div>私人房間</div>

          <div>空間細節</div>
        </div>
      </div>

      <div style={{ marginBottom: '80px' }}>
        <p
          style={{
            color: '#cbb79d',
            letterSpacing: '4px',
            marginBottom: '24px',
            fontSize: '13px',
          }}
        >
          EXPERIENCE
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
            fontSize: '26px',
            fontWeight: '300',
          }}
        >
          <div>預約方式</div>

          <div>FAQ 常見問題</div>

          <div>環境照片</div>

          <div>深夜日誌</div>
        </div>
      </div>

      <p
        style={{
          color: 'rgba(255,255,255,0.45)',
          lineHeight: '2.2',
          maxWidth: '680px',
          fontSize: '14px',
        }}
      >
        PROFOUND ROOM is a private Gay SPA
        and men’s relaxation space in
        Kaohsiung, designed for deep rest,
        quiet moments, and immersive
        atmosphere.
      </p>
    </div>
  )
}
