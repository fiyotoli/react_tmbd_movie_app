import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';  // Import the movie icon
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';  // CSS file for custom styles

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${scrolled ? 'shadow' : ''}`}>
      <div className="container py-2">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <FaFilm className="text-danger" size={30} /> {/* Movie icon */}
          MyBrand
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Login Button */}
            <li className="nav-item">
              <Link className="btn btn-danger" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
