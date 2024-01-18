import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { FaWifi } from "react-icons/fa6";
import { CiPlane } from "react-icons/ci";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { TbSmokingNo } from "react-icons/tb";
import { FaHotel } from "react-icons/fa6";
import { PiStorefrontDuotone } from "react-icons/pi";
import { FaGlassCheers } from "react-icons/fa";
import { MdElevator } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

 import { useAppContext } from "../../context/store";

 function HotelDiscription() {
    const mobileAligment = {
      textAlign: 'center',
    };
  
    const starArray = Array.from({ length: 5 }, (_, index) => index + 1); // Generate an array from 1 to 5 for star ratings
  
    const { state } = useAppContext();
    const hotelDetial = state.hotelDetails;
  
    // Use optional chaining to handle cases where hotelDetails may be undefined
    const hotelData = {
      location: hotelDetial?.country || 'Unknown Location',
      starRating: hotelDetial?.starRating || 0, // Replace with actual star rating from hotelDetails
      privateParking: hotelDetial?.parking?.isParkingAvailable === 'yesPaid' ? 'Available (Paid)' : 'Not Available',
      freeWifi: hotelDetial?.facilities?.accommodation?.includes('Free Wifi') ? 'Available' : 'Not Available',
      airportShuttle: hotelDetial?.transportation?.providePickUpService === 'yes' ? 'Available' : 'Not Available',
      familyRoom: hotelDetial?.hotelRules?.allowChildren === 'yes' ? 'Available' : 'Not Available',
      nonSmokingRoom: hotelDetial?.facilities?.accommodation?.includes('Non Smoking room') ? 'Available' : 'Not Available',
      restaurant: hotelDetial?.facilities?.accommodation?.includes('Restaurant') ? 'Available' : 'Not Available',
      twentyFourHourFrontDesk: hotelDetial?.facilities?.accommodation?.includes('24-hour front desk') ? 'Available' : 'Not Available',
      bar: hotelDetial?.facilities?.accommodation?.includes('Bar') ? 'Available' : 'Not Available',
      elevator: hotelDetial?.facilities?.accommodation?.includes('Elevator') ? 'Available' : 'Not Available',
      freeBreakfast: hotelDetial?.facilities?.accommodation?.includes('Free Breakfast') ? 'Available' : 'Not Available',
      nearbyLocations: hotelDetial?.nearbyLocations || ['Location 1', 'Location 2', 'Location 3'], // Replace with actual data from hotelDetails
      description: hotelDetial?.description || 'Description not available Description not available Description not available Description not available Description not availableDescription not availableDescription not availableDescription not availableDescription not availableDescription not availableDescription not availableDescription not availableDescription not availableDescription not availablevDescription not available', // Default description if not available
    };
  

    function removeHtmlTags(htmlString) {
      // Create a temporary element (a div) to parse the HTML
      var doc = new DOMParser().parseFromString(htmlString, 'text/html');
      
      
      return doc.body.textContent || "";
  }
    return (
      <div>
        <div className='w-full h-auto bg-white my-3 rounded-lg'>
          <div className='p-4'>
            <h3 className='text-[30px] font-[700] mb-0'>Description</h3>
            <div>
              <span>
                <FaMapMarkerAlt className='inline mr-1' />
              </span>
              <span className='text-[18px] text-slate-400'>{hotelData.location}</span>
  
              {starArray.map((item, index) => (
                <FaStar key={index} className='inline ml-2 text-[#FFD250] font-[900]' />
              ))}
            </div>
  
            <div className='py-2'>
            <p>{removeHtmlTags(hotelData?.description)}</p>
          </div>
          </div>
  
          {/* Discription Icons */}
          <div className='px-4 pb-4'>
            <div style={mobileAligment} className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4'>
              <div className='flex flex-col md:flex-row items-center justify-center md:justify-start'>
                <span>
                  <LuParkingCircle className='font-[800] text-xl text-[#129035]' />
                </span>
                <span className='mx-1 text-[16px] font-[500] tracking-wider'>{hotelData.privateParking}</span>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-start'>
                <span>
                  <FaWifi className='font-[800] text-xl text-[#129035]' />
                </span>
                <span className='mx-1 text-[16px] font-[500] tracking-wider'>{hotelData.freeWifi}</span>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-start'>
                <span>
                  <CiPlane className='font-[800] text-2xl text-[#129035]' />
                </span>
                <span className='mx-1 text-[16px] font-[500] tracking-wider'>{hotelData.airportShuttle}</span>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-start'>
                <span>
                  <MdOutlineFamilyRestroom className='font-[800] text-xl text-[#129035]' />
                </span>
                <span className='mx-1 text-[16px] font-[500] tracking-wider'>{hotelData.familyRoom}</span>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-start'>
                <span>
                  <TbSmokingNo className='font-[800] text-xl text-[#129035]' />
                </span>
                <span className='ml-[1px] text-[15px] font-[500] tracking-wider'>{hotelData.nonSmokingRoom}</span>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-start'>
                <span>
                  <FaHotel className='font-[800] text-xl text-[#129035]' />
                </span>
                <span className='mx-1 text-[16px] font-[500] tracking-wider'>{hotelData.restaurant}</span>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-start'>
                <span>
                  <PiStorefrontDuotone className='font-[800] text-xl text-[#129035]' />
                </span>
                <span className='ml-[1px] text-[15px] font-[500] tracking-wider'>{hotelData.twentyFourHourFrontDesk}</span>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-start'>
                <span>
                  <FaGlassCheers className='font-[800] text-xl text-[#129035]' />
                </span>
                <span className='mx-[2px] text-[16px] font-[500] tracking-wider'>{hotelData.bar}</span>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-start'>
                <span>
                  <MdElevator className='font-[800] text-xl text-[#129035]' />
                </span>
                <span className='mx-[2px] text-[16px] font-[500] tracking-wider'>{hotelData.elevator}</span>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-start'>
                <span>
                  <MdFreeBreakfast className='font-[800] text-xl text-[#129035]' />
                </span>
                <span className='mx-[2px] text-[16px] font-[500] tracking-wider'>{hotelData.freeBreakfast}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default HotelDiscription;
