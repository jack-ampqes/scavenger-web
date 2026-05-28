'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/Scavenger_LOGO.svg" alt="SCAVENGER" className={styles.logoImage} />
          </Link>
        </div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/about" className={styles.navLink}>ABOUT</Link>
          <a href="https://ampqes.notion.site/19628cd9658e80e4b368fc41782af561" className={styles.navLink}>NEW INQUIRY</a>
          <Link href="/contact" className={styles.navLink}>CONTACT</Link>
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}>
            {isMenuOpen ? 'Close' : 'Menu'}
          </span>
        </button>
      </div>
    </header>
  )
}

