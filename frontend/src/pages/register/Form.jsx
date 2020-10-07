import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import config from "../../config.json";
import { useState } from "react";

const Form = () => {
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState(false);

  axios.defaults.withCredentials = true;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`${config.apiUrl}/register`, data)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === false) {
          setErr(res.data.message);
          setSuccess(false);
        } else if (res.data.status === true) {
          setErr(false);
          setSuccess(res.data.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl text-center text-gray-300">Register</h1>
      {err === false ? (
        ""
      ) : (
        <p className="text-center">
          <small className="text-red-800">{err}</small>
        </p>
      )}
      {success === true ? (
        <p className="text-center">
          <small className="text-yellow-500">You can login right now</small>
        </p>
      ) : (
        ""
      )}
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
  );
};

export default Form;
