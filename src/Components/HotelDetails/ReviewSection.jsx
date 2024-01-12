import React from "react";
import { CiIndent } from "react-icons/ci";
import { TfiSupport } from "react-icons/tfi";
import { RiCoupon4Line } from "react-icons/ri";
import { CiFaceSmile } from "react-icons/ci";
import { MdEdit, MdDelete } from "react-icons/md"; // Import the edit and delete icons
import Img from "../../Assets/img/Rectangle.png";
import { useAppContext } from "../../context/store";

function ReviewSection({ country, propertyName, username, user_id, review  , handleShow}) {
  console.log("review username", user_id);

  const { state } = useAppContext();

  const loggedUser_id = state?.profileData?._id;

  const calculateAverageRating = () => {
    const ratings = [
      review.cleanliness_rating,
      review.comfort_rating,
      review.facilities_rating,
      review.location_rating,
      review.money_rating,
      review.staff_rating,
      review.wifi_rating,
    ];

    const totalRatings = ratings.reduce((acc, rating) => acc + rating, 0);
    const averageRating = totalRatings / ratings.length;

    return isNaN(averageRating) ? 0 : averageRating;
  };

  // Format check-in and check-out date
  const checkIn = review?.booking_id?.checkIn
    ? new Date(review.booking_id.checkIn).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })
    : null;

  // Calculate the number of nights and days
  const getNightsAndDays = () => {
    if (review?.booking_id?.checkIn && review?.booking_id?.checkOut) {
      const checkInDate = new Date(review.booking_id.checkIn);
      const checkOutDate = new Date(review.booking_id.checkOut);
      const durationInDays = Math.floor(
        (checkOutDate - checkInDate) / (24 * 60 * 60 * 1000)
      );

      return {
        nights: durationInDays,
        days: durationInDays > 1 ? "days" : "day",
      };
    }

    return {
      nights: null,
      days: null,
    };
  };

  const { nights, days } = getNightsAndDays();

  // date format
  const created = new Date(review.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Calculate the average rating
  const averageRating = calculateAverageRating();

  return (
    <div>
      {/* first review */}
      <div className="py-3 border-b-[1px] border-slate-400">
        <div className="flex flex-col md:flex-row justify-start items-start">
          <div className="w-[350px]">
            <div className="flex flex-row justify-start items-center">
              <div className="w-[45px] h-[45px] rounded-full bg-red-500 px-3 py-2 text-[18px] md:text-[23px] text-slate-100">
                {username?.charAt(0).toUpperCase()}
              </div>
              <div className="mx-0 md:mx-1">
                <p className="mb-0 leading-3 text-[16px] md:text-[20px] font-bold">
                  {username}
                </p>
                <p className="mb-0">
                  <span>
                    <CiIndent className="inline font-[500]" />
                  </span>{" "}
                  <span className="mx-0 md:mx-1 text-sm font-[500]">
                    {country}
                  </span>
                </p>
              </div>
            </div>
            <div className="ml-0 md:ml-10 py-2">
              <p className="mb-3">
                <span>
                  <TfiSupport className="inline" />
                </span>{" "}
                &nbsp;{review?.booking_id?.room_id?.roomType}
              </p>
              <p className="mb-4">
                <span>
                  <RiCoupon4Line className="inline" />
                </span>{" "}
                {nights !== null
                  ? `${nights} Night${nights > 1 ? "s" : ""} - ${checkIn} `
                  : "Check-in/Check-out dates not available"}
              </p>
            </div>
          </div>
          <div className="w-full">
            <p className="mb-0 text-slate-400 text-sm">
              Reviewed: {created}
            </p>
            <div className="w-full flex flex-row justify-between mb-0">
              <h3 className="mb-0">  {review?.highlight}</h3>
              <p className="w-[35px] h-[35px] bg-[#169239] px-2 py-2 rounded-lg text-slate-50">
                {averageRating.toFixed(2)}
              </p>
            </div>
            <div className="my-1">
              <p className="mb-0">
                <span>
                  <CiFaceSmile className="inline font-[800] mx-1" />
                </span>
                {review?.review}
              </p>
            </div>
            {/* Buttons below the average rating */}
           {loggedUser_id === user_id && <>
            <div className="flex items-center mt-3" onClick={() => handleShow(review._id)}>
              {/* Edit Button */}
              <button className="mx-2" >
                <MdEdit size={20} color="#007BFF" />
              </button>
              {/* Delete Button */}
              <button className="mx-2">
                <MdDelete size={20} color="#FF0000" />
              </button>
            </div>
           </>}
            <div className="flex flex-row">
              {review?.images?.map((img) => (
                <div key={img} className="w-[100px] h-[100px] ml-3 rounded-md">
                  <img
                    src={img || Img}
                    alt="rectangle_img"
                    className="w-full h-full rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
