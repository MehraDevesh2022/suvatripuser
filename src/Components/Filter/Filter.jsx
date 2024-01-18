import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import Searchbar from "../Home/Searchbar";
import Footer from "../Fotter/Footer";
import FilterSection from "./FilterSection";
import FixedFilter from "./FixedFilter";
import { FaFilter } from "react-icons/fa";
import lbDate from "lbdate";
import axios from "axios";
import { useAppContext } from "../../context/store";
import config from "../../config";

function Filter() {
  const [scrollLock, setScrollLock] = useState(false);
  const searchParams = new URLSearchParams(window.location.search);
  const location = searchParams.get("location");
  const checkIn = searchParams.get("checkIn");
  const children = searchParams.get("children");
  const checkOut = searchParams.get("checkOut");
  const room = searchParams.get("room");
  const adult = searchParams.get("adult");
  const { state, actions } = useAppContext();

  useEffect(() => {
    console.log(location, "lllllll");
    const getData = async () => {
      lbDate.init();

      try {
        actions.isLoading(true);

        let params = {
          location: encodeURIComponent(location),
          checkIn: checkIn, // Convert start date to milliseconds
          checkOut: checkOut, // Convert end date to milliseconds
          children: children,
          room: room,
          adult: adult,
        };

        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/hotel/filter`,
          params,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              My_Secret: config.MY_SECRET,
            },
          }
        );

        actions.setHotel(response.data.data);
        console.log(state.hotel, "state");
        actions.isLoading(false);
      } catch (error) {
        console.log(error, "errrr");

        actions.setHotel([]);
        // Handle error as needed
        console.error("Error fetching hotels:", error);
        // Handle error as needed
      }
    };

    getData();
  }, [location, checkIn, checkOut, room, children, adult]);

  // Function to toggle scroll lock
  const toggleScrollLock = () => {
    setScrollLock((prevScrollLock) => !prevScrollLock);
    document.body.style.overflow = scrollLock ? "auto" : "hidden";
  };
  const [showFilter, setShowFilter] = useState(false);
  const openMobileFliter = () => {
    setShowFilter(true);
    toggleScrollLock();
  };
  return (
    <div className="relative h-screen">
      <div>
        <div>
          <Navbar />
        </div>
        <div className="my-5 p-4 md:p-0">
          <Searchbar
            checkInD={checkIn}
            checkOutD={checkOut}
            adultD={adult}
            childD={children}
            roomD={room}
            locationD={location}
          />
        </div>
        <div className="block md:hidden">
          {/* MobileFilter */}
          <div className="w-[170px] mx-auto mb-1">
            <button
              className="bg-[#f62c31] rounded-3xl w-full px-2 py-2"
              onClick={openMobileFliter}
            >
              <span className="text-[18px] font-[400] text-[#fff]">
                Apply Filter
              </span>
              <FaFilter className="inline font-[400] mx-1 text-[#fff]" />
            </button>
          </div>
        </div>
        <div className="w-full">
          <FilterSection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <FixedFilter
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        scrollLock={scrollLock}
        setScrollLock={setScrollLock}
      />
    </div>
  );
}

export default Filter;
