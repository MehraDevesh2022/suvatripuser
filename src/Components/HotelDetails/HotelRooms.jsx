import React, { useState, useEffect } from 'react';
import { FaUser, FaWifi } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAppContext } from "../../context/store";

function HotelRooms() {
    const [number, setNumber] = useState(1);
    const [show, setShow] = useState(false);
    const { state } = useAppContext();
    const hotelData = state.hotelDetails;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const inlineStyle = {
        backgroundColor: '#f3f5f8',
        padding: '10px 10px'
    }

    useEffect(() => {

    }, []); 
    const IncrementNumber = () => {
        setNumber((prevNum) => prevNum + 1);
    };

    const DecreaseNumber = () => {
        setNumber((prevNum) => (prevNum > 0 ? prevNum - 1 : prevNum));
    };

    const renderAmenities = (amenities) => {
        return amenities.map((amenity, index) => (
            <p key={index} className="mb-1 text-sm md:text-[17px]">
                <span>{amenity.icon}</span> {amenity.label}
            </p>
        ));
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} size="lg" centered>
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
                            <Row className='mb-2 px-2'>
                                <p className='text-xl font-[500] tracking-wider mb-1'>Do you Prefer Smoking Room ? </p>
                                <div className='px-3'>
                                    <div className="form-check mb-1">
                                        <input className="form-check-input" type="checkbox" value="Yes" id="flexCheckDefault" />
                                        <label className="form-check-label text-[20px] font-[400]" htmlFor="flexCheckDefault">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="No" id="flexCheckDefault" />
                                        <label className="form-check-label text-[20px] font-[400]" htmlFor="flexCheckDefault">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <div className='mb-3'>
                                    <textarea name="textarea" className='w-full h-[150px] border-[1px] border-slate-300 bg-[#f3f5f8] outline-none rounded-md px-2 py-1' placeholder='Any Special Requests' ></textarea>
                                </div>
                            </Row>

                            <div className='w-full md:w-[400px] mx-auto'>
                                <button className='w-full bg-[#f62c31] px-4 py-3 rounded-lg text-[#fff] font-[600]' onClick={handleClose}>Complete Your Booking</button>
                            </div>
                        </Container>
            </Modal.Body>
            </Modal>

            <div className="w-full bg-slate-50 my-3 grid grid-cols-2 md:grid-cols-4 gap-4 p-2 rounded-lg shadow-md">
                {/* Details from hotelData */}
                <div className="border-r-[1px] px-3 border-slate-400">
                    <h3 className="text-[20px] md:text-[25px] font-[600] mb-0 text-[#f86d71]">
                        {hotelData.propertyName}
                    </h3>
                    <div>
                        {/* Render icons based on data */}
                        {Array.from({ length: hotelData.roomsNo }).map((_, index) => (
                            <FaUser key={index} className="inline mx-2" />
                        ))}
                    </div>
                    <p className="mb-1 mt-2 text-[13px] md:text-[17px]">
                        <span className="text-[12px] md:text-[16px]">--</span> Room Only
                    </p>
                    <p   className="mb-1  text-[13px] md:text-[17px]">
                        <span className="text-[12px] md:text-[16px]">--</span> Free Cancellation
                    </p>
                    <p   className="mb-1  text-[13px] md:text-[17px]">
                        <span className="text-[12px] md:text-[16px]">--</span> Child Friendly
                    </p>
                    <p  className="mb-1  text-[12px] md:text-[17px]">
                        <span className="text-[12px] md:text-[16px]">--</span> Breakfast Included
                    </p>
                </div>
                <div className="border-r-[0px] md:border-r-[1px] px-4 border-slate-400">
                    <h3 className="text-[20px] md:text-[25px] font-[600] mb-3 text-[#f86d71]">
                        Amenities
                    </h3>
                    {renderAmenities([
                        { icon: <FaWifi className="inline mr-2" />, label: 'Free Wifi' },
                        { icon: <LuParkingCircle className="inline mr-2" />, label: 'Free Parking' },
                        { icon: <MdOutlineHomeWork className="inline mr-2" />, label: 'Restaurant' },
                        { icon: <FaWifi className="inline mr-2" />, label: 'Free Wifi' },
                        { icon: <LuParkingCircle className="inline mr-2" />, label: 'Free Parking' },
                    ])} 
                </div>
                <div className="pl-5 border-r-[1px] border-slate-400">
                    <h3 className="text-[25px] font-[600] mb-2 text-[#f86d71]">Price</h3>
                    <p className="mb-2 text-[20px] font-[800]">{hotelData.currency} {hotelData.price}</p>
                    <p className="mb-2 text-slate-500">+{hotelData.taxes} Taxes & Fees</p>
                    <p className="mb-2 text-slate-500">Per Night</p>
                </div>
                <div className="px-3">
                    <h3 className="text-[20px] md:text-[25px] font-[600] text-[#f86d71]">
                        No of Rooms
                    </h3>
                    <div className="flex flex-row items-center mb-3">
                        <button onClick={DecreaseNumber}>
                            <GrFormPrevious className="text-[25px] font-[700]" />
                        </button>
                        <span className="bg-slate-600 rounded-lg px-2 text-[#fff] text-[16px]">
                            {number > 0 ? `+${number}` : number}
                        </span>
                        <button onClick={IncrementNumber}>
                            <MdOutlineNavigateNext className="text-[25px]" />
                        </button>
                        <span
                            className={`${show ? 'bg-[#129035]' : 'bg-slate-600'} text-[13px] text-[#fff] px-2 py-1 ml-0 md:ml-2 rounded-lg cursor-pointer`}
                            onClick={handleShow}
                        >
                            {show ? 'selected' : 'Select'}
                        </span>
                    </div>
                    <p className="text-[21px] font-[700] mb-1">
                        {hotelData.currency} {hotelData.total}
                    </p>
                    <p className="text-[21px]">Total</p>
                </div>
            </div>
        </div>
    );
}

export default HotelRooms;
