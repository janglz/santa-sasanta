import React from "react";
import styles from "./theme/main.module.scss";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./routes";

const App = () => {
  const routes = useRoutes(false, "");
  return <BrowserRouter>{routes}</BrowserRouter>;
};

export default App;
