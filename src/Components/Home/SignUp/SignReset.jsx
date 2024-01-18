import React, { useState } from "react";
import LoginImg from "../../../Assets/img/Rectangle.png";
import Button from "react-bootstrap/Button";
import PhoneInput, { getCountries } from "react-phone-number-input/input";
import axios from "axios";
import { toast } from "react-toastify";
import { useAppContext } from "../../../context/store";
function SignReset({
  otpHandler,
  isFacebook,
  isLocal,
  googleUser,
  facebookUser,
  setToken,
  setIsPhoneOtp,
  setPhoneNo,
  setClickSignup,
  handleBackdropClick
}) {
  const [otp, setOtp] = useState("");
  const { actions } = useAppContext();
  const [otpError, setOtpError] = useState("");
  const [formDataFb, setFormDataFb] = useState({
    username: facebookUser.username,
    password: "",
    facebookId: facebookUser.facebook_ID,
    email: "",
    phoneNumber: "",
  });

  const [formDataGoogle, setFormDataGoogle] = useState({
    username: googleUser.username,
    password: "",
    email: googleUser.email,
    phoneNumber: "",
  });

  const [fieldWarnings, setFieldWarnings] = useState({
    username: false,
    email: false,
    phoneNumber: false,
    password: false,
    facebookId: false,
  });

  const handleVerifyOTP = () => {
    const isValidOTP = /^\d{6}$/.test(otp);
     if (isValidOTP) {
      setOtpError("");
      otpHandler(otp);
    } else {
      setOtpError("Invalid OTP. Please enter a 6-digit number.");
    }
  };

  const handleFacebookSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/signup/fb`,
        {
          username: formDataFb.username,
          email: formDataFb.email,
          phoneNumber: formDataFb.phoneNumber,
          password: formDataFb.password,
          facebookId: formDataFb.facebookId,
        },
        config
      );

      if (response.data.success) {
        // Handle success
        setToken(response.data.token);
        setIsPhoneOtp(true);
        setPhoneNo(formDataFb.phoneNumber);
      
      
      }
    } catch (error) {
      // Handle error
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleGoogleSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/signup/google`,
        {
          username: formDataGoogle.username,
          email: formDataGoogle.email,
          phoneNumber: formDataGoogle.phoneNumber,
          password: formDataGoogle.password,
           
        },
        config
      );
       

      if (response.data.isLogged ===false) {
        // Handle success
        setToken(response.data.token);
        setIsPhoneOtp(true);
        setPhoneNo(formDataGoogle.phoneNumber);
       

      }else if(response.data.isLogged ===true){
        setClickSignup(true);
        actions.login(true);
        actions.setProfileData(response.data.user);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        handleBackdropClick();
        toast.success("Login Successfully");
      }
    } catch (error) {
      // Handle error
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === "facebook") {
      setFormDataFb({ ...formDataFb, [name]: value });
      setFieldWarnings({ ...fieldWarnings, [name]: value.trim() === "" });
    } else if (formType === "google") {
      setFormDataGoogle({ ...formDataGoogle, [name]: value });
      setFieldWarnings({ ...fieldWarnings, [name]: value.trim() === "" });
    }
  };

  return (
    <div>
      {isLocal ? (
        <>
          <div className="flex flex-row items-start">
            <div className="w-[400px] h-[430px] hidden md:block rounded-lg">
              <img
                src={LoginImg}
                alt="login_img"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="w-[400px] px-4 py-3">
              <h5 className="text-2xl font-bold text-gray-500 text-center">
                Enter Email Otp
              </h5>
              <div className="my-3 text-center cursor-pointer hover:underline">
                Resend OTP
              </div>
              <div className="mb-3">
                <input
                  type="Number"
                  placeholder="OTP"
                  className={`w-full outline-none text-[20px] border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
                    otpError ? "border-red-500" : ""
                  }`}
                  onChange={(e) => setOtp(e.target.value)}
                />
                {otpError && (
                  <div className="text-red-500 text-sm mt-1">{otpError}</div>
                )}
              </div>
              <div className="w-full my-2">
                <Button
                  style={{
                    padding: "10px 18px",
                    textAlign: "center",
                    backgroundColor: "#e3292d",
                    border: "none",
                    borderRadius: "40px",
                  }}
                  className="w-full hover:opacity-80"
                  onClick={handleVerifyOTP}
                >
                  Verify OTP
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {isFacebook ? (
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
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
                      fieldWarnings.email && formDataFb.email.trim() === ""
                        ? "border-red-500"
                        : ""
                    }`}
                    value={formDataFb.email}
                    onChange={(e) => handleInputChange(e, "facebook")}
                    onBlur={() =>
                      setFieldWarnings({ ...fieldWarnings, email: true })
                    }
                  />
                  {fieldWarnings.email && formDataFb.email.trim() === "" && (
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
                    className={`w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
                      fieldWarnings.phoneNumber &&
                      formDataFb.phoneNumber.trim() === ""
                        ? "border-red-500"
                        : ""
                    }`}
                    value={formDataFb.phoneNumber}
                    onChange={(value) =>
                      setFormDataFb({ ...formDataFb, phoneNumber: value })
                    }
                    countries={getCountries()}
                    flags
                  />
                  {fieldWarnings.phoneNumber &&
                    formDataFb.phoneNumber.trim() === "" && (
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
                      fieldWarnings.password &&
                      formDataFb.password.trim() === ""
                        ? "border-red-500"
                        : ""
                    }`}
                    value={formDataFb.password}
                    onChange={(e) => handleInputChange(e, "facebook")}
                    onBlur={() =>
                      setFieldWarnings({ ...fieldWarnings, password: true })
                    }
                  />
                  {fieldWarnings.password &&
                    formDataFb.password.trim() === "" && (
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
                    onClick={handleFacebookSubmit}
                  >
                    Signup with Facebook
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <>
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
                    <PhoneInput
                      placeholder="Enter the phone"
                      international
                      countryCallingCodeEditable={false}
                      className={`w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
                        fieldWarnings.phoneNumber &&
                        formDataGoogle.phoneNumber.trim() === ""
                          ? "border-red-500"
                          : ""
                      }`}
                      value={formDataGoogle.phoneNumber}
                      onChange={(value) =>
                        setFormDataGoogle({
                          ...formDataGoogle,
                          phoneNumber: value,
                        })
                      }
                      countries={getCountries()}
                      flags
                    />
                    {fieldWarnings.phoneNumber &&
                      formDataGoogle.phoneNumber.trim() === "" && (
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
                        fieldWarnings.password &&
                        formDataGoogle.password.trim() === ""
                          ? "border-red-500"
                          : ""
                      }`}
                      value={formDataGoogle.password}
                      onChange={(e) => handleInputChange(e, "google")}
                      onBlur={() =>
                        setFieldWarnings({ ...fieldWarnings, password: true })
                      }
                    />
                    {fieldWarnings.password &&
                      formDataGoogle.password.trim() === "" && (
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
                      onClick={handleGoogleSubmit}
                    >
                      Signup with Google
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default SignReset;
