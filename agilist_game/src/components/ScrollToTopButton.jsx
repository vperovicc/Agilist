// ScrollToTopButton.js
import React from 'react';
import '../styles/ScrollToTopButton.css'

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="scroll-to-top-button" onClick={handleClick}>
      Scroll to Top
    </button>
  );
};

export default ScrollToTopButton;
