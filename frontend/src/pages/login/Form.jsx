import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../Contexts";
import config from "../../config.json";
import { useState } from "react";

const Form = () => {
  const [message, setMessage] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);

  axios.defaults.withCredentials = true;

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await axios.get(`${config.sanctumUrl}/sanctum/csrf-cookie`).then((res) => {
      console.log(res);
      axios
        .post(`${config.apiUrl}/login`, data)
        .then((res) => {
          console.log(res);
          setAuth(res.data.status);
          if (res.data.status === false) {
            setMessage(res.data.message);
          }
          axios.get(`${config.apiUrl}/auth/check`).then((res) => {
            console.log(res.data.message);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl text-center text-gray-300">Login</h1>
      {message === false ? (
        ""
      ) : (
        <p className="text-center">
          <small className="text-red-800">{message}</small>
        </p>
      )}
      <div className="mb-4">
        <label className="block font-bold mb-2 text-gray-500 text-sm">
          Email
        </label>
        <input
          type="text"
          className="appearance-none bg-dim-form focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded shadow text-gray-300 w-full"
          ref={register}
          name="email"
          autoComplete="email"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2 text-gray-500 text-sm">
          Password
        </label>
        <input
          type="password"
          className="appearance-none bg-dim-form focus:outline-none focus:shadow-outline leading-tight px-3 py-2 rounded shadow text-gray-300 w-full"
          ref={register}
          name="password"
          autoComplete="current-password"
        />
      </div>
      <button
        className="bg-blue-600 focus:bg-blue-700 font-semibold hover:bg-blue-700 mb-3 px-2 py-1 rounded text-white"
        type="submit"
      >
        Login
      </button>
      <Link
        to="/register"
        className="block hover:text-blue-400 text-center text-gray-300"
      >
        Register
      </Link>
    </form>
  );
};

export default Form;
