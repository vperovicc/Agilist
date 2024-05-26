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
        speed: 7000,
        autoplaySpeed: 1000,
        arrows:false, 
      };

      const testimonials = [
        {
          desc: 'Agilist is an immersive game that effectively conveys insights into the intricacies of product development, team dynamics, and commonly employed methodologies.',
          image: pic3,
          name: 'Bojan Smudja',
          profession: 'Agile Coach and Trainer',
        },
        {
          desc: 'The game brilliantly combines strategic decision-making with hands-on learning about agile methodologies. Within one iteration, I was able to buy product increments, hire team members, and build a product, all while adapting to changing market conditions. It’s an engaging and educational experience that’s perfect for teams looking to enhance their business strategy skills in a fun and interactive way.',
          image: pic2,
          name: 'Stefan Vucicevic',
          profession: 'Head of IT Governance, Banking Industry',
        },
        {
            desc: 'I\'ve personally enjoyed playing the game, as it \'s very realistic depiction of my role and similar roles day to day job. This game gives insight in what\'s needed and how companies do build certain products, which seniority roles are needed, budgets and costs involved with building both the team and the product - all combined with critical security issues, team member sickness and other blockers we all have faced when working with Dev teams. Overall game combines fun and learning aspect of the software development process.',
          image: pic2,
          name: 'Ana Bojinovic',
          profession: 'IT Project Manager, Biometric Industry',
        },
        {
            desc: 'I recently played this brand new game, and I have to say, it\'s absolutely awesome! The complexity of the game really draws you in and keeps you wanting to play more. The game is centered around agile methodology, and you can even buy products within the game. To win, you need to devise the best possible strategy, considering every aspect like hiring, productivity, and costs. It truly challenges you to think with an entrepreneurial mindset. There were times when I felt like I was leading my own startup company. Highly recommend it to anyone who loves a good strategic challenge!',
            image: pic2,
            name: 'Stefan Vujovic',
            profession: 'IT Project Manager, Biometric Industry',
        },
        {
            desc:'We had the opportunity to try the Agilst game, and our impressions are positive. The game simulates business using various elements such as finance, organization, and employment, all in accordance with agile processes. It successfully raised the awareness of employees from different sectors (project management, development, data science, HR) about various aspects of business development.',
            image: pic2,
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