import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HotelRooms from './HotelRooms'
import HotelAnimites from './HotelAnimites'
import HotelDiscription from './HotelDiscription'
import HotelReviews from './HotelReviews'
import HotelSupport from './HotelSupport'


function NestedRouting() {
    return (
        <Routes>
            <Route path='/' element={<HotelRooms />} />
            <Route path='animities' element={<HotelAnimites />} />
            <Route path='animities/discription' element={<HotelDiscription />} />
            <Route path='animities/discription/review' element={<HotelReviews />} />
            <Route path='animities/discription/review/support' element={<HotelSupport />} />
        </Routes>
    )
}

export default NestedRouting
