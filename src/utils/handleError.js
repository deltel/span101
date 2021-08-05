import { httpCode } from "../constants/constants";

const handleError = async (response) => {
  handleInvalidToken(response.status);

  const responseJson = await response.json();
  return responseJson.error;
  // console.log(responseJson);
};

const handleInvalidToken = (status) => {
  if (
    status === httpCode.UNAUTHORIZED ||
    status === httpCode.INTERNAL_SERVER_ERROR
  ) {
    if (localStorage.getItem("token")) localStorage.removeItem("token");
  }
};

export default handleError;
