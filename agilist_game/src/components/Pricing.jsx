import React from 'react'
import '../styles/Pricing.css'
import Single1 from '../assets/single1.svg'
import Single2 from '../assets/single2.svg'
import Double from '../assets/double.svg'
import {Link as ScrollLink} from 'react-scroll'

const Pricing = () => {
  return (
    <div className='container_pricing'>
      <div className='card_pricing'>
        <img id='pricing' className='single_pricing'  src={Single1} alt='Ninja'/>
        <div className='text_pricing'>
          <p className='title_pricing'>Half-Day Training</p>
          <p className='price_pricing'>$100</p>
          <p className='per_something'>Per Participant</p>
          <p className='desc_pricing'>Half-day training sessions, designed to elevate your overall proficiency and success.</p>
        </div>

        <div className='list_pricing'>
          <ul >
            <li>4 Hours</li>
            <li>Certificate of Completion</li>
          </ul>
        </div>

        <div className='blue_pricing'>
          <div className='button_pricing'>
          <ScrollLink to='call' smooth={true} duration={1000} ><p>Book a Call</p></ScrollLink>
          </div>
        </div>
      </div>

      <div className='card_pricing'>
      <img className='single_pricing'  src={Single2} alt='Brute'/>
        <div className='text_pricing'>
          <p className='title_pricing'>Full-Day Training</p>
          <p className='price_pricing'>$140</p>
          <p className='per_something'>Per Participant</p>
          <p className='desc_pricing'>Full-day training program, filled with knowledge and skills needed for enduring success.</p>
        </div>

        <div className='list_pricing'>
          <ul>
            <li>8 Hours</li>
            <li>Certificate of Completion</li>
          </ul>
        </div>

        <div className='blue_pricing'>
          <div className='button_pricing'>
          <ScrollLink to='call' smooth={true} duration={1000} ><p>Book a Call</p></ScrollLink>
          </div>
        </div>
      </div>

      <div className='card_pricing'>
      <img className='double_pricing'  src={Double} alt='Knight and Mask'/>
        <div className='text_pricing'>
          <p className='title_pricing'>Trainers Package</p>
          <p className='price_pricing'>$1000</p>
          <p className='per_something'>Per Trainer</p>
          <p className='desc_pricing'>Take your training to new heights with our all-inclusive package.</p>
          
        </div>

        <div className='list_pricing'>
          <ul>
            <li>8 Hours</li>
            <li>Trainers Certificate</li>
            <li>Trainers License</li>
          </ul>
        </div>

        <div className='blue_pricing'>
          <div className='button_pricing'>
          <ScrollLink to='call' smooth={true} duration={1000} ><p>Book a Call</p></ScrollLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing