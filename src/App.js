import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
// Importing App.css
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Privacy from './Components/PrivacyPolicy/Privacy';
import Condition from './Components/Terms/Condition';
import Filter from './Components/Filter/Filter';
import HotelDetail from './Components/HotelDetails/HotelDetail';
import { GoogleOAuthProvider } from "@react-oauth/google"
import { clientId } from './config';
import Booking from './Components/Booking/Booking';
import PersonalDetails from './Components/PersonalDetails/PersonalDetails';
import About from './Components/About/About';
import Clienthelp from './Components/Help/Clienthelp';





function App() {
  const styleText = {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: 'rgb(2,0,36)',
    background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(255,135,131,1) 0%, white 58%)',
    // Another Backgrodund
    // background: 'linear-gradient(rgb(2, 0, 36) 0%, rgb(237, 172, 170) 50%, white 100%)',
  };
  return (
    <div style={styleText}>
      <GoogleOAuthProvider clientId={clientId}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/privacypolicy' element={<Privacy />} />
            <Route path='/condition' element={<Condition />} />
            <Route path='/filter' element={< Filter />} />
            <Route path='/booking' element={< Booking />} />
            <Route path='/personaldetails' element={< PersonalDetails />} />
            <Route path='/about' element={< About />} />
            <Route path='/help' element={< Clienthelp />} />
            <Route path='/hoteldetails/:id' element={< HotelDetail />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
