import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { FaWifi } from "react-icons/fa6";
import { CiPlane } from "react-icons/ci";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { TbSmokingNo } from "react-icons/tb";
import { FaHotel } from "react-icons/fa6";
import { PiStorefrontDuotone } from "react-icons/pi";
import { FaGlassCheers } from "react-icons/fa";
import { MdElevator } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



function HotelDiscription() {
    const mobileAligment = {
        textAlign: 'center'
    };
    const starArray = [1, 2, 3, 4, 5]
    return (
        <div>
            <div className='w-full h-auto bg-white my-3 rounded-lg'>
                <div className='p-4'>
                    <h3 className='text-[30px] font-[700] mb-0'>Description</h3>
                    <div>
                        <span><FaMapMarkerAlt className='inline mr-1' /></span>
                        <span className='text-[18px] text-slate-400'>Kathmandu</span>

                        {
                            starArray.map((item, index) => {
                                return (
                                    <FaStar key={index} className='inline ml-2 text-[#FFD250] font-[900]' />
                                )
                            })
                        }
                    </div>


                    <div className='py-2'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ratione, facilis eligendi porro, corporis aspernatur quae deserunt voluptas consectetur facere numquam veritatis temporibus! Vero tenetur quia voluptatum et quidem accusantium sit numquam odit sequi harum. Cum minima quis expedita, recusandae veritatis modi doloribus qui, ipsum voluptatibus illum ullam architecto molestias nulla maxime delectus quae culpa asperiores fuga praesentium corrupti? Quibusdam dolores facilis quisquam illum voluptatum repellat quod alias nulla a mollitia, incidunt in sapiente ut inventore, tempore nihil praesentium impedit quasi voluptatem. Perspiciatis ut vero quibusdam fuga in, delectus cumque! Excepturi expedita eligendi perspiciatis voluptate nesciunt quis natus distinctio iste. Eligendi laudantium ullam illo odit ratione non dolorem blanditiis suscipit deserunt unde, temporibus pariatur maxime excepturi, molestiae mollitia quibusdam. Consequatur quae, officia temporibus, voluptatum commodi, soluta dolore minima odit animi ut dicta dolorem accusantium necessitatibus illum sit asperiores nemo quis beatae voluptatibus. Explicabo eos ducimus ad, accusamus amet, incidunt hic vitae voluptas ab, natus odio suscipit quia excepturi tempora maiores modi itaque facilis. Odit recusandae temporibus quis commodi rerum molestias velit rem nobis soluta vero est facilis sapiente deleniti qui voluptas quisquam ab cum, quos modi aliquid magnam, non doloribus! Magni, blanditiis laboriosam! Impedit blanditiis ex omnis deleniti harum quibusdam? Nam sed odio veniam officia, numquam suscipit nobis laborum! Cupiditate laudantium amet dolorum laborum consectetur, facilis a obcaecati voluptates deleniti voluptatum inventore beatae. Fugiat dolore fuga dolorum fugit molestiae voluptatem quam enim non, suscipit cumque perspiciatis modi iure nihil dignissimos repellat esse maxime magni dolor tempora illo ex beatae eum commodi accusantium? Labore soluta odit doloremque maiores repellat provident corrupti, officiis eligendi veritatis consectetur earum tempora est aut delectus molestias deleniti animi. Consequuntur voluptatum blanditiis, impedit autem doloremque iusto id esse laborum aspernatur reiciendis suscipit iste soluta laboriosam, quod sit. Voluptate placeat excepturi quaerat velit commodi. Accusantium, cumque. Eaque, consequuntur.</p>
                    </div>

                </div>

                {/* Discription Icons */}
                <div className='px-4 pb-4'>
                    <div style={mobileAligment} className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                        <div className='flex flex-col md:flex-row items-center justify-center md:justify-start'>
                            <span><LuParkingCircle className='font-[800] text-xl text-[#129035]' /></span>
                            <span className='mx-1 text-[16px] font-[500] tracking-wider'>Private parking</span>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-start'>
                            <span><FaWifi className='font-[800] text-xl text-[#129035]' /></span>
                            <span className='mx-1 text-[16px] font-[500] tracking-wider'>Free wifi</span>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-start'>
                            <span><CiPlane className='font-[800] text-2xl text-[#129035]' /></span>
                            <span className='mx-1 text-[16px] font-[500] tracking-wider'>Airport Shuttle</span>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-start'>
                            <span><MdOutlineFamilyRestroom className='font-[800] text-xl text-[#129035]' /></span>
                            <span className='mx-1 text-[16px] font-[500] tracking-wider'>Family room</span>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-start'>
                            <span><TbSmokingNo className='font-[800] text-xl text-[#129035]' /></span>
                            <span className='ml-[1px] text-[15px] font-[500] tracking-wider'>Non Smoking room</span>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-start'>
                            <span><FaHotel className='font-[800] text-xl text-[#129035]' /></span>
                            <span className='mx-1 text-[16px] font-[500] tracking-wider'>Restrutant</span>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-start'>
                            <span><PiStorefrontDuotone className='font-[800] text-xl text-[#129035]' /></span>
                            <span className='ml-[1px] text-[15px] font-[500] tracking-wider'>24- hour front desk</span>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-start'>
                            <span><FaGlassCheers className='font-[800] text-xl text-[#129035]' /></span>
                            <span className='mx-[2px] text-[16px] font-[500] tracking-wider'>Bar</span>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-start'>
                            <span><MdElevator className='font-[800] text-xl text-[#129035]' /></span>
                            <span className='mx-[2px] text-[16px] font-[500] tracking-wider'>Elevator</span>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-start'>
                            <span><MdFreeBreakfast className='font-[800] text-xl text-[#129035]' /></span>
                            <span className='mx-[2px] text-[16px] font-[500] tracking-wider'>Free Breakfast</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default HotelDiscription
