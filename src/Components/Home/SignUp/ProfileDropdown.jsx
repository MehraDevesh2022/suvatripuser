import { Link } from 'react-router-dom'

function ProfileDropdown({ handleLogout, closeDropdown }) {
  const handleItemClick = (action) => {
    // Handle the selected action (e.g., "My Booking", "My Profile")

    closeDropdown();
  };

  const getRightValue = () => {
    if (window.innerWidth <= 768) {
      return '1rem'; // Adjust this value for mobile screens
    } else {
      return '16rem'; // Default value for larger screens
    }
  };

  const divStyle = {
    position: 'absolute',
    top: '4.5rem',
    right: getRightValue(),
    zIndex: '1',
    backgroundColor: '#fff',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',

  }
  const UllistStytle = {
    listStyle: 'none',
    margin: '0',
    padding: '8px 35px',
  }

  const listItemStyle = {
    cursor: 'pointer',
    padding: '5px',
    color: '#000',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  }

  return (
    <div
      style={divStyle}
      onMouseLeave={closeDropdown}
    >
      <ul
        style={UllistStytle}
      >
        <li
          style={listItemStyle}
        >
          <Link to="/booking" className='no-underline text-[#000]' onClick={() => handleItemClick('My Booking')}>
            - My Booking
          </Link>
        </li>
        <li
          style={listItemStyle}
        >
          <Link to="/personaldetails" className='no-underline text-[#000]' onClick={() => handleItemClick('My Profile')}>
            - My Profile
          </Link>
        </li>
        <li
          style={listItemStyle}
          onClick={handleLogout}
        >
          -  Logout
        </li>

      </ul>
    </div>
  );
}

export default ProfileDropdown;
