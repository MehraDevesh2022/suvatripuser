import React, { useState } from 'react'
import Logo from '../../Assets/img/logo.png'
import Navbar from './Navbar'
import Header from './Header'
import Section from './Section'
import Footer from '../Fotter/Footer'
import Hotel from './Hotel'


function Home() {

    return (
        <div className='w-full bg-[#feefef] h-screen'>
            <div>
                <Navbar />
                <Header />
                <Section />
                <Hotel />
                <Footer />
            </div>



        </div>
    )
}

export default Home
