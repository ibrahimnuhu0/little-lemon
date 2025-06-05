import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/Reservations">Reservations</Link></li>
        <li><Link to="/Order Online">Order Online</Link></li>
        <li><Link to="/Login">Log in</Link></li>

      </ul>
    </nav>
  );
}

export default Nav;
