import React from 'react'
import '../styles/On1.css'
import Oneone from '../assets/oneone.svg'
import {Link as ScrollLink} from 'react-scroll'
import Nikola from '../assets/nikola1v1.png'

const On1 = () => {
  return (
    <div className='container_on1'>
        <div className='card_on1'>
            <div className='iconwrap_on1'>
                <img className='double_on1'  src={Oneone}/>
            </div>
                
            <div className='text_on1'>
                <p className='title_on1'>Personal Coaching</p>
                <img className='nikola_on1'  src={Nikola}/>
                <p className='desc_on1'>If you have an idea you'd like to turn into a product, you can arrange a call to explore how Nikola and his team can assist you.</p>
            </div>
            <div className='list_on1'>
                <ul>
                    <li>1 on 1 Coaching</li>
                    <li>Individual Sessions</li>
                    <li>Guidance Through Product Development</li>
                </ul>
            </div>

            <div className='blue_on1'>
                <div className='button_on1'>
                    <ScrollLink to='call' smooth={true} duration={1000} ><p>Book a Call</p></ScrollLink>
                </div>
            </div>
        </div>
  </div>
  )
}

export default On1