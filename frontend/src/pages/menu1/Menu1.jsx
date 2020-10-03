import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import config from "../../config.json";
import AuthMiddleware from "../../middleware/AuthMiddleware";

const Menu1 = () => {
  const [name, setName] = useState("loading...");
  useEffect(() => {
    const getUser = async () => {
      await axios
        .get(`${config.apiUrl}/user`)
        .then((res) => {
          console.log(res);
          setName(res.data.name);
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
      <h3>{name}</h3>
    </AuthMiddleware>
  );
};

export default Menu1;
