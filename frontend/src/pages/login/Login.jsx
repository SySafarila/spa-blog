import React, { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../Contexts";
import Form from "./Form";
import axios from "axios";
import config from "../../config.json";
import UnauthMiddleware from "../../middleware/UnauthMiddleware";

const Login = () => {
  axios.defaults.withCredentials = true;
  const [auth] = useContext(AuthContext);
  useEffect(() => {
    console.log(auth);
    console.log(config.apiUrl);
  });

  const getUser = async () => {
    axios.get(`${config.apiUrl}/user`).then((res) => {
      console.log(res);
    });
  };
  return (
    <UnauthMiddleware>
      <div>
        <Navbar />
        <div className="flex justify-center h-screen items-center px-4 lg:px-0 bg-dim">
          <div className="bg-lightdim max-w-sm overflow-hidden rounded shadow-lg">
            <img
              className="w-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <Form />
            </div>
            <div className="px-6 pt-4 pb-2">
              {/* <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                onClick={() => getUser()}
              >
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </UnauthMiddleware>
  );
};

export default Login;
