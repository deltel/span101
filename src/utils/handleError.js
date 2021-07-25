const handleError = async (response) => {
  const responseJson = await response.json();
  return responseJson.error;
  // console.log(responseJson);
};

export default handleError;
