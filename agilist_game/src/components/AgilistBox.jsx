import React from 'react'
import '../styles/AgilistBox.css'
import Slika from '../assets/pic7.png'

const AgilistBox = () => {
  return (
    <div id='agilistbox' className='content_agilistBox'>
        <img src={Slika} />
        <div className='text_agilistBox'>
            <p className='price_title_agilistBox'>Price:</p>
            <p className='price_agilistBox'>10.000rsd + VAT(20%)</p>
            <p className='howto_title_agilistBox'>How to order:</p>
            <p className='howto_agilistBox'>Please reach out to Nikola via <strong>nikola@smartconsulting-agency.com</strong> for inquire about purchasing the Agile Business Game box.</p>
        </div>
    </div>
  )
}

export default AgilistBox