import React, { useState } from "react";
import LoginImg from "../../../Assets/img/Rectangle.png";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Login from "./Login";
function ResetPassword({ email, handleBackdropClick, otp , setHandleLoginShow }) {
  const [success, setSuccess] = useState(false); // [1]
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleResetPass = async () => {
    try {
      // Password validation
      if (!isValidPassword(password)) {
        return;
      }

      if (password !== confirmPassword) {
        setPasswordError("Passwords do not match");
        return;
      }

      const config = { headers: { "Content-Type": "application/json" } };
      const response = await axios.post(
        "http://localhost:8000/auth/reset-password",
        {
          email: email,
          newPassword: password,
          otp: otp,
        },
        config
      );
      if (response.data.success && response.data.success === true) {
        setSuccess(true);
        }
    } catch (error) {
       setSuccess(false);
      console.log(error, "error");
    }
  };

  // Password validation function
  const isValidPassword = (password) => {
    const minLength = 6; // Set your minimum password length

    if (password.length < minLength) {
      setPasswordError(`Password must be at least ${minLength} characters`);
      return false;
    }
    setPasswordError("");
    return true;
  };

  return (
    <div>
     {!success ? <>
      <div className="flex flex-row items-start">
        <div className="w-[400px] h-[430px] hidden md:block rounded-lg">
          <img
            src={LoginImg}
            alt="login_img"
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="w-[400px] px-4 py-3">
          <div className="my-3 text-center ">
            <h4> Reset Password</h4>
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="New password"
              className={`w-full outline-none text-[20px] border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
                passwordError ? "border-red-500" : ""
              }`}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <div className="text-red-500 text-sm mt-1">{passwordError}</div>
            )}
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Confirm password"
              className={`w-full outline-none text-[20px] border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
                passwordError ? "border-red-500" : ""
              }`}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              onClick={handleResetPass}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
     </> : <Login handleBackdropClick ={handleBackdropClick}  setHandleLoginShow ={setHandleLoginShow} />}
    </div>
  );
}

export default ResetPassword;
