import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import { Option } from '../option'
import { QuestionData, Quizdata } from '@/atoms/quiz_atoms'
import { useRecoilState } from 'recoil'
import { PrimaryButton } from '../primary_button'
import { useRouter } from 'next/router'
import { submitAnswer } from '@/api/apiUtils'

export const QuestionContainer = ({question_id}) => {
  const router = useRouter();
  const startTime = new Date();
  const [quizData] = useRecoilState(Quizdata);
  const [questionData, setQuestionData] = useRecoilState(QuestionData);
  console.log(questionData,"sd")
  const [selectedChoice, setSelectedChoice] = useState([])
  const {
    question_text = '',
    question_image_url = "",
    choices = []
  } = questionData || {}

  const handleOptionSelection = (choiceId, isSelected) => {
      if(isSelected){
        setSelectedChoice(prev => [...prev,choiceId])
      }
      else{
        const choiceArr = [...selectedChoice];
        const index = [...selectedChoice].indexOf(choiceId);
        if (index > -1) { 
          choiceArr.splice(index, 1); 
          setSelectedChoice(prev => choiceArr)
        }
      }
  }

 
  const handleNext = async() => {
      if(quizData.total_questions == question_id){
        router.push(`/results/`)
        return
      }
      const endTime = new Date();
      const timeTakenInSeconds = Math.round((endTime - startTime) / 1000);
      const data =  {
        "selected_choices": selectedChoice,
        "time_taken": timeTakenInSeconds,
        "question_id": question_id,
        "quiz_id": quizData?.quiz_id
      }
      const res = await submitAnswer(data)
      console.log(res)
      router.push(`/question/${+question_id+1}/`)

  }

  useEffect(()=>{
    console.log(selectedChoice)
  },[selectedChoice])

  return (
    <div className={styles.container}>
        <div className={styles.separator}></div>
        <div className={styles.questionText}>{question_text}</div>
        {question_image_url && (
          <div className={styles.imageContainer}>
            <Image
              src={question_image_url}
              alt="question-image"
              className="dark:invert"
              width={250}
              height={200}
              style={{borderRadius: '12px'}}
            />
          </div>
        )}
        {!!choices.length && choices.map(((item,index) => 
          <div key={index} className={styles.options}>
            <Option optionData={item} handleOptionSelection={handleOptionSelection} />
          </div>
        
        ))}
        <div className={styles.btnContainer}>
            <PrimaryButton handleBtnClick={handleNext} btnStyles={{width: '360px'}} label="Next" />
        </div>
    </div>
  )
}

