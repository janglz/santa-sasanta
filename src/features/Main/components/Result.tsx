import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Recipient = ({ recipient }) => {
  return (
    <div className={styles.container}>
      <div>
        вы дарите подарок вот кому:
        {recipient.name}
      </div>
      <div>
        а вот чего он хотел бы:
        {recipient.wish}
      </div>
      <h2>Ура! С наступающим</h2>
      <Link to="/">вернуться на главную</Link>
    </div>
  );
};

export default Recipient;
