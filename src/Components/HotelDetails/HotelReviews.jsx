import React from 'react'
import GuestReview from './GuestReview'

function HotelReviews() {
    return (
        <div className='w-full  bg-[#fff] my-3 px-4'>
            <div className='flex flex-col md:flex-row justify-between items-start border-b-[1px] border-slate-400 py-3'>
                <div className='flex flex-row justify-start items-start'>
                    <div className='w-[40px] h-[40px] text-[#fff] bg-[#129035] my-0 font-[700] text-center py-2 rounded-lg'>
                        8.7
                    </div>
                    <div className='mx-2 mt-[2px]'>
                        <h5 className='mb-0 text-sm font-[700]'>Excellent</h5>
                        <p className='mb-0 text-[12px] font-[400] leading-3'>2,566 <span>review</span></p>
                    </div>
                    <div className='my-2 text-sm mx-4 text-[#129035]'>
                        We aim for 100% real review
                    </div>
                </div>
                <div>
                    <button className='w-[120px] h-[40px]  bg-transparent text-sm font-[600]  text-[#129035] border-[1px] border-[#129035] rounded-sm'>Write a review</button>
                </div>
            </div>
            <div className='py-4 border-b-[1px] border-slate-700'>
                <p className='text-[16px] font-[700]'>Categories:</p>
                <div className='grid grid-rows-1 md:grid-cols-3 gap-4'>
                    <div className='w-[300px]'>
                        <div className='flex flex-row justify-between mb-2'>
                            <p className='mb-0 text-[16px] font-[500] tracking-wider'>Staff</p>
                            <p className='mb-0 text-[16px] font-[500] tracking-wider'>8.9</p>
                        </div>
                        <div className='bg-[red] w-full h-2 rounded-xl'></div>
                    </div>
                    <div className='w-[300px]'>
                        <div className='flex flex-row justify-between mb-2'>
                            <p className='mb-0 text-[16px] font-[500] tracking-wider'>facilities</p>
                            <p className='mb-0 text-[16px] font-[500] tracking-wider'>8.9</p>
                        </div>
                        <div className='bg-[red] w-full h-2 rounded-xl'></div>
                    </div>
                    <div className='w-[300px]'>
                        <div className='flex flex-row justify-between mb-2'>
                            <p className='mb-0 text-[16px] font-[500] tracking-wider'>cleaniness</p>
                            <p className='mb-0 text-[16px] font-[500] tracking-wider'>8.9</p>
                        </div>
                        <div className='bg-[red] w-full h-2 rounded-xl'></div>
                    </div>
                    <div className='w-[300px]'>
                        <div className='flex flex-row justify-between mb-2'>
                            <p className='mb-0 text-[16px] font-[500] tracking-wider'>comfort</p>
                            <p className='mb-0 text-[16px] font-[500] tracking-wider'>8.9</p>
                        </div>
                        <div className='bg-[red] w-full h-2 rounded-xl'></div>
                    </div>
                    <div className='w-[300px]'>
                        <div className='flex flex-row justify-between  mb-2'>
                            <p className='mb-0 text-[16px] font-[500] tracking-wider'>Value for money</p>
                            <p className='mb-0 text-[16px] font-[500] tracking-wider'>8.9</p>
                        </div>
                        <div className='bg-[red] w-full h-2 rounded-xl'></div>
                    </div>
                    <div className='w-[300px]'>
                        <div className='flex flex-row justify-between mb-2'>
                            <p className='mb-0 text-[16px] font-[500] tracking-wider'>Location</p>
                            <p className='mb-0 text-[16px] font-[500] tracking-wider'>8.9</p>
                        </div>
                        <div className='bg-[red] w-full h-2 rounded-xl'></div>
                    </div>
                    <div className='w-[300px]'>
                        <div className='flex flex-row justify-between mb-2'>
                            <p className='mb-0 text-[16px] font-[500] tracking-wider'>Free wifi</p>
                            <p className='mb-0 text-[16px] font-[500] tracking-wider'>8.9</p>
                        </div>
                        <div className='bg-[red] w-full h-2 rounded-xl'></div>
                    </div>
                </div>
            </div>
            <div className='py-3'>
                <GuestReview />
            </div>

        </div >
    )
}

export default HotelReviews
