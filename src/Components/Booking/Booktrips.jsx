import React from 'react'
import Picture from '../../Assets/img/Rectangle.png'

function Booktrips() {
    const itemData = [
        {
            id: 1,
            Title: 'Luxe Properties',
            date: "14 Nov 2022 - 14 Nov 2022",
            Address: 'Abu dhabi',
            pic: Picture
        },
        {
            id: 2,
            Title: 'Luxe Properties',
            date: "14 Nov 2022 - 14 Nov 2022",
            Address: 'Abu dhabi',
            pic: Picture
        },
        {
            id: 3,
            Title: 'Luxe Properties',
            date: "14 Nov 2022 - 14 Nov 2022",
            Address: 'Abu dhabi',
            pic: Picture
        }
    ]
    return (
        <div className='min-w-fit max-w-[1000px] mx-auto'>
            <h3 className='my-5 font-bold text-slate-700 text-[30px] md:text-[35px]'>Booking & Trips</h3>
            {
                itemData.map((item, index) => {
                    return (
                        <div key={index} className='bg-[#fff] flex flex-col md:flex-row justify-between items-center p-3 my-3 rounded-md shadow-md'>
                            <div className='w-full md:w-[200px] h-[180px]  mx-auto rounded-lg'>
                                <img src={item.pic} alt="booking_images" className='w-full h-full rounded-lg' />
                            </div>
                            <div className='w-full md:w-[500px] h-auto md:h-[200px] border-r-[1px] border-slate-400  px-3'>
                                <h3 className='text-[32px] font-[600] leading-6 tracking-wider mt-5'>{item.Title}</h3>
                                <p className='text-[18px] font-[400] leading-7 tracking-wider text-slate-400'>{item.date}</p>
                                <p className='text-[16px] font-[500] left-8 tracking-wide text-[#fa9294]'>{item.Address}</p>

                            </div>
                            <div className='w-full md:w-[250px] h-auto md:h-[200px] mx-auto'>
                                <h3 className='text-[30px] font-[700] leading-6 tracking-wider mt-3 text-center md:text-right'>npr</h3>
                                <h3 className='text-[30px] font-[700] leading-6 tracking-wider mt-3 text-center md:text-right'>4,972</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Booktrips
