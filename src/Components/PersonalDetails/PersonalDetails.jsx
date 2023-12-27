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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [password, setPassword] = useState(false);

  // fetch data from the backend

   


  const personalProfile = async () => {
    try {
        const config  =   { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } };
       const response = await axios.get("http://localhost:8000/profile" , config);
         console.log(response.data.data , "response.data.data");

    } catch (error) {
        console.log(error , "error") ;
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

  const showPassword = () => {
    setPassword(true);
  };
  const closePassword = () => {
    setPassword(false);
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
                onClick={handleClose}
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
                <div className=" border-[1px] border-slate-600 w-full md:w-[350px] rounded-md">
                  <input
                    type="text"
                    id="userName"
                    name="name"
                    value={userInfo.name}
                    placeholder="Enter Your Name"
                    className="bg-transparent py-[6px] w-[90%] h-full outline-none mx-4"
                  />
                </div>
              </div>
              <div className="mb-3 flex flex-col md:flex-row">
                <label
                  htmlFor="userPass"
                  className="text-[20px] text-slate-600 font-[500] w-[100px]"
                >
                  Email
                </label>
                <div className=" border-[1px] border-slate-600 w-full md:w-[350px] rounded-md">
                  <input
                    type="email"
                    id="userEmail"
                    name="email"
                    value={userInfo.email}
                    placeholder="Enter the email"
                    className="bg-transparent py-2  w-[90%] h-full   outline-none mx-4"
                  />
                </div>
              </div>
              <div className="mb-3 flex flex-col md:flex-row">
                <label
                  htmlFor="userPass"
                  className="text-[20px] text-slate-600 font-[500] w-[100px]"
                >
                  Number
                </label>
                <div className=" border-[1px] border-slate-600 w-full md:w-[350px] rounded-md">
                  <input
                    type="number"
                    id="userNum"
                    name="number"
                    value={userInfo.num}
                    placeholder="Enter Your number"
                    className="bg-transparent py-2  w-[90%] h-full  outline-none mx-4"
                  />
                </div>
              </div>
              <div className="mb-3 flex flex-col md:flex-row">
                <label
                  htmlFor="userPass"
                  className="text-[20px] text-slate-600 font-[500] w-[100px]"
                >
                  Password
                </label>
                <div className=" border-[1px] border-slate-600 w-full md:w-[350px] rounded-md flex flex-row items-center justify-between px-1">
                  <input
                    type={password ? "text" : "password"}
                    id="userPass"
                    value={userInfo.pass}
                    name="password"
                    placeholder="Enter your password"
                    className="bg-transparent py-2 w-[80%] h-full outline-none mx-4"
                  />
                  <span className="text-right">
                    {password ? (
                      <FaEyeSlash
                        className="cursor-pointer text-right mr-2"
                        onClick={closePassword}
                      />
                    ) : (
                      <FaEye
                        className="cursor-pointer text-right mr-2"
                        onClick={showPassword}
                      />
                    )}
                  </span>
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
