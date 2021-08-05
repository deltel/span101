import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import LoginForm from "../components/LoginForm/LoginForm";
import { endpoint, httpCode } from "../constants/constants";
import handleError from "../utils/handleError";

const Login = ({ handleAuth }) => {
  const { push } = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const login = async (e) => {
    e.preventDefault();

    const response = await fetch(`${endpoint.base}/auth/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await response.json();

    if (response.status === httpCode.OK) {
      localStorage.setItem("token", responseJson.token);
      handleAuth(true);
      push("/");
    } else handleError(response); // implement feedback
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <LoginForm
      handleSubmit={login}
      handleChange={handleChange}
      formState={formData}
    />
  );
};

export default Login;
