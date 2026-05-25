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
        padding: '40px 28px 80px',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '90px',
        }}
      >
        <div
          style={{
            letterSpacing: '4px',
            fontSize: '12px',
            color: '#cbb79d',
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
            fontSize: '30px',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>
      </div>

      <div style={{ marginBottom: '90px' }}>
        <p
          style={{
            color: '#8d7964',
            letterSpacing: '5px',
            marginBottom: '26px',
            fontSize: '12px',
          }}
        >
          SPACE
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <a
            href='/'
            style={{
              color: '#f2e1d0',
              textDecoration: 'none',
              fontSize: '28px',
              fontWeight: '300',
            }}
          >
            首頁
          </a>

          <a
            href='/space'
            style={{
              color: '#f2e1d0',
              textDecoration: 'none',
              fontSize: '28px',
              fontWeight: '300',
            }}
          >
            空間氛圍
          </a>

          <a
            href='/space'
            style={{
              color: '#f2e1d0',
              textDecoration: 'none',
              fontSize: '28px',
              fontWeight: '300',
            }}
          >
            沐浴空間
          </a>

          <a
            href='/space'
            style={{
              color: '#f2e1d0',
              textDecoration: 'none',
              fontSize: '28px',
              fontWeight: '300',
            }}
          >
            私人房間
          </a>

          <a
            href='/space'
            style={{
              color: '#f2e1d0',
              textDecoration: 'none',
              fontSize: '28px',
              fontWeight: '300',
            }}
          >
            空間細節
          </a>
        </div>
      </div>

      <div style={{ marginBottom: '90px' }}>
        <p
          style={{
            color: '#8d7964',
            letterSpacing: '5px',
            marginBottom: '26px',
            fontSize: '12px',
          }}
        >
          EXPERIENCE
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <a
            href='/reservation'
            style={{
              color: '#f2e1d0',
              textDecoration: 'none',
              fontSize: '28px',
              fontWeight: '300',
            }}
          >
            預約方式
          </a>

          <a
            href='/faq'
            style={{
              color: '#f2e1d0',
              textDecoration: 'none',
              fontSize: '28px',
              fontWeight: '300',
            }}
          >
            FAQ 常見問題
          </a>

          <a
            href='/space'
            style={{
              color: '#f2e1d0',
              textDecoration: 'none',
              fontSize: '28px',
              fontWeight: '300',
            }}
          >
            環境照片
          </a>

          <a
            href='/journal'
            style={{
              color: '#f2e1d0',
              textDecoration: 'none',
              fontSize: '28px',
              fontWeight: '300',
            }}
          >
<a
  href='/recruit'
  style={{
    color: '#f2e1d0',
    textDecoration: 'none',
    fontSize: '28px',
    fontWeight: '300',
  }}
>
  招募師傅
</a>
            深夜日誌
          </a>
        </div>
      </div>

      <div
        style={{
          borderTop:
            '1px solid rgba(255,255,255,0.08)',
          paddingTop: '40px',
        }}
      >
        <p
          style={{
            color: 'rgba(255,255,255,0.42)',
            lineHeight: '2.2',
            maxWidth: '620px',
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
    </div>
  )
}
