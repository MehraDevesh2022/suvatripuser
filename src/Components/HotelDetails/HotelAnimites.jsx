import React  , {useEffect} from 'react'
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

function HotelAnimites() {

    const mobileAligment = {
        textAlign: 'center'
    };

    const { state } = useAppContext();
    const hotelDetial = state.hotelDetails;

    const hotelData = {
        privateParking: 'Private parking', // Replace with actual data
        freeWifi: hotelDetial?.facilities?.accommodation?.includes('Free Wifi') ? 'Available' : 'Not Available',
        airportShuttle: hotelDetial?.transportation?.providePickUpService === 'yes',
        familyRoom: hotelDetial?.hotelRules?.allowChildren === 'yes',
        nonSmokingRoom: hotelDetial?.facilities?.accommodation?.includes('Non Smoking room') ? 'Available' : 'Not Available',
        restaurant: hotelDetial?.facilities?.accommodation?.includes('Restaurant') ? 'Available' : 'Not Available',
        twentyFourHourFrontDesk: hotelDetial?.facilities?.accommodation?.includes('24-hour front desk') ? true : false,
        bar: hotelDetial?.facilities?.accommodation?.includes('Bar') ? 'Available' : 'Not Available',
        elevator: hotelDetial?.facilities?.accommodation?.includes('Elevator') ? true : false,
        freeBreakfast: hotelDetial?.facilities?.accommodation?.includes('Free Breakfast') ? 'Available' : 'Not Available',
        nearbyLocations: hotelDetial?.nearbyLocations ?? ['Kathmandu Park (2km)', 'Teo Park (2.3km)'],
    };


    useEffect(() => {

    }, []); 
    return (
        <div className='min-w-fit md:max-w-full bg-[#fff] rounded-lg my-2 px-3 py-5'>
            {/* Amenities Provides */}
            <div className='min-w-fit md:max-w-[1000px]  mx-auto'>
                <h2 className='font-[600] mb-4'>Amenities Provided</h2>
                <div style={mobileAligment} className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                    <div className='flex flex-col md:flex-row items-center justify-center md:justify-start'>
                        <span><LuParkingCircle className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>{hotelData.privateParking}</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><FaWifi className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>{hotelData.freeWifi}</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><CiPlane className='font-[800] text-2xl text-[#129035]' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>{hotelData.airportShuttle ? 'Available' : 'Not Available'}</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><MdOutlineFamilyRestroom className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>{hotelData.familyRoom}</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><TbSmokingNo className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='ml-[1px] text-[15px] font-[500] tracking-wider'>{hotelData.nonSmokingRoom}</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><FaHotel className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>{hotelData.restaurant}</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><PiStorefrontDuotone className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='ml-[1px] text-[15px] font-[500] tracking-wider'>{hotelData.twentyFourHourFrontDesk ? 'Available' : 'Not Available'}</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><FaGlassCheers className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='mx-[2px] text-[16px] font-[500] tracking-wider'>{hotelData.bar}</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><MdElevator className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='mx-[2px] text-[16px] font-[500] tracking-wider'>{hotelData.elevator ? 'Available' : 'Not Available'}</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><MdFreeBreakfast className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='mx-[2px] text-[16px] font-[500] tracking-wider'>{hotelData.freeBreakfast}</span>
                    </div>
                </div>
            </div>
            {/* Locations Provides */}
            <div className='min-w-fit md:max-w-[1000px]  mx-auto my-5'>
                <h2 className='font-[600] mb-4'>What's Nearby?</h2>
                <div style={mobileAligment} className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {hotelData.nearbyLocations.map((location, index) => (
                        <div key={index} className='flex flex-col md:flex-row items-center justify-center md:justify-start'>
                            <span><FaLocationDot className='font-[800] text-xl text-slate-900' /></span>
                            <span className='mx-1 text-[16px] font-[500] tracking-wider'>{location}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HotelAnimites;
