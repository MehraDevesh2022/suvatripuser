import React, { useState  } from 'react'
import LoginImg from '../../../Assets/img/Rectangle.png'
import { FcGoogle } from 'react-icons/fc'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Resendotp from './Resetotp';
import axios from 'axios';



function Forget({handleBackdropClick}) {

    const [email , setEmail] = useState("");
     const [resetPassword, setResetPassword] = useState(true)

    

    const handleResetPass =  async () => {
        try {
            const response = await axios.post("http://localhost:8000/auth/forgot-password" , {
                email: email
            })
            console.log(response.data , "response.data");
            setResetPassword(false)
            
        } catch (error) {
            console.log(error , "error");

        }
    }
    return (
        <div>
            {
                resetPassword ? <div className='flex flex-row items-start'>
                    <div className='w-[400px] h-[430px] hidden md:block rounded-lg'>
                        <img src={LoginImg} alt="login_img" className='w-full h-full rounded-lg' />
                    </div>
                    <div className='w-[400px] px-4 py-3'>
                        <div className='mb-3'>
                            <p className='leading-6 text-slate-6000 font-[600] mb-0'>Email</p>
                            <input type="text" placeholder='Enter the Email' className='w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg'
                             onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='w-full my-4'>
                            <Button style={{ padding: "10px 18px", textAlign: 'center', backgroundColor: "#e3292d", border: "none", borderRadius: '40px' }} className='w-full hover:opacity-80' onClick={handleResetPass}>Reset Password</Button>

                        </div>
                        <div className='text-center mt-36'>
                            <p className='mb-4'>or log In with</p>
                            <div>
                                <FcGoogle className='inline mx-2 text-[30px] cursor-pointer hover:opacity-70' />
                                <FaSquareFacebook className='inline mx-3 text-[30px] cursor-pointer text-[blue] hover:opacity-70' />
                                <FaPhone className="inline mx-3 text-[28px] cursor-pointer hover:opacity-70" />
                            </div>
                        </div>
                    </div>
                </div> : <Resendotp  email={email} handleBackdropClick={handleBackdropClick} />
            }
        </div>
    )
}

export default Forget
