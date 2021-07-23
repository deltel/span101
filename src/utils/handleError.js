const handleError = async (response) => {
  const responseJson = await response.json();
  console.log(responseJson);
};

export default handleError;
