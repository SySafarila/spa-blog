import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = (props) => {
  return (
    <div className="bg-lightdim lg:mx-0 mx-2 p-5 rounded-lg flex items-center">
      <div className="w-3/4">
        <Link to={props.linkTo}>
          <h1 className="hover:text-gray-400 text-2xl text-gray-300">
            {props.title}
          </h1>
        </Link>
        <p className="text-gray-600">{props.body}</p>
      </div>
      <div className="ml-3 w-1/4">
        <img src={props.image} alt={props.image} className="mx-auto" />
      </div>
    </div>
  );
};

export default ProfileCard;
