import React from 'react'
import PhotoRouting from './PhotoRouting'
import AllPicture from './AllPicture'

function HotelPhotos() {
    return (
        <div className='min-w-fit max-w-full bg-[#fff] rounded-xl'>
            <div>
                <PhotoRouting />
            </div>
            <div>
                <AllPicture />
            </div>
        </div>
    )
}

export default HotelPhotos
