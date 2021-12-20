import React from "react";
import styles from "./styles.module.scss";

const Error = ({ error }) => <div className={styles.error}>{error}</div>;

export default Error;
