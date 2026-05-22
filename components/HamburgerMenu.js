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
          marginBottom: '60px',
        }}
      >
        <div
          style={{
            letterSpacing: '2px',
            fontSize: '14px',
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

      <div style={{ marginBottom: '60px' }}>
        <p
          style={{
            color: '#cbb79d',
            letterSpacing: '3px',
            marginBottom: '20px',
          }}
        >
         空間
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            fontSize: '24px',
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

          <div>空間氛圍</div>
          <div>沐浴空間</div>
          <div>私人房間</div>
          <div>空間細節</div>
        </div>
      </div>

      <div style={{ marginBottom: '60px' }}>
        <p
          style={{
            color: '#cbb79d',
            letterSpacing: '3px',
            marginBottom: '20px',
          }}
        >
          體驗
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            fontSize: '42px',
            fontWeight: '300',
          }}
        >
          <div>預約方式</div>
          <div>FAQ常見問題</div>
          <div>環境照片</div>
          <a
            href='/blog'
            style={{
              color: '#f2e1d0',
              textDecoration: 'none',
            }}
          >
            深夜日誌
          </a>
        </div>
      </div>

      <p
        style={{
          color: 'rgba(255,255,255,0.5)',
          lineHeight: '2',
          maxWidth: '700px',
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
