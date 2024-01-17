import React from "react";
import { CiIndent } from "react-icons/ci";
import { TfiSupport } from "react-icons/tfi";
import { RiCoupon4Line } from "react-icons/ri";
import { CiFaceSmile } from "react-icons/ci";
import { toast } from "react-toastify";
import { MdEdit, MdDelete } from "react-icons/md";
import Img from "../../Assets/img/Rectangle.png";
import { useAppContext } from "../../context/store";
import axios from "axios";


function ReviewSection({ country, getReviews, username, user_id, review  , handleShow , totalAvgRatingDescription}) {
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

  const handleDelete = async () => {
    
    try {

      const token = localStorage.getItem("token");
      const headers = {
        Authorization: token ? `Bearer ${token}` : undefined,
      };
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/review/delete/${review._id}`,
        {
          headers,
        }
      );
      if (response.data.status) {
        toast.success("Review deleted successfully");
        getReviews()
      }

      
    } catch (error) {
      console.error("Error deleting review:", error);
      toast.error("Error deleting review");
    }
  }

  return (
    <div>
      {/* first review */}
      <div className="py-3 border-b-[1px] border-slate-400">
        <div className="flex flex-col md:flex-row justify-start items-start">
          <div className="w-[350px] hidden lg:block">
            <div className="flex flex-row justify-start items-center">
              <div className="w-[45px] h-[45px] rounded-full bg-red-500 px-3 py-2 text-[18px] text-slate-100">
                {username?.charAt(0).toUpperCase()}
              </div>
              <div className="mx-1 mt-1">
                <p className="mb-0 leading-3 text-[18px] font-bold">
                  {username}
                </p>
                <p className="mb-0">
                  <span>
                    <CiIndent className="inline font-[500]" />
                  </span>{" "}
                  <span className="mx-0 md:mx-1 text-sm font-[400]">
                    {country}
                  </span>
                </p>
              </div>
            </div>
            <div className="ml-0 md:ml-10 py-2">
              <p className="mb-1 text-sm">
                <span>
                  <TfiSupport className="inline" />
                </span>{" "}
                &nbsp;{review?.booking_id?.room_id?.roomType}
              </p>
              <p className="mb-1 text-sm">
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
              <h3 className="mb-0 text-[18px] lg:text-[20px]">  {review?.highlight}</h3>
              <p className="w-[45px] h-[40px] bg-[#169239] text-sm text-center  pt-2 rounded-lg text-slate-50">
                {averageRating.toFixed(2)}
              </p>
            </div>
            <div className="my-1">
              <p className="mb-0 text-sm">
                <span>
                  <CiFaceSmile className="inline font-[800] mx-1" />
                </span>
                {review?.review}
              </p>
            </div>
            {/* Buttons below the average rating */}
           {loggedUser_id === user_id && <>
            <div className="flex items-center mt-3" >
              {/* Edit Button */}
              <button className="mx-2"  onClick={() => handleShow(review._id , review)} >
                <MdEdit size={20} color="#007BFF" />
              </button>
              {/* Delete Button */}
              <button className="mx-2"  onClick={handleDelete}>
                <MdDelete size={20} color="#FF0000"  />
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
