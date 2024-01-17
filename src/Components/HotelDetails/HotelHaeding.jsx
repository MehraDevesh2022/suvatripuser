import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useAppContext } from '../../context/store';

function HotelHaeding() {
  const starArray = [1, 2, 3, 4, 5];
  const { state } = useAppContext();
  const hotelDetial = state.hotelDetails;


  const hotelName = hotelDetial?.propertyName || 'Barcelo Anfa'; 
  const country = hotelDetial?.country + " " +  hotelDetial?.city + " " + hotelDetial?.address  || 'Nepal'; 
  const rating = hotelDetial?.rating || 0; 

  return (
    <div>
      <div className='px-2 md:px-0'>
        <div className='flex flex-row justify-start items-center mb-0'>
          <h3 className='mt-2 mb-0 text-[25px] md:text-[35px] font-[700] tracking-wider'>{hotelName}</h3>
          <div className='mx-3 text-[#FFDF00]'>
            {Array.from({length : Number(rating)}).map((item, index) => (
              <FaStar key={index} className={`inline ml-1 text-${index < rating ? 'yellow' : 'gray-300'} font-[900]`} />
            ))}
          </div>
        </div>
        <p className='text-[15px] md:text-[18px] font-[400] text-slate-800 my-1'>{country}</p>
      </div>
    </div>
  );
}

export default HotelHaeding;
