import React from "react";
import HotelCard from "./HotelCard";
import { useAppContext } from "../../context/store";
import PacmanLoader from 'react-spinners/PacmanLoader'

function FilterCard({ filteredHotels }) {
  const { state } = useAppContext();
  const hotelData = state.hotel;

  return (
    <div>
      {filteredHotels && filteredHotels.length > 0 ? (
        filteredHotels.map((hotel) => (
          <HotelCard hotel={hotel} key={hotel._id} />
        ))
      ) : (
        <div className="w-full text-center">
          <p className="text-center text-[30px] text-[#FF0000]">No room founds</p>
          <PacmanLoader color="#FF0000" className="w-[100px] mx-auto" />
        </div>
      )}

      {/* dummy card */}
    </div>
  );
}

export default FilterCard;
