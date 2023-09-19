import React, { useState } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

export const Option = ({ optionData, handleOptionSelection}) => {
    console.log(optionData)
    const [checked, setChecked] = useState(false)

    const handleOptionClick = () => {
        if(checked){
            handleOptionSelection(optionData.choice_id, false)
        }
        else{
            handleOptionSelection(optionData.choice_id, true) 
        }
        
        setChecked(prev => !prev)
    }
    

    return <div onClick={handleOptionClick} className={`${styles.optionContainer } ${checked && styles.checkedStyles}`}>
        <div className={styles.flex}>
            <div>
                <Image
                    src={checked?'/checked_radio.svg':'/unchecked_radio.svg'}
                    width={24}
                    height={24}
                    alt=''
                />
            </div>
            <div className={styles.optionText}>
                {optionData.choice_text}
            </div>
        </div>
    </div>;
  }
  