import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Privacy from './Components/PrivacyPolicy/Privacy';
import Condition from './Components/Terms/Condition';



function App() {
  const styleText = {
    fontFamily: "'Josefin Sans', sans-serif",
  }
  return (
    <div style={styleText} className='bg-[#feefef]'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/privacypolicy' element={<Privacy />} />
          <Route path='/condition' element={<Condition />} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;
