const generateContent = (isLoading, apiData, apiError) => {
  if (isLoading) {
    return "Loading...";
  } else if (!isLoading && apiData !== null) {
    return apiData.message;
  } else if (!isLoading && apiError !== null) {
    return apiError.message;
  }
};

export default generateContent;
