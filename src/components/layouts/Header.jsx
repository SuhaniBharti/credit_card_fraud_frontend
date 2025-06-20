import user from '../../assets/user.png';
import '../../header.css';
import dataseekers from '../../assets/dataseekers.png';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="custom-navbar py-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <img
              src={dataseekers}
              alt="DATA SEEKERS"
              className="logo-img"
            />
          </div>

          {/* Hamburger (visible only below 996px) */}
          <button className="hamburger d-lg-none" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Navigation Links (show below 996px only when menu is open OR show by default on lg+) */}
          <ul className={`nav nav-links ${menuOpen ? 'show' : ''}`}>
            <li><a href="/" className="nav-link custom-nav-btn">Home</a></li>
            <li><a href="#" className="nav-link custom-nav-btn">About Us</a></li>
            <li><a href="#" className="nav-link custom-nav-btn">About Project</a></li>
          </ul>

           

          {/* Avatar (optional) */}
          <div className="dropdown text-end d-none d-lg-block">
            <a
              href="#"
              className="d-block link-light text-decoration-none"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={user}
                alt="user"
                width="36"
                height="36"
                className="rounded-circle border border-white"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
