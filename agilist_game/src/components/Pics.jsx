import React from 'react'
import '../styles/Pics.css'
import Pic1_Pics from '../assets/11080p.png'
import Pic2_Pics from '../assets/21080p.png'
import Pic3_Pics from '../assets/31080p.png'
import Pic4_Pics from '../assets/41080p.png'

const Pics = () => {
  return (
    <div className='bg_pics'>
        <div className='container_pics'>
                <img src={Pic1_Pics} alt='pic1'/>
                <img src={Pic2_Pics} alt='pic2'/>
                <img src={Pic3_Pics} alt='pic3'/>
                <img src={Pic4_Pics} alt='pic4'/>
        </div>
    </div>
  )
}

export default Pics