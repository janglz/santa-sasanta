import React from "react";
import styles from "./styles.module.scss";

const isWaiting = () => {
  return (
    <div className={styles.container}>
      Не все участники зарегистрировалиись! Ожидайте или напомните им об этом
    </div>
  );
};

export default isWaiting;
