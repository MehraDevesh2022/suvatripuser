import React from 'react';
import { FaStar } from 'react-icons/fa6';

function Starrating({ rating, onChange }) {
  const handleStarClick = (index) => {
    // Toggle the color of stars on click
    onChange(index + 1);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => (
        <FaStar
          key={index}
          onClick={() => handleStarClick(index)}
          color={index < rating ? '#FDCC0D' : '#ccc'} // Change color based on the selected rating
          className="inline mx-2 font-700 text-sm md:text-[22px]  lg:text-[30px] cursor-pointer"
        />
      ))}
    </div>
  );
}

export default Starrating;
