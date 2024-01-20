import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Logo from "../../Assets/img/red.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import India from "../../Assets/img/india.png";
import AedImg from "../../Assets/img/united-arab-emirates.png";
import Qatar from "../../Assets/img/qatar.png";
import USA from "../../Assets/img/united-states.png";
import AUD from "../../Assets/img/australia.png";
import UK from "../../Assets/img/united-kingdom.png";
import Euro from "../../Assets/img/european-union.png";
import Nepal from "../../Assets/img/nepal.png";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import ProfileDropdown from "./SignUp/ProfileDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { useAppContext } from "../../context/store";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [showSignup, setShowSignup] = useState(false);
  const [mobileNavbar, setMobileNabar] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isCurrencyListVisible, setCurrencyListVisibility] = useState(false);
  const { state, actions } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const toggleCurrencyList = () => {
    setCurrencyListVisibility(!isCurrencyListVisible);
  };

  const handleLogout = () => {
    actions.login(false);

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    actions.setProfileData({});
    localStorage.removeItem("authType");
    if (location.pathname === "/personaldetails") navigate("/");

    // Additional cleanup if needed
  };

  const closeProfileDropdown = () => {
    setShowProfileDropdown(false);
  };

  const DropdownStyle = {
    border: "none",
    color: "#000",
  };
  const mobileDrown = {
    border: "none",
    color: "#000",
    fontWeight: "500",
    fontSize: "20px",
  };

  return (
    <div className="min-w-fit max-w-[1200px] mx-auto">
      <div className="flex flex-row justify-between items-center px-2 md:px-5 py-3">
        <Link to="/">
          <div className="w-[200px]">
            <img src={Logo} alt="img" className="w-full h-full" />
          </div>
        </Link>
        <div className="w-[500px] hidden lg:block cursor-pointer">
          <ul className="flex flex-row justify-between items-center px-3 my-auto">
            <Link to="/about" className="no-underline text-[#000]">
              <li>About</li>
            </Link>
            {/* Here is currencyocde */}
            <Dropdown>
              <Dropdown.Toggle style={DropdownStyle} className="bg-transparent">
                Currency
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ backgroundColor: "#fff" }}>
                <Dropdown.Item href="#/action-1">
                  <div className="flex flex-row items-center justify-around hover:bg-slate-400 duration-300">
                    <img
                      src={India}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">INR</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <div className="flex flex-row items-center justify-around hover:bg-slate-400 duration-300">
                    <img
                      src={Nepal}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">NPR</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around hover:bg-slate-400 duration-300">
                    <img
                      src={AedImg}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">AED</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around hover:bg-slate-400 duration-300">
                    <img
                      src={Qatar}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">QAR</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around hover:bg-slate-400 duration-300">
                    <img
                      src={AUD}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">AUD</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around hover:bg-slate-400 duration-300">
                    <img
                      src={USA}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">US</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around hover:bg-slate-400 duration-300">
                    <img
                      src={UK}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">UK</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around hover:bg-slate-400 duration-300">
                    <img
                      src={Euro}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">EUR</span>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* End of currenc code */}
            <Link to="/help" className="no-underline text-[#000]">
              <li>Help</li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:block">
          {state.isLoggedIn ? (
            <div>
              <Button
                style={{
                  padding: "10px 18px",
                  textAlign: "center",
                  backgroundColor: "#e3292d",
                  border: "none",
                  borderRadius: "40px",
                }}
                onClick={handleProfileClick}
              >
                <span>
                  <FaUser className="inline mx-2 items-center" />
                </span>
                Profile
              </Button>
              {showProfileDropdown && (
                <ProfileDropdown
                  handleLogout={handleLogout}
                  closeDropdown={closeProfileDropdown}
                />
              )}
            </div>
          ) : (
            <Button
              style={{
                padding: "10px 18px",
                textAlign: "center",
                backgroundColor: "#e3292d",
                border: "none",
                borderRadius: "40px",
              }}
              onClick={() => setShowSignup(true)}
            >
              <span>
                <FaUser className="inline mx-2 items-center" />
              </span>
              Signup
            </Button>
          )}
        </div>
        <div className="block lg:hidden">
          {mobileNavbar ? (
            <RxCross1 
              className="text-[35px] font-[700] text-[#000] cursor-pointer"
              onClick={() => {
                setMobileNabar(!mobileNavbar);
              }}
            />
          ) : (
            <GiHamburgerMenu
              className="text-[30px] font-[700] text-[#000] cursor-pointer"
              onClick={() => {
                setMobileNabar(!mobileNavbar);
              }}
            />
          )}
        </div>
        {/* Mobile Navbar */}
        <div
          className={`fixed bg-[#fff] z-10 h-screen top-0 duration-300 w-[50%]   ${
            mobileNavbar ? "left-0" : "left-[-100%]"
          }`}
        >
          {/* Sign-up button */}
          <div className="w-full sm:w-[55%] mx-auto">
            <div className="w-[150px] sm:w-[250px] mx-auto my-4">
              <img src={Logo} alt="img" className="w-full h-full" />
            </div>
            <div className="mt-2 ml-6">
              {state.isLoggedIn ? (
                <div className={`mx-auto w-[120px] text-left`}>
                  <Button
                    style={{
                      padding: "10px 18px",
                      textAlign: "center",
                      backgroundColor: "#e3292d",
                      border: "none",
                      borderRadius: "20px",
                     
                    }}
                    onClick={handleProfileClick}
                  >
                    <span>
                      <FaUser className="inline mx-2 items-center" />
                    </span>
                    Profile
                  </Button>
                  {showProfileDropdown && (
                    <div className={`text-left ${showProfileDropdown ? 'block duration-500' : 'hidden'}`}>
                      <ul className="text-left p-1">
                       <Link 
                        to="/booking"
                        className="no-underline text-[#000]"
                       >
                          <li className="text-[16px] py-2">- My Booking</li>
                       </Link>
                      <Link
                       to="/personaldetails"
                       className="no-underline text-[#000]"
                      >
                          <li  className="text-[16px] py-2">- My Profile</li>
                      </Link>
                        <li  className="text-[16px] py-2">- Logout</li>
                      </ul>
                    </div>
                    // <ProfileDropdown
                    //   handleLogout={handleLogout}
                    //   closeDropdown={closeProfileDropdown}
                    // />
                  )}
                </div>
              ) : (
                <Button
                  style={{
                    padding: "10px 18px",
                    textAlign: "center",
                    backgroundColor: "#e3292d",
                    border: "none",
                    borderRadius: "20px",
                  }}
                  onClick={() => setShowSignup(true)}
                >
                  <span>
                    <FaUser className="inline mx-2 items-center" />
                  </span>
                  Signup
                </Button>
              )}
            </div>
            <ul className="flex flex-col justify-between items-center  py-1 z-30">
              <Link to="/about" className="no-underline text-[#000]">
                <li className="font-[500] text-left w-[120px] text-[18px] sm:text-[30px] md:text-[35px] m-3">
                  About
                </li>
              </Link>
              {/* Here is currencyocde */}
              <div className={`mb-3   ${isCurrencyListVisible ? "h-auto rounded-lg  duration-300" : "h-[50px]"}`}>
                <div
                  className="flex flex-row items-center justify-start w-[120px]"
                  onClick={toggleCurrencyList}
                >
                  <li className="font-[500] text-[18px]  px-1 py-2 sm:text-[30px]  md:text-[35px] ">
                    Currency
                  </li>
                  <li>
                    <FaChevronDown  className={`${isCurrencyListVisible ? 'block' : 'hidden'}`}/>
                  </li>
                </div>
                <div className={`${isCurrencyListVisible ? "block duration-300" : "hidden"}`}>
                  <div className="flex flex-row items-center justify-around mb-2 p-[1px] hover:bg-slate-200 duration-300">
                    <img
                      src={India}
                      alt="india_currency"
                      className="w-[25px] h-[25px]"
                    />
                    <span className="font-[600] ml-2 text-[20px]">INR</span>
                  </div>

                  <div className="flex flex-row items-center justify-around mb-2 p-[1px] hover:opacity-70 duration-300">
                    <img
                      src={Nepal}
                      alt="india_currency"
                      className="w-[25px] h-[25px]"
                    />
                    <span className="font-[600] ml-2 text-[20px]">NPR</span>
                  </div>

                  <div className="flex flex-row items-center justify-around mb-2 p-[1px] hover:opacity-70 duration-300">
                    <img
                      src={AedImg}
                      alt="india_currency"
                      className="w-[25px] h-[25px]"
                    />
                    <span className="font-[600] ml-2 text-[20px]">AED</span>
                  </div>

                  <div className="flex flex-row items-center justify-around mb-2 p-[1px] hover:opacity-70 duration-300">
                    <img
                      src={Qatar}
                      alt="india_currency"
                      className="w-[25px] h-[25px]"
                    />
                    <span className="font-[600] ml-2 text-[20px]">QAR</span>
                  </div>

                  <div className="flex flex-row items-center justify-around mb-2 p-[1px] hover:opacity-70 duration-300">
                    <img
                      src={AUD}
                      alt="india_currency"
                      className="w-[25px] h-[25px]"
                    />
                    <span className="font-[600] ml-2 text-[20px]">AUD</span>
                  </div>

                  <div className="flex flex-row items-center justify-around mb-2 p-[1px] hover:opacity-70 duration-300">
                    <img
                      src={USA}
                      alt="india_currency"
                      className="w-[25px] h-[25px]"
                    />
                    <span className="font-[600] ml-2 text-[20px]">US</span>
                  </div>

                  <div className="flex flex-row items-center justify-around mb-2 p-[1px] hover:opacity-70 duration-300">
                    <img
                      src={UK}
                      alt="india_currency"
                      className="w-[25x] h-[25px]"
                    />
                    <span className="font-[600] ml-2 text-[20px]">UK</span>
                  </div>

                  <div className="flex flex-row items-center justify-around mb-2 p-[1px] hover:opacity-70 duration-300">
                    <img
                      src={Euro}
                      alt="india_currency"
                      className="w-[25px] h-[25px]"
                    />
                    <span className="font-[600] ml-2 text-[20px]">EUR</span>
                  </div>
                </div>
              </div>

              {/* End of currenc code */}
              <Link to="/help" className="no-underline text-[#000]">
                <li className="font-[500] text-[18px] my-1 w-[120px] p-2   sm:text-[30px] md:text-[35px]">
                  Help
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {showSignup && <SignUp show={showSignup} setShow={setShowSignup} />}
    </div>
  );
}

export default Navbar;
