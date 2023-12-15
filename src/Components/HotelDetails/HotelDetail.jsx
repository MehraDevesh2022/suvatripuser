import React from 'react'
import Navbar from '../Home/Navbar'
import Searchbar from '../Home/Searchbar'
import Footer from '../Fotter/Footer'
import HotelHaeding from './HotelHaeding'
import HotelFilter from './HotelFilter'
import { Outlet } from 'react-router-dom'
import NestedRouting from './NestedRouting'


function HotelDetail() {
    return (
        <div className='w-full'>
            <div>
                <Navbar />
            </div>
            <div className='py-5'>
                <Searchbar />
            </div>
            <div className='w-full md:w-[1100px]  mx-auto'>
                <HotelHaeding />
                <HotelFilter />
                <div>
                    <Outlet />
                    <NestedRouting />
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default HotelDetail
