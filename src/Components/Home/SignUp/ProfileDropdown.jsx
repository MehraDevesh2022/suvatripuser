

function ProfileDropdown({ handleLogout, closeDropdown }) {
    const handleItemClick = (action) => {
      // Handle the selected action (e.g., "My Booking", "My Profile")
      
      closeDropdown();
    };
  
    return (
      <div
        style={{
          position: 'absolute',
          top: '4.5rem', 
          right: '11rem',
          zIndex: '1',
          backgroundColor: '#fff',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px', 
        }}
        onMouseLeave={closeDropdown}
      >
        <ul
          style={{
            listStyle: 'none',
            margin: '0',
            padding: '8px 35px',
          }}
        >
          <li
            style={{
              cursor: 'pointer',
              padding: '5px',
              color: '#000',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease',
            }}
            onClick={() => handleItemClick('My Booking')}
          >
           -  My Booking
          </li>
          <li
            style={{
              cursor: 'pointer',
              padding: '5px',
              color: '#000',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease', 
            }}
            onClick={() => handleItemClick('My Profile')}
          >
           -  My Profile
          </li>
          <li
            style={{
              cursor: 'pointer',
              padding: '5px',
              color: '#000',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease', 
          
            }}
            onClick={handleLogout}
          >
          -  Logout
          </li>
        </ul>
      </div>
    );
  }
  
  export default ProfileDropdown;
  