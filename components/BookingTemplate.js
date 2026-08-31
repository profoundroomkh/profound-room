'use client'

import { useState } from 'react'
import { trackTemplateCopy } from './analytics'

const template = `想預約師傅：
希望日期：
希望時段：
課程：90 分鐘／120 分鐘`

export default function BookingTemplate() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(template)
      trackTemplateCopy('reservation_page')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="booking-template">
      <div>
        <p className="booking-template__eyebrow">COPY & SEND</p>
        <h2>預約格式</h2>
        <p className="booking-template__intro">
          複製後填寫，再傳送給官方 LINE，客服會協助確認時段。
        </p>
      </div>
      <pre aria-label="可複製的預約格式">{template}</pre>
      <button type="button" onClick={handleCopy}>
        {copied ? '已複製預約格式' : '複製預約格式'}
      </button>
    </div>
  )
}

export { template }

