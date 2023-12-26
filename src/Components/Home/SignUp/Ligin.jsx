// import React, { useState } from 'react'
// import LoginImg from '../../../Assets/img/Rectangle.png'
// import { FcGoogle } from 'react-icons/fc'
// import { FaSquareFacebook } from "react-icons/fa6";
// import { MdOutlineWifiCalling3 } from "react-icons/md";
// import Button from 'react-bootstrap/Button';
// import Forget from './Forget';

// function Ligin({ handleLoginShow, setHandleLoginShow }) {
//     const [showForgotPass, setShowForgotPass] = useState(true)
//     const handleShowSignUp = () => setHandleLoginShow(false)
//     const handleForgotPass = () => setShowForgotPass(false)

//     return (
//         <div>
//             {
//                 // showForgotPass ? <div className='flex flex-row items-start justify-between'>
//                 //     {/* <div className='w-[600px] h-auto hidden md:block rounded-lg'>
//                 //         <img src={LoginImg} alt="login_img" className='w-full h-full rounded-lg' />
//                 //     </div> */}
//                 //     <div className='w-[500px] px-3 py-4'>
//                 //         <div className='mb-3'>
//                 //             <p className='leading-6 text-slate-6000 font-[600] mb-0'>Email</p>
//                 //             <input type="text" placeholder='Enter the Email' className='w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg ' />
//                 //         </div>
//                 //         <div className='mb-3'>
//                 //             <p className='leading-6 text-slate-6000 font-[600] mb-0'>Password</p>
//                 //             <input type="password" placeholder='Enter the password' className='w-full outline-none border-[1px] border-slate-500 px-1 py-2 rounded-lg' />
//                 //             <div className='text-right'>
//                 //                 <p className='text-slate-500 hover:underline text-[16px] cursor-pointer' onClick={handleForgotPass}>Forgot Password</p>
//                 //             </div>
//                 //         </div>

//                 //         <div className='w-full my-3'>
//                 //             <Button style={{ padding: "10px 18px", textAlign: 'center', backgroundColor: "#e3292d", border: "none", borderRadius: '40px' }} className='w-full hover:opacity-80'>Login</Button>
//                 //             <Button style={{ padding: "10px 18px", textAlign: 'center', backgroundColor: "grey", border: "none", borderRadius: '40px' }} className='w-full hover:opacity-80 mt-4' onClick={handleShowSignUp}>Sign-up</Button>
//                 //         </div>
//                 //         <div className='text-center mt-3'>
//                 //             <p className='mb-3'>or log In with</p>
//                 //             <div>
//                 //                 <FcGoogle className='inline mx-2 text-[30px] cursor-pointer  hover:opacity-70' />
//                 //                 <FaSquareFacebook className='inline mx-3 text-[30px] cursor-pointer text-[blue] hover:opacity-70' />
//                 //                 <MdOutlineWifiCalling3 className='inline mx-3 text-[30px] cursor-pointer hover:opacity-70' />
//                 //             </div>
//                 //         </div>
//                 //     </div>
//                 // </div> : <Forget />
//             }
//         </div>
//     )
// }

// export default Ligin
