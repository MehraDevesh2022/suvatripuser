import React, { useState } from 'react'
import { FaUser, FaWifi } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HotelRooms() {
    const [number, setnumber] = useState(1)

    const IncreseadNumber = () => {
        setnumber((prevNum) => (prevNum + 1))
    }
    const decreasedNumber = () => {
        setnumber((prevNum) => (prevNum > 0 ? prevNum - 1 : prevNum));
    }
    const inlineStyle = {
        backgroundColor: '#f3f5f8',
        padding: '10px 10px'
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            {/* This is modal Code */}
            <>
                <Modal show={show} onHide={handleClose} size='lg' centered >
                    <Modal.Body>
                        <Container>
                            <Row>
                                <div className='mb-3'>
                                    <h3 className='text-3xl font-[700] tracking-wider'>Enter Your Details</h3>
                                </div>
                            </Row>
                            <Row>
                                <Col>
                                    <div class="input-group mb-3">
                                        <input type="text" style={inlineStyle} className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" />
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group mb-3">
                                        <input type="text" style={inlineStyle} className="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div class="input-group mb-3">
                                        <input type="number" style={inlineStyle} className="form-control" placeholder="Number" aria-label="Number" aria-describedby="basic-addon1" />
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group mb-3">
                                        <input type="Email" style={inlineStyle} className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div class="input-group mb-3">
                                    <input type="Email" style={inlineStyle} className="form-control" placeholder="Estimated Arrival Time" aria-label="Estimated Arrival Time" aria-describedby="basic-addon1" />
                                </div>
                            </Row>
                            <Row>
                                <div className='mb-3'>
                                    <textarea name="textarea" className='w-full h-[150px] border-[1px] border-slate-300 bg-[#f3f5f8] outline-none rounded-md px-2 py-1' placeholder='Any Special Requests' ></textarea>
                                </div>
                            </Row>

                            <div className='w-full md:w-[400px] mx-auto'>
                                <button className='w-full bg-[#f62c31] px-4 py-3 rounded-lg text-[#fff] font-[600]'>Complete Your Booking</button>
                            </div>
                        </Container>
                    </Modal.Body>
                </Modal>
            </>
            {/* First card */}
            <div className='w-full  bg-slate-50 my-3 grid grid-cols-2 md:grid-cols-4 gap-4 p-2 rounded-lg shadow-md'>
                <div className='border-r-[1px] px-3 border-slate-400'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] mb-0 text-[#f86d71]'>Deluxe Room</h3>
                    <div>
                        <FaUser className='inline' />
                        <FaUser className='inline mx-2' />
                    </div>
                    <p className='mb-1 mt-2'><span className='text-[16px]'>--</span> Room Only</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> Free Cancleation</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> Child Friendly</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> BreakFast Include</p>

                </div>
                <div className='border-r-[1px] px-4 border-slate-400'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] mb-3 text-[#f86d71]'>Animities</h3>
                    <p className='mb-1 mt-2'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                    <p className='mb-1'><span><MdOutlineHomeWork className='inline mr-2' /></span> Restrutant</p>
                    <p className='mb-1'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                </div>
                <div className='pl-5 border-r-[1px] border-slate-400'>
                    <h3 className='text-[25px] font-[600] mb-2 text-[#f86d71]'>Price</h3>
                    <p className='mb-2 text-[20px] font-[800]'>NPR 4,972</p>
                    <p className='mb-2 text-slate-500'>+720 Taxes & Fees</p>
                    <p className='mb-2 text-slate-500'>Per Night</p>
                </div>
                <div className='px-3'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] text-[#f86d71]'>No of Rooms</h3>
                    <div className='flex flex-row items-center mb-3'>
                        <button onClick={decreasedNumber}><GrFormPrevious className='text-[25px]  font-[700]' /></button>
                        <span className='bg-slate-600 rounded-lg px-2 text-[#fff] text-[16px]'>{number > 0 ? `+${number}` : number}</span>
                        <button onClick={IncreseadNumber}><MdOutlineNavigateNext className='text-[25px]' /></button>
                        <span className={`${show ? "bg-[#129035]" : "bg-slate-600"} text-[13px] text-[#fff] px-2 py-1 ml-0 md:ml-2 rounded-lg  cursor-pointer`} onClick={handleShow}>{show ? "selected" : "Select"}</span>
                    </div>
                    <p className='text-[21px] font-[700]  mb-1'>NPR 4,972</p>
                    <p className='text-[21px]'>Total</p>
                </div>

            </div>
            {/* Second Card */}
            <div className='w-full  bg-slate-50 my-3 grid grid-cols-2 md:grid-cols-4 gap-4 p-2 rounded-lg shadow-md'>
                <div className='border-r-[1px] px-3 border-slate-400'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] mb-0 text-[#f86d71]'>Deluxe Room</h3>
                    <div>
                        <FaUser className='inline' />
                        <FaUser className='inline mx-2' />
                    </div>
                    <p className='mb-1 mt-2'><span className='text-[16px]'>--</span> Room Only</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> Free Cancleation</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> Child Friendly</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> BreakFast Include</p>

                </div>
                <div className='border-r-[1px] px-4 border-slate-400'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] mb-3 text-[#f86d71]'>Animities</h3>
                    <p className='mb-1 mt-2'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                    <p className='mb-1'><span><MdOutlineHomeWork className='inline mr-2' /></span> Restrutant</p>
                    <p className='mb-1'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                </div>
                <div className='pl-5 border-r-[1px] border-slate-400'>
                    <h3 className='text-[25px] font-[600] mb-2 text-[#f86d71]'>Price</h3>
                    <p className='mb-2 text-[20px] font-[800]'>NPR 4,972</p>
                    <p className='mb-2 text-slate-500'>+720 Taxes & Fees</p>
                    <p className='mb-2 text-slate-500'>Per Night</p>
                </div>
                <div className='px-3'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] text-[#f86d71]'>No of Rooms</h3>
                    <div className='flex flex-row items-center mb-3'>
                        <button onClick={decreasedNumber}><GrFormPrevious className='text-[25px]  font-[700]' /></button>
                        <span className='bg-slate-600 rounded-lg px-2 text-[#fff] text-[16px]'>{number > 0 ? `+${number}` : number}</span>
                        <button onClick={IncreseadNumber}><MdOutlineNavigateNext className='text-[25px]' /></button>
                        <span className={`${show ? "bg-[#129035]" : "bg-slate-600"} text-[13px] text-[#fff] px-2 py-1 ml-0 md:ml-2 rounded-lg  cursor-pointer`} onClick={handleShow}>{show ? "selected" : "Select"}</span>
                    </div>
                    <p className='text-[21px] font-[700]  mb-1'>NPR 4,972</p>
                    <p className='text-[21px]'>Total</p>
                </div>

            </div>
            {/* Third Card */}
            <div className='w-full  bg-slate-50 my-3 grid grid-cols-2 md:grid-cols-4 gap-4 p-2 rounded-lg shadow-md'>
                <div className='border-r-[1px] px-3 border-slate-400'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] mb-0 text-[#f86d71]'>Deluxe Room</h3>
                    <div>
                        <FaUser className='inline' />
                        <FaUser className='inline mx-2' />
                    </div>
                    <p className='mb-1 mt-2'><span className='text-[16px]'>--</span> Room Only</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> Free Cancleation</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> Child Friendly</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> BreakFast Include</p>

                </div>
                <div className='border-r-[1px] px-4 border-slate-400'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] mb-3 text-[#f86d71]'>Animities</h3>
                    <p className='mb-1 mt-2'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                    <p className='mb-1'><span><MdOutlineHomeWork className='inline mr-2' /></span> Restrutant</p>
                    <p className='mb-1'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                </div>
                <div className='pl-5 border-r-[1px] border-slate-400'>
                    <h3 className='text-[25px] font-[600] mb-2 text-[#f86d71]'>Price</h3>
                    <p className='mb-2 text-[20px] font-[800]'>NPR 4,972</p>
                    <p className='mb-2 text-slate-500'>+720 Taxes & Fees</p>
                    <p className='mb-2 text-slate-500'>Per Night</p>
                </div>
                <div className='px-3'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] text-[#f86d71]'>No of Rooms</h3>
                    <div className='flex flex-row items-center mb-3'>
                        <button onClick={decreasedNumber}><GrFormPrevious className='text-[25px]  font-[700]' /></button>
                        <span className='bg-slate-600 rounded-lg px-2 text-[#fff] text-[16px]'>{number > 0 ? `+${number}` : number}</span>
                        <button onClick={IncreseadNumber}><MdOutlineNavigateNext className='text-[25px]' /></button>
                        <span className={`${show ? "bg-[#129035]" : "bg-slate-600"} text-[13px] text-[#fff] px-2 py-1 ml-0 md:ml-2 rounded-lg  cursor-pointer`} onClick={handleShow}>{show ? "selected" : "Select"}</span>
                    </div>
                    <p className='text-[21px] font-[700]  mb-1'>NPR 4,972</p>
                    <p className='text-[21px]'>Total</p>
                </div>

            </div>
        </div>


    )
}

export default HotelRooms
