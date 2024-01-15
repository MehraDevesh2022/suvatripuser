import React, { useState } from "react";
import LoginImg from "../../../Assets/img/Rectangle.png";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { LoginSocialFacebook } from "reactjs-social-login";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Forget from "./Forget";
import { useAppContext } from "../../../context/store";
import SignReset from "./SignReset";
import VerfyPhoneOtp from "./VerfyPhoneOtp";

// import {LoginSocialFacebook} from 'reactjs-social-login';
// import { LoginButton } from "react-facebook";
import { useGoogleLogin } from "@react-oauth/google";
// import {FACEBOOK_APP_ID} from '../../../config';
function Login({ handleBackdropClick, setHandleLoginShow }) {
  const [showForgotPass, setShowForgotPass] = useState(true);
  const [isPhoneOtp, setIsPhoneOtp] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  const [clickSignUp, setClickSignup] = useState(false);
  const [facbookUser, setFacebookUser] = useState({
    username: "",
    facebook_ID: "",
  });
  const [googleUser, setGoogleUser] = useState({
    username: "",
    email: "",
  });
  const [isGoogle, setIsGoogle] = useState(false);
  const [isFacebook, setIsFacebook] = useState(false);

  const [phoneOtp, setPhoneOtp] = useState("");
  const [token, setToken] = useState();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const hadleFacebookLogin = async (data) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/signup/isUser`,
        {
          username: data.first_name + " " + data.last_name,
          facebook_ID: data.userID,
          authType: "facebook",
        },
        config
      );

      if (result.data.success === false) {
        setFacebookUser({
          ...facbookUser,
          username: data.first_name + " " + data.last_name,
          facebook_ID: data.userID,
        });
        setIsFacebook(true);
        setClickSignup(true);
      } else {
        actions.login(true);
        actions.setProfileData(result.data.user);
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        handleBackdropClick();
        toast.success("Login Successfully");
      }
    } catch (error) {
      toast.error("Login Failed");
      console.error("Error during Facebook login:", error);
    }
  };

  const handlePhoneOtp = (otp) => {
    setPhoneOtp(otp);
    handleVerifyPhone();
  };

  const handleVerifyPhone = async () => {
    try {
      if (phoneOtp === "") {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/user-phone-otp`,
        {
          phoneNumber: phoneNo,
          otp: phoneOtp,
        },
        config
      );

      if (response.data.success && response.data.success === true) {
        setClickSignup(true);
        actions.login(true);
        actions.setProfileData(response.data.user);
        localStorage.setItem("token", token);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        handleBackdropClick();
        toast.success("Login Successfully");
      }
    } catch (error) {
      actions.login(false);
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("token");
      console.error("Error during signup:", error);
      toast.error("Login Failed");
    }
  };

  const [fieldWarnings, setFieldWarnings] = useState({
    email: false,
    password: false,
  });

  const { actions } = useAppContext();
  const handleShowSignUp = () => setHandleLoginShow(false);
  const handleForgotPass = () => setShowForgotPass(false);

  const handleLogin = async () => {
    // Validate fields before attempting login
    if (!loginData.email.trim() || !loginData.password.trim()) {
      // Show warnings for empty fields
      setFieldWarnings({
        email: !loginData.email.trim(),
        password: !loginData.password.trim(),
      });
      return;
    }

    try {
      // Make a POST request to the backend API
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        loginData
      );

      console.log(response.data, "response.data");

      if (response.data.token) {
        actions.setProfileData(response.data.user);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        actions.login(true);
        handleBackdropClick();
      }
    } catch (error) {
      actions.login(false);
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
      console.error("Error during login:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });

    // Set warning to true if the field is empty
    setFieldWarnings({
      ...fieldWarnings,
      [name]: value.trim() === "",
    });
  };

  async function handleGoogleLoginSuccess(tokenResponse) {
    try {
      const accessToken = tokenResponse.access_token;
      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Extract relevant information from the response with default values as empty strings
      const firstName = response.data.given_name || "";
      const lastName = response.data.family_name || "";
      const email = response.data.email || "";

      // check if user is already registered
      const config = { headers: { "Content-Type": "application/json" } };
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/signup/isUser`,
        {
          username: firstName + " " + lastName,
          email: email,
          authType: "google",
        },
        config
      );

      if (result.data.success === false) {
        console.log(response.data, "response from google");
        setGoogleUser({
          ...googleUser,
          username: firstName + " " + lastName,
          email: email,
        });
        setIsGoogle(true);
        setClickSignup(true);
      } else {
        actions.login(true);
        actions.setProfileData(result.data.user);
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        handleBackdropClick();
        toast.success("Login Successfully");
      }
    } catch (error) {
      // if (response.data.success) {

      //   // actions.setProfileData(response.data.user);
      //   // actions.login(true);
      //   // localStorage.setItem("isLoggedIn", JSON.stringify(true));
      //   // localStorage.setItem("token", response.data.token);
      //   // handleBackdropClick();

      //   setGoogleUser({
      //     ...googleUser,
      //     username: response.data.data.username,
      //     email: response.data.data.email,
      //   });
      //   setIsGoogle(true);
      //   setClickSignup(true);
      // }
      toast.error("Login Failed");
      console.error("Error during Google login:", error);
    }
  }

  // const handleSuccess = async (response) => {
  //   // console.log(response.authResponse.accessToken, "accessToken");

  //   // console.log(response.authResponse.userID, "userID");
  //   // console.log(response, "response");

  //   try {
  //     const config = { headers: { "Content-Type": "application/json" } };
  //     const result = await axios.post(
  //       `${process.env.REACT_APP_BASE_URL}/auth/signup/fb`,
  //       {
  //         userId: response.authResponse.userID,
  //         accessToken: response.authResponse.accessToken,
  //       },
  //       config
  //     );

  //     if (result.data.token) {
  //       localStorage.setItem("token", result.data.token);
  //       localStorage.setItem("isLoggedIn", JSON.stringify(true));
  //       actions.login(true);
  //       actions.setProfileData(result.data.user);
  //       handleBackdropClick();
  //     }
  //   } catch (error) {
  //     actions.login(false);

  //     localStorage.removeItem("isLoggedIn")
  //     localStorage.removeItem("token")
  //     console.error("Error during login:", error);
  //   }
  // };

  // const handleError = (error) => {
  //   console.error("Error during Facebook login:", error);
  // };

  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  return (
    <div>
      {showForgotPass && !clickSignUp ? (
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
                className={`w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
                  fieldWarnings.email ? "border-red-500" : ""
                }`}
                value={loginData.email}
                onChange={handleInputChange}
              />
              {fieldWarnings.email && (
                <div className="text-red-500 text-sm mt-1">
                  Email is required
                </div>
              )}
            </div>
            <div className="mb-3">
              <p className="leading-6 text-slate-6000 font-[600] mb-0">
                Password
              </p>
              <input
                type="password"
                name="password"
                placeholder="Enter the password"
                className={`w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
                  fieldWarnings.password ? "border-red-500" : ""
                }`}
                value={loginData.password}
                onChange={handleInputChange}
              />
              {fieldWarnings.password && (
                <div className="text-red-500 text-sm mt-1">
                  Password is required
                </div>
              )}
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
              <div className="flex justify-center items-center">
                <FcGoogle
                  className="inline mx-2 text-[30px] cursor-pointer hover:opacity-70 "
                  onClick={() => login()}
                />

                <span>
                  <LoginSocialFacebook
                    appId={"321935264004278" || ""}
                    fieldsProfile={
                      "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                    }
                    onResolve={({ provider, data }) => {
                      hadleFacebookLogin(data);
                    }}
                    onReject={(err) => {
                      console.log(err);
                    }}
                  >
                    <FaSquareFacebook className="inline mx-3 text-[30px] cursor-pointer hover:opacity-70" />
                  </LoginSocialFacebook>
                </span>

                {/* <LoginButton
                  scope="email"
                  onError={handleError}
                  onSuccess={handleSuccess}
                >
                  <FaSquareFacebook className="inline mx-3 text-[30px] text-[blue] cursor-pointer hover:opacity-70" />
                </LoginButton> */}

                <FaPhone className="inline mx-3 text-[28px] cursor-pointer hover:opacity-70" />
              </div>
            </div>
          </div>
        </div>
      ) : clickSignUp ? (
        <>
          {!isPhoneOtp ? (
            <SignReset
              isFacebook={isFacebook}
              isGoogle={isGoogle}
              facebookUser={facbookUser}
              googleUser={googleUser}
              setToken={setToken}
              setIsPhoneOtp={setIsPhoneOtp}
              setPhoneNo={setPhoneNo}
              setClickSignup={setClickSignup}
              handleBackdropClick={handleBackdropClick}
            />
          ) : (
            <VerfyPhoneOtp otpHandler={handlePhoneOtp} />
          )}
        </>
      ) : (
        <Forget handleBackdropClick={handleBackdropClick} />
      )}
    </div>
  );
}

export default Login;
