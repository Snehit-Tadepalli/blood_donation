import React from "react";
// import styles from "./App.module.css";
import useFetch from "../../customHooks/useFetch";
import generateContent from "../../utils/generateContent";
import { GlobalContext } from "../../context/GlobalContext";

const fetchOptions = { method: "GET" };

const App = () => {
  const globalContext = React.useContext(GlobalContext);
  const url = globalContext.initialStateVariable.rootUrl;

  const { isLoading, apiData, apiError } = useFetch(url, fetchOptions);

  let content = generateContent(isLoading, apiData, apiError);

  return <h1>{content}</h1>;
};

export default App;
