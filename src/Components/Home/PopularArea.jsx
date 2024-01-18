import React, { useState } from 'react';
import picture from '../../Assets/img/Rectangle.png';
import { FaArrowRight } from 'react-icons/fa';
import Kathmandu from '../../Assets/img/kathmandu.jpg'
import Pokahara from '../../Assets/img/pokahara.jpg'
import Dharan from '../../Assets/img/Dharan.jpg'
import { useNavigate } from 'react-router-dom';
function PopularArea() {
    const [hoveredItem, setHoveredItem] = useState(null);
    let timeoutId;
    const navigate = useNavigate();
    const handleMouseEnter = (index) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setHoveredItem(null);
        }, 200);
    };

    const handleContentMouseEnter = () => {
        // Clearing the timeout to prevent mouse leave event when clicking on the button
        clearTimeout(timeoutId);
    };

    const handleContentMouseLeave = () => {
        setHoveredItem(null);
    };

    const popularPlace = [
        {
            id: 1,
            Title: 'Kathmandu',
            discript: 'Kathmandu, the capital of Nepal, is a vibrant city nestled in the Himalayas, renowned for its rich cultural heritage and diverse landscapes.',
            img: Kathmandu,
        },
        {
            id: 2,
            Title: 'Pokhara',
            discript: `Pokhara: Nepal's scenic gem, adorned with lakes, mountains, and adventure, offers a tranquil escape in a breathtaking natural setting.`,
            img: Pokahara,
        },
        {
            id: 3,
            Title: 'Dharan',
            discript: 'Dharan: A vibrant town in eastern Nepal, known for its lively culture, scenic beauty, and as a hub for education.',
            img: Dharan,
        },
    ];

    function constructHotelFilterURL(location) {
        const defaultLocation = 'All';
        const today = new Date();
        const defaultCheckIn = formatDate(today); 
        const defaultCheckOut = formatDate(addDays(today, 7)); 
        const defaultChildren = 0;
        const defaultRoom = 1;
        const defaultAdult = 1;
      
        const filterLocation = location || defaultLocation;
        const filterCheckIn =  defaultCheckIn;
        const filterCheckOut =  defaultCheckOut;
        const filterChildren =  defaultChildren;
        const filterRoom =  defaultRoom;
        const filterAdult =  defaultAdult;
      
        const url = `/filter?location=${filterLocation}&checkIn=${filterCheckIn}&checkOut=${filterCheckOut}&children=${filterChildren}&room=${filterRoom}&adult=${filterAdult}`;
      
        return url;
      }
      
      
      function addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      }
      
      
      function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
      

    return (
        <div>
            <div className='w-full xl:w-[1050px] bg-[#fff] mx-auto my-3 shadow-md p-4 rounded-lg border-[1px] border-slate-100'>
                <h3 className='text-xl md:text-[28px] lg:text-3xl font-[800] tracking-wider px-2 mb-3'>Popular area to stay in Nepal</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:flex flex-row justify-between items-center'>
                    {popularPlace.map((item, index) => (
                        <div key={index} className='relative w-full'>
                            <div
                                className='w-[300px] h-[200px] cursor-pointer mt-2 mx-auto lg:mx-2 rounded-lg -z-10'
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img
                                    src={item.img}
                                    alt='picture_Img'
                                    className={`w-full h-full rounded-lg ${hoveredItem === index ? 'opacity-40' : ''}`}
                                />
                            </div>
                            {hoveredItem === index && (
                                <div
                                    className='absolute top-4 left-4 md:left-8 lg:left-2 w-[300px] px-3 py-1 rounded-lg z-10'
                                    onMouseEnter={handleContentMouseEnter}
                                    onMouseLeave={handleContentMouseLeave}
                                >
                                    <h4 className='font-[600] text-[#000] tracking-wide'>{item.Title}</h4>
                                    <p className='text-[14px] font-[500] text-[#000]'>{item.discript}</p>
                                    <button className='bg-[blue] w-[150px] py-2 text-slate-50 rounded-xl hover:opacity-75'
                                     onClick={() => {
                                        const url = constructHotelFilterURL(item.Title);
                                        navigate(url);
                                      }}
                                    >
                                    
                                        
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
