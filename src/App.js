import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer';
import HomePage from './HomePage';
import Main from './Main';
import './App.css';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <Router>
      <div className="container">
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<Main />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
