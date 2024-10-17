// src/components/ProjectsSection/ProjectsSection.tsx

import React from 'react';
import './ProjectsSection.css';
import ProjectCard from './ProjectCard';


// Import images using ES Modules
import theBuzzImage from '../../assets/images/buzz/thebuzz.png';
import concertBuddieImage from '../../assets/images/concertbuddie/concertbuddiehome.jpg';

const ProjectsSection: React.FC = () => {
  const projects = [
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
