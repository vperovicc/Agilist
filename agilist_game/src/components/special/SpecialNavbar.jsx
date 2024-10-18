import React from 'react'
import './SpecialNavbar.css'
import Logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';

const SpecialNavbar = () => {
  return (
    <div className='background_navbar'>
      <div className='container_navbar'>
        <Link to='/home'><img src={Logo} alt="Logo" className='logoSpecial'/></Link>
      </div>
    </div>
  )
}

export default SpecialNavbar