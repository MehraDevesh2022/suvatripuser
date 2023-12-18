import React from 'react'

function HotelSupport() {
    return (
        <div>
            <div className='w-full  bg-[#fff] my-3 rounded-lg shadow-md px-2 md:px-0  py-10'>
                <div className='min-w-fit  max-w-4xl  mx-auto'>
                    <h3 className='text-xl md:text-3xl font-[600] tracking-wider'>Get Connected to us</h3>
                    <div className='min-w-fit max-w-full h-40 border-[2px] rounded-sm border-slate-300'>
                        <textarea name="support" id="support" placeholder='Feel free to write your issue' className='w-full h-full bg-white outline-none px-1 text-[18px] py-1 rounded-sm'></textarea>
                    </div>
                    <div className='my-3'>
                        <button className='bg-[#f62d32] w-[130px] py-2 font-[500] text-slate-50 rounded-sm cursor-pointer hover:opacity-90'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelSupport
