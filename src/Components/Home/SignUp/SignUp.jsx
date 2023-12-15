import React, { useState, useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import LoginImg from '../../../Assets/img/Rectangle.png'
import { FcGoogle } from 'react-icons/fc'
import { FaSquareFacebook } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import Button from 'react-bootstrap/Button';

function SignUp({ show, setShow }) {
    const [handleLoginShow, setHandleLoginShow] = useState(true)
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

    const modalRef = useRef(null);

    const handleClose = () => setShow(false);



    const showLogin = () => setHandleLoginShow(true)
    const showSignUp = () => setHandleLoginShow(false)



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
            {
                handleLoginShow ? <Modal show={show} onHide={handleClose} onClick={handleBackdropClick} centered ref={modalRef}>
                    <Modal.Body onClick={handleModalClick} style={{ ...modalStyle, ...(window.innerWidth <= 800 && mobileModalStyle) }}>
                        <div className='flex flex-row items-start'>
                            <div className='w-[350px] h-[430px] hidden md:block rounded-lg'>
                                <img src={LoginImg} alt="login_img" className='w-full h-full rounded-lg' />
                            </div>
                            <div className='w-[350px] px-4 py-3'>
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
                                    <Button style={{ padding: "10px 18px", textAlign: 'center', backgroundColor: "grey", border: "none", borderRadius: '40px' }} className='w-full hover:opacity-80 mt-4' onClick={showSignUp}>Sign-up</Button>
                                </div>
                                <div className='text-center mt-3'>
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
                </Modal> : <Modal show={show} onHide={handleClose} onClick={handleBackdropClick} centered ref={modalRef}>
                    <Modal.Body onClick={handleModalClick} style={{ ...modalStyle, ...(window.innerWidth <= 800 && mobileModalStyle) }}>
                        <div className='flex flex-row items-start'>
                            <div className='w-[350px] h-[430px] hidden md:block rounded-lg'>
                                <img src={LoginImg} alt="login_img" className='w-full h-full rounded-lg' />
                            </div>
                            <div className='w-[350px] px-4 py-3'>
                                <div className='mb-2'>
                                    <input type="text" placeholder='Enter the Name' className='w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg' />
                                </div>
                                <div className='mb-2'>
                                    <input type="email" placeholder='Email' className='w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg' />
                                </div>
                                <div className='mb-2'>
                                    <input type="number" placeholder='Enter the phone' className='w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg' />
                                </div>
                                <div className='mb-2'>
                                    <input type="Password" placeholder='Enter your password' className='w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg' />
                                    <div className='text-right'>
                                        <p className='text-slate-500 hover:underline text-[16px] cursor-pointer'>Forgot Password</p>
                                    </div>
                                </div>

                                <div className='w-full my-3'>
                                    <Button style={{ padding: "10px 18px", textAlign: 'center', backgroundColor: "#e3292d", border: "none", borderRadius: '40px' }} className='w-full hover:opacity-80'>SignUp</Button>
                                    <Button style={{ padding: "10px 18px", textAlign: 'center', backgroundColor: "grey", border: "none", borderRadius: '40px' }} className='w-full hover:opacity-80 mt-3' onClick={showLogin}>Login</Button>
                                </div>
                                <div className='text-center mt-3'>
                                    <p className='mb-2'>or log In with</p>
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
            }
            {/* SignUp Modal */}




            {/* Login Modal */}


        </div>
    )
}

export default SignUp
