import React from 'react'
import { FaStar } from "react-icons/fa";

function HotelHaeding() {
    const starArray = [1, 2, 3, 4, 5]
    return (
        <div>
            <div className='px-1 md:px-0'>
                <div className='flex flex-row justify-start items-center mb-0'>
                    <h3 className='mt-2 mb-0 text-[30px] md:text-[35px] font-[700] tracking-wider'>Barcelo Anfa</h3>
                    <div className='mx-3'>
                        {
                            starArray.map((item, index) => {
                                return (
                                    <FaStar key={index} className='inline ml-1 text-[#FFD250] font-[900]' />
                                )
                            })
                        }
                    </div>
                </div>
                <p className='text-[18px] font-[400] text-slate-800'>Kathmandu, Nepal</p>

            </div>
        </div>
    )
}

export default HotelHaeding

