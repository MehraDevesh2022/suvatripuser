<<<<<<< HEAD
import React, { useState } from 'react'
import Logo from '../../Assets/img/logo.png'
import Button from 'react-bootstrap/Button';
import { FaUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import SignUp from './SignUp/SignUp';


function Navbar() {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);




    return (
        <div>
            <div className='flex  flex-row justify-between items-center px-3 md:px-5 py-3'>
                <Link to="/">
                    <div>
                        <img src={Logo} alt="img" />
                    </div>
                </Link>
                <div className='w-[400px] hidden md:block cursor-pointer'>
                    <ul className='flex flex-row justify-between items-center px-3 my-auto'>
                        <li>About</li>
                        <li>Currency</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div>
                    <Button style={{ padding: "10px 18px", textAlign: 'center', backgroundColor: "#e3292d", border: "none", borderRadius: '40px' }} onClick={handleShow}><span><FaUser className='inline mx-2 items-center' /></span>Signup</Button>
                </div>
            </div>
            <div>
                <SignUp show={show} setShow={setShow} />
            </div>
        </div>
    )
}

export default Navbar
=======
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Logo from '../../Assets/img/logo.png'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import axios from 'axios';
import SignUp from './SignUp/SignUp';
import ProfileDropdown from './SignUp/ProfileDropdown'; 

function Navbar() {
  const [showSignup, setShowSignup] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          const response = await axios.get('http://localhost:8000/auth/profile', {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response.data) {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } catch (error) {
          setIsLoggedIn(false);
        }
      }
    };

    checkAuthentication();
  }, []); // Run this effect only once when the component mounts

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    // Additional cleanup if needed
  };

  const closeProfileDropdown = () => {
    setShowProfileDropdown(false);
  };


  return (
    <div>
      <div className="flex  flex-row justify-between items-center px-3 md:px-5 py-3">
        <Link to="/">
          <div>
            <img src={Logo} alt="img" />
          </div>
        </Link>
        <div className="w-[400px] hidden md:block cursor-pointer">
          <ul className="flex flex-row justify-between items-center px-3 my-auto">
            <li>About</li>
            <li>Currency</li>
            <li>Help</li>
          </ul>
        </div>
        <div>
        {isLoggedIn ? (
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
      <div>
        {showSignup && <SignUp show={showSignup} setShow={setShowSignup} setIsLoggedIn ={setIsLoggedIn} />}
      </div>
   
        </div>
        </div>

  );
}

export default Navbar;
>>>>>>> d17df1aed87dec0d0bf5cc18b40bbfd9f320fb0e
