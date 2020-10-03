import React from "react";
import axios from "axios";
import { useEffect } from "react";
import config from "../../config.json";
import AuthMiddleware from "../../middleware/AuthMiddleware";

const Menu1 = () => {
  useEffect(() => {
    const getUser = async () => {
      await axios
        .get(`${config.apiUrl}/user`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return (
    <AuthMiddleware>
      <h1>Menu 1</h1>
    </AuthMiddleware>
  );
};

export default Menu1;
