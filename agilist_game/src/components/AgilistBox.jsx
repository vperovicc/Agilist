import React from 'react'
import '../styles/AgilistBox.css'
import Slika from '../assets/agilistBox.jpg'
import {Link} from 'react-router-dom';

const AgilistBox = () => {
  return (
    <div id='agilistbox' className='content_agilistBox'>
        <img src={Slika} alt='Agilist Box'/>
        <div className='text_agilistBox'>
            <p className='price_title_agilistBox'>Price:</p>
            <p className='price_agilistBox'>8.000rsd + VAT(20%)</p>
            <Link className='linkAgilistBox' to='/orderForm'><div className='button_agilistBox'> 
              <p>Order Now</p>
            </div></Link>
        </div>
    </div>
  )
}

export default AgilistBox