import Header from '../../components/Header'

export default function RecruitPage() {
  return (
    <>
      <Header />

      <main
        style={{
          background: '#050505',
          color: '#f2e1d0',
          minHeight: '100vh',
          padding: '140px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              color: '#cbb79d',
              letterSpacing: '4px',
              fontSize: '13px',
              marginBottom: '20px',
            }}
          >
            JOIN US
          </p>

          <h1
            style={{
              fontSize: '72px',
              fontWeight: '300',
              lineHeight: '1.2',
              marginBottom: '40px',
            }}
          >
            Therapist
            <br />
            Recruitment
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.68)',
              lineHeight: '2',
              maxWidth: '760px',
              marginBottom: '100px',
              fontSize: '18px',
            }}
          >
            深寓正在尋找重視氛圍、
            懂得與人互動，
            並願意長期經營個人風格的按摩師傅。
            <br />
            無經驗也沒關係，
            我們提供完整培訓與實際帶領。
          </p>

          <img
            src='/images/recruit-hero.jpg'
            alt='深寓師傅招募'
            style={{
              width: '100%',
              borderRadius: '32px',
              marginBottom: '80px',
              objectFit: 'cover',
              maxHeight: '720px',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(320px,1fr))',
              gap: '28px',
              marginBottom: '80px',
            }}
          >
            <div
              style={{
                background: '#111',
                padding: '40px',
                borderRadius: '28px',
                border:
                  '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <h3
                style={{
                  fontSize: '28px',
                  fontWeight: '300',
                  marginBottom: '20px',
                }}
              >
                我們希望你
              </h3>

              <p
                style={{
                  color: 'rgba(255,255,255,0.68)',
                  lineHeight: '2',
                }}
              >
                • 重視服務感受與互動
                <br />
                • 無經驗可培訓
                <br />
                • 願意學習與配合團隊
                <br />
                • 能長期穩定配合
                <br />
                • 對個人形象有基本要求
              </p>
            </div>

            <div
              style={{
                background: '#111',
                padding: '40px',
                borderRadius: '28px',
                border:
                  '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <h3
                style={{
                  fontSize: '28px',
                  fontWeight: '300',
                  marginBottom: '20px',
                }}
              >
                我們提供
              </h3>

              <p
                style={{
                  color: 'rgba(255,255,255,0.68)',
                  lineHeight: '2',
                }}
              >
                • 高質感空間環境
                <br />
                • 穩定客源與曝光
                <br />
                • 彈性排班制度
                <br />
                • 個人形象經營協助
                <br />
                • 完整培訓與帶領
              </p>
            </div>
          </div>

          <div
            style={{
              background: '#111',
              borderRadius: '32px',
              padding: '60px 40px',
              textAlign: 'center',
              border:
                '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <h2
              style={{
                fontSize: '42px',
                fontWeight: '300',
                marginBottom: '24px',
              }}
            >
              Apply Now
            </h2>

            <p
              style={{
                color: 'rgba(255,255,255,0.68)',
                lineHeight: '2',
                marginBottom: '40px',
              }}
            >
              若你也希望在安靜且有質感的空間裡工作，
              <br />
              歡迎加入深寓。
            </p>

            <a
              href='https://line.me/R/ti/p/@637fbbyh'
              target='_blank'
              style={{
                display: 'inline-block',
                padding: '16px 42px',
                borderRadius: '999px',
                border: '1px solid #cbb79d',
                color: '#f2e1d0',
                textDecoration: 'none',
                letterSpacing: '2px',
              }}
            >
              LINE 應徵
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
