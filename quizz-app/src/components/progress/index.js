import React from "react";
import styles from "./index.module.scss";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

export const RoundProgress = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className={styles.progressContainer}> 
      <CircularProgressbarWithChildren
        styles={buildStyles({
          pathColor: "#44B77B",
        })}
        strokeWidth={8}
        value={percentage}
      >
        <div className={styles.flex}>
            <div className={styles.currentText}>{current}</div>
            <div className={styles.totalText}>/{total}</div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};
