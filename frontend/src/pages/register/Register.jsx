import React from "react";
import Navbar from "../../components/Navbar";
import Form from "./Form";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center h-screen items-center px-4 lg:px-0 bg-dim my-10 lg:my-0">
        <div className="bg-lightdim max-w-sm overflow-hidden rounded shadow-lg gb-white">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
