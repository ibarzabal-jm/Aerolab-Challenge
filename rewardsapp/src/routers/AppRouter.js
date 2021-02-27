import React from "react";
import {
  
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../pages/Home";
import Redeems from "../pages/Redeems";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/redeems" component={Redeems} />
      <Route path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  );
};

export default AppRouter;
