import React, { useState, useContext } from "react";
import { useService, useAuth } from "../../hooks";
import RegistrationView from "./RegistrationView";
import LoginView from "./LoginView";
import { AuthContext } from "./../../context/AuthContext";
import Error from "../../common/Error";
import service from "../../service";
import Spinner from "../../common/Spinner";
import styles from "./styles.module.scss";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [form, setForm] = useState({ password: "", name: "", email: "" });
  const [view, setView] = useState("registration");
  const {
    request: authRequest,
    data: authData,
    isFetching: isAuthFetching,
    error: authError,
  } = useService(service.auth);
  const {
    request: registerRequest,
    data: registerData,
    isFetching: isRegisterFetching,
    error: registerError,
  } = useService(service.register);

  const handleFormChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleRegistrationSubmit = () => {
    registerRequest(form);
  };

  const handleLoginSubmit = () => {
    authRequest(form);
    auth.login(authData.token, authData.userId);
  };
  return (
    <div className={styles.pageWrapper}>
      {(isRegisterFetching || isAuthFetching) && <Spinner />}
      <button
        className={styles.selectPage}
        onClick={() => setView("registration")}
      >
        регистрация
      </button>
      <button className={styles.selectPage} onClick={() => setView("login")}>
        вход
      </button>
      {view === "registration" && (
        <RegistrationView
          form={form}
          onFormChange={handleFormChange}
          onSubmit={handleRegistrationSubmit}
        />
      )}
      {view === "login" && (
        <LoginView
          form={form}
          onFormChange={handleFormChange}
          onSubmit={handleLoginSubmit}
        />
      )}
      {registerError && <Error error={registerError?.message} />}
      {registerData && <div>вы зарегистрированы!</div>}
    </div>
  );
};

export default Auth;
