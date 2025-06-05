import Nav from './Nav';

function Header() {
  return (
    <header className="header">
      <img src="/Logo.svg" alt="Little Lemon Logo" className="logo" />
      <Nav />
    </header>
  );
}

export default Header;
