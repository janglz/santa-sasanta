import React, { useEffect } from "react";
import Result from "./components/Result";
import IsWaiting from "./components/IsWaiting";
import Spinner from "../../common/Spinner";
import Error from "../../common/Error";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const ResultsView = ({ data, isFetching, error }) => {
  return isFetching ? (
    <Spinner />
  ) : (
    <div>
      <Link to={data.groupLink}>
        вот ссылка на вашу личную санту сасанту, не потеряйте!
      </Link>
      {data.status.finished && <Result recipient={data.recipient} />}
      {data.status.inProgress && <IsWaiting />}
      {error && <Error error={error?.message} />}
    </div>
  );
};

export default ResultsView;
