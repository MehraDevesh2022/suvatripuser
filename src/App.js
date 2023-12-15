import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Privacy from './Components/PrivacyPolicy/Privacy';
import Condition from './Components/Terms/Condition';
import Filter from './Components/Filter/Filter';
import HotelDetail from './Components/HotelDetails/HotelDetail';



function App() {
  const styleText = {
    fontFamily: "'Josefin Sans', sans-serif",
    backgroundColor: 'rgb(2,0,36)',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,135,131,1) 0%, rgba(254,243,242,1) 58%)',

  };
  return (
    <div style={styleText}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/privacypolicy' element={<Privacy />} />
          <Route path='/condition' element={<Condition />} />
          <Route path='/filter' element={< Filter />} />
          <Route path='/hoteldetails/*' element={< HotelDetail />} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;
