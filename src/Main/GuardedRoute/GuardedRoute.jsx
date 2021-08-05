import React from "react";
import { Redirect, Route } from "react-router-dom";

const GuardedRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? (
        <Component {...props} edit={rest.edit} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default GuardedRoute;
