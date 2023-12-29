import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Logo from '../../Assets/img/logo.png';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import ProfileDropdown from './SignUp/ProfileDropdown';
import { useAppContext } from '../../context/store';
import { useLocation } from 'react-router-dom';
function Navbar() {
  const [showSignup, setShowSignup] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const { state, actions } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const personalProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token is missing');
        actions.login(false); 
        if(location.pathname === '/personaldetails')
        navigate('/'); 
        return;
      }
  
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
  
      const response = await axios.get('http://localhost:8000/auth/profile', config);
  
      if (response.data.success && response.data.success === true) {
        console.log(response.data.user, 'response.data.user');
        actions.setProfileData(response.data.user);
        actions.setAuthType(response.data.authType);
        actions.login(true);
      }
    } catch (error) {
      actions.setProfileData({});
      console.error('Error fetching profile:', error);
    }
  };
  

  useEffect(() => {
    const fetchData = async () => {
      if (!state.isLoggedIn) {
        actions.login(false);
        if(location.pathname === '/personaldetails')
           navigate('/'); 
        return;
      }
  
      try {
        await personalProfile();
      } catch (error) {
        console.error('Error in fetchData:', error);
      }
    };
  
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isLoggedIn ]);
  
  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleLogout = () => {
    actions.login(false);
    actions.setProfileData({});
    actions.setAuthType('local');
    localStorage.removeItem('token');
    localStorage.removeItem('authType');
    // Additional cleanup if needed
  };

  const closeProfileDropdown = () => {
    setShowProfileDropdown(false);
  };

  return (
    <div className="min-w-fit max-w-[1200px] mx-auto">
      <div className="flex flex-row justify-between items-center px-2 md:px-5 py-3">
        <Link to="/">
          <div className="w-[150px] md:w-[200px]">
            <img src={Logo} alt="img" className="w-full h-full" />
          </div>
        </Link>
        <div className="w-[500px] hidden md:block cursor-pointer">
          <ul className="flex flex-row justify-between items-center px-3 my-auto">
            <Link to="/about" className="no-underline text-[#000]">
              <li>About</li>
            </Link>
            <li className="text-[#000]">Currency</li>
            <Link to="/help" className="no-underline text-[#000]">
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
      {showSignup && <SignUp show={showSignup} setShow={setShowSignup} />}
    </div>
  );
}

export default Navbar;
