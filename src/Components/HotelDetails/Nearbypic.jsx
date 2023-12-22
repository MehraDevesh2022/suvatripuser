import React from 'react'
import Images from '../../Assets/img/Rectangle.png'

function Nearbypic() {
    return (
        <div className='py-4'>
            <h3 className='text-center'>Near by Picture</h3>
            <div className='min-w-fit max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-x-1 mx-auto  gap-y-2  py-4'>
                <div className='w-full md:w-[320px] h-[250px] rounded-lg'>
                    <img src={Images} alt="alt_img" className='w-full h-full rounded-lg' />
                </div>
                <div className='w-full md:w-[320px] h-[250px]  rounded-lg'>
                    <img src={Images} alt="alt_img" className='w-full h-full rounded-lg' />
                </div>
                <div className='w-full md:w-[320px] h-[250px]  rounded-lg'>
                    <img src={Images} alt="alt_img" className='w-full h-full rounded-lg' />
                </div>
                <div className='w-full md:w-[320px] h-[250px]  rounded-lg'>
                    <img src={Images} alt="alt_img" className='w-full h-full rounded-lg' />
                </div>
                <div className='w-full md:w-[320px] h-[250px]  rounded-lg'>
                    <img src={Images} alt="alt_img" className='w-full h-full rounded-lg' />
                </div>
                <div className='w-full md:w-[320px] h-[250px]  rounded-lg'>
                    <img src={Images} alt="alt_img" className='w-full h-full rounded-lg' />
                </div>

            </div>
        </div>
    )
}

export default Nearbypic
