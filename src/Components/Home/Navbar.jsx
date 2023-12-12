import React, { useState } from 'react'
import Logo from '../../Assets/img/logo.png'
import Button from 'react-bootstrap/Button';
import { FaUser } from 'react-icons/fa6'
import Modal from 'react-bootstrap/Modal'
import LoginImg from '../../Assets/img/Rectangle.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import GoogleIcon from '../../Assets/img/Google.png'

function Navbar() {
    const styleText = {
        fontFamily: "'Josefin Sans', sans-serif",
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className='flex bg-[#feefef] flex-row justify-between items-center px-3 md:px-5 py-3'>
                <div>
                    <img src={Logo} alt="img" />
                </div>
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
            </div >
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Please Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col className='hidden md:block'>
                                    <div>
                                        <img src={LoginImg} alt="login-img" className='rounded-md' />
                                    </div>
                                </Col>
                                <Col>
                                    <div style={styleText}>
                                        <div className="mb-1">
                                            <label for="Email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                        </div>
                                        <div className="mb-1">
                                            <label for="Password" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="Password" placeholder="Enter your password" />
                                            <div className='text-right cursor-pointer'>
                                                <p className='hover:underline'>forgot password</p>
                                            </div>
                                        </div>
                                        <div className='mt-2 cursor-pointer'>
                                            <Button style={{ padding: "10px 18px", textAlign: 'center', backgroundColor: "#e3292d", border: "none", borderRadius: '40px' }} className='w-full hover:opacity-75'>Login</Button>
                                        </div>
                                        <div className='mt-2 text-center cursor-pointer'>
                                            <span>or login with</span>
                                            <div className='w-[30px] h-[30px] mx-auto mt-1'>
                                                <img src={GoogleIcon} alt="icon_imaages" className='w-full h-full' />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </>
        </div>
    )
}

export default Navbar
