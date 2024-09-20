// ExampleCarouselImage.js
import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  const imageSrc = `https://via.placeholder.com/800x400?text=${text}`; // Placeholder image with text

  return (
    <img
      src={imageSrc}
      alt={text}
      style={{ width: '100%', borderRadius: '8px' }}
    />
  );
};

export default ExampleCarouselImage;
