import React, { useState } from "react";
import styles from "./styles.module.scss";

const Recipient = ({ recipient }) => {
  return (
    <div className={styles.container}>
      <div>
        вы дарите подарок вот кому:
        {recipient.name}
        {recipient.image}
      </div>
      <div>
        а вот чего он хотел бы:
        {recipient.wish}
      </div>
    </div>
  );
};

export default Recipient;
