import React from 'react'
import Button from 'react-bootstrap/Button';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Picture from '../../Assets/img/Rectangle.png'


function Hotel() {
    const HotelObject = [
        {
            Title: "Luxe Properties",
            content: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam praesentium iste recusandae nam, ',
            photoLink: Picture
        },
        {
            Title: "Luxe Properties",
            content: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam praesentium iste recusandae nam, ',
            photoLink: Picture
        },
        {
            Title: "Luxe Properties",
            content: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam praesentium iste recusandae nam',
            photoLink: Picture
        },
        {
            Title: "Luxe Properties",
            content: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam praesentium iste recusandae nam, ',
            photoLink: Picture
        },
        {
            Title: "Luxe Properties",
            content: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam praesentium iste recusandae nam, ',
            photoLink: Picture
        },
        {
            Title: "Luxe Properties",
            content: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia laboriosam praesentium iste recusandae nam',
            photoLink: Picture
        }
    ]
    return (
        <div className='w-full bg-[#fff]'>
            <div className='my-5 w-full md:w-[1050px] mx-auto  p-3 bg-[#fff] rounded-lg'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='text-[55px] font-[900] tracking-wide leading-4'>
                        Hotel

                    </div>
                    <div className='w-[700px] h-[2px] hidden md:block bg-slate-950 my-auto'></div>
                    <div>
                        <Button style={{ padding: "8px 24px", textAlign: 'center', backgroundColor: "#e3292d", border: "none", borderRadius: '40px', fontWeight: '400' }}>View All <span><MdOutlineArrowRightAlt className='inline text-[35px] font-[300]' /></span></Button>
                    </div>
                </div>
                <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center'>
                    {
                        HotelObject.map((data, index) => {
                            return (
                                <div key={index} className=''>
                                    <div className='w-[320px] h-[250px]  rounded-tl-lg rounded-tr-lg'>
                                        <img src={data.photoLink} alt="hotel_images" className='w-full h-full rounded-tl-lg rounded-tr-lg' />
                                    </div>
                                    <div className='w-[320px] shadow-md border-[1px] border-slate-200 p-2 rounded-br-lg rounded-bl-lg'>
                                        <h3 className='font-[700]'>{data.Title}</h3>
                                        <p className='w-full'>{data.content}</p>
                                        <div className='text-right'>
                                            <Button style={{ padding: "10px 25px", textAlign: 'center', backgroundColor: "#e3292d", border: "none", borderRadius: '40px' }} className='hover:opacity-70 duration-200 ease-in-out'>Book Now</Button>
                                        </div>



                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Hotel
