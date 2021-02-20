import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Home from "../pages/Home";
import Footer from "../components/UI/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
