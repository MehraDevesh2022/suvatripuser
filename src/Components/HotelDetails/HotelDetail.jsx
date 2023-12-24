import React from "react";
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
    console.log(param, "param");
  const { actions } = useAppContext();

  const fecthHotel = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/hotel/get-hotel-by-id/${param?.id}`
      );
      

      actions.setHotelDetails(response.data.data);
    } catch (error) {
      console.log(error, "error");
    }
  };
  React.useEffect(() => {
    fecthHotel();
  }, []);

  return (
    <div className="w-full">
      <div>
        <Navbar />
      </div>
      <div className="py-5">
        <Searchbar />
      </div>
      <div className="w-full md:w-[1100px]  mx-auto">
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
