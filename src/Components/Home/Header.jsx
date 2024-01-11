import React, { useState } from 'react'
import Searchbar from './Searchbar';

function Header() {

    return (
        <div className='pt-5'>
            <div className='w-full md:w-[700px] mx-auto text-center'>
                <h4 className='uppercase font-[700] tracking-wide'><span className='text-[30px]'>Fetching the best</span> <br /> <span className='text-[30px] md:text-[55px] tracking-wide text-[#e3292d]'>offfer for you</span></h4>
            </div>
            <div className='w-full p-1 md:p-0'>
                <Searchbar />
            </div>
        </div >
    )
}

export default Header
