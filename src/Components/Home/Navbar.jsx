import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Logo from "../../Assets/img/logo.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import India from "../../Assets/img/india.png";
import AedImg from '../../Assets/img/united-arab-emirates.png'
import Qatar from '../../Assets/img/qatar.png'
import USA from '../../Assets/img/united-states.png'
import AUD from '../../Assets/img/australia.png'
import UK from '../../Assets/img/united-kingdom.png'
import Euro from '../../Assets/img/european-union.png'
import Nepal from '../../Assets/img/nepal.png'
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import ProfileDropdown from "./SignUp/ProfileDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { useAppContext } from "../../context/store";
import { useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiTireIronCross } from "react-icons/gi";


function Navbar() {
  const [showSignup, setShowSignup] = useState(false);
  const [mobileNavbar, setMobileNabar] = useState(false)
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const { state, actions } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
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
    fontWeight: '500',
    fontSize : '20px',
    
    
  }

  

  return (
    <div className="min-w-fit max-w-[1200px] mx-auto">
      <div className="flex flex-row justify-between items-center px-2 md:px-5 py-3">
        <Link to="/">
          <div className="w-[150px] md:w-[200px]">
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

              <Dropdown.Menu style={{ backgroundColor: "#FF9C99" }}>
                <Dropdown.Item href="#/action-1">
                  <div className="flex flex-row items-center justify-around">
                    <img
                      src={India}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">INR</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <div className="flex flex-row items-center justify-around">
                    <img
                      src={Nepal}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">NPR</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around">
                    <img
                      src={AedImg}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">AED</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around">
                    <img
                      src={Qatar}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">QAR</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around">
                    <img
                      src={AUD}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">AUD</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around">
                    <img
                      src={USA}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">US</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around">
                    <img
                      src={UK}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">UK</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around">
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
        <div className="hidden xl:block">
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
          {
            mobileNavbar ?  <GiTireIronCross className="text-[35px] font-[700] text-[#000] cursor-pointer" onClick={() =>{
              setMobileNabar(!mobileNavbar)
            }}/> :  <GiHamburgerMenu className="text-[35px] font-[700] text-[#000] cursor-pointer" onClick={() => {
              setMobileNabar(!mobileNavbar)
            }}/>
          }       
        </div>
        {/* Mobile Navbar */}
        <div className={`fixed bg-[#FF9D99] z-10 top-16 duration-300 w-[50%] ${mobileNavbar ? 'left-0' :"left-[-100%]"}`}>
          {/* Sign-up button */}
        <div className="mt-2 ml-4">
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
                padding: "10px",
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
          <ul className="flex flex-col justify-between px-4 py-1 z-30">
            <Link to="/about" className="no-underline text-[#000]">
              <li className="font-[500] text-[20px] m-3">About</li>
            </Link>
            {/* Here is currencyocde */}
            <Dropdown>
              <Dropdown.Toggle style={mobileDrown} className="bg-transparent">
                Currency
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ backgroundColor: "#FF9C99" }}>
                <Dropdown.Item href="#/action-1">
                  <div className="flex flex-row items-center justify-around">
                    <img
                      src={India}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">INR</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <div className="flex flex-row items-center justify-around">
                    <img
                      src={Nepal}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">NPR</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around">
                    <img
                      src={AedImg}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">AED</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around">
                    <img
                      src={Qatar}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">QAR</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around">
                    <img
                      src={AUD}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">AUD</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around">
                    <img
                      src={USA}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">US</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around">
                    <img
                      src={UK}
                      alt="india_currency"
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-[600] ml-2 text-[18px]">UK</span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <div className="flex flex-row items-center justify-around">
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
              <li className="font-[500] text-[20px] m-3">Help</li>
            </Link>
          </ul>
        </div>
      </div>
      {showSignup && <SignUp show={showSignup} setShow={setShowSignup} />}
    </div>
  );
}

export default Navbar;
