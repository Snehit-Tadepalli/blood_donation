import React from "react";

const useFetch = (url, options) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [apiData, setApiData] = React.useState(null);
  const [apiError, setApiError] = React.useState(null);

  React.useEffect(() => {
    setIsLoading(true);

    const fetchData = async (url, options) => {
      try {
        const response = await fetch(url, options);
        const { data } = await response.json();
        setApiData(() => data);
        setIsLoading(false);
      } catch (error) {
        setApiError(() => error);
        setIsLoading(false);
      }
    };

    fetchData(url, options);
  }, [url, options]);

  return { isLoading, apiData, apiError };
};

export default useFetch;
