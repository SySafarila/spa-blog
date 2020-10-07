import React from "react";
import Navbar from "../../components/Navbar";
import Form from "./Form";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
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
