import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function HotelFilter() {
  const location = useLocation();
  const { id } = useParams();
  const isActive = (path) => location.pathname === path;

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

  return (
    <div className='grid grid-cols-3 md:grid-cols-6 gap-4 px-2 md:px-0'>
      <Link to={`/hoteldetails/${id}/rooms`} className={`no-underline ${isActive(`/hoteldetails/${id}/rooms`) ? 'text-[#f7484d]' : 'text-slate-500'}`}>
        <div style={navItemStyle}>Room</div>
      </Link>
      <Link to={`/hoteldetails/${id}/amenities`} className={`no-underline ${isActive(`/hoteldetails/${id}/amenities`) ? 'text-[#f7484d]' : 'text-slate-500'}`}>
        <div className='nav-item' style={navItemStyle}>Amenities</div>
      </Link>
      <Link to={`/hoteldetails/${id}/description`} className={`no-underline ${isActive(`/hoteldetails/${id}/description`) ? 'text-[#f7484d]' : 'text-slate-500'}`}>
        <div style={navItemStyle}>Description</div>
      </Link>
      <Link to={`/hoteldetails/${id}/review`} className={`no-underline ${isActive(`/hoteldetails/${id}/review`) ? 'text-[#f7484d]' : 'text-slate-500'}`}>
        <div style={navItemStyle}>Review</div>
      </Link>
      <Link to={`/hoteldetails/${id}/support`} className={`no-underline ${isActive(`/hoteldetails/${id}/support`) ? 'text-[#f7484d]' : 'text-slate-500'}`}>
        <div style={navItemStyle}>Support</div>
      </Link>
      <Link to={`/hoteldetails/${id}/photos`} className={`no-underline ${isActive(`/hoteldetails/${id}/photos`) ? 'text-[#f7484d]' : 'text-slate-500'}`}>
        <div style={navItemStyle}>Photos</div>
      </Link>
    </div>
  );
}

export default HotelFilter;
