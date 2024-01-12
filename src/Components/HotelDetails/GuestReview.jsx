import React from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";
import ReviewSection from './ReviewSection';

function GuestReview({review , handleShow}) {
    return (
        <div>
            {/* <div>
                <div class="row">
                    <div class="col">
                        <h3 className='text-[18px] md:text-[24px] font-[700] text-slate-700'>Guest reviews</h3>
                    </div>
                    <div class="col flex flex-row justify-between md:justify-end items-center">
                        <p className='mb-0 text-sm font-[300] hidden md:block'>Sort review by:</p>
                        <div className='w-[150px] h-[30px] font-[200] md:font-[500] text-[14px] md:text-[18px] border-[1px] flex flex-row items-center border-slate-600 justify-center ml-1 rounded-sm'>
                            <span> Most Relevent</span>
                            <FaAngleDoubleDown />
                        </div>

                    </div>
                </div>
            </div> */}
            <div>
                <ReviewSection  country ={review?.hotel_id?.country}  propertyName ={review?.hotel_id?.propertyName}  username ={review?.username} user_id ={review?.user_id}   review ={review}  handleShow  ={handleShow} />
            </div>
        </div>
    )
}

export default GuestReview
