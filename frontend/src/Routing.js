import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Contexts } from "./Contexts";
import NotFound from "./pages/errors/NotFound";
import Loading from "./pages/loading/Loading";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Root from "./pages/Root";

const Routing = () => {
  return (
    <Contexts>
      <BrowserRouter>
        <Switch>
          <Route path="/loading" component={Loading} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/" component={Root} exact />
          <Route path="*" component={NotFound} exact />
        </Switch>
      </BrowserRouter>
    </Contexts>
  );
};

export default Routing;
