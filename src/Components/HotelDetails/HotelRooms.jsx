import React from 'react'
import { FaUser, FaWifi } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

function HotelRooms() {
    return (
        <div>
            <div className='w-full  bg-slate-50 my-3 flex flex-col md:flex-row justify-center items-center md:items-start py-4 rounded-lg'>
                <div className='w-[270px] border-r-[1px] px-3'>
                    <h3 className='text-[30px] font-[600] mb-0 text-[#f86d71]'>Deluxe Room</h3>
                    <div>
                        <FaUser className='inline' />
                        <FaUser className='inline mx-2' />
                    </div>
                    <p className='mb-1 mt-2'><span className='text-[20px]'>--</span> Room Only</p>
                    <p className='mb-1'><span className='text-[20px]'>--</span> Free Cancleation</p>
                    <p className='mb-1'><span className='text-[20px]'>--</span> Child Friendly</p>
                    <p className='mb-1'><span className='text-[20px]'>--</span> BreakFast Include</p>

                </div>
                <div className='w-[270px] border-r-[1px] px-4'>
                    <h3 className='text-[30px] font-[600] mb-4 text-[#f86d71]'>Animities</h3>
                    <p className='mb-1 mt-2'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                    <p className='mb-1'><span><MdOutlineHomeWork className='inline mr-2' /></span> Restrutant</p>
                    <p className='mb-1'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                </div>
                <div className='w-[270px]   pl-5'>
                    <h3 className='text-[35px] font-[600] mb-2 text-[#f86d71]'>Price</h3>
                    <p className='mb-2 text-[25px] font-[800]'>NPR 4,972</p>
                    <p className='mb-2 text-slate-500'>+720 Taxes & Fees</p>
                    <p className='mb-2 text-slate-500'>Per Night</p>
                </div>
                <div className='w-[270px] px-3'>
                    <h3 className='text-[30px] font-[600] text-[#f86d71]'>No of Rooms</h3>
                    <div className='flex flex-row items-center mb-3'>
                        <button><GrFormPrevious className='text-[30px]  font-[700]' /></button>
                        <span className='bg-slate-600 rounded-lg px-3 text-[#fff] text-[16px]'>+1</span>
                        <button><MdOutlineNavigateNext className='text-[30px]' /></button>
                        <span className='bg-[#129035] px-3 rounded-lg text-slate-200'>selected</span>
                    </div>
                    <p className='text-[25px] font-[700]  mb-1'>NPR 4,972</p>
                    <p className='text-[21px]'>total</p>
                </div>

            </div>
            <div className='w-full  bg-slate-50 my-3 flex flex-col md:flex-row justify-center items-center md:items-start py-4 rounded-lg'>
                <div className='w-[270px] border-r-[1px] px-3'>
                    <h3 className='text-[30px] font-[600] mb-0 text-[#f86d71]'>Deluxe Room</h3>
                    <div>
                        <FaUser className='inline' />
                        <FaUser className='inline mx-2' />
                    </div>
                    <p className='mb-1 mt-2'><span className='text-[20px]'>--</span> Room Only</p>
                    <p className='mb-1'><span className='text-[20px]'>--</span> Free Cancleation</p>
                    <p className='mb-1'><span className='text-[20px]'>--</span> Child Friendly</p>
                    <p className='mb-1'><span className='text-[20px]'>--</span> BreakFast Include</p>

                </div>
                <div className='w-[270px] border-r-[1px] px-4'>
                    <h3 className='text-[30px] font-[600] mb-4 text-[#f86d71]'>Animities</h3>
                    <p className='mb-1 mt-2'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                    <p className='mb-1'><span><MdOutlineHomeWork className='inline mr-2' /></span> Restrutant</p>
                    <p className='mb-1'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                </div>
                <div className='w-[270px]   pl-5'>
                    <h3 className='text-[35px] font-[600] mb-2 text-[#f86d71]'>Price</h3>
                    <p className='mb-2 text-[25px] font-[800]'>NPR 4,972</p>
                    <p className='mb-2 text-slate-500'>+720 Taxes & Fees</p>
                    <p className='mb-2 text-slate-500'>Per Night</p>
                </div>
                <div className='w-[270px] px-3'>
                    <h3 className='text-[30px] font-[600] text-[#f86d71]'>No of Rooms</h3>
                    <div className='flex flex-row items-center mb-3'>
                        <button><GrFormPrevious className='text-[30px]  font-[700]' /></button>
                        <span className='bg-slate-600 rounded-lg px-3 text-[#fff] text-[16px]'>+1</span>
                        <button><MdOutlineNavigateNext className='text-[30px]' /></button>
                        <span className='bg-[#129035] px-3 rounded-lg text-slate-200'>selected</span>
                    </div>
                    <p className='text-[25px] font-[700]  mb-1'>NPR 4,972</p>
                    <p className='text-[21px]'>total</p>
                </div>

            </div>
            <div className='w-full  bg-slate-50 my-3 flex flex-col md:flex-row justify-center items-center md:items-start py-4 rounded-lg'>
                <div className='w-[270px] border-r-[1px] px-3'>
                    <h3 className='text-[30px] font-[600] mb-0 text-[#f86d71]'>Deluxe Room</h3>
                    <div>
                        <FaUser className='inline' />
                        <FaUser className='inline mx-2' />
                    </div>
                    <p className='mb-1 mt-2'><span className='text-[20px]'>--</span> Room Only</p>
                    <p className='mb-1'><span className='text-[20px]'>--</span> Free Cancleation</p>
                    <p className='mb-1'><span className='text-[20px]'>--</span> Child Friendly</p>
                    <p className='mb-1'><span className='text-[20px]'>--</span> BreakFast Include</p>

                </div>
                <div className='w-[270px] border-r-[1px] px-4'>
                    <h3 className='text-[30px] font-[600] mb-4 text-[#f86d71]'>Animities</h3>
                    <p className='mb-1 mt-2'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                    <p className='mb-1'><span><MdOutlineHomeWork className='inline mr-2' /></span> Restrutant</p>
                    <p className='mb-1'><span><FaWifi className='inline mr-2' /></span> Free Wifi</p>
                    <p className='mb-1'><span><LuParkingCircle className='inline mr-2' /></span> Free Parking</p>
                </div>
                <div className='w-[270px]   pl-5'>
                    <h3 className='text-[35px] font-[600] mb-2 text-[#f86d71]'>Price</h3>
                    <p className='mb-2 text-[25px] font-[800]'>NPR 4,972</p>
                    <p className='mb-2 text-slate-500'>+720 Taxes & Fees</p>
                    <p className='mb-2 text-slate-500'>Per Night</p>
                </div>
                <div className='w-[270px] px-3'>
                    <h3 className='text-[30px] font-[600] text-[#f86d71]'>No of Rooms</h3>
                    <div className='flex flex-row items-center mb-3'>
                        <button><GrFormPrevious className='text-[30px]  font-[700]' /></button>
                        <span className='bg-slate-600 rounded-lg px-3 text-[#fff] text-[16px]'>+1</span>
                        <button><MdOutlineNavigateNext className='text-[30px]' /></button>
                        <span className='bg-[#129035] px-3 rounded-lg text-slate-200'>selected</span>
                    </div>
                    <p className='text-[25px] font-[700]  mb-1'>NPR 4,972</p>
                    <p className='text-[21px]'>total</p>
                </div>

            </div>

        </div>


    )
}

export default HotelRooms
