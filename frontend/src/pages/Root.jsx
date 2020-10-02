import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Root;
