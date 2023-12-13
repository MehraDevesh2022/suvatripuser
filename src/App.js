import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Privacy from './Components/PrivacyPolicy/Privacy';
import Condition from './Components/Terms/Condition';



function App() {
  const styleText = {
    fontFamily: "'Poppins', sans-serif",
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,135,131,1) 0%, rgba(254,243,242,1) 58%)',

  };
  return (
    <div style={styleText}>
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
