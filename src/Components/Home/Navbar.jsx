import React, { useState, useRef } from 'react'
import Logo from '../../Assets/img/logo.png'
import Button from 'react-bootstrap/Button';
import { FaUser } from 'react-icons/fa6'
import Modal from 'react-bootstrap/Modal'
import LoginImg from '../../Assets/img/Rectangle.png'
import { FcGoogle } from 'react-icons/fc'
import { FaSquareFacebook } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { Link } from 'react-router-dom'


function Navbar() {
    const modalStyle = {
        fontFamily: "'Josefin Sans', sans-serif",
        backgroundColor: '#fff',
        borderRadius: '20px',
        width: '700px'
        // Default width for larger screens

    };
    const mobileModalStyle = {
        width: '100%',  // 100% width on mobile devices
    };





    const [show, setShow] = useState(false);
    const modalRef = useRef(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleModalClick = (e) => {
        // Prevent closing modal when clicking on the modal content
        e.stopPropagation();
    };
    const handleBackdropClick = () => {
        // Close the modal when clicking outside the modal
        handleClose();
    };

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
                <Modal show={show} onHide={handleClose} onClick={handleBackdropClick} centered ref={modalRef}>
                    <Modal.Body onClick={handleModalClick} style={{ ...modalStyle, ...(window.innerWidth <= 800 && mobileModalStyle) }}>
                        <div className='flex flex-row items-start'>
                            <div className='w-[350px] hidden md:block rounded-lg'>
                                <img src={LoginImg} alt="login_img" className='w-full h-full rounded-lg' />
                            </div>
                            <div className='w-[350px] px-4 py-2'>
                                <div className='mb-3'>
                                    <p className='leading-6 text-slate-6000 font-[600] mb-0'>Email</p>
                                    <input type="text" placeholder='Enter the Email' className='w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg' />
                                </div>
                                <div className='mb-3'>
                                    <p className='leading-6 text-slate-6000 font-[600] mb-0'>Password</p>
                                    <input type="password" placeholder='Enter the password' className='w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg' />
                                    <div className='text-right'>
                                        <p className='text-slate-500 hover:underline text-[16px] cursor-pointer'>Forgot Password</p>
                                    </div>
                                </div>

                                <div className='w-full my-3'>
                                    <Button style={{ padding: "10px 18px", textAlign: 'center', backgroundColor: "#e3292d", border: "none", borderRadius: '40px' }} className='w-full hover:opacity-80'>Login</Button>
                                </div>
                                <div className='text-center mt-5'>
                                    <p className='mb-3'>or log In with</p>
                                    <div>
                                        <FcGoogle className='inline mx-2 text-[30px] cursor-pointer hover:opacity-70' />
                                        <FaSquareFacebook className='inline mx-3 text-[30px] cursor-pointer hover:opacity-70' />
                                        <MdOutlineWifiCalling3 className='inline mx-3 text-[30px] cursor-pointer hover:opacity-70' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default Navbar
