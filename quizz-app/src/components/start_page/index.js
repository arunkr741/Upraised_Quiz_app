import React, { useEffect } from 'react'
import { Header } from '../header'
import { QuizzBanner } from '../quizz_banner'
import styles from './index.module.scss'
import { PrimaryButton } from '../primary_button'
import { useRecoilState, useSetRecoilState } from "recoil";
import { Quizdata } from "../../atoms/quiz_atoms"
import { postQuizStart } from '@/api/apiUtils'
import { useRouter } from 'next/navigation'

export const StartPage = () => {
    const setQuizData = useSetRecoilState(Quizdata);
    const router = useRouter();

    const handleStartBtnClick = async() => {
        try {
            let res = await postQuizStart();
            setQuizData(res)
            router.push('/question/1/')
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div >
        <Header/>
        <div className={styles.quizzBannerContainer}>
            <QuizzBanner/>
        </div>
        <div className={styles.btnContainer}>
            <PrimaryButton label="Start" handleBtnClick={handleStartBtnClick} />
        </div>
    </div>
  )
}
