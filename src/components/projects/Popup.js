import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlineClose } from 'react-icons/ai';
import './Popup.css'; // Custom CSS file

const Popup = ({ title, description, images, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close-button" onClick={onClose}><AiOutlineClose /></button>
        <h2 className="popup-title">{title}</h2>

        {/* Bootstrap Carousel */}
        <Carousel className="popup-carousel">
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image} alt={`Project ${title} ${index + 1}`} className="popup-carousel-image" />
            </Carousel.Item>
          ))}
        </Carousel>

        <p className="popup-description">{description}</p>
      </div>
    </div>
  );
};

export default Popup;
