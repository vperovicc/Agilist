import React, { useState } from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='background_navbar'>
      <div className='container_navbar'>
        <img src={Logo} alt="Logo" className='logo' />
        
        <div className={`navigation_navbar ${menuOpen ? 'open' : ''}`}>
          <p>Home</p>
          <p>About</p>
          <p>Learning Objectives</p>
          <p>Pricing Models</p>
          <p>Peoples Experience</p>
          <div className='button_navbar'>
            <p>Book a Call</p>
          </div>
        </div>

        <div className='burger_icon' onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
