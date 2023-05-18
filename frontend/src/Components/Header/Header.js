import React from "react";

import useFetch from "../../customHooks/useFetch";
import generateContent from "../../utils/generateContent";
import { GlobalContext } from "../../context/GlobalContext";

import styles from "./Header.module.css";

const fetchOptions = { method: "GET" };

const Header = () => {
  const [data, setData] = React.useState(null);
  const globalContext = React.useContext(GlobalContext);
  const url = `${globalContext.initialStateVariable.rootUrl}/header`;

  const { isLoading, apiData, apiError } = useFetch(url, fetchOptions);

  React.useEffect(() => {
    const headerContent = generateContent(isLoading, apiData, apiError);
    setData(() => headerContent);
  }, [isLoading, apiData, apiError]);

  if (data === null || data === undefined) {
    return <header className={styles["header"]}>Error</header>;
  }

  if (data === "Loading...") {
    return <header className={styles["header"]}>{data}</header>;
  }

  console.log(data);

  const { heading, subHeadingQuote } = data;
  return (
    <header className={styles["header"]}>
      <h1 className={styles["header__heading"]}>{heading}</h1>
      <p className={styles["header__subHeading"]}>
        <b>Quote:</b> {subHeadingQuote}
      </p>
    </header>
  );
};

export default Header;
