function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/images/Footer-logo.png" alt="Logo" className="footer-logo" />
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Ibrahim Nuhu. All rights reserved.</p>
          <p>123 Okada Road, Nigeria.</p>
        </div>
      </div>

      <div className="footer-right">
        <p>Connect with me:</p>
        <div className="social-icons">
          <a href="mailto:ibrahimnuhu0@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/google.png" alt="Gmail" />
          </a>
          <a href="https://github.com/ibrahimnuhu0" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/ibrahim-nuhu-963b0512b" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
