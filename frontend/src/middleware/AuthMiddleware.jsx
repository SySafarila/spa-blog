import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Contexts";
import axios from "axios";
import config from "../config.json";
import Loading from "../pages/loading/Loading";

const AuthMiddleware = (props) => {
  axios.defaults.withCredentials = true;
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    const check = async () => {
      await axios
        .get(`${config.apiUrl}/auth/check`)
        .then((res) => {
          setAuth(res.data.status);
          // console.log(res.data.message);
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
    return <Loading />;
  } else if (auth === false) {
    return <Loading message="Redirecting..." />;
  } else if (auth === true) {
    return <div>{props.children}</div>;
  }
};

export default AuthMiddleware;
