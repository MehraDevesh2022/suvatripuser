import React, { useState } from 'react'
import { FaArrowDown } from "react-icons/fa6";
import { BiUpArrowAlt } from "react-icons/bi";
import { useLocation } from 'react-router-dom';

function FilterHeader() {
    const [useArrow, setArrow] = useState(false)

    const Location = useLocation();
    const params = new URLSearchParams(Location.search);
    const locationParam = params.get('location');
  
    const handleArrowClick = () => {
        setArrow(!useArrow)
    }
 
   
    return (
        <div>

            <div className='w-full md:w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center mt-10 mb-1 p-3'>
                <h3 className='text-[22px] md:text-[35px] font-[700] md:font-[800]'>Showing Properties in {locationParam || "india"}</h3>

         
                {/* <p className='text-[18px] md:text-[24px] font-[600] md:font-[700] cursor-pointer select-none' onClick={handleArrowClick}><span className='text-[14px]'>Price</span> Sort by {useArrow ? <BiUpArrowAlt className='inline text-[30px]' /> : < FaArrowDown className='inline' />} </p> */}
            </div>
        </div>
    )
}

export default FilterHeader
