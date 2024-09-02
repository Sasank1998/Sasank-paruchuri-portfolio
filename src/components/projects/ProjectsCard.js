// ProjectsCard.jsx
import React from 'react';

const ProjectsCard = ({ title, des, src, onClick }) => {
  const cardStyle = {
    width: '100%',
    padding: '1rem',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    background: '#1c1e22',
    // background: 'linear-gradient(to right, #f0f0f0, #e0e0e0)',
    transition: 'background-color 1s',
    cursor: 'pointer',
  };

  const imgStyle = {
    width: '100%',
    height: '60%',
    objectFit: 'cover',
    borderRadius: '8px',
    transition: 'transform 0.3s',
  };

  const handleHover = (event) => {
    event.currentTarget.style.backgroundColor = '#d0d0d0';
  };

  const handleHoverOut = (event) => {
    event.currentTarget.style.backgroundColor = '#1c1e22';
  };

  return (
    <div
      style={cardStyle}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      <div style={{ width: '100%',  overflow: 'hidden', borderRadius: '8px' }}>
        <img
          src={src}
          alt="Project Thumbnail"
          style={imgStyle}
        />
      </div>
      <div style={{ marginTop: '1rem' }}>
        <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#e52929' }}>{title}</h3>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', color: '#555' }}>{des}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
