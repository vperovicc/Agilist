import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RedirectToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/aboutus') {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

export default RedirectToSection;
