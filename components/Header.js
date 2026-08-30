'use client'

import Image from 'next/image'
import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import styles from './Header.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

export default function Header() {
  const [open, setOpen] = useState(false)

  const openEnglishVersion = () => {
    const translatedUrl = `https://translate.google.com/translate?sl=zh-TW&tl=en&u=${encodeURIComponent(window.location.href)}`
    window.location.href = translatedUrl
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
            <button
              className={styles.languageButton}
              type="button"
              onClick={openEnglishVersion}
              aria-label="切換英文版"
            >
              EN
            </button>
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

      <HamburgerMenu open={open} setOpen={setOpen} />
    </>
  )
}
