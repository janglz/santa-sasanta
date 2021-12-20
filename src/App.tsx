import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks";

const App = () => {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <BrowserRouter>{routes}</BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
