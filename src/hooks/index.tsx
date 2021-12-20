// import axios from "axios";
import { useState, useCallback, useEffect } from "react";

export const useService = (service) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const request = useCallback(
    async (params) => {
      setIsFetching(true);
      setError(null);

      try {
        const response = await service(params);

        setData(response);
        setIsFetching(false);
      } catch (thrown) {
        setError(thrown);
      }
    },
    [service]
  );

  useEffect(() => {
    if (data || error) {
      setIsFetching(false);
    }
  }, [data, error]);

  return {
    request,

    isFetching,
    data,
    error,
  };
};

export const useAuth = (service) => {
  const [isFetching, setIsFetching] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const request = useCallback(
    async (params) => {
      setIsFetching(true);
      setError(null);

      try {
        const response = await service(params);

        setData(response);
        setIsFetching(false);
      } catch (thrown) {
        setError(thrown);
      }
    },
    [service]
  );

  useEffect(() => {
    if (data || error) {
      setIsFetching(false);
    }
  }, [data, error]);

  return {
    request,

    isFetching,
    data,
    error,
  };
};
