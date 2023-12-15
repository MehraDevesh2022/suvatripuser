import React from 'react'
import { Link } from 'react-router-dom'

function HotelFilter() {
    return (
        <div className='flex flex-row flex-wrap md:flex-nowrap justify-between items-center md:items-start px-1'>
            <Link to="/hoteldetails/" className='no-underline'>
                <div className='bg-slate-50  py-2 px-4 rounded-lg text-[18px] font-[500] text-slate-400'>Room</div>
            </Link>
            <Link to="/hoteldetails/animities" className='no-underline'>
                <div className='bg-slate-50  py-2  px-5 rounded-lg text-[18px] font-[500]'>Animities</div>
            </Link>
            <Link to="animities/discription" className='no-underline'>
                <div className='bg-slate-50  py-2  px-5 rounded-lg text-[18px] font-[500]'>Description</div>
            </Link>
            <Link to="animities/discription/review" className='no-underline'>
                <div className='bg-slate-50  py-2  px-5 rounded-lg text-[18px] font-[500]'>Review</div>
            </Link>
            <Link to="animities/discription/review/support" className='no-underline'>
                <div className='bg-slate-50  py-2  px-5 rounded-lg text-[18px] font-[500]'>Support</div>
            </Link>
            <Link to="animities/discription/review/support" className='no-underline'>
                <div className='bg-slate-50  py-2  px-4 rounded-lg text-[18px] font-[500]'>Photos</div>
            </Link>
        </div>
    )
}

export default HotelFilter
