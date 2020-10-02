import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="flex justify-between">
        <ul className="flex bg-gray-900 p-2 text-gray-300">
          {/* <li className="px-1">
            <NavLink exact to="/login" activeClassName="text-blue-400">
              Login
            </NavLink>
          </li> */}
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
      </div>
    </nav>
  );
};

export default Navbar;
