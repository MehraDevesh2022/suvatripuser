import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import Form from "react-bootstrap/Form";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { TiPlus, TiMinus } from "react-icons/ti";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../config";
import { useAppContext } from "../../context/store";

function Searchbar() {
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    room: 1,
    child: 0,
  });

   console.log(process.env.REACT_APP_BASE_URL , "process.env.REACT_APP_BASE_URL");

  const [location, setLocation] = useState("India");
  const {state, actions} = useAppContext();
  const [showCalender, setShowCalender] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const formatStartDate = format(date[0].startDate, "dd.MMM");
  const formatEndDate = format(date[0].endDate, "dd.MMM");
  const customStyle = {
    fontSize: "20px", // Adjust the font size as needed
    fontWeight: "500",
    // Add other styles as needed
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const searchBarElement = document.getElementById("searchbar");

      if (searchBarElement && !searchBarElement.contains(event.target)) {
        setShowCalender(false);
        setOpenOptions(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setShowCalender, setOpenOptions]);

  const formatDateWithDayName = (dateObject) => {
    const options = { weekday: "long" };
    return dateObject.toLocaleDateString("en-US", options);
  };
  const currentDay = formatDateWithDayName(date[0].startDate);
  const lastDay = formatDateWithDayName(date[0].endDate);

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : Math.max(0, prev[name] - 1),
    }));
  };

  const completeOff = () => {
    setShowCalender(false);
    setOpenOptions(false);
  };

  const handleCalender = () => {
    setShowCalender(true);
    setOpenOptions(false);
  };
  const hideCalender = () => {
    setShowCalender(false);
    setOpenOptions(true);
  };

  const handleSearch = async () => {
    const searchData = {
      location,
      startDate: date[0].startDate,
      endDate: date[0].endDate,
      // Add more parameters as needed
    };

    console.log(searchData);
    try {
        actions.isLoading(true);
    
        const params = {
          location: encodeURIComponent(searchData.location),
          startDate: encodeURIComponent(searchData.startDate.toISOString()),
          endDate: encodeURIComponent(searchData.endDate.toISOString()),
          children: options.child,
          room: options.room,
          adult: options.adult,
        };


      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/hotel/filter`,
        {
          params,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            My_Secret: config.MY_SECRET,
          },
        }
      );
  
// console.log(response.data.data); 

       actions.setHotel(response.data.data);
        actions.isLoading(false); 
    } catch (error) {
        console.error("Error fetching hotels:", error);
        // Handle error as needed
    }
  };

  return (
    <div className="w-full md:w-[1100px] mx-auto bg-[#fff] py-2 px-2 rounded-[15px] border-l-2 border-r-2 border-b-[10px] border-[#129035] relative">
      <>
        <div>
          <div id="searchbar">
            <div className="flex flex-col md:flex-row  justify-center md:justify-start items-center p-4">
              <div
                className=" bg-[#f2f5f8] w-full md:w-[300px] p-3 cursor-pointer rounded-lg"
                onClick={completeOff}
              >
                <Form>
                  <p className="bg-[#fff]  text-[#f62c31] w-[150px] text-center py-[2px] rounded-lg">
                    City, Area, Hotel
                  </p>
                  <input
                    type="email"
                    className="form-control w-full bg-transparent font-weight-bold text-xl"
                    id="floatingInputValue"
                    style={customStyle}
                    placeholder="Durban"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </Form>
                <p className="mt-1 ml-[1px]">{location}</p>
              </div>
              <div className="relative w-full md:w-[360px] my-2 md:my-0 flex flex-row justify-between md:justify-start items-center">
                <div className=" bg-[#f2f5f8] w-[180px] p-3 ml-0 md:ml-6 rounded-lg">
                  <p className="bg-[#fff] w-[100px] text-[#f62c31] text-center py-[2px] rounded-lg">
                    Check-In
                  </p>
                  <Form onClick={handleCalender}>
                    <input
                      type="text"
                      style={customStyle}
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
                      style={customStyle}
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
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      months={2}
                      direction={
                        window.innerWidth < 768 ? "vertical" : "horizontal"
                      }
                      rangeColors={["#f33e5b", "#3ecf8e", "#fed14c"]}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="relative my-2 md:my-0">
                <div
                  className="bg-[#f2f5f8] px-5 md:px-3 w-full md:w-[350px] h-[160px] py-3 ml-0 md:ml-6 cursor-pointer rounded-lg"
                  onClick={hideCalender}
                >
                  <p className="bg-[#fff] text-[#f62c31] w-[130px] text-center py-[2px] rounded-lg text-sm">
                    Room and Guest
                  </p>
                  <div className="mt-4 text-center">
                    <h3 className="leading-10 text-[18px]">
                      <span className="text-[25px] font-[500]">
                        {options.room}
                      </span>{" "}
                      Room{" "}
                      <span className="text-[25px] font-[500]">
                        {options.adult}
                      </span>{" "}
                      Adluts{" "}
                      <span className="text-[20px]  md:text-[25px] font-[500]">
                        {options.child}
                      </span>{" "}
                      Child
                    </h3>
                  </div>
                </div>
                {openOptions ? (
                  <div className="absolute bg-[#fff] left-[14px] md:left-11 rounded-lg z-10">
                    <div className="border-[2px] flex flex-row justify-between items-center p-1 rounded-tl-lg rounded-tr-lg">
                      <div className="w-[150px] text-[20px]">Room</div>
                      <div
                        className="border-1 border-slate-400 text-[25px] font-[600] p-1 cursor-pointer rounded-full"
                        onClick={() => {
                          handleOption("room", "d");
                        }}
                      >
                        <TiMinus />
                      </div>
                      <div className=" text-[30px] px-3">{options.room}</div>
                      <div
                        className="border-1 border-slate-400 text-[25px] font-[600] p-1 cursor-pointer rounded-full"
                        onClick={() => {
                          handleOption("room", "i");
                        }}
                      >
                        <TiPlus />
                      </div>
                    </div>
                    <div className="border-[2px] flex flex-row justify-between items-center p-1">
                      <div className="w-[150px] text-[20px]">
                        Adult{" "}
                        <span className="text-slate-400 text-sm font-bold">
                          16 + Y
                        </span>
                      </div>
                      <div
                        className="border-1 border-slate-400 rounded-full text-[25px] font-[600] p-1 cursor-pointer"
                        onClick={() => {
                          handleOption("adult", "d");
                        }}
                      >
                        <TiMinus />
                      </div>
                      <div className=" text-[30px] px-3">{options.adult}</div>
                      <div
                        className="border-1 border-slate-400 rounded-full text-[25px] font-[600] p-1 cursor-pointer"
                        onClick={() => {
                          handleOption("adult", "i");
                        }}
                      >
                        <TiPlus />
                      </div>
                    </div>
                    <div className="border-[2px] flex flex-row justify-between items-center p-1 rounded-bl-lg rounded-br-lg">
                      <div className="w-[150px] text-[20px]">
                        Child{" "}
                        <span className="text-slate-400 text-sm font-bold">
                          Below 16Yr
                        </span>
                      </div>
                      <div
                        className="border-1 border-slate-400 rounded-full text-[25px] font-[600] p-1 cursor-pointer"
                        onClick={() => {
                          handleOption("child", "d");
                        }}
                      >
                        <TiMinus />
                      </div>
                      <div className=" text-[30px] px-3">{options.child}</div>
                      <div
                        className="border-1 border-slate-400 rounded-full text-[25px] font-[600] p-1 cursor-pointer"
                        onClick={() => {
                          handleOption("child", "i");
                        }}
                      >
                        <TiPlus />
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </>
      <div className="w-[150px] absolute bottom-[-24px] left-[110px] md:left-[450px]">
        <Link to="/filter">
          <button
            className="bg-[#129035] w-full py-2 font-[600] text-[20px] text-slate-100 rounded-[20px] z-0"
            onClick={handleSearch}
          >
            Search
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Searchbar;
