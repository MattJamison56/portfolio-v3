// src/components/Navbar/Navbar.jsx

import { Link } from 'react-scroll';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  // State to manage the collapse
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to toggle the collapse state
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{padding: '20px 20px'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color: '#eae2cb'}}>
          matt's portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isCollapsed ? '' : 'show'
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav" style={{marginRight: '20px'}}>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsCollapsed(true)} // Close menu on link click
              >
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsCollapsed(true)}
              >
                projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => setIsCollapsed(true)}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
