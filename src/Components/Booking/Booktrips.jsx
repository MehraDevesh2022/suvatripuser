import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "../../context/store";
import ClipLoader from 'react-spinners/ClipLoader'


function Booktrips() {
  const [bookings, setBookings] = useState([]);
  const { state } = useAppContext();
  const [loading, setLoading] = useState(true);

  const formatDateRange = (startDate, endDate) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedStartDate = new Date(startDate).toLocaleDateString(
      "en-US",
      options
    );
    const formattedEndDate = new Date(endDate).toLocaleDateString(
      "en-US",
      options
    );
    return `${formattedStartDate} - ${formattedEndDate}`;
  };

  useEffect(() => {
    const getBookings = async () => {
      try {
        const header = {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };

        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/reservation/${state.profileData?._id}`,
          header
        );
        setBookings(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error.response);
        setLoading(false);
      }
    };

    getBookings();
  }, [state.profileData?._id]);

  return (
    <div className="w-full xl:w-[1000px] h-auto mx-auto p-2 xl:p-0 mt-0 mb-5">
      <h3
        className={`my-5 font-bold text-slate-700 text-[30px] md:text-[35px] ${
          window.innerWidth <= 768 ? "text-center" : "text-left"
        }`}
      >
        Booking & Trips
      </h3>
      {loading ? (
        <div className="w-full text-center p-10">
          <ClipLoader color="#FF0000" size={60} />
        </div>
      ) : (
        bookings.map((booking, index) => (
          <div
            key={index}
            className="bg-[#fff] flex flex-col md:flex-row justify-between items-center p-3 my-3 rounded-md shadow-md"
          >
            <div className="w-full md:w-[200px] h-[180px]  mx-auto rounded-lg">
              {/* Render hotel image (you can replace 'hotelImage' with the actual field name) */}
              <img
                src={
                  booking.hotel_id?.propertyPicture[0]?.link ||
                  "fallbackImageURL"
                }
                alt="booking_images"
                className="w-full h-full rounded-lg"
              />
            </div>
            <div
              className={`w-full md:w-[500px] h-auto md:h-[200px] ${
                window.innerWidth <= 768 ? "border-none" : "border-r-[1px]"
              } border-slate-400  px-3`}
            >
              <h3 className="text-[32px] font-[600] leading-6 tracking-wider mt-5">
                {booking.hotel_id?.propertyName}
              </h3>
              <p className="text-[18px] font-[400] leading-7 tracking-wider text-slate-400">
                {formatDateRange(booking.checkIn, booking.checkOut)}
              </p>
              <p className="text-[16px] font-[500] left-8 tracking-wide text-[#fa9294]">
                {booking.hotel_id?.country}
              </p>
            </div>
            <div className="w-full md:w-[250px] h-auto md:h-[200px] mx-auto">
              <h3 className="text-[20px] md:text-[30px] font-[700] leading-6 tracking-wider mt-3 text-left md:text-right">
                {state.currency}
              </h3>
              <h3 className="text-[20px] md:text-[30px] font-[700] leading-6 tracking-wider mt-3 text-left md:text-right">
                {Math.trunc(booking.room_id?.weekdayPrice * state.rate)}
              </h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Booktrips;
