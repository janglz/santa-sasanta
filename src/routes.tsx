import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./features/AuthPage";
import CreateGroup from "./features/CreateGroup";
import Results from "./features/Main";

export const useRoutes = (isAuth, groupId) => {
  if (isAuth) {
    return (
      <Routes>
        <Route path={"/"} element={<CreateGroup />} />
        <Route path={groupId} element={<Results groupId={groupId} />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path={"/"} element={<AuthPage />} />
    </Routes>
  );
};
