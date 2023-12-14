import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";

function FilterMap() {
    return (
        <div>
            <div className='w-[250px] h-[200px] bg-slate-600 rounded-lg'>
                <div className='flex flex-col justify-center pt-14 items-center'>
                    <FaMapMarkerAlt className='text-[35px] font-[700] text-[#2d6adc]' />
                    <button className='mt-2 bg-[#2d6adc] px-3 py-2 text-slate-50 rounded-md'>Show on Map</button>
                </div>


            </div>
        </div>
    )
}

export default FilterMap
