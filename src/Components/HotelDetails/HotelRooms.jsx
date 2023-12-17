import React from 'react'
import { FaUser, FaWifi } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

function HotelRooms() {

    return (
        <div>
            {/* First card */}
            <div className='w-full  bg-slate-50 my-3 grid grid-cols-2 md:grid-cols-4 gap-4 p-2 rounded-lg shadow-md'>
                <div className='border-r-[1px] px-3 border-slate-400'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] mb-0 text-[#f86d71]'>Deluxe Room</h3>
                    <div>
                        <FaUser className='inline' />
                        <FaUser className='inline mx-2' />
                    </div>
                    <p className='mb-1 mt-2'><span className='text-[16px]'>--</span> Room Only</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> Free Cancleation</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> Child Friendly</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> BreakFast Include</p>

                </div>
                <div className='border-r-[1px] px-4 border-slate-400'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] mb-3 text-[#f86d71]'>Animities</h3>
                    <p className='mb-1 mt-2'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                    <p className='mb-1'><span><MdOutlineHomeWork className='inline mr-2' /></span> Restrutant</p>
                    <p className='mb-1'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                </div>
                <div className='pl-5 border-r-[1px] border-slate-400'>
                    <h3 className='text-[25px] font-[600] mb-2 text-[#f86d71]'>Price</h3>
                    <p className='mb-2 text-[20px] font-[800]'>NPR 4,972</p>
                    <p className='mb-2 text-slate-500'>+720 Taxes & Fees</p>
                    <p className='mb-2 text-slate-500'>Per Night</p>
                </div>
                <div className='px-3'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] text-[#f86d71]'>No of Rooms</h3>
                    <div className='flex flex-row items-center mb-3'>
                        <button><GrFormPrevious className='text-[20px]  font-[700]' /></button>
                        <span className='bg-slate-600 rounded-lg px-2 text-[#fff] text-[16px]'>+1</span>
                        <button><MdOutlineNavigateNext className='text-[20px]' /></button>
                        <span className='bg-[#129035] text-sm px-3 rounded-lg text-slate-200'>selected</span>
                    </div>
                    <p className='text-[21px] font-[700]  mb-1'>NPR 4,972</p>
                    <p className='text-[21px]'>Total</p>
                </div>

            </div>
            {/* Second Card */}
            <div className='w-full  bg-slate-50 my-3 grid grid-cols-2 md:grid-cols-4 gap-4 p-2 rounded-lg shadow-md'>
                <div className='border-r-[1px] px-3 border-slate-400'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] mb-0 text-[#f86d71]'>Deluxe Room</h3>
                    <div>
                        <FaUser className='inline' />
                        <FaUser className='inline mx-2' />
                    </div>
                    <p className='mb-1 mt-2'><span className='text-[16px]'>--</span> Room Only</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> Free Cancleation</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> Child Friendly</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> BreakFast Include</p>

                </div>
                <div className='border-r-[1px] px-4 border-slate-400'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] mb-3 text-[#f86d71]'>Animities</h3>
                    <p className='mb-1 mt-2'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                    <p className='mb-1'><span><MdOutlineHomeWork className='inline mr-2' /></span> Restrutant</p>
                    <p className='mb-1'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                </div>
                <div className='pl-5 border-r-[1px] border-slate-400'>
                    <h3 className='text-[25px] font-[600] mb-2 text-[#f86d71]'>Price</h3>
                    <p className='mb-2 text-[20px] font-[800]'>NPR 4,972</p>
                    <p className='mb-2 text-slate-500'>+720 Taxes & Fees</p>
                    <p className='mb-2 text-slate-500'>Per Night</p>
                </div>
                <div className='px-3'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] text-[#f86d71]'>No of Rooms</h3>
                    <div className='flex flex-row items-center mb-3'>
                        <button><GrFormPrevious className='text-[20px]  font-[700]' /></button>
                        <span className='bg-slate-600 rounded-lg px-2 text-[#fff] text-[16px]'>+1</span>
                        <button><MdOutlineNavigateNext className='text-[20px]' /></button>
                        <span className='bg-[#129035] text-sm px-3 rounded-lg text-slate-200'>selected</span>
                    </div>
                    <p className='text-[21px] font-[700]  mb-1'>NPR 4,972</p>
                    <p className='text-[21px]'>Total</p>
                </div>

            </div>
            {/* Third Card */}
            <div className='w-full  bg-slate-50 my-3 grid grid-cols-2 md:grid-cols-4 gap-4 p-2 rounded-lg shadow-md'>
                <div className='border-r-[1px] px-3 border-slate-400'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] mb-0 text-[#f86d71]'>Deluxe Room</h3>
                    <div>
                        <FaUser className='inline' />
                        <FaUser className='inline mx-2' />
                    </div>
                    <p className='mb-1 mt-2'><span className='text-[16px]'>--</span> Room Only</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> Free Cancleation</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> Child Friendly</p>
                    <p className='mb-1'><span className='text-[16px]'>--</span> BreakFast Include</p>

                </div>
                <div className='border-r-[1px] px-4 border-slate-400'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] mb-3 text-[#f86d71]'>Animities</h3>
                    <p className='mb-1 mt-2'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                    <p className='mb-1'><span><MdOutlineHomeWork className='inline mr-2' /></span> Restrutant</p>
                    <p className='mb-1'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                </div>
                <div className='pl-5 border-r-[1px] border-slate-400'>
                    <h3 className='text-[25px] font-[600] mb-2 text-[#f86d71]'>Price</h3>
                    <p className='mb-2 text-[20px] font-[800]'>NPR 4,972</p>
                    <p className='mb-2 text-slate-500'>+720 Taxes & Fees</p>
                    <p className='mb-2 text-slate-500'>Per Night</p>
                </div>
                <div className='px-3'>
                    <h3 className='text-[20px] md:text-[25px] font-[600] text-[#f86d71]'>No of Rooms</h3>
                    <div className='flex flex-row items-center mb-3'>
                        <button><GrFormPrevious className='text-[20px]  font-[700]' /></button>
                        <span className='bg-slate-600 rounded-lg px-2 text-[#fff] text-[16px]'>+1</span>
                        <button><MdOutlineNavigateNext className='text-[20px]' /></button>
                        <span className='bg-[#129035] text-sm px-3 rounded-lg text-slate-200'>selected</span>
                    </div>
                    <p className='text-[21px] font-[700]  mb-1'>NPR 4,972</p>
                    <p className='text-[21px]'>Total</p>
                </div>

            </div>
        </div>


    )
}

export default HotelRooms
