'use client'

import Image from 'next/image'
import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import styles from './Header.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'
const TRANSLATION_COOKIE = 'googtrans'

function clearTranslationCookie() {
  document.cookie = `${TRANSLATION_COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
  if (window.location.hostname) {
    document.cookie = `${TRANSLATION_COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`
  }
}

export default function Header() {
  const [open, setOpen] = useState(false)

  const switchLanguage = (language) => {
    if (language === 'en') {
      document.cookie = `${TRANSLATION_COOKIE}=/zh-TW/en; path=/`
    } else {
      clearTranslationCookie()
    }

    window.location.reload()
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.logoLink} href="/" aria-label="回到深寓首頁">
            <Image
              src="/images/profound-logo-symbol.png"
              alt=""
              width={54}
              height={58}
              priority
            />
            <span className={styles.brandCopy}>
              <strong>深寓</strong>
              <em>Profound Room</em>
            </span>
          </a>

          <button
            className={styles.menuButton}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="開啟網站選單"
            aria-expanded={open}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>MENU</span>
          </button>

          <div className={styles.headerActions}>
            <div
              className={`${styles.languageSwitch} notranslate`}
              aria-label="語言切換"
              translate="no"
            >
              <button type="button" onClick={() => switchLanguage('en')}>
                EN
              </button>
              <span aria-hidden="true">/</span>
              <button type="button" onClick={() => switchLanguage('zh-TW')}>
                中
              </button>
            </div>
            <a
              className={styles.reservationLink}
              href={LINE_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.reservationLong}>LINE 立即預約</span>
              <span className={styles.reservationShort}>LINE</span>
            </a>
          </div>
        </div>
      </header>

      <HamburgerMenu
        open={open}
        setOpen={setOpen}
        onSwitchLanguage={switchLanguage}
      />
    </>
  )
}
