// src/components/HeroSection/HeroSection.jsx

import { Link } from 'react-scroll';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="bg-img-square"></div>
      <div className="hero-content">
        <Link to="about" smooth={true} duration={500} className="hero-link bigboy1">
          HEY I'M MATT
        </Link>
        <span className="hero-text bigboy2">HERE'S MY</span>
        <Link to="projects" smooth={true} duration={500} className="hero-link bigboy3">
          PORTFOLIO
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
