import React from 'react'
import styles from './index.module.scss'

export const PrimaryButton = (props) => {
    const {
        btnStyles = {width: '300px'},
        label = 'Start',
        handleBtnClick = () => {},
    } = props;

    return (
        <div onClick={handleBtnClick} style={btnStyles} className={styles.container}>
            <span className={styles.buttonLabel}>{label}</span>
        </div>
    )
}
