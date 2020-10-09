import React from "react";
import "./Loading.css";
import LoadingAnimate from "./Loading.svg";

const Loading = (props) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="lobster lg:text-4xl lobster text-3xl text-gray-700">
        {/* {props.message ? props.message : "Loading..."} */}
        <img src={LoadingAnimate} alt="Loading..." />
      </div>
    </div>
  );
};

export default Loading;
