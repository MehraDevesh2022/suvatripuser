import React, { useState, useEffect } from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Fotter/Footer";
import Button from "react-bootstrap/Button";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function PersonalDetails() {
  const [show, setShow] = useState(false);
  const [profileData, setProfileData] = useState({}); // [{} , {} , {}
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // fetch data from the backend

  const handleResetPass = async () => {
    try {
      if (oldPassword !== newPassword) {
        alert("Password and confirm password should be same");
        return;
      }
      const config = { headers: { "Content-Type": "application/json" } };
      const response = await axios.patch(
        "http://localhost:8000/auth/update-password",
        {
            currentPassword: oldPassword,
            newPassword: newPassword,

        },
        config
      );
  
      if (response.data.success && response.data.success === true) {
        localStorage.setItem("token", response.data.token);
         handleClose()
        console.log(response.data.token, "response.data.token");
       ;
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const personalProfile = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      const response = await axios.get("http://localhost:8000/profile", config);
      console.log(response.data.data, "response.data.data");
      if (response.data.data) {
        setProfileData(response.data.data);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    // get user data
    personalProfile();
  }, []);

  const userInfo = {
    name: "Ishaan",
    email: "Ishaan545@gmail.com",
    num: +9170784234324,
  };

  return (
    <div>
      {/* For the Confirm Password modal */}
      <>
        <Modal show={show} onHide={handleClose} size="md" centered>
          <Modal.Body>
            <div className="mb-3">
              <p className="text-xl tracking-wider mb-2 font-[500]">
                Enter Your Previous Password
              </p>
              <div className="input-group input-group-lg">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Previous Password"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
            </div>
            <p className="text-xl tracking-wider mb-2 font-[500]">
              Enter Your New Password
            </p>
            <div className="input-group input-group-lg">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Your New Password"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="my-3 w-[100px] mx-auto">
              <Button
                style={{
                  padding: "10px 30px",
                  textAlign: "center",
                  fontWeight: "400",
                  backgroundColor: "#e3292d",
                  border: "none",
                  borderRadius: "30px",
                }}
                onClick={handleResetPass}
              >
                Submit
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="min-w-fit max-w-[1000px] mx-auto py-5 px-3">
          <h3 className="mb-5 text-[30px] md:text-[40px] font-[600] tracking-wider">
            Personal deatils
          </h3>
          <form action="">
            <div className="min-w-fit max-w-[800px] mx-auto px-1">
              <div className="mb-3 flex flex-col md:flex-row">
                <label
                  htmlFor="userPass"
                  className="text-[20px] text-slate-600 font-[500] w-[100px]"
                >
                  Name
                </label>
                <div className="  w-full md:w-[350px] rounded-md">
                  <p className="text-[16px]">
                    {profileData?.name || userInfo.name}
                  </p>
                </div>
              </div>
              <div className="mb-3 flex flex-col md:flex-row">
                <label
                  htmlFor="userPass"
                  className="text-[20px] text-slate-600 font-[500] w-[100px]"
                >
                  Email
                </label>
                <div className="  w-full md:w-[350px] rounded-md">
                  <p className="text-[16px]">
                    {profileData?.name || userInfo.email}
                  </p>
                </div>
              </div>
              <div className="mb-3 flex flex-col md:flex-row">
                <label
                  htmlFor="userPass"
                  className="text-[20px] text-slate-600 font-[500] w-[100px]"
                >
                  Number
                </label>
                <div className=" 0 w-full md:w-[350px] rounded-md">
                  <p className="text-[16px]">
                    {profileData?.name || userInfo.num}
                  </p>
                </div>
              </div>

              <div className="my-5">
                <Button
                  style={{
                    padding: "10px 20px",
                    textAlign: "center",
                    fontWeight: "400",
                    backgroundColor: "#e3292d",
                    border: "none",
                    borderRadius: "40px",
                  }}
                  onClick={handleShow}
                >
                  Change password
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default PersonalDetails;
