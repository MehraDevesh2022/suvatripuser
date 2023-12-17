import React from 'react'
import { Link } from 'react-router-dom'

function HotelFilter() {
    const navItemStyle = {
        backgroundColor: '#edf2f7',
        padding: '12px 20px',
        borderRadius: '8px',
        fontSize: '18px',
        fontWeight: '500',
        marginBottom: '10px', // Adjust as needed for spacing
        cursor: 'pointer',
        textAlign: 'center'

    };
    return (
        <div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
            <Link to="/hoteldetails/" className='no-underline'>
                <div style={navItemStyle}>Room</div>
            </Link>
            <Link to="/hoteldetails/animities" className='no-underline'>
                <div className='nav-item' style={navItemStyle}>Amenities</div>
            </Link>
            <Link to="animities/discription" className='no-underline'>
                <div style={navItemStyle}>Description</div>
            </Link>
            <Link to="animities/discription/review" className='no-underline'>
                <div style={navItemStyle}>Review</div>
            </Link>
            <Link to="animities/discription/review/support" className='no-underline'>
                <div style={navItemStyle}>Support</div>
            </Link>
            <Link to="animities/discription/review/support" className='no-underline'>
                <div style={navItemStyle}>Photos</div>
            </Link>
        </div>
    )
}

export default HotelFilter
