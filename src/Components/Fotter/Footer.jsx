import React from 'react'
import paymentImg from '../../Assets/img/Google Play.png'
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom'





function Footer() {
    const styleText = {

    }
    const listOfImages = [1, 2, 3, 4, 5]
    return (
        <div className='bg-[#292929] w-full h-auto  p-5'>
            <div className='flex flex-col md:flex-row  justify-around md:justify-between border-b-[1px] pt-2 pb-0 w-full md:w-[900px] mx-auto leading-6'>
                <div className='hidden md:flex flex-row'>
                    {
                        listOfImages.map((item, index) => {
                            return (
                                <div className='w-[80px] h-[80px] mx-1'>
                                    <img src={paymentImg} alt="img" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex flex-row items-start'>
                    <p className='text-slate-300 text-[14px] md:text-[19px] font-[400]'>Follow us on</p>
                    <ul className='flex flex-row cursor-pointer'>
                        <li><IoLogoTwitter className='text-slate-300 mx-2 text-[22px] font-[700] cursor-pointer hover:text-[#FFA534] ease-in-out duration-300' /></li>
                        <li><FaFacebookF className='text-slate-300 mx-2  text-[22px] font-[700] cursor-pointer hover:text-[#FFA534] ease-in-out duration-300' /></li>
                        <li><FaInstagram className='text-slate-300 mx-2  text-[22px] font-[700] cursor-pointer hover:text-[#FFA534] ease-in-out duration-300' /></li>
                        <li><FaYoutube className='text-slate-300 mx-2  text-[22px] font-[700] cursor-pointer 
                        hover:text-[#FFA534] ease-in-out duration-300' /></li>
                    </ul>
                </div>
            </div>
            <div className='text-slate-300 text-center mt-4'>
                <Link to='/condition' className='text-slate-300 no-underline'><span className='mx-2 cursor-pointer hover:underline'>Terms and condition</span></Link>
                <Link to="/privacypolicy" className='text-slate-300 no-underline'><span className='mx-2 cursor-pointer hover:underline'>Privacy Policy</span></Link>
                <span className='mx-2 cursor-pointer hover:underline'>List your property</span>
            </div>

        </div>
    )
}

export default Footer
