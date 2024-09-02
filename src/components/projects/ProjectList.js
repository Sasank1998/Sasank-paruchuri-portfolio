import React from 'react';
import ProjectsCard from './ProjectsCard';

const ProjectList = () => {
  const projectImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
  ];

  return (
    <div className="grid gap-4">
      <ProjectsCard
        title="Project Title"
        des="Project Description"
        src="project-thumbnail.jpg"
        images={projectImages}
      />
    </div>
  );
};

export default ProjectList;
