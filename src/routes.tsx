import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./features/AuthPage";
import CreateGroup from "./features/CreateGroup";
import Main from "./features/Main";

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Routes>
        <Route path={"/"} element={<CreateGroup />} />
        <Route path={"/:groupId"} element={<Main />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path={"/"} element={<AuthPage />} />
    </Routes>
  );
};
