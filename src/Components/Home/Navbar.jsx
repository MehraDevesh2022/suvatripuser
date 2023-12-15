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
