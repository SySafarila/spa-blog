import React from "react";
import Navbar from "../../components/Navbar";

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
            <form>
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
