import React from "react";
import styles from "./styles.module.scss";

const Spinner = () => (
  <div className={styles.overlay}>
    <div className={styles.loader}>Идет загрузка...</div>
  </div>
);

export default Spinner;
