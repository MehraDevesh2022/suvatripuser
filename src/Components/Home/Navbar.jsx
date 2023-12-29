import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Logo from '../../Assets/img/logo.png'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import axios from 'axios';
import SignUp from './SignUp/SignUp';
import ProfileDropdown from './SignUp/ProfileDropdown';
import { useAppContext } from '../../context/store';
function Navbar() {
  const [showSignup, setShowSignup] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const { state, actions } = useAppContext();

  const personalProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token is missing");
        return;
      }
    
      const config = {
        headers: { Authorization: `Bearer ${token}` },
       
      };
  
      const response = await axios.get("http://localhost:8000/auth/profile", config);
  
  
      if (response.data.success && response.data.success === true) {
          console.log(response.data.user , "response.data.user");
        actions.setProfileData(response.data.user);
        actions.setAuthType(response.data.authType);
        console.log(response.data.authType , "response.data.authType");
        console.log(state.isLoggedIn);

      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
  
  
    useEffect(() => {
      personalProfile();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.isLoggedIn]);; // Run this effect only once when the component mounts

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleLogout = () => {
    actions.login(false);
    localStorage.removeItem('token');
    // Additional cleanup if needed
  };

  const closeProfileDropdown = () => {
    setShowProfileDropdown(false);
  };

  return (
    <div className='min-w-fit max-w-[1200px] mx-auto'>
      <div className="flex  flex-row justify-between items-center px-2 md:px-5 py-3">
        <Link to="/">
          <div className='w-[150px] md:w-[200px]'>
            <img src={Logo} alt="img" className='w-full h-full' />
          </div>
        </Link>
        <div className="w-[500px] hidden md:block cursor-pointer">
          <ul className="flex flex-row justify-between items-center px-3 my-auto">
            <Link to='/about' className='no-underline text-[#000]'>
              <li>About</li>
            </Link>
            <li className='text-[#000]'>Currency</li>
            <Link to='/help' className='no-underline text-[#000]'>
              <li>Help</li>
            </Link>
          </ul>
        </div>
        <div>
          {state.isLoggedIn ? (
            <div>
              <Button
                style={{
                  padding: '10px 18px',
                  textAlign: 'center',
                  backgroundColor: '#e3292d',
                  border: 'none',
                  borderRadius: '40px',
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
                padding: '10px 18px',
                textAlign: 'center',
                backgroundColor: '#e3292d',
                border: 'none',
                borderRadius: '40px',
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
      </div>
      {showSignup && <SignUp show={showSignup} setShow={setShowSignup}  />}
    </div>

  );
}

export default Navbar;
