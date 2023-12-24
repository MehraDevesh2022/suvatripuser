import React, { useState, useRef } from 'react'
import Mobilefilter from './Mobilefilter'
import { IoChevronBackSharp } from "react-icons/io5";

function FixedFilter({ showFilter, setShowFilter, scrollLock, setScrollLock }) {
    const checkboxRef = useRef(null);

    const uncheckCheckbox = () => {
        if (checkboxRef.current) {
            checkboxRef.current.checked = false;
        }
    };

    const removeFixed = () => {
        setScrollLock(false);
        document.body.style.overflow = 'auto';
    };

    const closeSideFilter = () => {
        setShowFilter(false)
        removeFixed()
    }
    return (
        <div className={`duration-300 fixed top-0  w-full h-full bg-[#f6f7f9] ${showFilter ? "left-0" : "left-[-100%]"} ${scrollLock ? 'overflow-hidden' : 'overflow-auto'}`}>
            <div className='flex flex-row justify-start items-center pb-1 pt-3 px-2 w-full h-[60px] bg-[#129035] sticky top-0 z-10' onClick={closeSideFilter}>
                <p><IoChevronBackSharp className='text-[35px] font-semibold text-[#fff]' /></p>
                <p className='text-[20px] font-[400] ml-[120px] tracking-wider text-[#fff]'>Filter</p>
            </div>
            <div className='overflow-y-auto h-[500px]'>
                <Mobilefilter checkboxRef={checkboxRef} />
            </div>

            <div className='w-full h-[70px] flex flex-row justify-around items-center absolute bottom-0 bg-slate-600'>
                <button className='bg-slate-400 w-[120px] h-12 hover:opacity-75 cursor-pointer' onClick={uncheckCheckbox}>Clear</button>
                <button className='bg-slate-200 w-[120px] h-12 hover:opacity-80 cursor-pointer' onClick={closeSideFilter}>Apply</button>
            </div>
        </div>


    )
}

export default FixedFilter
