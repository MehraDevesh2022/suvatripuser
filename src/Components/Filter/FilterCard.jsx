import React from "react";
import HotelCard from "./HotelCard";
import { useAppContext } from "../../context/store";

function FilterCard({filteredHotels}) {
  const { state } = useAppContext();
  const hotelData = state.hotel;






  return (

    <div>
      {filteredHotels && filteredHotels.length > 0 ? (

filteredHotels.map((hotel) => (
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


