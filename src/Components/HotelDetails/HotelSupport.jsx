import React, { useState } from "react";
import axios from "axios";
import { useAppContext } from "../../context/store";
import { toast } from "react-toastify";
function HotelSupport() {
  const [supportText, setSupportText] = useState("");

  const { state } = useAppContext();

  const handleSupportSubmit = async () => {
    try {
      if (
        JSON.parse(localStorage.getItem("isLoggedIn")) &&
        localStorage.getItem("token") &&
        state.isLoggedIn
      ) {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/tickets/create`,
          {
            user_id: state.profileData?._id,
            vendor_id: state?.hotelDetails?._id,
            messages: [supportText],
          }
        );

        if (response.data) {
          setSupportText("");
          toast.success(
            response?.data?.message || "Ticket created successfully"
          );
        }
      } else {
        toast.warning("Please login to create ticket");
      }
    } catch (error) {
      console.error(
        "Error creating ticket:",
        error.response ? error.response.data.message : error.message
      );
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <div className="w-full bg-[#fff] my-3 rounded-lg shadow-md px-2 md:px-0 py-10">
        <div className="min-w-fit max-w-4xl mx-auto">
          <h3 className="text-xl md:text-3xl font-[600] tracking-wider">
            Get Connected to us
          </h3>
          <div className="min-w-fit max-w-full h-40 border-[2px] rounded-sm border-slate-300">
            <textarea
              name="support"
              id="support"
              placeholder="Feel free to write your issue"
              className="w-full h-full bg-white outline-none px-1 text-[18px] py-1 rounded-sm"
              value={supportText}
              onChange={(e) => setSupportText(e.target.value)}
            ></textarea>
          </div>
          <div className="my-3">
            <button
              className="bg-[#f62d32] w-[130px] py-2 font-[500] text-slate-50 rounded-sm cursor-pointer hover:opacity-90"
              onClick={handleSupportSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelSupport;
