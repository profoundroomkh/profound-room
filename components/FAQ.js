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
      '許多第一次接觸男士 SPA 的來訪者，也會在預約前感到緊張，但真正進入空間後，通常很快就能放鬆下來。',
  },

  {
    question: '工作室在哪裡？',
    answer:
      '位於高雄車站附近，完成預約後將提供完整地址資訊。',
  },

  {
    question: '需要提前多久預約？',
    answer:
      '建議提前 1–3 天預約，深夜與熱門時段通常較快額滿。',
  },
]

export default function FAQ() {
  const [active, setActive] = useState(null)

  return (
    <section className="bg-black text-white px-6 md:px-20 py-28">
      <p
        className="
          text-[#c6a36a]
          text-sm
          tracking-[0.3em]
          mb-6
        "
      >
        RESERVATION GUIDE
      </p>

      <h2 className="text-4xl md:text-6xl font-light mb-16">
        Things You May
        <br />
        Want To Know
      </h2>

      <div className="border-t border-white/10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="
              border-b border-white/10
              py-8
            "
          >
            <button
              onClick={() =>
                setActive(
                  active === index ? null : index
                )
              }
              className="
                w-full
                flex items-center justify-between
                text-left
              "
            >
              <span className="text-xl md:text-2xl font-light">
                {faq.question}
              </span>

              <span className="text-[#c6a36a] text-3xl">
                {active === index ? '−' : '+'}
              </span>
            </button>

            {active === index && (
              <p
                className="
                  mt-6
                  text-white/60
                  leading-8
                  max-w-3xl
                "
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
