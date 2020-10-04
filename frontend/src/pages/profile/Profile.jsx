import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import config from "../../config.json";
import AuthMiddleware from "../../middleware/AuthMiddleware";
import Navbar from "../../components/Navbar";

const Profile = () => {
  const [name, setName] = useState("loading...");
  useEffect(() => {
    const getUser = async () => {
      await axios
        .get(`${config.apiUrl}/user`)
        .then((res) => {
          console.log(res);
          setName(res.data.name);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return (
    <AuthMiddleware>
      <Navbar />
      <div className="container mx-auto py-4">
        <div className="flex justify-center mb-2">
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14Gio8EIH501fQIqemctvjj7pKptI8poLHfTgglTW4g=s96-c-rg-br100"
            alt="Photo Profile"
            className="border-2 border-solid lg:w-1/12 md:w-1/6 rounded-full w-1/3"
          />
        </div>
        <h1 className="text-center text-3xl">Welcome, {name}</h1>
        <p className="text-center text-gray-600">
          Manage your info, privacy, and security to make Google work better for
          you.
        </p>
        <div className="lg:px-64 mt-3">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
            <div className="bg-white border mx-2 lg:mx-0 p-2 rounded-lg">
              <h1 className="text-lg">Privacy & personalization</h1>
              <p className="text-gray-600">
                See the data in your Google Account and choose what activity is
                saved to personalize your Google experience
              </p>
            </div>
            <div className="bg-white border mx-2 lg:mx-0 p-2 rounded-lg">
              <h1 className="text-lg">Critical security issues found</h1>
              <p className="text-gray-600">
                Protect your account now by resolving these issues
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthMiddleware>
  );
};

export default Profile;
