import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Main.css";

import Home from "../pages/Home";
import DetailView from "../pages/DetailView";
import Conjugation from "../pages/Conjugation";
import WordForm from "../pages/WordForm";
import Categories from "../pages/Categories";

const Main = () => (
  <div className="Main">
    <Switch>
      <Route path="/conjugation">
        <Conjugation />
      </Route>
      <Route path="/new-word">
        <WordForm />
      </Route>
      <Route path="/categories">
        <Categories />
      </Route>
      <Route path="/details/:id">
        <DetailView />
      </Route>
      <Route path="/edit/:id">
        <WordForm edit />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default Main;
