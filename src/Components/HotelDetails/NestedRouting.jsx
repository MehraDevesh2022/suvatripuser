import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HotelRooms from "./HotelRooms";
import HotelAmenities from "./HotelAnimites";
import HotelDescription from "./HotelDiscription";
import HotelReviews from "./HotelReviews";
import HotelSupport from "./HotelSupport";
import HotelPhotos from "./HotelPhotos";
import { useAppContext } from "../../context/store";
import axios from "axios";
import { MY_SECRET } from "../../config";
function NestedRouting() {
  const { state, actions } = useAppContext();
  const hotelDetial = state.hotelDetails;

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: token ? `Bearer ${token}` : undefined,
          My_Secret: MY_SECRET,
        };
        // token
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/room/${hotelDetial?._id}`,
          {
            headers,
          }
        );

        if (response.data.data) {
          actions.setRoomData(response.data.data);
        
        }
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <Routes> 
      <Route path="/" element={<HotelRooms />} />
      <Route path="amenities" element={<HotelAmenities />} />
      <Route path="description" element={<HotelDescription />} />
      <Route path="review" element={<HotelReviews />} />
      <Route path="support" element={<HotelSupport />} />
      <Route path="photos/*" element={<HotelPhotos />} />
    </Routes>
  );
}

export default NestedRouting;
