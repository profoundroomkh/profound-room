'use client'

import { useState } from 'react'

const faqs = [
  {
    question: '是否採完全預約制？',
    answer:
      '是的，PROFOUND ROOM 為高雄完全預約制 Gay SPA 與男士放鬆空間。',
  },

  {
    question: '第一次預約會尷尬嗎？',
    answer:
      '許多第一次接觸男士 SPA 的來訪者，也會在預約前感到緊張，但實際進入空間後通常很快就能放鬆。',
  },

  {
    question: '工作室在哪裡？',
    answer:
      '位於高雄亞洲新灣區附近，完成預約後將提供完整地址資訊。',
  },

  {
    question: '需要提前多久預約？',
    answer:
      '建議提前 1–3 天預約，熱門時段通常較快額滿。',
  },
]

export default function FAQ() {
  const [active, setActive] = useState(null)

  return (
    <section
      style={{
        background: '#050505',
        color: '#f2e1d0',
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
            textAlign: 'center',
          }}
        >
          RESERVATION GUIDE
        </p>

        <h2
          style={{
            fontSize: '54px',
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: '80px',
            lineHeight: '1.3',
          }}
        >
          Things You May
          <br />
          Want To Know
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              borderTop:
                '1px solid rgba(255,255,255,0.08)',
              padding: '36px 0',
            }}
          >
            <button
              onClick={() =>
                setActive(
                  active === index ? null : index
                )
              }
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                color: '#f2e1d0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                fontSize: '24px',
                fontWeight: '300',
                textAlign: 'left',
              }}
            >
              {faq.question}

              <span
                style={{
                  color: '#cbb79d',
                  fontSize: '32px',
                }}
              >
                {active === index ? '−' : '+'}
              </span>
            </button>

            {active === index && (
              <p
                style={{
                  marginTop: '24px',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: '2',
                  fontSize: '16px',
                }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
