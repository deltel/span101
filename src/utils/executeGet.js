const executeRequest = async (endpoint) => {
  const response = await fetch(endpoint);
  const responseJson = await response.json();
  return responseJson;
};

export default executeRequest;
