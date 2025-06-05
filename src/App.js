import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; // ✅ Import Header instead of Nav
import Footer from './Footer';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
