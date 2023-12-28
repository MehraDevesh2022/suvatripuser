import React, { useState } from "react";
import LoginImg from "../../../Assets/img/Rectangle.png";
import Button from "react-bootstrap/Button";
import axios from "axios";
import ResetPassword from "./ResetPassword";

function Resendotp({ email, handleBackdropClick }) {
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpError, setOtpError] = useState("");

  const handleVerify = async () => {
    try {
      if (otp === "") {
        setOtpError("Please enter the OTP");
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
          email: email,
          otp: otp,
          isReset: true,
        },
        config
      );

      if (response.data.success && response.data.success === true) {
        setIsOtpSent(true);
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      setOtpError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      {!isOtpSent ? (
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
              <div className="my-3 mt-5 text-center cursor-pointer hover:underline">
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
                  onClick={handleVerify}
                >
                  Verify OTP
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <ResetPassword
          email={email}
          handleBackdropClick={handleBackdropClick}
          otp={otp}
        />
      )}
    </div>
  );
}

export default Resendotp;
