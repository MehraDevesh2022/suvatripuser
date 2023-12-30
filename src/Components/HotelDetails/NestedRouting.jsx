import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HotelRooms from './HotelRooms';
import HotelAmenities from './HotelAnimites';
import HotelDescription from './HotelDiscription';
import HotelReviews from './HotelReviews';
import HotelSupport from './HotelSupport';
import HotelPhotos from './HotelPhotos';

function NestedRouting() {
  return (
    <Routes>
      <Route path='/' element={<HotelRooms />} />
      <Route path='amenities' element={<HotelAmenities />} />
      <Route path='description' element={<HotelDescription />} />
      <Route path='review' element={<HotelReviews />} />
      <Route path='support' element={<HotelSupport />} />
      <Route path='photos/*' element={<HotelPhotos />} />
    </Routes>
  );
}

export default NestedRouting;
