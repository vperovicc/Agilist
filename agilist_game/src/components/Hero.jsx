import React from 'react'
import '../styles/Hero.css'
import HeroTest from '../assets/hero1080p.png'
import {Link as ScrollLink} from 'react-scroll'

const Hero = () => {
  return (
    <div id='hero' className='container_hero'>
        <div className='text_hero'>
            <p className='title_hero'>BE THE FIRST TO<br/> <span>DEVELOP A PRODUCT</span></p>
            <p className='desc_hero'>Get ready to challenge your wit, employ cunning strategies and ultimately emerge victorious in this business adventure!</p>
            <div className='button_hero'><ScrollLink to='experience' smooth={true} duration={1000} ><p>Check it Out</p></ScrollLink></div>
        </div>
        <img src={HeroTest}/>
    </div>
  )
}

export default Hero