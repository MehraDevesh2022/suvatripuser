import React from 'react'
import { CiIndent } from "react-icons/ci";
import { TfiSupport } from "react-icons/tfi";
import { RiCoupon4Line } from "react-icons/ri";
import { CiFaceSmile } from "react-icons/ci";
import Img from '../../Assets/img/Rectangle.png'
function ReviewSection() {
    return (
        <div>
            {/* first review */}
            <div className='py-3 border-b-[1px] border-slate-400'>
                <div className='flex flex-col md:flex-row justify-start items-start'>
                    <div className='w-[350px]'>
                        <div className='flex flex-row justify-start items-center'>
                            <div className='w-[45px] h-[45px] rounded-full bg-red-500 px-3 py-2 text-[18px] md:text-[23px] text-slate-100'>
                                P
                            </div>
                            <div className='mx-0 md:mx-1'>
                                <p className='mb-0 leading-3 text-[16px] md:text-[20px] font-bold'>Patka80</p>
                                <p className='mb-0'><span><CiIndent className='inline font-[500]' /></span> <span className='mx-0 md:mx-1 text-sm font-[500]'>Netherland</span></p>
                            </div>
                        </div>
                        <div className='ml-0 md:ml-10 py-2'>
                            <p className='mb-3'><span><TfiSupport className='inline' /></span> &nbsp; Superior Studio</p>
                            <p className='mb-4'><span><RiCoupon4Line className='inline' /></span> 1 Night - June 2023</p>
                            <p className='mb-4'><span><RiCoupon4Line className='inline' /></span>&nbsp;Couple</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='w-full flex flex-row justify-between mb-0'>
                            <h3 className='mb-0'>Exceptional</h3>
                            <p className='w-[35px] h-[35px] bg-[#169239] px-2 py-2 rounded-lg text-slate-50'>10</p>
                        </div>
                        <div className='my-1'>
                            <p className='mb-0'><span><CiFaceSmile className='inline font-[800] mx-1' /></span>--Beautiful hotel with high standard with heart of Krakow</p>
                        </div>
                        <div className='flex flex-row'>
                            <div className='w-[100px] h-[100px] rounded-md'>
                                <img src={Img} alt="rectangle_img" className='w-full h-full rounded-md' />
                            </div>
                            <div className='w-[100px] h-[100px] ml-3 rounded-md'>
                                <img src={Img} alt="rectangle_img" className='w-full h-full rounded-md' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* second review */}
            <div className='py-3 border-b-[1px] border-slate-400'>
                <div className='flex flex-col md:flex-row justify-start items-start'>
                    <div className='w-[350px]'>
                        <div className='flex flex-row justify-start items-start'>
                            <div className='w-[45px] h-[45px] rounded-full bg-red-500 px-3 py-2 text-[18px] md:text-[23px] text-slate-100'>
                                J
                            </div>
                            <div className='mx-1'>
                                <p className='mb-0 leading-3 text-[16px] md:text-[20px] font-bold'>Jenni</p>
                                <p className='mb-0'><span><CiIndent className='inline font-[500]' /></span> <span className='mx-0 md:mx-1 text-[12px] md:text-sm font-[500]'>United Kingdom</span></p>
                            </div>
                        </div>
                        <div className='ml-0 md:ml-10 py-2'>
                            <p className='mb-3'><span><TfiSupport className='inline' /></span> &nbsp; Superior Studio</p>
                            <p className='mb-4'><span><RiCoupon4Line className='inline' /></span>&nbsp;1 Night - June 2023</p>
                            <p className='mb-4'><span><RiCoupon4Line className='inline' /></span>&nbsp;Couple</p>
                        </div>
                    </div>
                    <div className='w-full mb-0'>
                        <p className='mb-0 text-slate-400 text-sm'>Reviewed: December 13, 2023</p>
                        <div className='w-full flex flex-row justify-between mb-0'>
                            <h3 className='mb-0 text-[28px]'>Excelent Palce to Stay</h3>
                            <p className='w-[35px] h-[35px] bg-[#169239] px-2 py-2 rounded-lg text-slate-50'>10</p>
                        </div>
                        <div className='mb-0'>
                            <p className='mb-2'><span><CiFaceSmile className='inline font-[800] mx-1' /></span>--Beautiful hotel with high standard with heart of Krakow Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid nobis id saepe eligendi accusantium nisi nemo esse eveniet ipsum unde?</p>
                            <p className='mb-0'><span><CiFaceSmile className='inline font-[800] mx-1' /></span>--Beautiful hotel with high standard with heart of Krakow Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur modi impedit quo suscipit quam aperiam architecto accusamus optio vel?</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewSection
