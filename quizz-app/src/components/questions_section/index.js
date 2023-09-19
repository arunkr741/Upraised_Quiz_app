import React from 'react'
import styles from './index.module.scss'

export const QuestionContainer = (props) => {
  const {
    question = 'How do you judge what should be added in the next version of the app?'
  } = props
  return (
    <div className={styles.container}>
        <div className={styles.questionText}>{question}</div>
    </div>
  )
}

