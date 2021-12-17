import React from "react";
import styles from "./styles.module.scss";

const isWaiting = ({ unregisteredUsers }) => {
  return (
    <div className={styles.container}>
      Не все участники зарегистрировалиись! Напомни, пожалуйста им об этом:
      {unregisteredUsers}
    </div>
  );
};

export default isWaiting;
