import React from "react";
import { Link } from "react-router-dom";
import AuthMiddleware from "../middleware/AuthMiddleware";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <AuthMiddleware>
      <div>
        <Navbar />
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </AuthMiddleware>
  );
};

export default Root;
