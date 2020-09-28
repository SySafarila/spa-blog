import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/" exact>
          <h1>Root</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
