import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HotelRooms from './HotelRooms';
import HotelAnimites from './HotelAnimites';
import HotelDiscription from './HotelDiscription';
import HotelReviews from './HotelReviews';
import HotelSupport from './HotelSupport';
import HotelPhotos from './HotelPhotos';

function NestedRouting() {
  return (
    <Routes>
      <Route path='/:id' element={<HotelRooms />} />
      <Route path='/:id/amenities' element={<HotelAnimites />} />
      <Route path='/:id/description' element={<HotelDiscription />} />
      <Route path='/:id/review' element={<HotelReviews />} />
      <Route path='/:id/support' element={<HotelSupport />} />
      <Route path='/:id/photos/' element={<HotelPhotos />} />
    </Routes>
  );
}

export default NestedRouting;
