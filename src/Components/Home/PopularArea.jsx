import React, { useState } from 'react';
import picture from '../../Assets/img/Rectangle.png';
import { FaArrowRight } from 'react-icons/fa';

function PopularArea() {
    const [isHovered, setIshovered] = useState(false)

    const boxStyle = {
        position: 'relative',
    };


    const contentStyle = {
        position: 'absolute',
        top: '20px', // Adjust as needed
        left: '6px', // Adjust as needed
        width: '300px',
        // opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s ease', // Add transition property for opacity
    };
    const popularPlace = [
        {
            id: 1,
            Title: 'Thamel',
            discript: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, cumque?',
            img: picture,
        },
        {
            id: 2,
            Title: 'Thamel',
            discript: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, cumque?',
            img: picture,
        },
        {
            id: 3,
            Title: 'Thamel',
            discript: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, cumque?',
            img: picture,
        },
    ];
    const [hoveredItems, setHoveredItems] = useState(Array(popularPlace.length).fill(false));


    const handleMouseEnter = (index) => {
        setHoveredItems((prev) => {
            const newArray = [...prev];
            newArray[index] = true;
            return newArray;
        });
        setIshovered(true)
    };

    const handleMouseLeave = (index) => {
        setHoveredItems((prev) => {
            const newArray = [...prev];
            newArray[index] = false;
            return newArray;
        });
        setIshovered(false)
    };



    return (
        <div>
            <div className='min-w-fit max-w-[1050px] bg-[#fff] mx-auto my-3 shadow-md p-2 rounded-lg border-[1px] border-slate-100'>
                <h3 className='text-2xl md:text-4xl font-[800] tracking-wider px-3 mb-2'>Popular area to stay in kathmandu</h3>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    {popularPlace.map((item, index) => (
                        <div key={index} style={boxStyle}>
                            <div className='w-[300px] h-[200px] cursor-pointer mt-2 mx-2 rounded-lg' onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}>
                                <img
                                    src={item.img}
                                    alt='pictiure_Img'
                                    className='w-full h-full rounded-lg hover:opacity-70'
                                />
                            </div>
                            {hoveredItems[index] && (
                                <div style={contentStyle} className='px-3 py-1'>
                                    <h4 className='font-[600] text-[#fff] tracking-wide'>{item.Title}</h4>
                                    <p className='text-[16px] font-[500] text-[#fff]'>{item.discript}</p>
                                    <button className='bg-[blue] w-[150px] py-2 text-slate-50 rounded-xl'>
                                        More Options <span><FaArrowRight className='inline' /></span>
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PopularArea;
