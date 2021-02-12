import React from "react";
import { Route, Switch } from "react-router-dom";
import Character from "./pages/Character";
import Home from "./pages/Home";

function Routes() {

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Character} />
    </Switch>
  )
}

export default Routes;