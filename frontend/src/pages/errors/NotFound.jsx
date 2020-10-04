import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="lobster lg:text-4xl lobster text-3xl text-gray-700 flex flex-col">
        <h1 className="text-center">404</h1>
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
