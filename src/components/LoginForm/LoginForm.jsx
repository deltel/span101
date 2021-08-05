import React from "react";

import "./LoginForm.css";

const LoginForm = ({ handleSubmit, handleChange, formState }) => (
  <div className="LoginForm">
    <div className="prompt">
      <h3>Hola!</h3>
      <p>You must sign in to view this page ...</p>
    </div>
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
            value={formState.username}
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={formState.password}
            required
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
);

export default LoginForm;
