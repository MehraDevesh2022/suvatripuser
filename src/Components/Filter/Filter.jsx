import React, { useState } from 'react'
import Navbar from '../Home/Navbar'
import Searchbar from '../Home/Searchbar'
import Footer from '../Fotter/Footer'
import FilterSection from './FilterSection'
import FixedFilter from './FixedFilter'
import { FaFilter } from "react-icons/fa";


function Filter() {
    const [scrollLock, setScrollLock] = useState(false);

    // Function to toggle scroll lock
    const toggleScrollLock = () => {
        setScrollLock((prevScrollLock) => !prevScrollLock);
        document.body.style.overflow = scrollLock ? 'auto' : 'hidden';
    };
    const [showFilter, setShowFilter] = useState(false)
    const openMobileFliter = () => {
        setShowFilter(true)
        toggleScrollLock()
    }
    return (
        <div className='relative h-screen'>
            <div>
                <div>
                    <Navbar />
                </div>
                <div className='my-5'>
                    <Searchbar />
                </div>
                <div className='block md:hidden'>
                    {/* MobileFilter */}
                    <div className='w-[170px] mx-auto mb-1'>
                        <button className='bg-[#f62c31] rounded-3xl w-full px-2 py-2' onClick={openMobileFliter}>
                            <span className='text-[18px] font-[400] text-[#fff]'>Apply Filter</span>
                            <FaFilter className='inline font-[400] mx-1 text-[#fff]' />
                        </button>
                    </div>
                </div>
                <div className='w-full'>
                    <FilterSection />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
            <FixedFilter showFilter={showFilter} setShowFilter={setShowFilter} scrollLock={scrollLock} setScrollLock={setScrollLock} />
        </div>
    )
}

export default Filter
