import React from 'react'
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



function HotelAnimites() {

    const mobileAligment = {
        textAlign: 'center'
    };



    return (
        <div className='min-w-fit md:max-w-full bg-[#fff] rounded-lg my-2 px-3 py-5'>
            {/* Animites Provides */}
            <div className='min-w-fit md:max-w-[1000px]  mx-auto'>
                <h2 className='font-[600] mb-4'>Animities Provided</h2>
                <div style={mobileAligment} className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                    <div className='flex flex-col md:flex-row items-center justify-center md:justify-start'>
                        <span><LuParkingCircle className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>Private parking</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><FaWifi className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>Free wifi</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><CiPlane className='font-[800] text-2xl text-[#129035]' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>Airport Shuttle</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><MdOutlineFamilyRestroom className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>Family room</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><TbSmokingNo className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='ml-[1px] text-[15px] font-[500] tracking-wider'>Non Smoking room</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><FaHotel className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>Restrutant</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><PiStorefrontDuotone className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='ml-[1px] text-[15px] font-[500] tracking-wider'>24- hour front desk</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><FaGlassCheers className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='mx-[2px] text-[16px] font-[500] tracking-wider'>Bar</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><MdElevator className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='mx-[2px] text-[16px] font-[500] tracking-wider'>Elevator</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-start'>
                        <span><MdFreeBreakfast className='font-[800] text-xl text-[#129035]' /></span>
                        <span className='mx-[2px] text-[16px] font-[500] tracking-wider'>Free Breakfast</span>
                    </div>
                </div>
            </div>
            {/* Locations Provides */}
            <div className='min-w-fit md:max-w-[1000px]  mx-auto my-5'>
                <h2 className='font-[600] mb-4'>What's Nearby ?</h2>
                <div style={mobileAligment} className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='flex flex-col md:flex-row items-center justify-center md:justify-start'>
                        <span><FaLocationDot className='font-[800] text-xl text-slate-900' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>Kathmandu Park (2km)</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center  md:justify-start'>
                        <span><FaLocationDot className='font-[800] text-xl text-slate-900' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>Kathmandu Park (2km)</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center  md:justify-start'>
                        <span><FaLocationDot className='font-[800] text-xl text-slate-900' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>Kathmandu Park (2km)</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center  md:justify-start'>
                        <span><FaLocationDot className='font-[800] text-xl text-slate-900' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>Teo Park (2.3km)</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center  md:justify-start'>
                        <span><FaLocationDot className='font-[800] text-xl text-slate-900' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>Teo Park (2.3km)</span>
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center  md:justify-start'>
                        <span><FaLocationDot className='font-[800] text-xl text-slate-900' /></span>
                        <span className='mx-1 text-[16px] font-[500] tracking-wider'>Teo Park (2.3km)</span>
                    </div>


                </div>
            </div>



        </div>
    )
}

export default HotelAnimites
