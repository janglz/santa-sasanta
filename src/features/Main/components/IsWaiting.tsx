import React from "react";
import Spinner from "../../../common/Spinner";
import Error from "../../../common/Error";
import styles from "./styles.module.scss";

const isWaiting = ({
  isFetching,
  error,
  onSetWish,
  onSetName,
  wish,
  name,
  onSubmit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.inputWrapper}>
        {isFetching && <Spinner />}
        <h2>Ура! С наступающим</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          вы можете изменить свое имя:
          <input
            className={styles.inputText}
            type="text"
            id="name"
            value={name}
            onChange={onSetName}
          />
          и оставить пожелания для санты-САСАНТЫ:
          <input
            className={styles.inputText}
            type="text"
            id="wish"
            value={wish}
            onChange={onSetWish}
          />
          <button
            className={styles.submitButton}
            type="submit"
            id="submit"
            onClick={handleSubmit}
          >
            Создать новую случайную санту-сасанту!
          </button>
          {error && <Error error={error?.message} />}
        </form>
      </div>
      Не все участники зарегистрировалиись! Ожидайте или напомните им об этом
    </div>
  );
};

export default isWaiting;
