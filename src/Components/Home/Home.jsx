import React, { useState } from 'react'
import Logo from '../../Assets/img/logo.png'
import Navbar from './Navbar'
import Header from './Header'
import Section from './Section'
import Footer from '../Fotter/Footer'
import Hotel from './Hotel'
import Newsletter from './Newsletter'


function Home() {

    return (
        <div className='w-full  h-screen'>
            <div>
                <Navbar />
                <Header />
                <Section />
                <Hotel />
                <Newsletter />
                <Footer />
            </div>



        </div>
    )
}

export default Home
