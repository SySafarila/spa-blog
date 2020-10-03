import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import config from "./config.json";

export const AuthContext = createContext();

export const Contexts = (props) => {
  const [auth, setAuth] = useState(undefined);
  useEffect(() => {
    const checkAuth = async () => {
      await axios
        .get(`${config.apiUrl}/auth/check`)
        .then((res) => {
          setAuth(res.data.status);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    checkAuth();
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};
