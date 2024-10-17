// src/components/ProjectsSection/ProjectsSection.tsx

import React from 'react';
import './ProjectsSection.css';
import ProjectCard from './ProjectCard';

// Import existing images
import theBuzzImage from '../../assets/images/buzz/thebuzz.png';
import concertBuddieImage from '../../assets/images/concertbuddie/concertbuddiehome.jpg';

// Import placeholder images for new projects
import gmailWrappedImage from '../../assets/images/gmailWrapped/gmailWrapped.jpg'; 
import compaktImage from '../../assets/images/compakt/compakt.jpg'; 
import renewableFarmsMonitorImage from '../../assets/images/renewableFarms/greenGillsProject.png'; 
import beatTrackerImage from '../../assets/images/beatTracker/beatTracker.png'; 

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'BeatTracker',
      date: 'Present',
      skills: [
        'MSSQL',
        'AWS',
        'Cloud Infrastructure',
        'Architect'
      ],
      description: `BeatTracker is an internal tool for BeatBox Beverages' field marketing team, streamlining event, campaign, and ambassador management for over 7,000 users. As the sole developer, I built the platform with over 50,000 lines of code using MSSQL for database management, AWS for cloud infrastructure, React Vite for the frontend, and Express for the backend. Added features such as analytics tracking, built-in onboarding, geolocation tracking, and more.`,
      image: beatTrackerImage, // Ensure the image is correctly imported
      link: '', // No link available since it's internal
      align: 'left', // Alternates based on project sequence
    },
    {
      title: 'Green Gills Project',
      date: 'May 2024',
      skills: ['Raspberry Pi', 'IoT', 'Sensors', 'Live Monitoring'],
      description: `Developed for the non-profit Renewable Farms, the Green Gills Project tracks aquaponic farm conditions including pH, TDS, temperature, and provides live camera feeds. As the project lead, I developed over 95% of the code for a Raspberry Pi-based sensor system, enabling real-time monitoring and optimization of farm operations.`,
      image: renewableFarmsMonitorImage,
      link: 'https://github.com/MattJamison56/Green-Gills-Project',
      align: 'right',
    },
    {
      title: 'Compakt',
      date: 'April 2024',
      skills: ['Arduino', 'IoT', 'Live Mapping','Firebase'],
      description: `Compakt won first prize in the hardware category at HackDavis. My teammate and I built a prototype trash compactor using Arduino and a servo motor. It tracks trash levels with sonar sensors and compacts when full. A live map displays nearby trash cans, showing whether they are full, compacting, or empty, with built-in directions to reduce litter and overflowing trash.`,
      image: compaktImage, // Replace with actual image path
      link: 'https://devpost.com/software/compakt',
      align: 'left',
    },
    {
      title: 'Gmail Wrapped',
      date: 'January 2024',
      skills: ['ReactJS', 'Gmail API', 'Firebase', 'OpenAI'],
      description: `Developed at IrvineHacks, Gmail Wrapped helps users organize and prioritize important emails by using AI to filter emails based on custom keywords. Users can categorize emails, ban spam, and access summaries for quicker reading. Built with ReactJS for the frontend, Gmail API, OpenAI for filtering, and Firebase for authentication. Inspired by "Spotify Wrapped," this tool improves email efficiency for students and professionals alike.`,
      image: gmailWrappedImage, // Replace with actual image path
      link: 'https://devpost.com/software/gmail-wrapped-ojncif',
      align: 'right',
    },
    {
      title: 'The Buzz',
      date: 'October 2023',
      skills: ['AI', 'Web Scraping', 'UI/UX', 'SQL Database'],
      description: `As the lead developer of The Buzz, I led a team of three to create an innovative news 
          platform designed to revolutionize the way users interact with news online. 
          Leveraging cutting-edge AI technology, it provides users with concise, summarized versions 
          of the latest news articles. Our mission is to deliver up-to-date news in a digestible format, 
          saving time and enhancing understanding for our audience.`,
      image: theBuzzImage,
      link: 'https://youtu.be/Pj54T2ClUgk',
      align: 'left',
    },
    {
      title: 'Concert Buddie',
      date: 'May 2023',
      skills: ['Vanilla JS', 'Flask', 'APIs', 'UI/UX'],
      description: `ConcertBuddie is a platform born from personal experiences and 
          a desire to help solo concert-goers. Originally centered around raves, it has expanded to 
          offer concert tips, blogs, and outfit inspiration. Our primary focus has been on creating 
          an inspiration page, with plans to integrate social media in the future.`,
      image: concertBuddieImage,
      link: 'https://devpost.com/software/concertbuddie',
      align: 'right',
    },
  ];

  return (
    <section className="project-section" id="projects">
      <h1 className="section-title-project">PROJECTS</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} align={project.align} />
      ))}
    </section>
  );
};

export default ProjectsSection;
