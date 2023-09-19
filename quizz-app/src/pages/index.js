'use client'
import { StartPage } from '@/components/start_page'
import styles from './page.module.css'
export default function Home() {
  return (
    <div className={styles.appContainer}>
        <StartPage/>
    </div>
  )
}
