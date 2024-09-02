// Projects.jsx
import React, { useState } from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import Popup from './Popup';

const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Study-X",
      des: "An educational platform designed to facilitate online learning, including course management and student collaboration tools.",
      src: projectOne
    },
    {
      title: "Payroll Management System",
      des: "A system to streamline payroll processes, ensuring accurate and timely compensation for employees.",
      src: projectTwo
    },
    {
      title: "Salon Management",
      des: "A complete solution for salon management, from booking appointments to managing customer information and services.",
      src: projectThree
    }
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section
      id="projects"
      style={{ width: '100%', padding: '2rem', borderBottom: '1px solid black' }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>

      {isPopupOpen && selectedProject && (
        <Popup
          title={selectedProject.title}
          description={selectedProject.des}
          src={selectedProject.src}
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
};

export default Projects;
