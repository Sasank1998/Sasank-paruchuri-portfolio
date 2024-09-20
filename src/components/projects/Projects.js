import React, { useState } from "react";
import Title from "../layouts/Title";
import {
  studyx1,
  studyx2,
  studyx3,
  studyx4,
  studyx5,
  studyx6,
  pms1,
  pms2,
  pms3,
  pms4,
  pms5,
  pms6,
  salon1,
  salon2,
  salon3,
  salon4,
  salon5,
  salon6,
  salon7,
} from "../../assets/index"; // Import all images
import ProjectsCard from "./ProjectsCard";
import Popup from "./Popup";

const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Import images as an array for each project
  const projects = [
    {
      title: "Study-X",
      des: "An educational platform designed to facilitate online learning, including course management and student collaboration tools.",
      src: studyx1,
      images: [studyx1, studyx2, studyx3, studyx4, studyx5, studyx6], // Array of images for Study-X
    },
    {
      title: "Payroll Management System",
      des: "A system to streamline payroll processes, ensuring accurate and timely compensation for employees.",
      src: pms1,
      images: [pms1, pms2, pms3, pms4, pms5, pms6], // Array of images for Payroll Management System
    },
    {
      title: "Salon Management",
      des: "A complete solution for salon management, from booking appointments to managing customer information and services.",
      src: salon1,
      images: [salon1, salon2, salon3, salon4, salon5, salon6, salon7], // Array of images for Salon Management
    },
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
      style={{
        width: "100%",
        padding: "2rem",
        borderBottom: "1px solid black",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
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
          images={selectedProject.images} // Pass array of images to Popup
          onClose={handleClosePopup}
        />
      )}
    </section>
  );
};

export default Projects;
