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
                    {/* Your modal content here */}
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
