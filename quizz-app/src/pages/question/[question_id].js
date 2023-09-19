import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { PrimaryButton } from '../../components/primary_button'
import { useRecoilState } from "recoil";
import { nameState } from "../../atoms/quiz_atoms"
import { getQuestionDetails } from '@/api/apiUtils'
import { useRouter } from 'next/router'
import Loader from '@/components/loader';
import Image from 'next/image';
import { RoundProgress } from '@/components/progress';
import { QuestionContainer } from '@/components/questions_section';

const StartPage = () => {
    const [namea] = useRecoilState(nameState);
    const router = useRouter();
    const {question_id} = router.query
    const [loading, setLoading] = useState(true)

    const getQuestionData = async () => {
        try {
            let res = await getQuestionDetails(question_id);
            console.log(res)
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
                <RoundProgress current={1} total={5}/>
            </div>
            <div className={styles.questionContainer}> 
                <QuestionContainer/>
            </div>
        </div>
    </div>
  )
}
export default StartPage
