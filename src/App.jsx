import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Root from './pages/Root';
import Commercial from './pages/Commercial';
import Housing_society from './pages/HousingSociety';
import About_us from './pages/AboutUs';
import Go_solar from './pages/Go-solar';
import SolarPro from './pages/SolarPro';
import WorkInProgress from './components/WorkInProgress';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/home" element={<Home />} />
        <Route path="/commercial" element={<Commercial/>} />
        <Route path="/housing_society" element={<Housing_society/>} />
        <Route path="/aboutus" element={<About_us/>} />
        <Route path="/go-solar" element={<Go_solar/>} />
        <Route path="/solarpro" element={<SolarPro/>} />
        <Route path="/careers" element={<WorkInProgress/>} />
        <Route path="/blog" element={<WorkInProgress/>} />
      </Routes>
    </Router>
  );
}

export default App;
