import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import Root from "./pages/Root";

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/" component={Root} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
