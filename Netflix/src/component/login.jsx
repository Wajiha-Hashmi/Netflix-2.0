import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";
import store from "../redux/store";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const logInHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    // console.log(fullName, email, password);
    dispatch(setLoading(true));
    if (isLoggedIn) {
      //login
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        // console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/browse");
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      //register

      dispatch(setLoading(true));
      const user = { fullName, email, password };
      console.log(user);
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        // console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLoggedIn(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div>
        <Header />
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
            alt="banner"
          />
        </div>

        {/* Form Centered */}

        <form
          onSubmit={getInputData}
          action=""
          className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black opacity-80 p-12 rounded-md shadow-lg"
        >
          <h1 className="text-white text-3xl font-bold">
            {isLoggedIn ? "LogIn" : "SignUp"}
          </h1>
          <div className=" flex flex-col p-6 rounded shadow-lg">
            {!isLoggedIn && (
              <input
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                type="text"
                placeholder="Full Name"
                id="fullName"
                className="px-3 py-2 my-2 border rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-white"
              />
            )}

            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email"
              id="email"
              className="px-3 py-2 my-2 border rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-white"
            />

            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
              id="password"
              className="px-3 py-2 my-2 border rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-white"
            />
            <button
              type="submit"
              className="bg-red-600 mt-6 p-3 text-white rounded-sm font-medium"
            >
              {`${isLoading ? "Loading..." : isLoggedIn ? "Login" : "SignUp"}`}
            </button>
            <p className="text-white mt-2 text-center">
              {isLoggedIn ? "New to Netflix ?" : "Already have an account ?"}
              <span
                onClick={logInHandler}
                className="ml-1 text-blue-900 font-medium cursor-pointer"
              >
                {isLoggedIn ? " SignUp" : " LogIn"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
