import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts";
import axios from "axios";
import config from "../config.json";
import { Redirect } from "react-router-dom";

const UnauthMiddleware = (props) => {
  axios.defaults.withCredentials = true;
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    const check = async () => {
      await axios
        .get(`${config.apiUrl}/auth/check`)
        .then((res) => {
          setAuth(res.data.status);
          console.log(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    check();
  }, [setAuth, auth]);

  if (auth === undefined) {
    return <h1>check</h1>;
  }
  if (auth === false) {
    return <div>{props.children}</div>;
  }
  if (auth === true) {
    return <Redirect to="/" />;
  }
};

export default UnauthMiddleware;
