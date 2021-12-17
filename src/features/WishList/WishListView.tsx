import React, { useEffect } from "react";
import styles from "./styles.module.scss";

const WishListView = ({ onSubmit }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.inputText}
        type="text"
        id="recipientName"
        placeholder="press f"
      />
    </div>
  );
};

export default WishListView;
