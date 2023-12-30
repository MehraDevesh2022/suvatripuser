import React from 'react';
import Images from '../../Assets/img/Rectangle.png';
import { useAppContext } from '../../context/store';

function AllPicture() {
  const { state } = useAppContext();
  const hotelDetial = state.hotelDetails;

  // Assuming these are arrays of pictures in hotelDetails
  const propertyPictures = hotelDetial?.propertyPicture || [];
  const roomPictures = hotelDetial?.roomPicture || [];
  const areaPictures = hotelDetial?.areaPicture || [];

  const allPictures = [...propertyPictures, ...roomPictures, ...areaPictures];

  return (
    <div className='py-4'>
      <h3 className='text-center'>All Picture</h3>
      <div className='min-w-fit max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-x-1 mx-auto gap-y-2 py-4'>
        {allPictures.map((picture, index) => (
          <div key={index} className='w-full md:w-[320px] h-[250px] rounded-lg'>
            <img src={picture.link || Images} alt={`picture_${index}`} className='w-full h-full rounded-lg' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPicture;
