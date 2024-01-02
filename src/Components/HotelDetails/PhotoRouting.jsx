import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppContext } from '../../context/store';


function PhotoRouting() {
    const location = useLocation();
    const { state } = useAppContext();
    const hotelId = state.hotelDetails?._id;
    const isActive = (path) => location.pathname === path;
    return (
        <div className='grid grid-cols-2 md:flex flex-row justify-center items-center px-2 pt-4'>
        <Link
            to={`/hoteldetails/${hotelId}/photos/`}
            className={`no-underline ${isActive(`/hoteldetails/${hotelId}/photos/`) ? 'border-b-2 border-red-500' : ''}`}
        >
            <div className='mx-1 font-500 text-slate-500 tracking-wider px-3 py-2 my-1 md:my-0 cursor-pointer'>
                All
            </div>
        </Link>
        <Link
            to={`/hoteldetails/${hotelId}/photos/roompic`}
            className={`no-underline ${isActive(`/hoteldetails/${hotelId}/photos/roompic`) ? 'border-b-2 border-red-500' : ''}`}
        >
            <div className='mx-1 font-500 text-slate-500 tracking-wider px-3 py-2 my-1 md:my-0 cursor-pointer'>
                Room
            </div>
        </Link>

        <Link
            to={`/hoteldetails/${hotelId}/photos/roompic/property`}
            className={`no-underline ${isActive(`/hoteldetails/${hotelId}/photos/roompic/property`) ? 'border-b-2 border-red-500' : ''}`}
        >
            <div className='mx-1 font-500 text-slate-500 tracking-wider px-2 py-2 my-2 cursor-pointer'>
                Property
            </div>
        </Link>

        <Link
            to={`/hoteldetails/${hotelId}/photos/roompic/property/nearbypic`}
            className={`no-underline ${isActive(`/hoteldetails/${hotelId}/photos/roompic/property/nearbypic`) ? 'border-b-2 border-red-500' : ''}`}
        >
            <div className='mx-1 font-500 text-slate-500 tracking-wider px-2 py-2 my-2 cursor-pointer'>
                Nearby Attraction
            </div>
        </Link>
    </div>
    )
}

export default PhotoRouting