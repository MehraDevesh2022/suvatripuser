import React from 'react'
import { FaStar } from "react-icons/fa";

function HotelHaeding() {
    const starArray = [1, 2, 3, 4, 5]
    return (
        <div>
            <div>
                <div className='flex flex-row justify-start items-center mb-0'>
                    <h3 className='mt-2 mb-0 text-[30px] font-[900]'>Barcelo Anfa</h3>
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
                <p className='text-sm font-[400] text-slate-300'>Kathmandu, Nepal</p>

            </div>
        </div>
    )
}

export default HotelHaeding

