import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import config from "../../config.json";
import AuthMiddleware from "../../middleware/AuthMiddleware";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  const [name, setName] = useState("loading...");
  useEffect(() => {
    const getUser = async () => {
      await axios
        .get(`${config.apiUrl}/user`)
        .then((res) => {
          // console.log(res);
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
            src="https://yt3.ggpht.com/a/AATXAJxT2bDtOEP9fV4szr-tF1O1-IgzOmTNuSl54ZsOAg=s100-c-k-c0xffffffff-no-rj-mo"
            alt="https://yt3.ggpht.com/a/AATXAJxT2bDtOEP9fV4szr-tF1O1-IgzOmTNuSl54ZsOAg=s100-c-k-c0xffffffff-no-rj-mo"
            className="border-2 border-solid lg:w-1/12 md:w-1/6 rounded-full w-1/3"
          />
        </div>
        <h1 className="text-3xl text-center text-gray-300">Welcome, {name}</h1>
        <p className="lg:px-0 px-2 text-center text-gray-600">
          Manage your info, privacy, and security to make Google work better for
          you.
        </p>
        <div className="lg:px-64 mt-3">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <ProfileCard
              title="Privacy & personalization"
              body="See the data in your Google Account and choose what activity is saved to personalize your Google experience"
              image="https://www.gstatic.com/identity/boq/accountsettingsmobile/dataandpersonalization_icon_96x96_cdb6dff2e31ed6745ece4662231bfd48.png"
              linkTo="/profile/personalization"
            />
            <ProfileCard
              title="We keep your account protected"
              body="The Security Checkup gives you personalized recommendations to secure your account"
              image="https://www.gstatic.com/identity/boq/accountsettingsmobile/securitycheckup_green_96x96_e8bcbc95b1381588253fa0bd67829c40.png"
              linkTo="/profile/security"
            />
            <ProfileCard
              title="Account storage"
              body="Your account storage is shared across Google services, like Gmail and Photos"
              image="https://www.gstatic.com/identity/boq/accountsettingsmobile/storage_icon_96x96_fe180ca2305f836135d0f6fecc98ce6e.png"
              linkTo="/profile/storage"
            />
            <ProfileCard
              title="Take the Privacy Checkup"
              body="This step-by-step guide helps you choose the privacy settings that are right for you"
              image="https://www.gstatic.com/identity/boq/accountsettingsmobile/privacycheckup_initial_96x96_ec2603b5ed4ab658c6e66f2316880d93.png"
              linkTo="/profile/privacy"
            />
          </div>
          <p className="lg:px-5 mt-3 px-3 text-gray-600">
            Only you can see your settings. You might also want to review your
            settings for Maps, Search, or whichever Google services you use
            most. Google keeps your data private, safe, and secure.
          </p>
        </div>
      </div>
    </AuthMiddleware>
  );
};

export default Profile;
