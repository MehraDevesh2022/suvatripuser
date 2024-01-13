import React from 'react';
import Images from '../../Assets/img/Rectangle.png';
import { useAppContext } from '../../context/store';

function Roompic() {
  const { state } = useAppContext();
  const hotelDetial = state.hotelDetails;

  // Assuming nearbyPictures is an array of pictures in hotelDetails
  const areaPictures = hotelDetial?.areaPicture || [];
  return (
    <div className='py-4'>
      <h3 className='text-center'>Near by Picture</h3>
      <div className='min-w-fit max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-x-1 mx-auto gap-y-2 py-4'>
        {areaPictures.map((picture, index) => (
          <div key={index} className='w-full md:w-[320px] h-[250px] rounded-lg p-2'>
            <img src={picture.link || Images} alt={`nearby_picture_${index}`} className='w-full h-full rounded-lg' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roompic;
