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

const storageName = "userData";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
      })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.userId);
    }
    setReady(true);
  }, [login]);

  return { login, logout, token, userId, ready };
};
