import React from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Fotter/Footer'
import Booktrips from './Booktrips'
function Booking() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Booktrips />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Booking
