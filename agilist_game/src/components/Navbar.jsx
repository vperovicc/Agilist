import React, { useState } from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons
import {Link as ScrollLink} from 'react-scroll'

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
          <ScrollLink to='hero' smooth={true} duration={1000}><p>Home</p></ScrollLink>
          <ScrollLink to='about' smooth={true} duration={1000}><p>About</p></ScrollLink>
          <ScrollLink to='objectives' smooth={true} duration={1000}><p>Learning Objectives</p></ScrollLink>
          <ScrollLink to='pricing' smooth={true} duration={1000}><p>Pricing Models</p></ScrollLink>
          <ScrollLink to='experience' smooth={true} duration={1000}><p>Peoples Experience</p></ScrollLink>
          <ScrollLink to='call' smooth={true} duration={1000}><div className='button_navbar'>
            <p>Book a Call</p>
          </div></ScrollLink>
        </div>

        <div className='burger_icon' onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
