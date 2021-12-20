import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Spinner from "../../common/Spinner";
import Error from "../../common/Error";
import { useService } from "../../hooks";
import service from "../../service";
import styles from "./styles.module.scss";

const CreateGroup = () => {
  const { request, data, isFetching, error } = useService(service.createGroup);
  const [count, setCount] = useState(2);
  const handleSetCount = (e) => setCount(e.target.value.replace(/\D/, ""));
  const navigate = useNavigate();
  const handleCreateNewGroup = (e) => {
    e.preventDefault();
    request({ count });
  };

  useEffect(() => {
    if (data) {
      navigate(data?.groupLink || "/");
    }
  }, [data]);
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.inputWrapper}>
        {isFetching && <Spinner />}
        <h2>Ура! С наступающим</h2>
        <form onSubmit={handleCreateNewGroup} className={styles.form}>
          введите количество участников санты-сасанты, кратное двум:
          <input
            className={styles.inputText}
            type="text"
            id="count"
            value={count}
            onChange={handleSetCount}
            required
          />
          <button
            className={styles.submitButton}
            type="submit"
            id="submit"
            onClick={handleCreateNewGroup}
          >
            Создать новую случайную санту-сасанту!
          </button>
          {error && <Error error={error?.message} />}
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
