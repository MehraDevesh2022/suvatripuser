import React, { useState } from 'react'
import Searchbar from './Searchbar';

function Header() {
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 767); 
    // const desktopContainer = {
    //     padding: "20px",
    //     // Add other desktop styles here
    //   };
    //   const mobileContainer = {
    //     padding: "10px",
    //     // Add other mobile styles here
    //   };

    return (
        <div className='pt-5'>
            <div className='w-full md:w-[700px] mx-auto text-center'>
                <h4 className='uppercase font-[700] tracking-wide'><span className='text-[30px]'>Fetching the best</span> <br /> <span className='text-[30px] md:text-[55px] tracking-wide text-[#e3292d]'>offfer for you</span></h4>
            </div>
            <div className='w-full p-4 md:p-0'>
                <Searchbar />
            </div>
        </div >
    )
}

export default Header
