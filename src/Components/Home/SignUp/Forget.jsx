import React, { useState } from 'react';
import LoginImg from '../../../Assets/img/Rectangle.png';
import Button from 'react-bootstrap/Button';
import Resendotp from './Resetotp';
import axios from 'axios';

function Forget({ handleBackdropClick , setHandleLoginShow }) {
    const [email, setEmail] = useState("");
    const [resetPassword, setResetPassword] = useState(true);
    const [fieldWarning, setFieldWarning] = useState(false);

    const handleResetPass = async () => {
        // Validate email before attempting to reset password
        if (!email.trim()) {
            // Show warning for empty email
            setFieldWarning(true);
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/forgot-password`, {
                email: email
            });
            console.log(response.data, "response.data");
            setResetPassword(false);
        } catch (error) {
            console.log(error, "error");
        }
    };

    return (
        <div>
            {resetPassword ? (
                <div className='flex flex-row items-start'>
                    <div className='w-[400px] h-[430px] hidden md:block rounded-lg'>
                        <img src={LoginImg} alt="login_img" className='w-full h-full rounded-lg' />
                    </div>
                    <div className='w-[400px] px-4 py-3'>
                        <div className='my-3 mt-10 text-center'>
                            <h5 className=''>Forgot Password</h5>
                        </div>

                        <div className='mb-3'>
                            <p className='leading-6 text-slate-6000 font-[600] mb-0'>Email</p>
                            <input
                                type="text"
                                placeholder='Enter the Email'
                                className={`w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg ${
                                    fieldWarning ? "border-red-500" : ""
                                }`}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {fieldWarning && (
                                <div className="text-red-500 text-sm mt-1">Email is required</div>
                            )}
                        </div>
                        <div className='w-full my-4'>
                            <Button
                                style={{ padding: "10px 18px", textAlign: 'center', backgroundColor: "#e3292d", border: "none", borderRadius: '40px' }}
                                className='w-full hover:opacity-80'
                                onClick={handleResetPass}
                            >
                               Send OTP
                            </Button>
                        </div>
                   
                    </div>
                </div>
            ) : (
                <Resendotp email={email} handleBackdropClick={handleBackdropClick} setHandleLoginShow  ={setHandleLoginShow} />
            )}
        </div>
    );
}

export default Forget;
