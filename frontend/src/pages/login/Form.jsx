import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../Contexts";
import config from "../../config.json";

const Form = () => {
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
      <h1 className="text-3xl text-center">Login</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ref={register}
          name="email"
          autoComplete="email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ref={register}
          name="password"
          autoComplete="current-password"
        />
      </div>
      <button
        className="bg-blue-400 text-white py-1 px-2 rounded focus:bg-blue-500 hover:bg-blue-500 mb-3"
        type="submit"
      >
        Login
      </button>
      <Link to="/register" className="block hover:text-blue-400 text-center">
        Register
      </Link>
    </form>
  );
};

export default Form;
