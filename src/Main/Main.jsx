import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Main.css";

import Home from "../pages/Home";
import NewWord from "../pages/NewWord";
import DetailView from "../pages/DetailView";
import Conjugation from "../pages/Conjugation";

const Main = () => (
  <div className="Main">
    <Switch>
      <Route path="/conjugation">
        <Conjugation />
      </Route>
      <Route path="/new-word">
        <NewWord />
      </Route>
      <Route path="/details/:id">
        <DetailView />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default Main;
