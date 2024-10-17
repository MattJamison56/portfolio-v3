// src/components/ProjectsSection/ProjectCard.tsx

import React from 'react';
import './ProjectCard.css';
import Box from '@mui/material/Box'; // Import MUI's Box component

// Define the Project interface
interface Project {
  title: string;
  date: string;
  skills: string[];
  description: string;
  image: string;
  link: string;
}

// Define the props interface for ProjectCard
interface ProjectCardProps {
  project: Project;
  align: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, align }) => {
  return (
    <Box
      className={`project ${align === 'left' ? 'project-left' : 'project-right'}`}
      display="flex"
      alignItems="center"
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        height: { xs: 'auto', md: '80vh' },
      }}
    >
      <Box
        className="project-content"
        display="flex"
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
        }}
      >
        {/* Title, Skills, and Image */}
        <Box className="title-photo" display="flex" flexDirection="column" m={2}>
          <span className="project-title">{project.title}</span>
          <Box className="year-skills" display="flex" alignItems="center" flexWrap="wrap">
            <span className="skills">{project.date}</span>
            <span className="skills">{project.skills.join(' • ')}</span>
          </Box>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img
              className="website-photo"
              src={project.image}
              alt={`${project.title} screenshot`}
            />
          </a>
        </Box>
        {/* Description */}
        <Box className="project-desc-container" m={2}>
          <p className="project-desc">{project.description}</p>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
