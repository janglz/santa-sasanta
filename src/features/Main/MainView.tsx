import React, { useEffect } from "react";
import Result from "./components/Result";
import IsWaiting from "./components/IsWaiting";
import Spinner from "../../common/Spinner";
import Error from "../../common/Error";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const MainView = ({
  data,
  isFetching,
  error,
  onSetWish,
  onSetName,
  wish,
  name,
  onSubmit,
}) => {
  return isFetching ? (
    <Spinner />
  ) : (
    <div>
      {data?.groupLink && (
        <Link to={data?.groupLink}>
          вот ссылка на вашу личную санту сасанту, не потеряйте!
        </Link>
      )}
      {data?.status?.finished && <Result recipient={data.recipient} />}
      {data?.status?.inProgress && (
        <IsWaiting
          onSetWish={onSetWish}
          onSetName={onSetName}
          wish={wish}
          name={name}
          onSubmit={onSubmit}
          isFetching={isFetching}
          error={error}
        />
      )}
      {error && <Error error={error?.message} />}
    </div>
  );
};

export default MainView;
