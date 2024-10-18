import React from 'react'
import '../styles/Footer.css'
import LogoDark from '../assets/logodark.png'
import Instagram from '../assets/instagram.png'
import LinkedIn from '../assets/linkedin.png'
import TikTok from '../assets/tiktok.png'
import YouTube from '../assets/youtubeIcon.png'


const Footer = () => {
  return (
    <div className='container_footer'>
        <div className='part1_footer'>
            <img src={LogoDark} alt='logo-dark'/>
            <div className='text1_footer'>
                <p className='title_footer'>LET'S TALK</p>
                <p className='desc_footer'>+381 63 850 5063<br/>nikola@smartconsulting-agency.com</p>
            </div>
        </div>

        <div className='line_footer'/>

        <div className='part2_footer'>
            <div className='social_footer'>
                <a href="https://www.instagram.com/smart_consulting_agency/" target='blank'><img className='classicIcon' src={Instagram} alt='instagram'/></a>
                <a href='https://www.linkedin.com/company/smart-consulting-agency' target='blank'><img className='classicIcon' src={LinkedIn} alt='linkedin'/></a>
                <a href='https://www.tiktok.com/@smartconsultingagency' target='blank'><img className='classicIcon' src={TikTok} alt='tiktok'/></a>
                <a href='https://www.youtube.com/@AgilistBoardGame' target='blank' ><img className='youtubeIcon' src={YouTube} alt='youtube'/></a>
            </div>
            <p className='copyright_footer'>@2024 by Smart Consulting Agency.</p>
        </div>
    </div>
  )
}

export default Footer