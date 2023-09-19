import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

export const ResultCard = ({ resultType, count }) => {
  return (
    <div
      className={`${styles.container} ${
        resultType == "Correct" ? styles.correctStyles : styles.incorrectStyles
      }`}
    >
      <div>
        <Image
          src={resultType == "Correct" ? "/green_dot.svg" : "red_dot.svg"}
          width={10}
          height={10}
          alt=""
        />
      </div>
      <div className={styles.countText}>
        {count} {resultType}
      </div>
    </div>
  );
};
