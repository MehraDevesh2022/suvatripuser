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
import { usePlacesWidget } from "react-google-autocomplete";
import { FaAngleDown } from "react-icons/fa";


function Searchbar({ checkInD, checkOutD, roomD, adultD, childD, locationD }) {
  const [emptyArray, setEmptyArray] = useState([]);
  let index = 0;
  const [openOptions, setOpenOptions] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767); 
  const [options, setOptions] = useState({
    adult: typeof adultD === 'number' ? adultD : 2,
    room: typeof roomD === 'number' ? roomD : 1,
    child: typeof childD === 'number' ? childD : 0,
  });
  const [location, setLocation] = useState(locationD || "Delhi");
  const { state, actions } = useAppContext();
  const [showCalender, setShowCalender] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: checkInD ? new Date(checkInD) : new Date(),
      endDate: checkOutD ? new Date(checkOutD) : new Date(),
      key: "selection",
    },
  ]);



  const { ref, autocompleteRef } = usePlacesWidget({
    apiKey: 'AIzaSyBi5Bq8YbATnUhPpwQdhtENLTQQROVV6N0',
    onPlaceSelected: (place) => {
      setLocation(place.address_components[0].long_name);
    },
    options: {
      types: ["(cities)"]
    },
  });

  const formatStartDate = format(date[0].startDate, "dd.MMM");
  const formatEndDate = format(date[0].endDate, "dd.MMM");
  const customStyle = {
    fontSize: "20px", // Adjust the font size as needed
    fontWeight: "500",
    border: "none", // To remove the border
    outline: "none",
    // Add other styles as needed
  };
  const calenderInput = {
    fontSize: "20px",
    fontWeight: "500",
    border: "none", // To remove the border
    outline: "none", // To remove the outline
    color: '#000'
    // Add other styles as needed
  };
  const desktopContainer = {
    padding: "20px",
    // Add other desktop styles here
  };
  const mobileContainer = {
    padding: "10px",
    // Add other mobile styles here
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

    if (name === "child") {
      if (operation === "i") {
        index++;
        setEmptyArray((prevArray) => [...prevArray, index]);
      } else if (operation === "d" && emptyArray.length > 0) {
        index--;
        setEmptyArray((prevArray) => prevArray.slice(0, -1));
      }
    }

    console.log(name,operation)
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

  // get all rooms

  useEffect(() => {
    actions.setLocation(location);

    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/room/get-all-rooms`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              My_Secret: config.MY_SECRET,
            },
          }
        );
        if (response.data.success && response.data.success === true) {
          actions.setAllRooms(response.data.data);
          console.log(state.allRooms, "all rooms");
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
        // Handle error as needed
      }
    };

    fetchRooms();  
   
  }, []);

  return (
    <div  className="w-full xl:w-[1100px] mx-auto bg-[#fff] py-3 lg:py-2  px-2  rounded-[15px] border-l-2 border-r-2 border-b-[10px] border-[#129035] relative">
      <>
        <div>
          <div style={isMobile ? mobileContainer : desktopContainer} id="searchbar">
            <div className="flex flex-col lg:flex-row  justify-center md:justify-start items-center">
              <div
                className="bg-[#fff] lg:bg-[#f2f5f8] w-full lg:w-[300px] p-3 cursor-pointer rounded-lg border-[1px] border-slate-300 lg:border-none"
                onClick={completeOff}
              >
                <Form>
                  <p className="bg-[#fff]  text-[#f62c31] w-[50px]  hidden lg:block text-center py-[2px] px-1 rounded-lg">
                    City
                  </p>
                  <input
                    type="email"
                    className="form-control w-full bg-transparent font-weight-bold text-xl text-[#000]"
                    id="floatingInputValue"
                    style={customStyle}
                    placeholder="Durban"
                    value={location}
                    ref={ref}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </Form>
                <p className="mt-1 ml-[1px] text-slate-500 hidden lg:block">{location}</p>
              </div>
              <div className="relative w-full lg:w-[360px] my-2 md:my-0 flex flex-row justify-between md:justify-start items-center border-[1px] border-slate-300 rounded-lg lg:border-none">
                <div className="bg-[#fff] lg:bg-[#f2f5f8] w-[160px] md:w-[320px] lg:w-[180px] p-3 ml-0 md:ml-6 rounded-lg">
                  <p className="bg-[#f2f5f8] lg:bg-[#fff] w-[100px] text-[#f62c31] text-center py-0 md:py-[2px] rounded-lg">
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
                    <p className="mt-1 ml-[1px] text-slate-500 hidden lg:block">{currentDay}</p>
                  </Form>
                </div>
                <div className="bg-[#fff] lg:bg-[#f2f5f8] w-[160px] md:w-[320px] lg:w-[180px] p-3 mx-1 rounded-lg">
                  <p className="bg-[#f2f5f8] lg:bg-[#fff] w-[100px] text-[#f62c31] text-center py-0 md:py-[2px] rounded-lg">
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
                    <p className="mt-1 ml-[1px] text-slate-500 hidden lg:block">{lastDay}</p>
                  </Form>
                </div>
                {showCalender ? (
                  <div className="absolute top-[150px] duration-150 left-[-20px] md:left-6 z-10">
                    <DateRangePicker
                      editableDateInputs={true}
                      showSelectionPreview={true}
                      calendarFocus="forwards"
                      onChange={(item) => {
                        console.log(new Date(item.selection.startDate));
                        setDate([item.selection]);
                      }}
                      moveRangeOnFirstSelection={false}
                      preventSnapRefocus={true}
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

              <div className="relative my-2 lg:my-0 border-[1px] lg:border-none rounded-lg border-slate-300">
                <div
                  className="bg-[#fff] lg:bg-[#f2f5f8] px-5 md:px-0  lg:px-3 w-full md:w-[400px] lg:w-[350px] h-[80px] lg:h-[160px] py-3 ml-0 md:ml-6 cursor-pointer rounded-lg"
                  onClick={hideCalender}
                >
                  <p className="bg-[#fff] text-[#f62c31] w-[130px] text-center py-[2px] rounded-lg text-sm hidden lg:block">
                    Room and Guest
                  </p>
                  <div className="mt-1  text-center">
                    <h3 className="leading-6 md:leading-10 text-sm md:text-xl lg:text-[18px]">
                      <span className="text-[23px] md:text-[25px] font-[500]">
                        {options.room}
                      </span>{" "}
                      Room{" "}
                      <span className="text-[23px] md:text-[25px] font-[500]">
                        {options.adult}
                      </span>{" "}
                      Adluts{" "}
                      <span className="text-[23px] md:text-[25px] font-[500]">
                        {options.child}
                      </span>{" "}
                      Child
                    </h3>
                  </div>
                </div>
                {openOptions ? (
                  <div className="absolute bg-[#fff] p-1 left-1 md:left-11  z-10 border-r-[1px] border-l-[1px] border-b-[1px] border-blue-700 rounded-bl-md rounded-br-md">
                    <div className="flex flex-row justify-between items-center">
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
                    <div className="flex flex-row justify-between items-center p-1">
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
                    <div className="flex flex-row justify-between items-center p-1 rounded-bl-lg rounded-br-lg">
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
                    {/* Age of Child */}
                   {
                    emptyArray.map((data,val) => {
                      return (
                        <div key={val} className="px-3 py-1 flex flex-row justify-between items-center">
                        <span className="text-[18px] font-[300]">Age of Child</span>
                       <div>
                       <input type="number" placeholder="0" className="w-[50px] outline-none  px-1 border-[1px] border-blue-500" />                      
                       </div>
                   </div>
                      )
                    })
                   }
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </>
      <div className="w-[150px] absolute bottom-[-26px] left-[110px] md:left-[300px] lg:left-[450px]">
        <Link to={`/filter?location=${location}&checkIn=${date[0].startDate}&checkOut=${date[0].endDate}&children=${options.child}&room=${options.room}&adult=${options.adult}`}>
          <button
            className="bg-[#129035] w-full py-2 font-[600] uppercase text-[20px] text-slate-100 rounded-[20px] z-0"
          // onClick={handleSearch}
          >
            Search
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Searchbar;
