import React from "react";
import HotelCard from "./HotelCard";
import { useAppContext } from "../../context/store";

import currencyapi from '@everapi/currencyapi-js'

const client = new currencyapi('YOUR-API-KEY')
client.latest({
    base_currency: 'USD',
    currencies: 'EUR'
}).then(response => {
    console.log(response)
});

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


