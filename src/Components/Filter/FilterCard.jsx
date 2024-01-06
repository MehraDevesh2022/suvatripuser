import React from "react";
import HotelCard from "./HotelCard";
import { useAppContext } from "../../context/store";

function FilterCard() {
  const { state } = useAppContext();
  const hotelData = state.hotel;






  return (

    <div>
      {hotelData && hotelData.length > 0 ? (

        hotelData.map((hotel) => (
          <HotelCard hotel={hotel} key={hotel._id} />
        ))
      ) : (
        <p>No hotels found.</p>
      )}

      {/* dummy card */}

   
    </div>
  );
}

export default FilterCard;


