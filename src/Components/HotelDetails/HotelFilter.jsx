import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/store';

function HotelFilter() {
    const location = useLocation();
    const { state } = useAppContext();
    const hotelId = state.hotelDetails?._id;
  
    const isActive = (path) => location.pathname.includes(path);
  
    const navItemStyle = {
      backgroundColor: '#edf2f7',
      padding: '12px 18px',
      borderRadius: '8px',
      fontSize: '15px',
      fontWeight: '600',
      marginBottom: '10px',
      cursor: 'pointer',
      textAlign: 'center',
    };
  
    const hotelPages = [
      { path: `/hoteldetails/${hotelId}/`, label: 'Room' },
      { path: `/hoteldetails/${hotelId}/amenities`, label: 'Amenities' },
      { path: `/hoteldetails/${hotelId}/description`, label: 'Description' },
      { path: `/hoteldetails/${hotelId}/review`, label: 'Review' },
      { path: `/hoteldetails/${hotelId}/support`, label: 'Support' },
      { path: `/hoteldetails/${hotelId}/photos/`, label: 'Photos' },
    ];
  
    return (
      <div className='grid grid-cols-3 md:grid-cols-6 gap-4 px-2 md:px-0'>
        {hotelPages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className={`no-underline text-slate-500 ${
              isActive(page.path) ? 'text-[#f7484d]' : ''
            }`}
          >
            <div style={navItemStyle}>{page.label}</div>
          </Link>
        ))}
      </div>
    );
  }
  
  export default HotelFilter;
;
