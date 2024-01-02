import React, { useState } from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Fotter/Footer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useAppContext } from "../../context/store";
function PersonalDetails() {
  const [show, setShow] = useState(false);
  // const [profileData, setProfileData] = useState({});
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const [authType , setAuthType] = useState("local");
  const [showPasswordError, setShowPasswordError] = useState(false);
  const { state } = useAppContext();
  const authType = state.authType;
const profileData = state.profileData;
  

  const handleClose = () => {
    setShow(false);


    setOldPassword("");
    setNewPassword("");
    setPasswordError("");
    setShowPasswordError(false);
  };

  const handleShow = () => setShow(true);

  const handleResetPass = async () => {
    try {
        setShowPasswordError(false);

        if (!oldPassword) {
            setShowPasswordError(true);
            setPasswordError("Please enter your old password");
            return;
        }

        if (!newPassword) {
            setShowPasswordError(true);
            setPasswordError("Please enter your new password");
            return;
        }

        if (newPassword.length < 6) {
            setShowPasswordError(true);
            setPasswordError("Password must be at least 6 characters long");
            return;
        }

        // Perform additional password strength validation here if needed

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        };
        const response = await axios.post(
            "${process.env.REACT_APP_BASE_URL}/auth/update-password",
            {
                currentPassword: oldPassword,
                newPassword: newPassword,
            },
            config
        );

        if (response.data.success && response.data.success === true) {
            localStorage.setItem("token", response.data.token);
            handleClose();
        }
    } catch (error) {
        console.log(error, "error");
    }
};





  return (
    <div>
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
                  className={`form-control ${
                    showPasswordError && !oldPassword ? "border-red-500" : ""
                  }`}
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
                className={`form-control ${
                  showPasswordError && !newPassword ? "border-red-500" : ""
                }`}
                placeholder="Enter Your New Password"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            {passwordError && (
              <div className="text-red-500 text-sm mt-2">{passwordError}</div>
            )}
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
        <div className="min-w-fit max-w-[1000px] h-screen mx-auto mt-16 px-3">
          <h3 className="mb-5 text-[30px] md:text-[40px] font-[600] tracking-wider">
            Personal details
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
                    {profileData?.username}
                  </p>
                </div>
              </div>
            {profileData?.email && <>
            
              <div className="mb-3 flex flex-col md:flex-row">
                <label
                  htmlFor="userPass"
                  className="text-[20px] text-slate-600 font-[500] w-[100px]"
                >
                  Email
                </label>
                <div className="  w-full md:w-[350px] rounded-md">
                  <p className="text-[16px]">
                    {profileData?.email}
                  </p>
                </div>
              </div>
            </>}
            {profileData?.phoneNumber && <>
              <div className="mb-3 flex flex-col md:flex-row">
                <label
                  htmlFor="userPass"
                  className="text-[20px] text-slate-600 font-[500] w-[100px]"
                >
                  Number
                </label>
                <div className=" 0 w-full md:w-[350px] rounded-md">
                  <p className="text-[16px]">
                    {profileData?.phoneNumber}
                  </p>
                </div>
              </div>
            </>}  

          {authType === "local"&& <>
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
          </>}
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
