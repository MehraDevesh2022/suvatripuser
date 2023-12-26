import React from 'react'
import LoginImg from '../../../Assets/img/Rectangle.png'
import { FcGoogle } from 'react-icons/fc'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';

function Resetotp() {
    return (
        <div>
            <div className='flex flex-row items-start'>
                <div className='w-[400px] h-[430px] hidden md:block rounded-lg'>
                    <img src={LoginImg} alt="login_img" className='w-full h-full rounded-lg' />
                </div>
                <div className='w-[400px] px-4 py-3'>
                    <div className='mb-3 flex flex-row items-center border-[1px] rounded-lg border-slate-500'>
                        <p className='w-[50px] h-[40px] mb-0  py-1 font-bold px-1 text-[20px]'>+91</p>
                        <input type="Number" placeholder='Phone Number' className='w-full outline-none text-[20px] px-1 py-2 rounded-lg' />
                    </div>
                    <div className='w-full mt-2'>
                        <Button style={{ padding: "10px 18px", textAlign: 'center', backgroundColor: "#e3292d", border: "none", borderRadius: '40px' }} className='w-full hover:opacity-80'>Get OTP</Button>

                    </div>
                    <div className='my-3 text-center cursor-pointer hover:underline'>
                        Resent OTP
                    </div>
                    <div className='mb-3'>
                        <input type="Number" placeholder='OTP' className='w-full outline-none text-[20px] border-[1px] border-slate-500 px-1 py-2 rounded-lg' />
                    </div>
                    <div className='w-full my-2'>
                        <Button style={{ padding: "10px 18px", textAlign: 'center', backgroundColor: "#e3292d", border: "none", borderRadius: '40px' }} className='w-full hover:opacity-80'>Verify OTP</Button>

                    </div>
                    <div className='text-center mt-4'>
                        <p className='mb-4'>or log In with</p>
                        <div>
                            <FcGoogle className='inline mx-2 text-[30px] cursor-pointer hover:opacity-70' />
                            <FaSquareFacebook className='inline mx-3 text-[30px] text-[blue] cursor-pointer hover:opacity-70' />
                            <FaPhone className="inline mx-3 text-[28px] cursor-pointer hover:opacity-70" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resetotp
