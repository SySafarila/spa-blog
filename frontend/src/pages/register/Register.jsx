import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../components/Navbar";
import axios from "axios";
import config from "../../config.json";

const Register = () => {
  axios.defaults.withCredentials = true;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`${config.apiUrl}/register`, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-3xl text-center text-gray-300">Register</h1>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-500 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  className="appearance-none bg-dim-form focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded shadow text-gray-300 w-full"
                  name="name"
                  autoComplete="name"
                  ref={register({ required: true })}
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-500 text-sm">
                  Username
                </label>
                <input
                  type="text"
                  className="appearance-none bg-dim-form focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded shadow text-gray-300 w-full"
                  name="username"
                  autoComplete="username"
                  ref={register({ required: true })}
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-500 text-sm">
                  Email
                </label>
                <input
                  type="text"
                  className="appearance-none bg-dim-form focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded shadow text-gray-300 w-full"
                  name="email"
                  autoComplete="email"
                  ref={register({ required: true })}
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-gray-500 text-sm">
                  Password
                </label>
                <input
                  type="text"
                  className="appearance-none bg-dim-form focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded shadow text-gray-300 w-full"
                  name="password"
                  autoComplete="password"
                  ref={register({ required: true, minLength: 8 })}
                />
              </div>
              <button
                className="bg-blue-600 focus:bg-blue-700 font-semibold hover:bg-blue-700 mb-3 px-2 py-1 rounded text-white"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
