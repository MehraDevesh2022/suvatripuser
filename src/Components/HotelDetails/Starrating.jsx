import React, {useState} from 'react'
import { FaStar } from "react-icons/fa6";


function Starrating() {
    const [rating, setRating] = useState(4);

    const handleStarClick = (index) => {
      // Toggle the color of stars on click
      setRating(index + 1);
    };
  return (
    <div>
         {[...Array(5)].map((star, index) => (
        <FaStar
          key={index}
          onClick={() => handleStarClick(index)}
          color={index < rating ? '#FDCC0D' : '#ccc'} // Change color based on the selected rating
          className='inline mx-2 font-700 text-[30px] cursor-pointer'
        />
      ))}
    </div>
  )
}

export default Starrating