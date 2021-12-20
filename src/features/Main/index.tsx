import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useService } from "../../hooks";
import service from "../../service";
import MainView from "./MainView";

const Main = () => {
  const location = useLocation();
  const groupId = (location && location.pathname) || "/";
  const { request, data, isFetching, error } = useService(service.getResult);
  const {
    request: requestUpdate,
    data: dataUpdate,
    isFetching: isFetchingUpdate,
    error: errorUpdate,
  } = useService(service.updateUser);

  const [wish, setWish] = useState("");
  const [name, setName] = useState("");
  const handleSubmitUpdate = () => {
    requestUpdate({});
  };

  useEffect(() => {
    request({
      params: {
        groupId,
      },
    });
  }, []);

  useEffect(() => {
    if (data) {
      setName(data.name);
    }
  }, [data]);
  return (
    <MainView
      data={data}
      isFetching={isFetching || isFetchingUpdate}
      error={error}
      onSubmit={handleSubmitUpdate}
      onSetWish={setWish}
      onSetName={setName}
      wish={wish}
      name={name}
    />
  );
};

export default Main;
