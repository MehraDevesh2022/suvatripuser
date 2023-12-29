import React, { useState } from "react";
import LoginImg from "../../../Assets/img/Rectangle.png";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useGoogleOAuth, signIn } from "@react-oauth/google"; // Import the useGoogleOAuth hook
import { useGoogleLogin } from "@react-oauth/google";
import { LoginButton } from "react-facebook";
import { useAppContext } from "../../../context/store";
// import { LoginSocialFacebook } from "reactjs-social-login";
import Forget from "./Forget";
import SignReset from "./SignReset";


function Sign({ handleBackdropClick, setHandleLoginShow }) {
  // For reset Password
  const [clickSignUp, setClickSignup] = useState(false);
 
  const {  actions } = useAppContext();
  const [fieldWarnings, setFieldWarnings] = useState({
    username: false,
    email: false,
    phoneNumber: false,
    password: false,
  });

  const [forGot, setForgetpass] = useState(true);
  const handleForgotPass = () => {
    setForgetpass(false);
  };
  // const handleShow = () => setHandleLoginShow(true)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
  });
  const [otp, setOTP] = useState("");
  const [token, setToken] = useState();
  const handleShow = () => setHandleLoginShow(true);
  // const navigate = useNavigate();
  // const  signIn  = useGoogleOAuth();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Set warning to true if the field is empty
    setFieldWarnings((prev) => ({ ...prev, [name]: value.trim() === "" }));
  };

  const handleOtp = (otp) => {
 
    setOTP(otp);
    handleVerify();
  };

  const handleSignUp = async () => {
    // Reset field warnings
    setFieldWarnings({
      username: formData.username.trim() === "",
      email: formData.email.trim() === "",
      phoneNumber: formData.phoneNumber.trim() === "",
      password: formData.password.trim() === "",
    });
  
    // Check if any field is empty
    if (
      formData.username.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phoneNumber.trim() === "" ||
      formData.password.trim() === ""
    ) {
      // If any field is empty, do not submit the form
      return;
    }
  
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:8000/auth/signup/user",
        formData,
        config
      );
  
      if (response.data.success && response.data.success === true) {
        setClickSignup(true);
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  
    // state management
    setClickSignup(true);
  };
  
  

  const handleVerify = async () => {
    try {
      if (otp === "") {
         return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:8000/auth/user-otp",
        {
          email: formData.email,
          otp: otp,
        },
        config
      );

      if (response.data.success && response.data.success === true) {
        setClickSignup(true);
        localStorage.setItem("token", token);
        handleBackdropClick();
        actions.login(true);
      }
    } catch (error) {
      actions.login(false); 
      console.error("Error during signup:", error);
    }
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
       actions.login(true);
      }
    } catch (error) {
      actions.login(false);
      console.error("Error during Google login:", error);
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
        actions.login(true);
      }
    } catch (error) {
      actions.login(false);
      console.error("Error during Facebook login:", error);
    }
  };

  const handleError = (error) => {
    console.error("Error during Facebook login:", error);
  };

  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  return (
    <div>
      {forGot && !clickSignUp ? (
        <div className="flex flex-row items-start">
          <div className="w-[350px] h-[430px] hidden md:block rounded-lg">
            <img
              src={LoginImg}
              alt="login_img"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-[350px] px-4 py-3">
          <div className="mb-2">
  <input
    type="text"
    name="username"
    placeholder="User Name"
    className={`w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
      fieldWarnings.username && formData.username.trim() === ""
        ? "border-red-500"
        : ""
    }`}
    value={formData.username}
    onChange={handleInputChange}
    onBlur={() => setFieldWarnings({ ...fieldWarnings, username: true })}
  />
  {fieldWarnings.username && formData.username.trim() === "" && (
    <div className="text-red-500 text-sm mt-1">Username is required</div>
  )}
</div>

<div className="mb-2">
  <input
    type="email"
    name="email"
    placeholder="Email"
    className={`w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
      fieldWarnings.email && formData.email.trim() === ""
        ? "border-red-500"
        : ""
    }`}
    value={formData.email}
    onChange={handleInputChange}
    onBlur={() => setFieldWarnings({ ...fieldWarnings, email: true })}
  />
  {fieldWarnings.email && formData.email.trim() === "" && (
    <div className="text-red-500 text-sm mt-1">Email is required</div>
  )}
</div>

<div className="mb-2">
  <input
    type="number"
    name="phoneNumber"
    placeholder="Enter the phone"
    className={`w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
      fieldWarnings.phoneNumber && formData.phoneNumber.trim() === ""
        ? "border-red-500"
        : ""
    }`}
    value={formData.phoneNumber}
    onChange={handleInputChange}
    onBlur={() => setFieldWarnings({ ...fieldWarnings, phoneNumber: true })}
  />
  {fieldWarnings.phoneNumber && formData.phoneNumber.trim() === "" && (
    <div className="text-red-500 text-sm mt-1">
      Phone Number is required
    </div>
  )}
</div>

<div className="mb-2">
  <input
    type="Password"
    name="password"
    placeholder="Enter your password"
    className={`w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
      fieldWarnings.password && formData.password.trim() === ""
        ? "border-red-500"
        : ""
    }`}
    value={formData.password}
    onChange={handleInputChange}
    onBlur={() => setFieldWarnings({ ...fieldWarnings, password: true })}
  />
  <div className="text-right">
    <p
      className="text-slate-500 hover:underline text-[16px] cursor-pointer"
      onClick={handleForgotPass}
    >
      Forgot Password
    </p>
  </div>
  {fieldWarnings.password && formData.password.trim() === "" && (
    <div className="text-red-500 text-sm mt-1">Password is required</div>
  )}
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
                onClick={handleSignUp}
              >
                SignUp
              </Button>
              <Button
                style={{
                  padding: "10px 18px",
                  textAlign: "center",
                  backgroundColor: "grey",
                  border: "none",
                  borderRadius: "40px",
                }}
                className="w-full hover:opacity-80 mt-3"
                onClick={handleShow}
              >
                Login
              </Button>
            </div>
            <div className="text-center mt-3">
              <p className="mb-2">or log In with</p>
              <div>
                <FcGoogle
                  className="inline mx-2 text-[30px] cursor-pointer hover:opacity-70"
                  onClick={() => login()}
                />

                {/* <LoginSocialFacebook
              appId={"395092993028263" || ""}
              fieldsProfile={
                "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
              }
              onResolve={({ provider, data }) => {
                console.log(data, "data");
                    console.log(provider, "provider");
                    setIsLoggedIn(true);
                    handleBackdropClick();
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <FaSquareFacebook className="inline mx-3 text-[30px] cursor-pointer hover:opacity-70" />
            </LoginSocialFacebook>
           */}
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
      ) : clickSignUp ? (
        <SignReset otpHandler={handleOtp} />
      ) : (
        <Forget handleBackdropClick={handleBackdropClick}  />
      )}
    </div>
  );
}

export default Sign;
