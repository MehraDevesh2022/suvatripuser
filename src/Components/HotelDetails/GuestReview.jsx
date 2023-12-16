import React from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";
import ReviewSection from './ReviewSection';

function GuestReview() {
    return (
        <div>
            <div>
                <div class="row">
                    <div class="col">
                        <h3 className='text-[18px] md:text-[24px] font-[700] text-slate-700'>Guest reviews</h3>
                    </div>
                    <div class="col flex flex-row justify-between md:justify-end items-center">
                        <p className='mb-0 text-sm font-[300]'>Sort review by:</p>
                        <div className='w-[150px] h-[30px] font-[200] md:font-[500] text-[14px] md:text-[18px] border-[1px] flex flex-row items-center border-slate-600 justify-center ml-1 rounded-sm'>
                            <span> Most Relevent</span>
                            <FaAngleDoubleDown />
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <ReviewSection />
            </div>
        </div>
    )
}

export default GuestReview
