// Popup.jsx
import React from 'react';

const Popup = ({ title, description, src, onClose }) => {
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    width: '80%',
    maxWidth: '600px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={overlayStyle}>
      <div style={contentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>Close</button>
        <h2>{title}</h2>
        <img src={src} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Popup;
