import React from 'react'
import '../styles/Hero.css'
import Image from '../assets/heroImg.png'

const Hero = () => {
  return (
    <div className='container_hero'>
        <div className='text_hero'>
            <p className='title_hero'>BE THE FIRST TO<br/> <span>DEVELOP A PRODUCT</span></p>
            <p className='desc_hero'>Get ready to challenge your wit, employ cunning strategies and ultimately emerge victorious in this business adventure!</p>
            <div className='button_hero'><p>Check it Out</p></div>
        </div>
        <img src={Image}/>
    </div>
  )
}

export default Hero