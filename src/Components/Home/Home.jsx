import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Section from './Section'
import Footer from '../Fotter/Footer'
import Hotel from './Hotel'
import Newsletter from './Newsletter'
import PopularArea from './PopularArea'


function Home() {

    return (
        <div className='w-full h-screen'>
            <div>
                <Navbar />
                <Header />
                <Section />
                <PopularArea />
                <Hotel />
                <Newsletter />
                <Footer />
            </div>



        </div>
    )
}

export default Home
