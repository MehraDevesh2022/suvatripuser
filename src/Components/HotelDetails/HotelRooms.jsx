import React, { useState, useEffect } from 'react';
import { FaUser, FaWifi } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { format } from "date-fns";
import { MdOutlineNavigateNext } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import { DateRangePicker } from "react-date-range";
import { useAppContext } from "../../context/store";
import axios from "axios";
function HotelRooms() {
    const [selectedRooms, setSelectedRooms] = useState({});
    const [show, setShow] = useState(false);
    const { state } = useAppContext();
    const hotelData = state.hotelDetails;
    const roomsDeatils = state.roomData;
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [arrivalHours, setArrivalHours] = useState('');
    const [arrivalMinutes, setArrivalMinutes] = useState('');
    const [arrivalAmPm, setArrivalAmPm] = useState('AM');
    const [smokingPreference, setSmokingPreference] = useState('');
    
    const [specialRequest, setSpecialRequest] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showCalender, setShowCalender] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const formatStartDate = format(date[0].startDate, "dd.MMM");
    const formatEndDate = format(date[0].endDate, "dd.MMM");

    const handleCalender = () => {
        setShowCalender(true);
        setOpenOptions(false);
    };

    const hideCalender = () => {
        setShowCalender(false);
        setOpenOptions(true);
    };

    const handleDateSelect = (ranges) => {
        setDate([ranges.selection]);
        console.log(date[0].startDate, "ranges")
        hideCalender(); 
    };
   
      const calenderInput = {
        fontSize: "20px",
        fontWeight: "500",
        border: "none",      
        outline: "none",   
        
    };

  
  


      const formatDateWithDayName = (dateObject) => {
        const options = { weekday: "long" };
        return dateObject.toLocaleDateString("en-US", options);
      };
      const currentDay = formatDateWithDayName(date[0].startDate);
      const lastDay = formatDateWithDayName(date[0].endDate);
    

 const handleArrivalTimeChange = (type, value) => {
        switch (type) {
            case 'hours':
                setArrivalHours(value);
                break;
            case 'minutes':
                setArrivalMinutes(value);
                break;
            case 'amPm':
                setArrivalAmPm(value);
                break;
            default:
                break;
        }
    };

    const handleSmokingPreferenceChange = (value) => {
        setSmokingPreference(value);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => {
         if( JSON.parse(localStorage.getItem('isLoggedIn')) && localStorage.getItem('token') && state.isLoggedIn){
            setFirstName(state?.profileData?.username?.split(" ")[0]);
            setLastName(state?.profileData?.username?.split(" ")[1]);
            setEmail(state?.profileData?.email);
            setPhoneNumber(state?.profileData?.phoneNumber);
              setShow(true);

         }else{
            alert("Please Login First for Booking");
         }
    }
    const inlineStyle = {
        backgroundColor: '#f3f5f8',
        padding: '10px 10px'
    }

    useEffect(() => {

    }, []); 
    const IncrementNumber = (roomId , numberOfRoom) => {
        setSelectedRooms((prevSelectedRooms) => {
            const updatedRooms = { ...prevSelectedRooms };
            const currentCount = updatedRooms[roomId] || 0;
         
            if (currentCount < numberOfRoom) {
                updatedRooms[roomId] = currentCount + 1;
            } else {
                // If trying to exceed, keep it at the maximum available number
                updatedRooms[roomId] = numberOfRoom;
            }
    
            return updatedRooms;
        });
    };
    
    const DecreaseNumber = (roomId) => {
        setSelectedRooms((prevSelectedRooms) => {
            const updatedRooms = { ...prevSelectedRooms };
            updatedRooms[roomId] = Math.max((updatedRooms[roomId] || 0) - 1, 0);
            return updatedRooms;
        });
    };
    

    const renderAmenities = (amenities) => {
        return amenities.map((amenity, index) => (
            <p key={index} className="mb-1 text-sm md:text-[17px]">
                <span>{amenity.icon}</span> {amenity.label}
            </p>
        ));
    };


    const handleSubmit = async () => {


        const selectedRoomsArray = Object.entries(selectedRooms)
        .filter(([roomId, count]) => count > 0)
        .map(([roomId, count]) => ({ roomId, count }));

   
    if (selectedRoomsArray.length === 0) {
        alert("Please select at least one room.");
        return;
    }

    const estimatedArrival = `${arrivalHours}:${arrivalMinutes} ${arrivalAmPm}`;
      console.log(selectedRoomsArray , "data")
    // Prepare the data to be sent to the server
    const formData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        estimatedArrival,
        smokingPreference,
        specialRequest,
        hotel_id: hotelData._id,
        rooms: selectedRoomsArray, 
        checkInDate: date[0].startDate,
        checkOutDate: date[0].endDate,
        user_id: state?.profileData?._id,
        status: "confirmd"
    };


     
         
    console.log(formData, "formData");
       

    try {

        const token = localStorage.getItem("token");

        const headers = {
            Authorization: token ? `Bearer ${token}` : undefined,
        }

        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/reservation`, formData, {headers});

        if (response.data.status) {
            alert("Your Booking is Done");
        } else {
            alert("Something went wrong");
        }

        handleClose();
        
    } catch (error) {
        console.log(error, "error");
        handleClose();  
    }

        
   
    };

    console.log(roomsDeatils , "roomsDeatils.length");

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
                                        <input type="text" style={inlineStyle} className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group mb-3">
                                        <input type="text" style={inlineStyle} className="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div class="input-group mb-3">
                                        <input type="number" style={inlineStyle} className="form-control" placeholder="Number" aria-label="Number" aria-describedby="basic-addon1"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                </Col>
                                <Col>
                                    <div class="input-group mb-3">
                                        <input type="Email" style={inlineStyle} className="form-control" placeholder="Email" aria-label="email" aria-describedby="basic-addon1"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}  
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Arrival Time</span>
                                </div>
                                <input
                                    type="number"
                                    style={inlineStyle}
                                    className="form-control"
                                    placeholder="Hours"
                                    aria-label="Arrival Hours"
                                    aria-describedby="basic-addon1"
                                    value={arrivalHours}
                                    onChange={(e) => handleArrivalTimeChange('hours', e.target.value)}
                                />
                                <span className="mx-2">:</span>
                                <input
                                    type="number"
                                    style={inlineStyle}
                                    className="form-control"
                                    placeholder="Minutes"
                                    aria-label="Arrival Minutes"
                                    aria-describedby="basic-addon1"
                                    value={arrivalMinutes}
                                    onChange={(e) => handleArrivalTimeChange('minutes', e.target.value)}
                                />
                                <select
                                    className="form-select"
                                    aria-label="Arrival AM/PM"
                                    value={arrivalAmPm}
                                    onChange={(e) => handleArrivalTimeChange('amPm', e.target.value)}
                                >
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </Row>

                    {/* chekin chekout adding */}
                           <Row>

                           <div className="relative w-full md:w-[360px] my-2 md:my-0 flex flex-row justify-between md:justify-start items-center">
                <div className=" bg-[#f2f5f8] w-[180px] p-3 ml-0 md:ml-6 rounded-lg">
                  <p className="bg-[#fff] w-[100px] text-[#f62c31] text-center py-[2px] rounded-lg">
                    Check-In
                  </p>
                  <Form onClick={handleCalender}>
                    <input
                      type="text"
                      style={calenderInput}
                      className="form-control bg-transparent"
                      id="floatingInputValue"
                      placeholder="check-In"
                      value={formatStartDate}
                    />
                    <p className="mt-1 ml-[1px]">{currentDay}</p>
                  </Form>
                </div>
                <div className="bg-[#f2f5f8] w-[180px] p-3 mx-1 rounded-lg">
                  <p className="bg-[#fff] w-[100px] text-[#f62c31] text-center py-[2px] rounded-lg">
                    Check-Out
                  </p>
                  <Form onClick={handleCalender}>
                    <input
                      type="text"
                      style={calenderInput}
                      className="form-control bg-transparent"
                      id="floatingInputValue"
                      placeholder="check-out"
                      value={formatEndDate}
                    />
                    <p className="mt-1 ml-[1px]">{lastDay}</p>
                  </Form>
                </div>
                {showCalender ? (
                  <div className="absolute top-[150px] left-1 md:left-6 z-10">
                     <DateRangePicker
                                            editableDateInputs={true}
                                            onChange={handleDateSelect}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            months={2}
                                            direction={window.innerWidth < 768 ? "vertical" : "horizontal"}
                                            rangeColors={["#f33e5b", "#3ecf8e", "#fed14c"]}
                                        />
                  </div>
                ) : (
                  ""
                )}
              </div>
              

                           </Row>
            
                        <Row className="mb-2 px-2">
                            <p className="text-xl font-[500] tracking-wider mb-1">Do you Prefer Smoking Room ? </p>
                            <div className="px-3">
                                <div className="form-check mb-1">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="smokingPreference"
                                        id="smokingYes"
                                        value="Yes"
                                        checked={smokingPreference === 'Yes'}
                                        onChange={() => handleSmokingPreferenceChange('Yes')}
                                    />
                                    <label className="form-check-label text-[20px] font-[400]" htmlFor="smokingYes">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="smokingPreference"
                                        id="smokingNo"
                                        value="No"
                                        checked={smokingPreference === 'No'}
                                        onChange={() => handleSmokingPreferenceChange('No')}
                                    />
                                    <label className="form-check-label text-[20px] font-[400]" htmlFor="smokingNo">
                                        No
                                    </label>
                                </div>
                            </div>
                        </Row>
                            <Row>
                                <div className='mb-3'>
                                    <textarea name="textarea" className='w-full h-[150px] border-[1px] border-slate-300 bg-[#f3f5f8] outline-none rounded-md px-2 py-1' placeholder='Any Special Requests'
                                        value={specialRequest}
                                        onChange={(e) => setSpecialRequest(e.target.value)}
                                    ></textarea>
                                </div>
                            </Row>


                  

                            <div className='w-full md:w-[400px] mx-auto'>
                                <button className='w-full bg-[#f62c31] px-4 py-3 rounded-lg text-[#fff] font-[600]' onClick={handleSubmit}>Complete Your Booking</button>
                            </div>
                        </Container>
            </Modal.Body>
            </Modal>

          {roomsDeatils?.length > 0 ? <>
          {roomsDeatils?.map((room, index) =>(
                <div className="w-full bg-slate-50 my-3 grid grid-cols-2 md:grid-cols-4 gap-4 p-2 rounded-lg shadow-md" key={room._id}>
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
                        <span className="text-[12px] md:text-[16px]">--</span> Room Type : {room?.roomType}
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
                       <button onClick={() => DecreaseNumber(room._id)}>
                            <GrFormPrevious className="text-[25px] font-[700]" />
                        </button>
                        <span className="bg-slate-600 rounded-lg px-2 text-[#fff] text-[16px]">
                           {selectedRooms[room._id] || 0}
                        </span>
                       <button onClick={() => IncrementNumber(room._id , room?.noOfRooms)}>
                            <MdOutlineNavigateNext className="text-[25px]" />
                        </button>
                        <span
                            className={`${show ? 'bg-[#129035]' : 'bg-slate-600'} text-[13px] text-[#fff] px-2 py-1 ml-0 md:ml-2 rounded-lg cursor-pointer`}
                           
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

          ))}
            <div className="w-full md:w-[400px] mx-auto">
           
            <button
              className="w-full bg-[#f62c31] px-4 py-3 rounded-lg text-[#fff] font-[600]"
              onClick={handleShow}
            >
              Submit
            </button>
             </div>
          </> : <><div>no room founds</div></>}
        </div>
    );
}

export default HotelRooms;
