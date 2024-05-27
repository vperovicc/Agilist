import React from 'react'
import '../styles/Experience.css'
import Slider from "react-slick";
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'
import pic7 from '../assets/pic7.png'


import AnaGol from '../assets/anagolobocanin.jpg'
import BojanSmu from '../assets/bojansmudja.jpg'
import StefanVuc from '../assets/stefanvucicevic.jpg'
import StefanVuj from '../assets/stefanvujovic.jpg'
import { BsArrowLeft } from 'react-icons/bs';
import ExperienceCard from './ExperienceCard';



const Experience = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 1000,
        arrows:false, 
      };

      const testimonials = [
        {
          desc: 'Agilist is an immersive game that effectively conveys insights into the intricacies of product development, team dynamics, and commonly employed methodologies.',
          image: BojanSmu,
          name: 'Bojan Smudja',
          profession: 'Agile Coach and Trainer',
        },
        {
          desc: 'The game brilliantly combines strategic decision-making with hands-on learning about agile methodologies. In one iteration, I bought product increments, hired team members, and built a product while adapting to changing market conditions. It\'s a fun and educational experience perfect for enhancing business strategy skills.',
          image: StefanVuc,
          name: 'Stefan Vucicevic',
          profession: 'Head of IT Governance, Banking Industry',
        },
        {
            desc: 'I enjoyed the game for its realistic depiction of my daily role. It provides insight into building products, required seniority roles, budgets, and costs, along with handling security issues, team member sickness, and other blockers. It combines fun and learning in the software development process.',
          image: pic2,
          name: 'Ana Bojinovic',
          profession: 'IT Project Manager, Biometric Industry',
        },
        {
            desc: 'I recently played this new game, and it\'s fantastic! The complexity and agile methodology draw you in. You buy products and devise strategies considering hiring, productivity, and costs. It feels like leading a startup. Highly recommend it for strategic challenge lovers!',
            image: StefanVuj,
            name: 'Stefan Vujovic',
            profession: 'IT Project Manager, Biometric Industry',
        },
        {
            desc:'We tried the Agilst game and were impressed. It simulates business using elements like finance, organization, and employment in line with agile processes. It effectively raised awareness among employees from various sectors about different aspects of business development.',
            image: AnaGol,
            name: 'Ana Golobocanin',
            profession:'Senior HR Business Partner, Biometric Industry'
        }
      ];

  return (
    <div id='experience' className='bg_exp'>
        <div className='container_exp'>
            <div className='slider_exp'>
                <p className='title_exp'>Testimonials</p>
                <Slider className='slider_container' {...settings}>
                {testimonials.map((testimonial, index) => (
                    <ExperienceCard
                        key={index}
                        className='content_slider'
                        desc={testimonial.desc}
                        image={testimonial.image}
                        name={testimonial.name}
                        profession={testimonial.profession}
                    />
                ))}
                </Slider>
                
            </div>

            <div className='slider_exp'>
                <p className='title_exp'>Experience</p>
                
                <Slider className='slider_container' {...settings}>
                    <div className='wrap_pic'><img className='slider_pic' src={pic1}/></div>
                    <div className='wrap_pic'><img className='slider_pic' src={pic2}/></div>
                    <div className='wrap_pic'><img className='slider_pic' src={pic3}/></div>
                    <div className='wrap_pic'><img className='slider_pic' src={pic4}/></div>
                    <div className='wrap_pic'><img className='slider_pic' src={pic5}/></div>
                    <div className='wrap_pic'><img className='slider_pic' src={pic6}/></div>
                    <div className='wrap_pic'><img className='slider_pic' src={pic7}/></div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Experience