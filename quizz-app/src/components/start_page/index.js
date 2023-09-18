import React from 'react'
import { Header } from '../header'
import { QuizzBanner } from '../quizz_banner'
import styles from './index.module.scss'

export const StartPage = () => {
  return (
    <div >
        <Header/>
        <div className={styles.quizzBannerContainer}>
            <QuizzBanner/>
        </div>
    </div>
  )
}
