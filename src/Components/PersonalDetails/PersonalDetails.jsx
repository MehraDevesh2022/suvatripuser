import React, { useState } from 'react'
import Navbar from '../Home/Navbar'
import Footer from '../Fotter/Footer'
import Button from 'react-bootstrap/Button';
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa";

function PersonalDetails() {
    const [password, setPassword] = useState(false)


    const showPassword = () => {
        setPassword(true)
    }
    const closePassword = () => {
        setPassword(false)
    }
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <div className='min-w-fit max-w-[1000px] mx-auto py-5'>
                    <h3 className='mb-5 text-[30px] md:text-[40px] font-[600] tracking-wider'>Personal deatils</h3>
                    <form action="">
                        <div className='min-w-fit max-w-[800px] mx-auto px-1'>
                            <div className='mb-3 flex flex-col md:flex-row'>
                                <label htmlFor="userPass" className='text-[20px] text-slate-600 font-[500] w-[100px]'>Name</label>
                                <div className=' border-[1px] border-slate-600 w-full md:w-[350px] rounded-md'>
                                    <input type="text" id='userName' name='name' placeholder='Enter your Name' className='bg-transparent py-1    outline-none mx-4' />
                                </div>
                            </div>
                            <div className='mb-3 flex flex-col md:flex-row'>
                                <label htmlFor="userPass" className='text-[20px] text-slate-600 font-[500] w-[100px]'>Email</label>
                                <div className=' border-[1px] border-slate-600 w-full md:w-[350px] rounded-md'>
                                    <input type="email" id='userEmail' name='email' placeholder='Enter your email' className='bg-transparent py-1    outline-none mx-4' />
                                </div>
                            </div>
                            <div className='mb-3 flex flex-col md:flex-row'>
                                <label htmlFor="userPass" className='text-[20px] text-slate-600 font-[500] w-[100px]'>Number</label>
                                <div className=' border-[1px] border-slate-600 w-full md:w-[350px] rounded-md'>
                                    <input type="number" id='userNum' name='number' placeholder='Enter your number' className='bg-transparent py-1    outline-none mx-4' />
                                </div>
                            </div>
                            <div className='mb-3 flex flex-col md:flex-row'>
                                <label htmlFor="userPass" className='text-[20px] text-slate-600 font-[500] w-[100px]'>Password</label>
                                <div className=' border-[1px] border-slate-600 w-full md:w-[350px] rounded-md flex flex-row items-center justify-between px-1'>
                                    <input type={password ? 'text' : 'password'} id='userPass' name='password' placeholder='Enter your password' className='bg-transparent py-1  outline-none mx-4' />
                                    <span className='text-right'>{password ? <FaEyeSlash className='cursor-pointer text-right' onClick={closePassword} /> : <FaEye className='cursor-pointer text-right' onClick={showPassword} />}</span>
                                </div>
                            </div>
                            <div className='my-5'>
                                <Button style={{ padding: "10px 20px", textAlign: 'center', fontWeight: '400', backgroundColor: "#e3292d", border: "none", borderRadius: '40px' }}>Change password</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
            <div>
                <Footer />
            </div>
        </div >
    )
}

export default PersonalDetails
