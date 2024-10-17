// src/components/AboutSection/AboutSection.jsx

import profilePhoto from '../../assets/images/profilephoto.png';
import Box from '@mui/material/Box'; // Import MUI's Box component
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <h1 className="section-title-about">ABOUT ME</h1>
      <Box className="about-content" display="flex" justifyContent="space-between" alignItems="center" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Box className="image-box" flex={1} display="flex" justifyContent="center" alignItems="center" mb={{ xs: 2, md: 0 }}>
          <img
            className="profile-photo"
            src={profilePhoto}
            alt="Profile of Matt"
          />
        </Box>
        <Box className="text-box" flex={2}>
          <span className="little-about">Here's a little about me</span>
          <p className="about-p">
            I am a full-time software engineer based in San Juan Capistrano, California with
            skills as a full stack developer and AI/ML
            engineer.
          </p>
          <p className="about-p">
            I currently work as a developer for BeatBox Beverages,
             while also taking on contract projects.
          </p>
          <p className="about-p">
            While I'm not buried in code, you can find me buried in a good book,
            creating YouTube videos, or lifting at the gym.
          </p>
        </Box>
      </Box>
    </section>
  );
};

export default AboutSection;
