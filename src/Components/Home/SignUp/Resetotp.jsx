import React, { useState } from "react";
import LoginImg from "../../../Assets/img/Rectangle.png";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import axios from "axios";
import ResetPassword from "./ResetPassword";
function Resendotp({ email, handleBackdropClick }) {
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);


  const handleVerify = async () => {
    try {
        if(otp === ""){
            alert("Please enter the otp")
            return
        }
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:8000/auth/user-otp",
        {
          email: email,
          otp: otp,
          isReset : true
        },
        config
      );

      if (response.data.success && response.data.success === true) {
       setIsOtpSent(true)
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div>
     { !isOtpSent ?<>
     
        <div className="flex flex-row items-start">
        <div className="w-[400px] h-[430px] hidden md:block rounded-lg">
          <img
            src={LoginImg}
            alt="login_img"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="w-[400px] px-4 py-3">
          <div className="my-3 mt-5 text-center cursor-pointer hover:underline">
            Resend OTP
          </div>
          <div className="mb-3">
            <input
              type="Number"
              placeholder="OTP"
              className="w-full outline-none text-[20px] border-[1px] border-slate-500 px-1 py-2 rounded-lg"
              onChange={(e) => setOtp(e.target.value)}
            />
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
                onClick={handleVerify}  
            >
              Verify OTP
            </Button>
          </div>
          <div className="text-center mt-4">
            <p className="mb-4">or log In with</p>
            <div>
              <FcGoogle className="inline mx-2 text-[30px] cursor-pointer hover:opacity-70" />
              <FaSquareFacebook className="inline mx-3 text-[30px] text-[blue] cursor-pointer hover:opacity-70" />
              <FaPhone className="inline mx-3 text-[28px] cursor-pointer hover:opacity-70" />
            </div>
          </div>
        </div>
      </div>
     </> : <ResetPassword email={email} handleBackdropClick={handleBackdropClick} otp = {otp} />}
    </div>
  );
}

export default Resendotp;
