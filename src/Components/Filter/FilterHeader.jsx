import React from 'react'
import { FaArrowDown } from "react-icons/fa6";


function FilterHeader() {
    return (
        <div>
            <div className='w-full md:w-[1100px] mx-auto flex flex-row justify-between items-center mt-10 mb-3 p-3'>
                <h3 className='text-[35px] font-[800]'>Showing Properties in Nepal</h3>
                <p className='text-[24px] font-[700]'><span className='text-[14px]'>Price</span> Sort by <FaArrowDown className='inline' /> </p>
            </div>

        </div>
    )
}

export default FilterHeader
