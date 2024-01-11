import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Privacy from './Components/PrivacyPolicy/Privacy';
import Condition from './Components/Terms/Condition';
import Filter from './Components/Filter/Filter';
import HotelDetail from './Components/HotelDetails/HotelDetail';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { clientId } from './config';
import Booking from './Components/Booking/Booking';
import PersonalDetails from './Components/PersonalDetails/PersonalDetails';
import About from './Components/About/About';
import Clienthelp from './Components/Help/Clienthelp';
import HotelRooms from './Components/HotelDetails/HotelRooms';
import HotelAmenities from './Components/HotelDetails/HotelAnimites';
import HotelDescription from './Components/HotelDetails/HotelDiscription';
import HotelReviews from './Components/HotelDetails/HotelReviews';
import HotelSupport from './Components/HotelDetails/HotelSupport';
import HotelPhotos from './Components/HotelDetails/HotelPhotos';
import { useAppContext } from './context/store';
import { useLocation  , useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const { state, actions } = useAppContext();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const styleText = {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: 'rgb(2,0,36)',
    background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(255,135,131,1) 0%, white 58%)',
  };


  console.log(process.env.REACT_APP_BASE_URL, 'process.env.REACT_APP_BASE_URL');

  const personalProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token is missing');
        actions.login(false); 
        if(location.pathname === '/personaldetails' || location.pathname === '/booking' ) 
        navigate('/'); 
        return;
      }
  
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
  
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/profile`, config);
  
      if (response.data.success && response.data.success === true) {
        console.log(response.data.user, 'response.data.user'); 
        actions.setProfileData(response.data.user);
        actions.setAuthType(response.data.authType);
         setIsLoggedIn(true);
        actions.login(true);
        localStorage.setItem("isLoggedIn", true)
         
      }
    } catch (error) {
      actions.setProfileData({});
     
      actions.setAuthType('');
      actions.login(false);
      localStorage.removeItem("isLoggedIn")
      localStorage.removeItem("token")
      setIsLoggedIn(false);
      console.error('Error fetching profile:', error);
    }
  };
  
 
  
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        await personalProfile();
      } catch (error) {
        console.error('Error in fetchData:', error);
      }

      if (isLoggedIn) {
         actions.login(false);
        if (location.pathname === '/personaldetails') {
          navigate('/');
        }
        return;  
      }

    };

    fetchData();
    const storedIsLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

    actions.login(storedIsLoggedIn || false);
    if(JSON.parse(localStorage.getItem('isLoggedIn'))  && state.isLoggedIn === false)
    {
      personalProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  



  return (
    <div style={styleText} className='overflow-x-hidden'>
      <GoogleOAuthProvider clientId={clientId}>
      
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/privacypolicy' element={<Privacy />} />
            <Route path='/condition' element={<Condition />} />
            <Route path='/filter' element={<Filter />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/personaldetails' element={<PersonalDetails />} />
            <Route path='/about' element={<About />} />
            <Route path='/help' element={<Clienthelp />} />
            <Route path='/hoteldetails/:id/*' element={<HotelDetail />}>
            <Route path='rooms' element={<HotelRooms />} />
              <Route path='amenities' element={<HotelAmenities />} />
              <Route path='description' element={<HotelDescription />} />
              <Route path='review' element={<HotelReviews />} />
              <Route path='support' element={<HotelSupport />} />
              <Route path='photos/*' element={<HotelPhotos />} />
            </Route>
          </Routes>
      
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
