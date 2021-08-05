import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Main.css";

import Home from "../pages/Home";
import DetailView from "../pages/DetailView";
import Conjugation from "../pages/Conjugation";
import WordForm from "../pages/WordForm";
import Categories from "../pages/Categories";
import Login from "../pages/Login";
import GuardedRoute from "./GuardedRoute/GuardedRoute";

const Main = ({ handleAuth, isAuth }) => (
  <div className="Main">
    <Switch>
      {!isAuth && (
        <Route path="/login">
          <Login handleAuth={handleAuth} />
        </Route>
      )}
      <Route path="/conjugation">
        <Conjugation />
      </Route>
      <GuardedRoute path="/new-word" component={WordForm} isAuth={isAuth} />
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="/details/:id">
        <DetailView />
      </Route>
      <GuardedRoute
        path="/edit/:id"
        component={WordForm}
        isAuth={isAuth}
        edit
      />
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default Main;
