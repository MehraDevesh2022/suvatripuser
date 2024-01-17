import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/store';

function HotelFilter() {
    const location = useLocation();
    const { state } = useAppContext();
    const hotelId = state.hotelDetails?._id;
  
    const isActive = (path) => location.pathname.includes(path);

    // mobile device
    const isMobile = window.innerWidth <= 800;
  
    const navItemStyle = {
      backgroundColor: '#edf2f7',
      padding: '12px 28px',
      borderRadius: '8px',
      fontSize: '15px',
      fontWeight: '600',
      marginBottom: '10px',
      cursor: 'pointer',
      textAlign: 'center',
    };

    const mobileStyle = {
      padding: '10px',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '10px',
      marginLeft:'10px',
      textAlign: 'center',
    }
  
  
    const hotelPages = [
      { path: `/hoteldetails/${hotelId}`, label: 'Room' },
      { path: `/hoteldetails/${hotelId}/amenities`, label: 'Amenities' },
      { path: `/hoteldetails/${hotelId}/description`, label: 'Description' },
      { path: `/hoteldetails/${hotelId}/review`, label: 'Review' },
      { path: `/hoteldetails/${hotelId}/support`, label: 'Support' },
      { path: `/hoteldetails/${hotelId}/photos/`, label: 'Photos' },
    ];
  
    return (
      <div className='w-[350px] mx-auto md:w-full flex flex-row justify-between items-center scroller mt-3 px-2 lg:p-1 xl:p-0'>
        {hotelPages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className={`no-underline ${
              isActive(page.path) ? 'text-[#f7484d]' : 'text-slate-500'
            }`}
          >
            <div style={isMobile ? mobileStyle : navItemStyle}>{page.label}</div>
          </Link>
        ))}
      </div>
    );
  }
  
  export default HotelFilter;
  
;



// grid grid-cols-3 md:grid-cols-6 gap-4 px-2 md:px-0
// Amenities