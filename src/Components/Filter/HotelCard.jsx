import React, { useState , useEffect } from "react";
import { BsHouseCheckFill } from "react-icons/bs";
import { useAppContext } from "../../context/store";
import { TiStarFullOutline } from "react-icons/ti";
import { FaLocationPin, FaWifi } from "react-icons/fa6";
import { LuParkingCircle } from "react-icons/lu";


import { Link } from "react-router-dom";
function HotelCard({ hotel }) {
  const { state } = useAppContext();
  const allRooms = state.allRooms
  const isMobile = window.innerWidth > 768;
  const containerStyle = {
    textAlign: isMobile ? "right" : "left",
  };

  const [lowestWeekdayPrice, setLowestWeekdayPrice] = useState(0);


  useEffect(() => {
    const hotelRooms = allRooms.filter((room) => room.hotel_id === hotel._id);

    if (hotelRooms.length > 0) {
      const minPrice = Math.min(...hotelRooms.map((room) => parseInt(room.weekdayPrice, 10)));
      setLowestWeekdayPrice(minPrice);
    }
  }, [allRooms, hotel._id]);

  function removeHtmlTags(htmlString) {
    // Create a temporary element (a div) to parse the HTML
    var doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "NA";
}


  return (
    <>
      <Link
        to={`/hoteldetails/${hotel?._id}`}
        key={hotel?._id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div
          key={hotel._id["$oid"]}
          className="w-full xl:w-[800px] h-auto my-0 bg-[#fff] border-[1px] mt-0 mb-2 shadow-lg mx-auto flex flex-col md:flex-row justify-start p-2 rounded-lg"
        >
          <div className="w-full md:w-[250px] h-[250px] rounded-lg">
            <img
              src={hotel.propertyPicture[0]?.link || ""}
              alt={hotel.propertyName}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-[350px] ml-1">
            <h3 className="mt-1 mb-1 px-2 font-[700] text-[30px]">
              {hotel.propertyName}
            </h3>
            <div className="flex flex-row justify-start my-0 px-2">
              <div>
               {hotel.rating && [...Array(Number(hotel.rating))].map((_, i) => (

                <>
                  <TiStarFullOutline className="inline text-[#FFD250]" />
                </>
               ))}
               
              </div>
              <div className="flex flex-row items-center ml-4">
                <p>
                  <FaLocationPin />
                </p>
                <p className="ml-2">{hotel.city}</p>
              </div>
            </div>

           
            <p className="px-2 leading-5 text-slate-600 text-sm">
                {removeHtmlTags(hotel?.description)}
            </p>
            <div className="ml-0 text-left">
              <ul className="flex flex-row justify-start items-center">
                <li className="text-sm ml-0">
                  <span>
                    <FaWifi className="inline ml-0 mr-1 text-[18px] text-[#91b887]" />
                  </span>
                  <span>Free Wifi</span>
                </li>

                <li className="text-sm ml-1">
                  <span>
                    <LuParkingCircle className="inline mx-1 text-[18px] text-[#91b887]" />
                  </span>
                  <span>Free Parking</span>
                </li>
                <li className="text-sm ml-1">
                  <span>
                    <BsHouseCheckFill className="inline mx-1 text-[18px] text-[#91b887]" />
                  </span>
                  <span>Restaurant</span>
                </li>
              </ul>
            </div>

            
          </div>
          <div
            className={`p-2 w-full md:w-[200px] flex flex-row items-start justify-between md:block ${
              window.innerWidth <= 768 ? "border-none" : "border-l-[1px]"
            } border-slate-400 py-5 px-2`}
          >
            <div style={containerStyle}>
              <h4
                style={containerStyle}
                className="font-[700] text-[#f74044] leading-6 mb-0"
              >
                Very Good {hotel.rating}
              </h4>
              <p style={containerStyle} className="text-[#f74044]">
                ({hotel.rating} Rating)
              </p>
            </div>
            <div style={containerStyle}>
              <h3 className="text-[20px] md:text-[24px] text-slate-600  font-[900] text-right">
                {state.currency} {Math.trunc(lowestWeekdayPrice * state.rate)}
              </h3>
              <div style={containerStyle}>
                <p className="mb-0 text-[16px] md:text-[20px] text-right">
                  + {hotel.taxesAndFees} Taxes & Fee
                </p>
                <p className="mb-0 text-[16px] text-right">Per Night</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default HotelCard;
