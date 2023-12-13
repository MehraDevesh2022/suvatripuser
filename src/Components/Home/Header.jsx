import React, { useState } from 'react'
import Searchbar from './Searchbar';

function Header() {

    return (
        <div className='pt-5'>
            <div className='w-full md:w-[700px] mx-auto text-center'>
                <h4 className='uppercase font-[700] tracking-wide'><span className='text-[30px]'>Fetching the best</span> <br /> <span className='text-[55px] tracking-wide text-[#e3292d]'>offfer for you</span></h4>
            </div>
            <div className='w-full md:w-[1100px]  mx-auto bg-[#fff] py-2 px-2 rounded-[15px] border-l-2 border-r-2 border-b-[10px] border-[#129035] relative'>
                <>
                    <div>
                        <Searchbar />
                    </div>

                </>
                <div className='w-[150px] absolute bottom-[-24px] left-[110px] md:left-[450px]'>
                    <button className='bg-[#129035] w-full py-2 font-[600] text-[20px] text-slate-100 rounded-[20px] z-0'>Search</button>
                </div>
            </div>


        </div >
    )
}

export default Header
