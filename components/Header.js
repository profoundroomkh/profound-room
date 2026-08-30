'use client'

import Image from 'next/image'
import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import styles from './Header.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.logoLink} href="/" aria-label="回到深寓首頁">
            <Image
              src="/images/profound-logo-mark.png"
              alt="深寓"
              width={72}
              height={92}
              priority
            />
            <span>Profound Room</span>
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
      </header>

      <HamburgerMenu open={open} setOpen={setOpen} />
    </>
  )
}
