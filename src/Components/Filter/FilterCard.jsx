import React from 'react'
import LoginImg from '../../Assets/img/Rectangle.png'
import { TiStarFullOutline } from "react-icons/ti";
import { FaLocationPin } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { LuParkingCircle } from "react-icons/lu";
import { BsHouseCheckFill } from "react-icons/bs";





function FilterCard() {
    return (
        <div>
            <div className='w-full md:w-[800px] h-auto bg-[#fff] border-[1px] shadow-lg mx-auto flex flex-col md:flex-row justify-start p-3 rounded-lg'>
                <div className='w-full md:w-[250px] h-[250px] rounded-lg'>
                    <img src={LoginImg} alt="filter_img" className='w-full h-full rounded-lg' />
                </div>
                <div className='w-full md:w-[350px] ml-1'>
                    <h3 className='mt-1 mb-1 px-2 font-[700] text-[30px]'>
                        Luxe Properties
                    </h3>
                    <div className='flex flex-row justify-start my-0 px-2'>
                        <div>
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                        </div>
                        <div className='flex flex-row items-center ml-4'>
                            <p><FaLocationPin /></p>
                            <p className='ml-2'>Kathmandu</p>
                        </div>
                    </div>
                    <p className='px-2 leading-5 text-slate-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, necessitatibus unde blanditiis nisi nostrum soluta exercitationem aperiam expedita corrupti, nam maiores totam, dolore quam eos magni eveniet atque odio ut. Lorem ipsum dolor sit amet,</p>
                    <div className='ml-0 text-left'>
                        <ul className='flex flex-row justify-start items-center'>
                            <li className='text-sm ml-0'><span><FaWifi className='inline ml-0 mr-1 text-[18px] text-[#91b887]' /></span><span>Free Wifi</span></li>
                            <li className='text-sm ml-1'><span><LuParkingCircle className='inline mx-1 text-[18px] text-[#91b887]' /></span><span>Free Parking</span></li>
                            <li className='text-sm ml-1'><span><BsHouseCheckFill className='inline mx-1 text-[18px] text-[#91b887]' /></span><span>Restaurant</span></li>
                        </ul>
                    </div>
                </div>
                <div className='p-2 w-full md:w-[200px] border-l-[1px] border-slate-400 py-5 px-2'>
                    <div className='text-center md:text-right'>
                        <h4 className='font-[700] text-[#f74044] leading-6 mb-0'>Very Good 4.7</h4>
                        <p className='text-[#f74044]'>(572 Rating)</p>
                    </div>
                    <div className='text-center md:text-right'>
                        <h3 className='text-[32px] text-slate-600 font-[900]'>NPR 4,972</h3>
                        <div>
                            <p className='mb-0 text-[20px]'>+ 720 Taxes & Fee</p>
                            <p className='mb-0 text-center md:text-right text-[16px]'>Per Night</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[800px] h-auto my-5 bg-[#fff] border-[1px] shadow-lg mx-auto flex flex-col md:flex-row justify-start p-3 rounded-lg'>
                <div className='w-full md:w-[250px] h-[250px] rounded-lg'>
                    <img src={LoginImg} alt="filter_img" className='w-full h-full rounded-lg' />
                </div>
                <div className='w-full md:w-[350px] ml-1'>
                    <h3 className='mt-1 mb-1 px-2 font-[700] text-[30px]'>
                        Luxe Properties
                    </h3>
                    <div className='flex flex-row justify-start my-0 px-2'>
                        <div>
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                        </div>
                        <div className='flex flex-row items-center ml-4'>
                            <p><FaLocationPin /></p>
                            <p className='ml-2'>Kathmandu</p>
                        </div>
                    </div>
                    <p className='px-2 leading-5 text-slate-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, necessitatibus unde blanditiis nisi nostrum soluta exercitationem aperiam expedita corrupti, nam maiores totam, dolore quam eos magni eveniet atque odio ut. Lorem ipsum dolor sit amet,</p>
                    <div className='ml-0 text-left'>
                        <ul className='flex flex-row justify-start items-center'>
                            <li className='text-sm ml-0'><span><FaWifi className='inline ml-0 mr-1 text-[18px] text-[#91b887]' /></span><span>Free Wifi</span></li>
                            <li className='text-sm ml-1'><span><LuParkingCircle className='inline mx-1 text-[18px] text-[#91b887]' /></span><span>Free Parking</span></li>
                            <li className='text-sm ml-1'><span><BsHouseCheckFill className='inline mx-1 text-[18px] text-[#91b887]' /></span><span>Restaurant</span></li>
                        </ul>
                    </div>
                </div>
                <div className='p-2 w-full md:w-[200px] border-l-[1px] border-slate-400 py-5 px-2'>
                    <div className='text-center md:text-right'>
                        <h4 className='font-[700] text-[#f74044] leading-6 mb-0'>Very Good 4.7</h4>
                        <p className='text-[#f74044]'>(572 Rating)</p>
                    </div>
                    <div className='text-center md:text-right'>
                        <h3 className='text-[32px] text-slate-600 font-[900]'>NPR 4,972</h3>
                        <div>
                            <p className='mb-0 text-[20px]'>+ 720 Taxes & Fee</p>
                            <p className='mb-0 text-center md:text-right text-[16px]'>Per Night</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[800px] h-auto my-5 bg-[#fff] border-[1px] shadow-lg mx-auto flex flex-col md:flex-row justify-start p-3 rounded-lg'>
                <div className='w-full md:w-[250px] h-[250px] rounded-lg'>
                    <img src={LoginImg} alt="filter_img" className='w-full h-full rounded-lg' />
                </div>
                <div className='w-full md:w-[350px] ml-1'>
                    <h3 className='mt-1 mb-1 px-2 font-[700] text-[30px]'>
                        Luxe Properties
                    </h3>
                    <div className='flex flex-row justify-start my-0 px-2'>
                        <div>
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                        </div>
                        <div className='flex flex-row items-center ml-4'>
                            <p><FaLocationPin /></p>
                            <p className='ml-2'>Kathmandu</p>
                        </div>
                    </div>
                    <p className='px-2 leading-5 text-slate-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, necessitatibus unde blanditiis nisi nostrum soluta exercitationem aperiam expedita corrupti, nam maiores totam, dolore quam eos magni eveniet atque odio ut. Lorem ipsum dolor sit amet,</p>
                    <div className='ml-0 text-left'>
                        <ul className='flex flex-row justify-start items-center'>
                            <li className='text-sm ml-0'><span><FaWifi className='inline ml-0 mr-1 text-[18px] text-[#91b887]' /></span><span>Free Wifi</span></li>
                            <li className='text-sm ml-1'><span><LuParkingCircle className='inline mx-1 text-[18px] text-[#91b887]' /></span><span>Free Parking</span></li>
                            <li className='text-sm ml-1'><span><BsHouseCheckFill className='inline mx-1 text-[18px] text-[#91b887]' /></span><span>Restaurant</span></li>
                        </ul>
                    </div>
                </div>
                <div className='p-2 w-full md:w-[200px] border-l-[1px] border-slate-400 py-5 px-2'>
                    <div className='text-center md:text-right'>
                        <h4 className='font-[700] text-[#f74044] leading-6 mb-0'>Very Good 4.7</h4>
                        <p className='text-[#f74044]'>(572 Rating)</p>
                    </div>
                    <div className='text-center md:text-right'>
                        <h3 className='text-[32px] text-slate-600 font-[900]'>NPR 4,972</h3>
                        <div>
                            <p className='mb-0 text-[20px]'>+ 720 Taxes & Fee</p>
                            <p className='mb-0 text-center md:text-right text-[16px]'>Per Night</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[800px] h-auto my-5 bg-[#fff] border-[1px] shadow-lg mx-auto flex flex-col md:flex-row justify-start p-3 rounded-lg'>
                <div className='w-full md:w-[250px] h-[250px] rounded-lg'>
                    <img src={LoginImg} alt="filter_img" className='w-full h-full rounded-lg' />
                </div>
                <div className='w-full md:w-[350px] ml-1'>
                    <h3 className='mt-1 mb-1 px-2 font-[700] text-[30px]'>
                        Luxe Properties
                    </h3>
                    <div className='flex flex-row justify-start my-0 px-2'>
                        <div>
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                            <TiStarFullOutline className='inline text-[#FFD250]' />
                        </div>
                        <div className='flex flex-row items-center ml-4'>
                            <p><FaLocationPin /></p>
                            <p className='ml-2'>Kathmandu</p>
                        </div>
                    </div>
                    <p className='px-2 leading-5 text-slate-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, necessitatibus unde blanditiis nisi nostrum soluta exercitationem aperiam expedita corrupti, nam maiores totam, dolore quam eos magni eveniet atque odio ut. Lorem ipsum dolor sit amet,</p>
                    <div className='ml-0 text-left'>
                        <ul className='flex flex-row justify-start items-center'>
                            <li className='text-sm ml-0'><span><FaWifi className='inline ml-0 mr-1 text-[18px] text-[#91b887]' /></span><span>Free Wifi</span></li>
                            <li className='text-sm ml-1'><span><LuParkingCircle className='inline mx-1 text-[18px] text-[#91b887]' /></span><span>Free Parking</span></li>
                            <li className='text-sm ml-1'><span><BsHouseCheckFill className='inline mx-1 text-[18px] text-[#91b887]' /></span><span>Restaurant</span></li>
                        </ul>
                    </div>
                </div>
                <div className='p-2 w-full md:w-[200px] border-l-[1px] border-slate-400 py-5 px-2'>
                    <div className='text-center md:text-right'>
                        <h4 className='font-[700] text-[#f74044] leading-6 mb-0'>Very Good 4.7</h4>
                        <p className='text-[#f74044]'>(572 Rating)</p>
                    </div>
                    <div className='text-center md:text-right'>
                        <h3 className='text-[32px] text-slate-600 font-[900]'>NPR 4,972</h3>
                        <div>
                            <p className='mb-0 text-[20px]'>+ 720 Taxes & Fee</p>
                            <p className='mb-0 text-center md:text-right text-[16px]'>Per Night</p>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    )
}

export default FilterCard
