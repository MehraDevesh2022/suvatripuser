import React from 'react'
import PhotoRouting from './PhotoRouting'
import { Outlet } from 'react-router-dom'
import PictureRoute from './PictureRoute'

function HotelPhotos() {
    return (
        <div className='min-w-fit max-w-full bg-[#fff] rounded-xl my-3'>
            <div>
                <PhotoRouting />
            </div>
            <div>
                <Outlet />
                <PictureRoute />

            </div>
        </div>
    )
}

export default HotelPhotos
