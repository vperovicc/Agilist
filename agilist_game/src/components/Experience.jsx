import React from 'react'
import '../styles/Experience.css'
import Slider from "react-slick";
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/hero1080p.png'
import pic3 from '../assets/11080p.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/31080p.png'
import pic6 from '../assets/pic6.png'
import pic7 from '../assets/pic7.png'


import AnaGol from '../assets/anagolobocanin.jpg'
import BojanSmu from '../assets/bojansmudja.jpg'
import StefanVuc from '../assets/stefanvucicevic.jpg'
import StefanVuj from '../assets/stefanvujovic.jpg'
import AnaBoj from '../assets/anaboj.jpg'
import JelenaJan from '../assets/jelenajan.jpg'
import JJ from '../assets/jj.png'
import Bassel from '../assets/bassel.png'
import { BsArrowLeft } from 'react-icons/bs';
import ExperienceCard from './ExperienceCard';



const Experience = () => {

    const settings = {
        dots: false,
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
          image: AnaBoj,
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
        },
        {
            desc:'An incredibly captivating and enlightening game that simulates project development in a competitive market. Using your knowledge and intuition, you design strategies, take risks, and reshape opportunities towards success. It may even help you find solutions for real-world projects.',
            image: JelenaJan,
            name: 'Jelena Janjic',
            profession:'Senior Operations Manager, Biometric Industry'
        },
        {
          desc:'I observed a group of 12 project managers, divided into 3 groups, playing a creative and innovative game. It helps PM professionals understand the entire process from product development to market placement and the financial outcomes of their decisions. Game enhances strategic thinking, collaboration skills, market awareness, and a goal-oriented approach to work.',
          image: JJ,
          name: 'Jelena Janicijevic',
          profession:'Senior Project Manager, Software Development Industry'
        },
        {
          desc:'This is  an engaging and educational tool that helps players understand agile principles through real-world scenarios. It fosters teamwork, prioritization, and adaptability, making complex concepts accessible and fun. Ideal for both beginners and experienced practitioners, this game enhances agile skills and boosts team collaboration effectively.',
          image: Bassel,
          name: 'Bassel Kassem',
          profession:'PhD, Director of Innovation, Patents and Grants-American University in the Emirates'
        },

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
                    <div className='wrap_pic'><img className='slider_pic' src={pic1} alt='pic1'/></div>
                    <div className='wrap_pic'><img className='slider_pic' src={pic2} alt='pic2'/></div>
                    <div className='wrap_pic'><img className='slider_pic' src={pic3} alt='pic3'/></div>
                    <div className='wrap_pic'><img className='slider_pic' src={pic4} alt='pic4'/></div>
                    <div className='wrap_pic'><img className='slider_pic' src={pic5} alt='pic5'/></div>
                    <div className='wrap_pic'><img className='slider_pic' src={pic6} alt='pic6'/></div>
                    <div className='wrap_pic'><img className='slider_pic' src={pic7} alt='pic7'/></div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Experience