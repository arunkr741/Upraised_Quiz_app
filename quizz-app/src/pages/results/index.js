import React, { useEffect, useState } from "react";
import styles from './index.module.scss'
import Image from "next/image";
import { ResultCard } from "@/components/resultCard";
import { PrimaryButton } from '../../components/primary_button'
import { useRouter } from "next/router";
import { getQuizResult } from "@/api/apiUtils";
import Loader from "@/components/loader";

const Results = () => {
    const router = useRouter()
    const [resultData, setResultData] = useState({})
    const [loading, setLoading] = useState(true)

    const getResult = async() => {
        setLoading(true)
        try {
            const res = await getQuizResult()
            setResultData(res)
            setLoading(false)
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(()=>{
        getResult()
    },[])

    const handleStartAgain = () => {
        router.push(`/`)
    }

    if(loading){
        return  <div className={styles.loaderContainer}> <Loader/></div>
    }

    const correct = resultData?.correct_answers || 0
    const inCorrect = resultData?.total_questions - correct || 0

    return <div className='appWrapper'>
        <div className={styles.container}>
            <Image
                src="/stars.svg"
                alt="stars"
                className="dark:invert"
                width={400}
                height={90}
                priority
            />
            <div className={styles.resultContainer}>
                <div className={styles.primaryText}>
                    Your result
                </div>

                <div className={styles.resultMeter}>
                    <Image
                        src="/result_meter.svg"
                        width={200}
                        height={200}
                        alt=""
                    />
                </div>

                <div className={styles.cardConatiner}>
                    <div>
                        <ResultCard count={correct} resultType={'Correct'} />
                        <div className={styles.separator}></div>
                        <ResultCard count={inCorrect} resultType={'Incorrect'} />
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <PrimaryButton btnStyles={{width: '360px'}} handleBtnClick={handleStartAgain} label="Start Again" />
                </div>
            </div>
        </div>
    </div>
}

export default Results;