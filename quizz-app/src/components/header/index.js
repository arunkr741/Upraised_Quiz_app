import React from 'react'
import Image from 'next/image'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <Image
          src="/brand_logo.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={60}
          height={40}
          priority
        />
        <span className={styles.brandName}>upraised</span>
      </div>
    </div>
  )
}
