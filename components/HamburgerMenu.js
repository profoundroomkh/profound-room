'use client'

import Image from 'next/image'
import styles from './HamburgerMenu.module.css'

const LINE_URL = 'https://line.me/R/ti/p/@637fbbyh'

const menuGroups = [
  {
    label: 'EXPLORE',
    items: [
      { label: '首頁', english: 'Home', href: '/' },
      { label: '師傅團隊', english: 'Therapists', href: '/#therapists' },
      { label: '價目方案', english: 'Courses & Plans', href: '/#pricing' },
    ],
  },
  {
    label: 'SPACE',
    items: [
      { label: '空間介紹', english: 'Space', href: '/space' },
      { label: '空間氛圍', english: 'Atmosphere', href: '/space/atmosphere' },
      { label: '沐浴空間', english: 'Bath', href: '/space/bath' },
      { label: '私人房間', english: 'Private Room', href: '/space/private-room' },
      { label: '空間細節', english: 'Details', href: '/space/detail' },
    ],
  },
  {
    label: 'EXPERIENCE',
    items: [
      { label: '預約方式', english: 'Reservation Guide', href: '/reservation' },
      { label: 'FAQ 常見問題', english: 'FAQ', href: '/faq' },
      { label: 'Journal／旅程', english: 'Journal / Journey', href: '/journal' },
      { label: '招募師傅', english: 'Recruitment', href: '/recruit' },
    ],
  },
]

export default function HamburgerMenu({
  open,
  setOpen,
  onSwitchLanguage,
}) {
  if (!open) return null

  const closeMenu = () => setOpen(false)

  return (
    <div className={styles.menuOverlay} role="dialog" aria-modal="true" aria-label="網站選單">
      <button
        type="button"
        className={styles.backdrop}
        onClick={closeMenu}
        aria-label="關閉網站選單"
      />

      <aside className={styles.menuPanel}>
        <div className={styles.menuHeader}>
          <a className={styles.menuBrand} href="/" onClick={closeMenu} aria-label="回到深寓首頁">
            <Image
              src="/images/profound-logo-symbol.png"
              alt=""
              width={48}
              height={48}
              priority
            />
            <span className={styles.brandCopy}>
              <strong>深寓</strong>
              <em>Profound Room</em>
            </span>
          </a>

          <button
            type="button"
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="關閉網站選單"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className={styles.menuScrollArea}>
          <div className={styles.menuIntro}>
            <span className={styles.menuKicker}>MENU</span>
            <span className={styles.menuRule} aria-hidden="true" />
          </div>

          <nav aria-label="主要網站導覽" className={styles.menuNav}>
            {menuGroups.map((group) => (
              <section key={group.label} className={styles.menuGroup}>
                <p className={styles.groupLabel}>{group.label}</p>
                <div className={styles.groupLinks}>
                  {group.items.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`${styles.menuLink} ${index > 0 && group.label === 'SPACE' ? styles.spaceLink : ''}`}
                    >
                      <span className={styles.linkLabel}>{item.label}</span>
                      <span className={styles.linkEnglish}>{item.english}</span>
                      <span className={styles.linkArrow} aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </nav>
        </div>

        <div className={styles.menuFooter}>
          <a
            className={styles.menuCta}
            href={LINE_URL}
            target="_blank"
            rel="noreferrer"
          >
            <span>LINE 立即預約</span>
            <span aria-hidden="true">→</span>
          </a>

          <div className={`${styles.languageSwitch} notranslate`} translate="no" aria-label="語言切換">
            <button type="button" onClick={() => onSwitchLanguage('en')}>EN</button>
            <span aria-hidden="true">/</span>
            <button type="button" onClick={() => onSwitchLanguage('zh-TW')}>中</button>
          </div>

          <p className={styles.menuNote}>Adults Only｜18+　·　預約制男士按摩與私人放鬆空間</p>
        </div>
      </aside>
    </div>
  )
}
