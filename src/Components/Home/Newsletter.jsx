import React from 'react'
import { MdOutlineAppShortcut } from "react-icons/md";
import paymentImg from '../../Assets/img/Google Play.png'
import AppStore from '../../Assets/img/Appstore.jpg'

function Newsletter() {
    return (
        <div className='py-3'>
            <div className='w-full xl:w-[1100px] bg-[#fff] mx-auto flex flex-col lg:flex-row justify-between items-start my-6 p-3 shadow-md rounded-md'>
                <div>
                    <div className='flex flex-row'>
                        <div>
                            <MdOutlineAppShortcut className='text-[50px] font-bold' />
                        </div>
                        <div>
                            <h3 className='leading-8 mb-1 text-[25px] md:text-[35px] font-bold'>Download App Now</h3>
                            <p className='leading-7 text-sm md:text-[16px] text-slate-700'>Use Code <span className='uppercase font-[700]'>WelcomeSuva</span> and get <span className='uppercase font-[700]'>flat 12%</span> on you first hotel booking</p>
                        </div>
                    </div>
                    <div className='my-2 mx-1'>
                        <input type="text" placeholder='Enter Email addreess' className='w-full md:w-[400px] p-1 outline-none border-1' />
                        <button className='uppercase border-[1px] border-[#599bf7] mt-1 md:mt-0 py-1 px-2 ml-[1px] text-[#599bf7]'>Get App Link</button>
                    </div>
                </div>
                <div className='flex flex-row items-start'>
                    <div className='mx-2 py-2'>
                        <div className='h-[50px] md:h-[60px]'>
                            <img src={paymentImg} alt="img" className='w-full h-full' />
                        </div>
                        <div className='h-[50px] md:h-[60px] mt-2'>
                            <img src={AppStore} alt="img" className='w-full h-full' />
                        </div>

                    </div>
                    <div className='mx-2 w-[130px] md:w-[150px] h-[120px] md:h-[150px]'>
                        <img src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" alt="QR_Code" className='w-full h-full' />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Newsletter
