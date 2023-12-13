import React from 'react'
import { MdOutlineAppShortcut } from "react-icons/md";

function Newsletter() {
    return (
        <div>
            <div className='w-full md:w-[1100px]  mx-auto flex flex-col md:flex-row justify-between items-start my-6'>
                <div>
                    <div className='flex flex-row'>
                        <div>
                            <MdOutlineAppShortcut className='text-[50px] font-bold' />
                        </div>
                        <div>
                            <h3 className='leading-8 mb-1 text-[35px] font-bold'>Download App Now</h3>
                            <p className='leading-7 text-[14px] text-slate-700'>Use Code <span className='uppercase font-[700]'>WelcomeSuva</span> and get <span className='uppercase font-[700]'>flat 12%</span> on you first hotel booking</p>
                        </div>
                    </div>
                    <div className='my-6 mx-1'>
                        <input type="text" placeholder='Enter Email addreess' className='w-full md:w-[400px] p-1 outline-none border-1' />
                        <button className='uppercase border-[1px] border-[#599bf7] py-1 px-2 ml-[1px] text-[#599bf7]'>Get App Link</button>
                    </div>
                </div>
                <div className='flex flex-row items-start'>
                    <div className='mx-2 w-full md:w-[200px] h-[200px]'>
                        <img src="https://www.nicepng.com/png/detail/933-9331484_free-png-android-app-store-google-play.png" alt="img" className='bg-slate-400 w-full h-full' />
                    </div>
                    <div className='mx-2 w-full md:w-[200px] h-[200px]'>
                        <img src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" alt="QR_Code" className='w-full h-full' />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Newsletter
