import Image from 'next/image'
import styles from './page.module.css'
import { StartPage } from '@/components/start_page'

export default function Home() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.appContainer}>
        <StartPage/>
        </div>
    </div>
  )
}
