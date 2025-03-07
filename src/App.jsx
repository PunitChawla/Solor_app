import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Root from './pages/Root';
import Commercial from './pages/Commercial';
import Housing_society from './pages/HousingSociety';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/home" element={<Home />} />
        <Route path="/commercial" element={<Commercial/>} />
        <Route path="/housing_society" element={<Housing_society/>} />
      </Routes>
    </Router>
  );
}

export default App;
