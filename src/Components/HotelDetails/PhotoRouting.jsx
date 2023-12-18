import React from 'react'

function PhotoRouting() {
    return (
        <div className='grid grid-cols-2 md:flex flex-row justify-start items-center px-2 pt-4'>
            <div className='mx-1 font-[500] text-slate-400 tracking-wider'>
                All
            </div>
            <div className='mx-1 font-[500] text-slate-400 tracking-wider'>
                Rooms
            </div>
            <div className='mx-1 font-[500] text-slate-400 tracking-wider'>
                Property
            </div>
            <div className='mx-1 font-[500] text-slate-400 tracking-wider'>
                NearbyAttraction
            </div>
        </div>
    )
}

export default PhotoRouting
