import React from 'react'
import '../styles/Experience.css'
import Slider from "react-slick";
import pic1 from '../assets/heroTest.png'
import pic2 from '../assets/heroImg.png'
import pic3 from '../assets/logodark.png'
import { BsArrowLeft } from 'react-icons/bs';
import ExperienceCard from './ExperienceCard';



const Experience = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 1000,
        arrows:false, 
      };
  return (
    <div className='bg_exp'>
        <div className='container_exp'>
            <div className='slider_exp'>
                <p className='title_exp'>Testimonials</p>
                <Slider className='slider_container' {...settings}>
                    <ExperienceCard className='content_slider' desc='Mnogo muco dobra igra puno stvari sam naucio.' image={pic3} name='Vukasin Perovic' profesion='Student'/>
                    <ExperienceCard desc='A ono mid igrica' image={pic2} name='Soko' profesion='Propali Student'/>
                </Slider>
                
            </div>

            <div className='slider_exp'>
                <p className='title_exp'>Experience</p>
                
                <Slider className='slider_container' {...settings}>
                    <img className='slider_pic' src={pic1}/>
                    <img className='slider_pic' src={pic2}/>
                    <img className='slider_pic' src={pic3}/>
                </Slider>
                
            </div>
        </div>
    </div>
  )
}

export default Experience