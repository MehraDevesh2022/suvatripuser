import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function HotelFilter() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const navItemStyle = {
        backgroundColor: '#edf2f7',
        padding: '12px 18px',
        borderRadius: '8px',
        fontSize: '15px',
        fontWeight: '600',
        marginBottom: '10px', // Adjust as needed for spacing
        cursor: 'pointer',
        textAlign: 'center',
    };

    return (
        <div className='grid grid-cols-3 md:grid-cols-6 gap-4 px-2 md:px-0'>
            <Link to="/hoteldetails/" className={`no-underline  ${isActive('/hoteldetails/') ? "text-[#f7484d]" : 'text-slate-500'}`} >
                <div style={navItemStyle}>Room</div>
            </Link>
            <Link to="/hoteldetails/animities" className={`no-underline ${isActive('/hoteldetails/animities') ? "text-[#f7484d]" : 'text-slate-500'}`}>
                <div className='nav-item' style={navItemStyle}>Amenities</div>
            </Link>
            <Link to="animities/discription" className={`no-underline   ${isActive('/hoteldetails/animities/discription') ? "text-[#f7484d]" : 'text-slate-500'}`}>
                <div style={navItemStyle}>Description</div>
            </Link>
            <Link to="animities/discription/review" className={`no-underline  ${isActive('/hoteldetails/animities/discription/review') ? "text-[#f7484d]" : 'text-slate-500'}`}>
                <div style={navItemStyle}>Review</div>
            </Link>
            <Link to="animities/discription/review/support" className={`no-underline  ${isActive('/hoteldetails/animities/discription/review/support') ? "text-[#f7484d]" : 'text-slate-500'}`}>
                <div style={navItemStyle}>Support</div>
            </Link>
            <Link to="animities/discription/review/support/photos/" className={`no-underline  ${isActive('/hoteldetails/animities/discription/review/support/photos/') ? "text-[#f7484d]" : 'text-slate-500'}`}>
                <div style={navItemStyle}>Photos</div>
            </Link>
        </div>
    )
}

export default HotelFilter
