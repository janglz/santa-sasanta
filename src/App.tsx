import React from "react";
import styles from "./theme/main.module.scss";
import { BrowserRouter, useLocation } from "react-router-dom";
import { useRoutes } from "./routes";

const App = () => {
  const location = useLocation();
  const groupId = location.pathname;
  const routes = useRoutes(true, groupId);
  return <BrowserRouter>{routes}</BrowserRouter>;
};

export default App;
