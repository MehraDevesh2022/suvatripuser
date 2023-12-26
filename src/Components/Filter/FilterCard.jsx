import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { FaLocationPin, FaWifi } from "react-icons/fa6";
import { LuParkingCircle } from "react-icons/lu";
import { BsHouseCheckFill } from "react-icons/bs";
import { useAppContext } from "../../context/store";
import LoginImg from "../../Assets/img/Rectangle.png";
import { Link } from "react-router-dom";
function FilterCard() {
  const { state } = useAppContext();
  const hotelData = state.hotel;

  const isMobile = window.innerWidth > 768;

  const containerStyle = {
    textAlign: isMobile ? "right" : "left",

  };



  return (

    <div>
      {hotelData && hotelData.length > 0 ? (

        hotelData.map((hotel) => (
          <Link

            to={`/hoteldetails/${hotel?._id}`}
            key={hotel?._id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              key={hotel._id["$oid"]}
              className="w-full md:w-[800px] h-auto my-0 bg-[#fff] border-[1px] mt-0 mb-2 shadow-lg mx-auto flex flex-col md:flex-row justify-start p-2 rounded-lg"
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
                    <TiStarFullOutline className="inline text-[#FFD250]" />
                    <TiStarFullOutline className="inline text-[#FFD250]" />
                    <TiStarFullOutline className="inline text-[#FFD250]" />
                    <TiStarFullOutline className="inline text-[#FFD250]" />
                    <TiStarFullOutline className="inline text-[#FFD250]" />
                  </div>
                  <div className="flex flex-row items-center ml-4">
                    <p>
                      <FaLocationPin />
                    </p>
                    <p className="ml-2">{hotel.city}</p>
                  </div>
                </div>
                <p className="px-2 leading-5 text-slate-600 text-sm">
                  {hotel.propertyType} - {hotel.roomsNo} rooms
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
              <div className={`p-2 w-full md:w-[200px] flex flex-row items-start justify-between md:block ${window.innerWidth <= 768 ? 'border-none' : 'border-l-[1px]'} border-slate-400 py-5 px-2`}>
                <div style={containerStyle}>
                  <h4
                    style={containerStyle}
                    className="font-[700] text-[#f74044] leading-6 mb-0"
                  >
                    Very Good {hotel.rating}
                  </h4>
                  <p style={containerStyle} className="text-[#f74044]">
                    ({hotel.ratingCount} Rating)
                  </p>
                </div>
                <div style={containerStyle}>
                  <h3
                    className="text-[20px] md:text-[24px] text-slate-600  font-[900] text-right"
                  >
                    {hotel.currency} {hotel.price}
                  </h3>
                  <div style={containerStyle}>
                    <p className="mb-0 text-[16px] md:text-[20px] text-right">
                      + {hotel.taxesAndFees} Taxes & Fee
                    </p>
                    <p className="mb-0 text-[16px] text-right">
                      Per Night
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>No hotels found.</p>
      )}

      {/* dummy card */}

      {hotelData?.length > 0 && <>
        <div className="w-full md:w-[800px] h-auto my-3 bg-[#fff] border-[1px] shadow-lg mx-auto flex flex-col md:flex-row justify-start p-2 rounded-lg">
          <div className="w-full md:w-[250px] h-[250px] rounded-lg">
            <img
              src={LoginImg}
              alt="filter_img"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-[350px] ml-1">
            <h3 className="mt-1 mb-1 px-2 font-[700] text-[30px]">
              Luxe Properties
            </h3>
            <div className="flex flex-row justify-start my-0 px-2">
              <div>
                <TiStarFullOutline className="inline text-[#FFD250]" />
                <TiStarFullOutline className="inline text-[#FFD250]" />
                <TiStarFullOutline className="inline text-[#FFD250]" />
                <TiStarFullOutline className="inline text-[#FFD250]" />
                <TiStarFullOutline className="inline text-[#FFD250]" />
              </div>
              <div className="flex flex-row items-center ml-4">
                <p>
                  <FaLocationPin />
                </p>
                <p className="ml-2">Kathmandu</p>
              </div>
            </div>
            <p className="px-2 leading-5 text-slate-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, necessitatibus unde blanditiis nisi nostrum soluta
              exercitationem aperiam expedita corrupti, nam maiores totam, dolore
              quam eos magni eveniet atque odio ut. Lorem ipsum dolor sit amet,
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
          <div className={`p-2 w-full md:w-[200px] flex flex-row items-start justify-between md:block ${window.innerWidth <= 768 ? 'border-none' : 'border-l-[1px]'} border-slate-400 py-5 px-2`}>
            <div style={containerStyle}>
              <h4
                style={containerStyle}
                className="font-[700] text-[#f74044] leading-6 mb-0"
              >
                Very Good 4.7
              </h4>
              <p style={containerStyle} className="text-[#f74044]">
                (572 Rating)
              </p>
            </div>
            <div style={containerStyle}>
              <h3
                className="text-[20px] md:text-[24px] text-slate-600  font-[900] text-right"
              >
                NPR 4,972
              </h3>
              <div style={containerStyle}>
                <p className="mb-0 text-[16px] md:text-[20px] text-right">
                  + 720 Taxes & Fee
                </p>
                <p className="mb-0 text-[16px] text-right">
                  Per Night
                </p>
              </div>
            </div>
          </div>
        </div>
      </>}
    </div>
  );
}

export default FilterCard;


