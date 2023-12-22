import React, { useState } from 'react';
import picture from '../../Assets/img/Rectangle.png';
import { FaArrowRight } from 'react-icons/fa';

function PopularArea() {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setHoveredItem(null);
        }, 200);
    };

    const handleContentMouseEnter = () => {
        // Clearing the timeout to prevent mouse leave event when clicking on the button
        clearTimeout();
    };

    const handleContentMouseLeave = () => {
        setHoveredItem(null);
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

    return (
        <div>
            <div className='min-w-fit max-w-[1050px] bg-[#fff] mx-auto my-3 shadow-md p-3 rounded-lg border-[1px] border-slate-100'>
                <h3 className='text-2xl md:text-4xl font-[800] tracking-wider px-3 mb-2'>Popular area to stay in Kathmandu</h3>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    {popularPlace.map((item, index) => (
                        <div key={index} className='relative'>
                            <div
                                className='w-[300px] h-[250px] cursor-pointer mt-2 mx-2 rounded-lg -z-10'
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img
                                    src={item.img}
                                    alt='picture_Img'
                                    className={`w-full h-full rounded-lg ${hoveredItem === index ? 'opacity-70' : ''}`}
                                />
                            </div>
                            {hoveredItem === index && (
                                <div
                                    className='absolute top-5 left-1 w-[300px] px-3 py-1 rounded-lg z-10'
                                    onMouseLeave={handleContentMouseLeave}
                                >
                                    <h4 className='font-[600] text-[#fff] tracking-wide'>{item.Title}</h4>
                                    <p className='text-[16px] font-[500] text-[#fff]'>{item.discript}</p>
                                    <button className='bg-[blue] w-[150px] py-2 text-slate-50 rounded-xl hover:opacity-75'>
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