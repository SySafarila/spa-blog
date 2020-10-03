import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Contexts";
import "./Navbar.css";
import axios from "axios";
import config from "../config.json";

const Navbar = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const logOut = async () => {
    await axios.post(`${config.apiUrl}/logout`).then((res) => {
      console.log(res);
      if (res.data.status === true) {
        setAuth(!auth);
      }
    });
  };
  return (
    <nav className="bg-gray-900">
      <div className="flex justify-between">
        <ul className="flex bg-gray-900 p-2 text-gray-300">
          <li className="px-1">
            <NavLink
              exact
              to="/"
              activeClassName="text-blue-400"
              className="my-logo text-blue-400"
            >
              SySafarila
            </NavLink>
          </li>
        </ul>
        {auth === true ? (
          <ul className="flex bg-gray-900 p-2 text-gray-300 justify-end">
            <li className="px-1">
              <NavLink
                exact
                to="/menu-1"
                activeClassName="text-blue-400 hover:text-blue-400"
              >
                Menu 1
              </NavLink>
            </li>
            <li
              className="px-1 hover:text-blue-400"
              onClick={() => logOut()}
              style={{ cursor: "pointer" }}
            >
              Logout
            </li>
          </ul>
        ) : (
          <ul className="flex bg-gray-900 p-2 text-gray-300 justify-end">
            <li className="px-1">
              <NavLink exact to="/login" activeClassName="text-blue-400">
                Login
              </NavLink>
            </li>
            <li className="px-1">
              <NavLink exact to="/register" activeClassName="text-blue-400">
                Register
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
