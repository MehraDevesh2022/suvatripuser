import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import Searchbar from "../Home/Searchbar";
import Footer from "../Fotter/Footer";
import HotelHaeding from "./HotelHaeding";
import HotelFilter from "./HotelFilter";
import { Outlet } from "react-router-dom";
import NestedRouting from "./NestedRouting";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/store";
import axios from "axios";

function HotelDetail() {
  const param = useParams();
  const { actions } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHotel = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/hotel/get-hotel-by-id/${param?.id}`
      );
      console.log(response.data.data, "response.data.data");
      actions.setHotelDetails(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching hotel details:", error);
      setError("Error fetching hotel details. Please try again.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHotel();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or another loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Render an error message
  }

  return (
    <div className="w-full">
      <div>
        <Navbar />
      </div>
      <div className="py-5">
        <Searchbar />
      </div>
      <div className="w-full md:w-[1100px] mx-auto">
        <HotelHaeding />
        <HotelFilter />
        <div>
          <Outlet />
          <NestedRouting />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HotelDetail;
