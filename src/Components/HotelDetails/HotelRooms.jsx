import React, { useState, useEffect , useMemo } from "react";
import { FaUser, FaWifi } from "react-icons/fa";
import { CiWifiOff } from "react-icons/ci";
import { LuParkingCircle } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";
import { AiOutlineKey } from "react-icons/ai";
import { FaHouseChimneyCrack } from "react-icons/fa6";
import { GrFormPrevious } from "react-icons/gr";
import { format, isWeekend } from "date-fns";
import { MdOutlineNavigateNext } from "react-icons/md";
import Modal from "react-bootstrap/Modal";

import { toast } from "react-toastify";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [arrivalHours, setArrivalHours] = useState("");
  const [arrivalMinutes, setArrivalMinutes] = useState("");
  const [arrivalAmPm, setArrivalAmPm] = useState("AM");
  const [smokingPreference, setSmokingPreference] = useState("");
  const [isWeekEnd, setIsWeekend] = useState(false); // [true, false, true, false, true, false, true
  const [specialRequest, setSpecialRequest] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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

  const getPriceBasedOnDay = () => {
    const currentDate = new Date('January 8, 2024 23:15:30');
    const currentDayOfWeek = currentDate.getDay();
    const isWeekend = currentDayOfWeek === 0 || currentDayOfWeek === 6;
   // it will return true or false
    return isWeekend;
  };

  const hideCalender = () => {
    setShowCalender(false);
    setOpenOptions(true);
  };

  const handleDateSelect = (ranges) => {
    setDate([ranges.selection]);
    console.log(date[0].startDate, "ranges");
  };

  const calenderInput = {
    fontSize: "20px",
    fontWeight: "500",
  };

  const formatDateWithDayName = (dateObject) => {
    const options = { weekday: "long" };
    return dateObject.toLocaleDateString("en-US", options);
  };
  const currentDay = formatDateWithDayName(date[0].startDate);
  const lastDay = formatDateWithDayName(date[0].endDate);

  const handleArrivalTimeChange = (type, value) => {
    switch (type) {
      case "hours":
        setArrivalHours(value);
        break;
      case "minutes":
        setArrivalMinutes(value);
        break;
      case "amPm":
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
    if (
      JSON.parse(localStorage.getItem("isLoggedIn")) &&
      localStorage.getItem("token") &&
      state.isLoggedIn
    ) {
      setFirstName(state?.profileData?.username?.split(" ")[0]);
      setLastName(state?.profileData?.username?.split(" ")[1]);
      setEmail(state?.profileData?.email);
      setPhoneNumber(state?.profileData?.phoneNumber);
      setShow(true);
    } else {
     toast.warning("Please Login First");
    }
  };
  const inlineStyle = {
    backgroundColor: "#f3f5f8",
    padding: "10px 10px",
  };

  useEffect(() => {
    setIsWeekend(getPriceBasedOnDay())

  }, []);
  const IncrementNumber = (roomId, numberOfRoom) => {
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
      <p key={index} className="mb-1 text-[11px] md:text-[19px] xl:text-[17px]">
        <span>{amenity.icon}</span> {amenity.label}
      </p>
    ));
  };

  const handleSubmit = async () => {
    const selectedRoomsArray = Object.entries(selectedRooms)
      .filter(([roomId, count]) => count > 0)
      .map(([roomId, count]) => ({ roomId, count }));
  
    if (selectedRoomsArray.length === 0) {
      toast.warning("Please Select Room");  
      return;
    }
  
    const estimatedArrival = `${arrivalHours}:${arrivalMinutes} ${arrivalAmPm}`;
    console.log(selectedRoomsArray, "data");
  
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
      status: "confirmd",
    };
  
    console.log(formData, "formData");
  
    try {
      const token = localStorage.getItem("token");
  
      const headers = {
        Authorization: token ? `Bearer ${token}` : undefined,
      };
  
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/reservation`,
        formData,
        { headers }
      );
  
      if (response.data.status) {
       toast.success("Reservation Successfull");
  
        // Reset the component's state to initial values or empty values
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setArrivalHours("");
        setArrivalMinutes("");
        setArrivalAmPm("AM");
        setSmokingPreference("");
        setSpecialRequest("");
        setDate([
          {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
          },
        ]);
        setIsWeekend(false);
        setSelectedRooms({});
      } else {
      toast.error("Reservation Failed");
      }
  
      handleClose();
    } catch (error) {
      console.log(error, "error");
      toast.error("Reservation Failed Please Try Again");
      handleClose();
    }
  };
  
  console.log(roomsDeatils, "roomsDeatils.length");

 // fromate currency in nepali
 const formatPriceNumber = useMemo(() => {
  return (price, currency) => {
    return new Intl.NumberFormat('ne-NP', { style: 'currency', currency }).format(price);
  };
}, []);


  return (
    <div className="relative pt-3 pb-5 mb-4">
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
       
            <Row onClick={hideCalender}>
              <div className="mb-3">
                <h3 className="text-3xl font-[700] tracking-wider">
                  Enter Your Details
                </h3>
              </div>
            </Row>
            <Row onClick={hideCalender}>
              <Col>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    style={inlineStyle}
                    className="form-control"
                    placeholder="First Name"
                    aria-label="First Name"
                    aria-describedby="basic-addon1"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </Col>
              <Col>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    style={inlineStyle}
                    className="form-control"
                    placeholder="Last Name"
                    aria-label="Last Name"
                    aria-describedby="basic-addon1"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </Col>
            </Row>
            <Row onClick={hideCalender}>
              <Col>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    style={inlineStyle}
                    className="form-control"
                    placeholder="Number"
                    aria-label="Number"
                    aria-describedby="basic-addon1"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </Col>
              <Col>
                <div class="input-group mb-3">
                  <input
                    type="Email"
                    style={inlineStyle}
                    className="form-control"
                    placeholder="Email"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </Col>
            </Row>
            <Row onClick={hideCalender}>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text py-3 text-sm" id="basic-addon1">
                    Arrival Time
                  </span>
                </div>
                <input
                  type="number"
                  style={inlineStyle}
                  className="form-control mx-1"
                  placeholder="Hours"
                  aria-label="Arrival Hours"
                  aria-describedby="basic-addon1"
                  value={arrivalHours}
                  onChange={(e) =>
                    handleArrivalTimeChange("hours", e.target.value)
                  }
                />
                <span className="mx-1 font-[600] text-[35px]">:</span>
                <input
                  type="number"
                  style={inlineStyle}
                  className="form-control mx-1"
                  placeholder="Minutes"
                  aria-label="Arrival Minutes"
                  aria-describedby="basic-addon1"
                  value={arrivalMinutes}
                  onChange={(e) =>
                    handleArrivalTimeChange("minutes", e.target.value)
                  }
                />
                <select
                  className="form-select"
                  aria-label="Arrival AM/PM"
                  value={arrivalAmPm}
                  onChange={(e) =>
                    handleArrivalTimeChange("amPm", e.target.value)
                  }
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </Row>

            {/* chekin chekout adding */}
            <Row className="mx-auto mt-1 mb-3 w-full  bg-[#fff] border-[1px] border-slate-100 shadow-md rounded-lg">
            
                <div className="col">
                  <p className="bg-[#fff] w-[100px] text-[#f62c31] text-center font-bold py-[2px] rounded-lg">
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
                <div  className="col">
                  <p className="bg-[#fff] w-[100px] font-bold text-[#f62c31] text-center py-[2px] rounded-lg">
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
                  <div className="absolute top-[400px] left-0 md:left-12 z-10">
                    <DateRangePicker
                     editableDateInputs={true}
                      showSelectionPreview={true}
                      calendarFocus="forwards"
                      onChange={handleDateSelect}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      preventSnapRefocus={true}
                      months={2}
                        direction={
                          window.innerWidth < 1280 ? "vertical" : "horizontal"
                        }
                      rangeColors={["#f33e5b", "#3ecf8e", "#fed14c"]}
                    />
                  </div>
                ) : (
                  ""
                )}
              
            </Row>

            <Row className="mb-2 px-2" onClick={hideCalender}>
              <p className="text-2xl font-[500] tracking-wider mb-1">
                Do you Prefer Smoking Room ?{" "}
              </p>
              <div className="px-3">
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="smokingPreference"
                    id="smokingYes"
                    value="Yes"
                    checked={smokingPreference === "Yes"}
                    onChange={() => handleSmokingPreferenceChange("Yes")}
                  />
                  <label
                    className="form-check-label text-[20px] font-[400]"
                    htmlFor="smokingYes"
                  >
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
                    checked={smokingPreference === "No"}
                    onChange={() => handleSmokingPreferenceChange("No")}
                  />
                  <label
                    className="form-check-label text-[20px] font-[400]"
                    htmlFor="smokingNo"
                  >
                    No
                  </label>
                </div>
              </div>
            </Row>
            <Row onClick={hideCalender}>
              <div className="mb-3">
                <h3 className="text-3xl font-[700] tracking-wider">
                  Special Request
                </h3>
                <textarea
                  name="textarea"
                  className="w-full h-[150px] border-[1px] border-slate-300 bg-[#f3f5f8] outline-none rounded-md px-2 py-1"
                  placeholder="Any Special Requests"
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                ></textarea>
              </div>
            </Row>

            <div className="w-full md:w-[400px] mx-auto">
              <button
                className="w-full bg-[#f62c31] px-4 py-3 rounded-lg text-[#fff] font-[600]"
                onClick={handleSubmit}
              >
                Complete Your Booking
              </button>
            </div>
         
        </Modal.Body>
      </Modal>

      {roomsDeatils?.length > 0 ? (
        <>
          {roomsDeatils?.map((room, index) => (
            <div
              className="w-full bg-slate-50  mt-2 mb-3 grid grid-cols-2 lg:grid-cols-4 gap-4 px-2 py-3 rounded-lg shadow-lg h-auto"
              key={room._id}
            >
              {/* Details from hotelData */}
              <div className="border-r-[1px] px-3 border-slate-400">
                <h3 className="text-[20px] md:text-[25px] font-[600] mb-0 text-[#f86d71]">
                  {room?.roomType}
                </h3>
                <div>
                  {/* Render icons based on data */}
                  {Array.from({ length: room?.guests }).map((_, index) => (
                    <FaUser key={index} className="inline mx-1 text-sm sm:text-[20px]" />
                  ))}
                </div>
                <p className="mb-1 mt-2 text-[12px] md:text-[20px] xl:text-[17px]">
                  <span className="text-[12px] md:text-[20px] xl:text-[17px]">-</span> Room
                  Type : {room?.roomType}
                </p>
                <p className="mb-1  text-[12px] md:text-[20px] xl:text-[17px]">
                  <span className="text-[12px] md:text-[20px] xl:text-[17px]">-</span>{" "}
                  {hotelData?.paymentPolicy[0]?.cancleOption === "Yes"
                    ? "Free Cancellation"
                    : "Non Refundable"}
                </p>
                <p className="mb-1  text-[12px] md:text-[20px] xl:text-[17px]">
                  <span className="text-[12px] md:text-[20px] xl:text-[17px]">-</span>{" "}
                  {hotelData?.hotelRules?.allowChildren === "no"
                    ? "Not Child Friendly"
                    : "Child Friendly"}
                </p>
                <p className="mb-1  text-[12px] md:text-[20px] xl:text-[17px]">
                  <span className="text-[12px] md:text-[20px] xl-[17px] ">-</span>{" "}
                  Breakfast Included
                </p>
                {hotelData?.facilities?.recreation?.map((item, idx) => (
                  <>
                    <p className="mb-1  text-[12px] md:text-[17px]" key={idx}>
                      <span className="text-[12px] md:text-[16px]">-</span>{" "}
                      {item}
                    </p>
                  </>
                ))}
              </div>
              <div className="border-r-[0px] lg:border-r-[1px] px-4 border-slate-400">
                <h3 className="text-[20px] md:text-[25px] font-[600] mb-3 text-[#f86d71]">
                  Amenities
                </h3>
                {renderAmenities([
                  hotelData?.parking?.isParkingAvailable === "yesFree" && {
                    icon: <LuParkingCircle className="inline mr-2" />,
                    label: "Free Parking",
                  },
                  {
                    icon: <MdOutlineHomeWork className="inline mr-2" />,
                    label: "Restaurant",
                  },
                  {
                    icon: <FaWifi className="inline mr-2" />,
                    label: "Free Wifi",
                  },
              
                  {
                    icon: <AiOutlineKey className="inline mr-2" />,
                    label: "Key Card Access",
                  },
                  {
                    icon: <FaHouseChimneyCrack className="inline mr-2" />,
                    label: "Housekeeping",
                  },
                ])}
              </div>

              <div className="pl-5 border-r-[1px] border-slate-400">
                <h3 className="text-[25px] font-[600] mb-2 text-[#f86d71]">
                  Price
                </h3>
                <p className="mb-2 text-[20px] font-[400]">
                  {" "} {formatPriceNumber(isWeekend ? room?.weekendPrice : room?.weekdayPrice , hotelData?.currency)}
                </p>
                <p className="mb-2 text-slate-500 text-[16px] sm:text-[18px] md:text-[20px] xl:text-[17px]">
                   Non Refundable Price : {formatPriceNumber(room?.nonRefundPrice , hotelData?.currency)}
                </p>
                <p className="mb-2 text-slate-500 text-[15px] sm:text-[20px] md:text-[22px] xl:text-[17px]">
                  +{hotelData.taxes || 750 }  Taxes & Fees
                </p>
                <p className="mb-2 text-slate-500 text-[15px] sm:text-[20px] md:text-[22px xl:text-[17px]">Per Night</p>
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
                  <button
                    onClick={() => IncrementNumber(room._id, room?.noOfRooms)}
                  >
                    <MdOutlineNavigateNext className="text-[25px]" />
                  </button>
                  <span
                    className={`${
                      selectedRooms[room._id] ? "bg-[#129035]" : "bg-slate-600"
                    } text-[13px] text-[#fff] px-2 py-1 ml-0 md:ml-2 rounded-lg cursor-pointer`}
                  >
                    {selectedRooms[room._id] ? "selected" : "Select"}
                  </span>
                </div>
                <p className="text-[18px] sm:text-[21px] font-[700] mb-1">
                 {formatPriceNumber(isWeekend ? room?.weekendPrice : room?.weekdayPrice , hotelData.currency)}
                </p>
                <p className="text-[21px]">Total</p>
              </div>
            </div>
          ))} 
        </>
      ) : (
        <>
          <div className="w-full text-center">
            <p className="text-center">no room founds</p>
          </div>
        </>
      )}
        <div className="absolute right-1 bottom-0 py-0">
                <button
                  className="bg-[#f62c31] px-2 py-2 rounded-lg text-[#fff] font-[600]"
                  onClick={handleShow}
                >
                  Book Now
                </button>
          </div>
    </div>
  );
}

export default HotelRooms;
