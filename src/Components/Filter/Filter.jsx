import React from 'react'
import Navbar from '../Home/Navbar'
import Searchbar from '../Home/Searchbar'
import Footer from '../Fotter/Footer'
import FilterSection from './FilterSection'


function Filter() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='my-5'>
                <Searchbar />
            </div>
            <div className='w-full'>
                <FilterSection />
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Filter
