import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Signup, Login } from "./pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* Homepage */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* Signup */}
        <Route path="/signup">
          <Signup />
        </Route>

        {/* Login */}
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
