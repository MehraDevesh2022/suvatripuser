import React, { useState } from "react";
import LoginImg from "../../../Assets/img/Rectangle.png";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import PhoneInput, { getCountries } from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { useGoogleOAuth, signIn } from "@react-oauth/google"; // Import the useGoogleOAuth hook
import { useGoogleLogin } from "@react-oauth/google";
// import { LoginButton } from "react-facebook";
import { useAppContext } from "../../../context/store";
import { LoginSocialFacebook } from "reactjs-social-login";
import Forget from "./Forget";
import SignReset from "./SignReset";
import VerfyPhoneOtp from "./VerfyPhoneOtp";

function Sign({ handleBackdropClick, setHandleLoginShow }) {
  // For reset Password
  const [clickSignUp, setClickSignup] = useState(false);
  const { actions } = useAppContext();
  const [phoneNo, setPhoneNo] = useState("");
  const [isPhoneOtp, setIsPhoneOtp] = useState(false);
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
  const [isLocal, setIsLocal] = useState(false);
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
  const [phoneOtp, setPhoneOtp] = useState("");
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
        `${process.env.REACT_APP_BASE_URL}/auth/signup/user`,
        formData,
        config
      );

      if (response.data.success && response.data.success === true) {
        setClickSignup(true);
        setIsLocal(true);
        setToken(response.data.token);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
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
        `${process.env.REACT_APP_BASE_URL}/auth/user-otp`,
        {
          email: formData.email,
          otp: otp,
        },
        config
      );

      if (response.data.success && response.data.success === true) {
        setPhoneNo(formData.phoneNumber);
        setIsPhoneOtp(true);
      }
    } catch (error) {
      actions.login(false);
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("token");
      console.error("Error during signup:", error);
    }
  };

  const handleOtp = (otp) => {
    setOTP(otp);
    alert(otp);
    handleVerify();
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

  const handlePhoneOtp = (otp) => {
    setPhoneOtp(otp);
    handleVerifyPhone();
  };

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
  //   try {

  //     console.log(response, "response from facebook");
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
  //       setIsFacebook(true);
  //     }
  //   } catch (error) {
  //     // actions.login(false);
  //     // localStorage.removeItem("isLoggedIn");
  //     // localStorage.removeItem("token");
  //     // console.error("Error during Facebook login:", error);
  //   }
  // };

  // const handleError = (error) => {
  //   console.error("Error during Facebook login:", error);
  // };

  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  return (
    <div>
      {forGot && !clickSignUp ? (
        <div className="flex flex-row items-start">
          <div className="w-[400px] h-[430px] hidden lg:block rounded-lg">
            <img
              src={LoginImg}
              alt="login_img"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-[400px]  px-4 py-3">
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
                onBlur={() =>
                  setFieldWarnings({ ...fieldWarnings, username: true })
                }
              />
              {fieldWarnings.username && formData.username.trim() === "" && (
                <div className="text-red-500 text-sm mt-1">
                  Username is required
                </div>
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
                onBlur={() =>
                  setFieldWarnings({ ...fieldWarnings, email: true })
                }
              />
              {fieldWarnings.email && formData.email.trim() === "" && (
                <div className="text-red-500 text-sm mt-1">
                  Email is required
                </div>
              )}
            </div>

            <div className="mb-2">
              <PhoneInput
                placeholder="Enter the phone"
                international
                countryCallingCodeEditable={false}
                // defaultCountry="RU"
                className={`w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
                  fieldWarnings.phoneNumber &&
                  formData.phoneNumber.trim() === ""
                    ? "border-red-500"
                    : ""
                }`}
                value={formData.phoneNumber}
                onChange={(value) =>
                  setFormData({ ...formData, phoneNumber: value })
                }
                countries={getCountries()}
                flags
              />
              {fieldWarnings.phoneNumber &&
                formData.phoneNumber.trim() === "" && (
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
                onBlur={() =>
                  setFieldWarnings({ ...fieldWarnings, password: true })
                }
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
                <div className="text-red-500 text-sm mt-1">
                  Password is required
                </div>
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
            <div className="text-center mt-3 d">
              <p className="mb-2">or log In with</p>
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
              otpHandler={handleOtp}
              isFacebook={isFacebook}
              isGoogle={isGoogle}
              isLocal={isLocal}
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

export default Sign;
