import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts";
import axios from "axios";
import config from "../config.json";

const AuthMiddleware = (props) => {
  axios.defaults.withCredentials = true;
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    const check = async () => {
      await axios
        .get(`${config.apiUrl}/auth/check`)
        .then((res) => {
          setAuth(res.data.status);
          console.log(res.data.message);
          if (auth === false) {
            setTimeout(() => {
              window.location.replace("/login");
            }, 3000);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    check();
  }, [setAuth, auth]);

  if (auth === undefined) {
    return <h1>checking</h1>;
  } else if (auth === false) {
    return <h1>Redirecting to Login page in few second</h1>;
  } else if (auth === true) {
    return <div>{props.children}</div>;
  }
};

export default AuthMiddleware;