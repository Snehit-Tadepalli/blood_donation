const generateContent = (isLoading, apiData, apiError) => {
  if (isLoading) {
    return "Loading...";
  } else if (!isLoading && apiData !== null) {
    return apiData;
  } else if (!isLoading && apiError !== null) {
    return apiError;
  }
};

export default generateContent;
