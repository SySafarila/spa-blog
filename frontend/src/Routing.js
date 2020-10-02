import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Contexts } from "./Contexts";
import Login from "./pages/login/Login";
import Root from "./pages/Root";

const Routing = () => {
  return (
    <Contexts>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/" component={Root} exact />
        </Switch>
      </BrowserRouter>
    </Contexts>
  );
};

export default Routing;
