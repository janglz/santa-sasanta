import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./features/AuthPage";
import Results from "./features/Results";

export const useRoutes = (isAuth, groupId) => {
  if (isAuth) {
    return (
      <Routes>
        <Route path={groupId} element={<Results groupId={groupId} />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path={"/"} element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
