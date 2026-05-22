import Header from '../../components/Header'

export default function FAQPage() {
  const faqs = [
    {
      question:
        '第一次預約 Gay SPA 會很尷尬嗎？',

      answer:
        '其實大部分第一次來訪的人都會緊張。PROFOUND ROOM 更重視放鬆感、隱私與舒適節奏，不需要有壓力。',
    },

    {
      question:
        '工作室是完全預約制嗎？',

      answer:
        '是的，目前採完全預約制，為了維護空間品質與隱私感，不接受現場臨時來訪。',
    },

    {
      question:
        '預約完成後會提供地址嗎？',

      answer:
        '完成預約後，會提供詳細位置資訊。空間鄰近高雄車站附近。',
    },

    {
      question:
        '男士 SPA 與一般按摩有什麼不同？',

      answer:
        '比起一般商業按摩，男士預約制 SPA 更重視氛圍、沉浸感與情緒放鬆。',
    },

    {
      question:
        '第一次預約需要準備什麼？',

      answer:
        '保持放鬆即可。若有任何想詢問的內容，也可以提前透過 LINE 詢問。',
    },

    {
      question:
        '空間會有其他客人嗎？',

      answer:
        'PROFOUND ROOM 為預約制空間，會盡可能保留安靜與隱私感。',
    },
  ]

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
            maxWidth: '1000px',
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
            FAQ
          </p>

          <h1
            style={{
              fontSize: '72px',
              fontWeight: '300',
              lineHeight: '1.2',
              marginBottom: '40px',
            }}
          >
            Things You
            <br />
            May Want To Know
          </h1>

          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              lineHeight: '2',
              maxWidth: '700px',
              marginBottom: '100px',
              fontSize: '18px',
            }}
          >
            關於預約制男士 SPA、
            第一次體驗與空間相關問題。
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  background: '#111',
                  borderRadius: '28px',
                  padding: '42px 36px',
                  border:
                    '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <h2
                  style={{
                    fontSize: '28px',
                    fontWeight: '300',
                    marginBottom: '20px',
                    lineHeight: '1.6',
                  }}
                >
                  {faq.question}
                </h2>

                <p
                  style={{
                    color:
                      'rgba(255,255,255,0.68)',
                    lineHeight: '2.2',
                    fontSize: '16px',
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '100px',
              textAlign: 'center',
            }}
          >
            <a
              href='https://line.me/R/ti/p/@637fbbyh'
              target='_blank'
              style={{
                display: 'inline-block',
                padding: '20px 42px',
                borderRadius: '999px',
                border:
                  '1px solid #cbb79d',
                color: '#f2e1d0',
                textDecoration: 'none',
                letterSpacing: '3px',
              }}
            >
              LINE 預約
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
