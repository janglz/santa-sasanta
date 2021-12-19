import React, { useEffect } from "react";
import Result from "./components/Result";
import IsWaiting from "./components/IsWaiting";
import Spinner from "../../common/Spinner";
import styles from "./styles.module.scss";

const ResultsView = ({ user, status, isFetching }) => {
  return isFetching ? (
    <Spinner />
  ) : (
    <div>
      {status.finished && <Result recipient={user.recipient} />}
      {status.inProgress && <IsWaiting />}
    </div>
  );
};

export default ResultsView;
