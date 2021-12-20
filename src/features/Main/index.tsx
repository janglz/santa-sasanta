import React, { useEffect, useState } from "react";
import { useService } from "../../hooks";
import service from "../../service";
import MainView from "./MainView";

const Results = ({ groupId }) => {
  const { request, data, isFetching, error } = useService(service.getResult);
  const handleWishListSubmit = () => {};

  useEffect(() => {
    request({
      params: {
        groupId,
      },
    });
  }, []);
  return <MainView data={data} isFetching={isFetching} error={error} />;
};

export default Results;
