import React, { useState } from "react";
import LoginImg from "../../../Assets/img/Rectangle.png";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Forget from "./Forget";
import { LoginButton } from "react-facebook";
import { useGoogleLogin } from "@react-oauth/google";
// import dotenv from 'dotenv';
// dotenv.config();

// console.log(process.env.BASE_URL, "process.env.BASE_URL");

function Login({ handleBackdropClick, setHandleLoginShow, setIsLoggedIn }) {
  const [showForgotPass, setShowForgotPass] = useState(true);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "user",
  });



  const handleShowSignUp = () => setHandleLoginShow(false);
  const handleForgotPass = () => setShowForgotPass(false);

  const handleLogin = async () => {
    try {
      // Make a POST request to the backend API
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        loginData
      );

      console.log(response.data, "response.data");

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        // localStorage.setItem("authWith", "local");
        handleBackdropClick();
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  async function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/auth/signup/google",
        { googleAccessToken: accessToken },
        config
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        // localStorage.setItem("authWith", "google");
        // navigate("/home");
        handleBackdropClick();
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error during Google login:", error);
      // Handle error as needed
    }
  }

  const handleSuccess = async (response) => {
    // console.log(response.authResponse.accessToken, "accessToken");

    // console.log(response.authResponse.userID, "userID");
    // console.log(response, "response");

    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const result = await axios.post(
        "http://localhost:8000/auth/signup/fb",
        {
          userId: response.authResponse.userID,
          accessToken: response.authResponse.accessToken,
        },
        config
      );

      console.log(result, "result");

      if (result.data.token) {
        localStorage.setItem("token", result.data.token);
        // localStorage.setItem("authWith", "facebook");
        // navigate("/home");
        handleBackdropClick();
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error during Facebook login:", error);
    }
  };

  const handleError = (error) => {
    console.error("Error during Facebook login:", error);
  };

  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });
  return (
    <div>
      {
        showForgotPass ? (
          <div className="flex flex-row items-start justify-center">
            <div className="w-[400px] h-[430px] hidden md:block rounded-lg">
              <img
                src={LoginImg}
                alt="login_img"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="w-[400px] mx-auto px-4 py-3">
              <div className="mb-3">
                <p className="leading-6 text-slate-6000 font-[600] mb-0">Email</p>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter the Email"
                  className="w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg"
                  value={loginData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <p className="leading-6 text-slate-6000 font-[600] mb-0">
                  Password
                </p>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter the password"
                  className="w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg"
                  value={loginData.password}
                  onChange={handleInputChange}
                />
                <div className="text-right">
                  <p
                    className="text-slate-500 hover:underline text-[16px] cursor-pointer"
                    onClick={handleForgotPass}
                  >
                    Forgot Password
                  </p>
                </div>
              </div>

              <div className="w-full my-3">
                <Button
                  style={{
                    padding: "10px 18px",
                    textAlign: "center",
                    backgroundColor: "#e3292d",
                    border: "none",
                    borderRadius: "40px",
                  }}
                  className="w-full hover:opacity-80"
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Button
                  style={{
                    padding: "10px 18px",
                    textAlign: "center",
                    backgroundColor: "grey",
                    border: "none",
                    borderRadius: "40px",
                  }}
                  className="w-full hover:opacity-80 mt-4"
                  onClick={handleShowSignUp}
                >
                  Sign-up
                </Button>
              </div>
              <div className="text-center mt-3">
                <p className="mb-3">or log In with</p>
                <div>
                  <FcGoogle
                    className="inline mx-2 text-[30px] cursor-pointer hover:opacity-70"
                    onClick={() => login()}
                  />
                  <LoginButton
                    scope="email"
                    onError={handleError}
                    onSuccess={handleSuccess}
                  >
                    <FaSquareFacebook className="inline mx-3 text-[30px] text-[blue] cursor-pointer hover:opacity-70" />
                  </LoginButton>
                  <FaPhone className="inline mx-3 text-[28px] cursor-pointer hover:opacity-70" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Forget handleBackdropClick ={handleBackdropClick} />
        )

      }

    </div>
  );
}

export default Login;
