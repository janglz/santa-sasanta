import React, { useEffect } from "react";
import styles from "./styles.module.scss";

const RegistrationView = ({ form, onFormChange, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <div className={styles.inputWrapper}>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          className={styles.inputText}
          type="text"
          id="name"
          placeholder="введите ваше имя"
          value={form.name}
          onChange={onFormChange}
          required
        />
        <input
          className={styles.inputText}
          type="text"
          id="email"
          value={form.email}
          placeholder="введите емейл"
          onChange={onFormChange}
          required
        />
        <input
          className={styles.inputText}
          type="password"
          id="password"
          placeholder="password"
          value={form.password}
          onChange={onFormChange}
          required
        />
        <button
          className={styles.submitButton}
          type="submit"
          id="submit"
          onClick={handleSubmit}
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </button>
      </form>
    </div>
  );
};

export default RegistrationView;
