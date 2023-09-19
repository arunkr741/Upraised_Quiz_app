import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { PrimaryButton } from '../../components/primary_button'
import { useRecoilState } from "recoil";
import { QuestionData } from "../../atoms/quiz_atoms"
import { getQuestionDetails } from '@/api/apiUtils'
import { useRouter } from 'next/router'
import Loader from '@/components/loader';
import Image from 'next/image';
import { RoundProgress } from '@/components/progress';
import { QuestionContainer } from '@/components/questions_section';

const StartPage = () => {
    const [questionData, setQuestionData] = useRecoilState(QuestionData);
    const router = useRouter();
    const {question_id} = router.query
    const [loading, setLoading] = useState(true)

    const getQuestionData = async () => {
        setLoading(true)
        try {
            let res = await getQuestionDetails(question_id);
            console.log(res)
            setQuestionData(res)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getQuestionData()
    },[question_id])

    if(!question_id){
        return <h1>Ooops some error occured...</h1>
    }

    if(loading){
        return  <div className={styles.loaderContainer}> <Loader/></div>
    }

  return (
    <div className='appWrapper'>
        <div className={styles.container}>
            <Image
                src="/stars.svg"
                alt="stars"
                className="dark:invert"
                width={400}
                height={90}
                priority
            />
            <div className={styles.progressConatiner}>
                <RoundProgress current={question_id} total={questionData?.total_questions || 1}/>
            </div>
            <div className={styles.questionContainer}> 
                <QuestionContainer question_id={question_id} />
            </div>
        </div>
    </div>
  )
}
export default StartPage
