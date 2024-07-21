import React from 'react'
import '../styles/Footer.css'
import LogoDark from '../assets/logodark.png'
import Instagram from '../assets/instagram.png'
import LinkedIn from '../assets/linkedin.png'
import TikTok from '../assets/tiktok.png'


const Footer = () => {
  return (
    <div className='container_footer'>
        <div className='part1_footer'>
            <img src={LogoDark}/>
            <div className='text1_footer'>
                <p className='title_footer'>LET'S TALK</p>
                <p className='desc_footer'>+381 63 850 5063<br/>nikola@smartconsulting-agency.com</p>
            </div>
        </div>

        <div className='line_footer'/>

        <div className='part2_footer'>
            <div className='social_footer'>
                <a href="https://www.instagram.com/smart_consulting_agency/" target='blank'><img src={Instagram}/></a>
                <a href='https://www.linkedin.com/company/smart-consulting-agency' target='blank'><img src={LinkedIn}/></a>
                <a href='https://www.tiktok.com/@smartconsultingagency' target='blank'><img src={TikTok}/></a>
            </div>
            <p className='copyright_footer'>@2024 by Smart Consulting Agency.</p>
        </div>
    </div>
  )
}

export default Footer