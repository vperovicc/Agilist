import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Divider from '../components/Divider';
import Objectives from '../components/Objectives';
import Welcome from '../components/Welcome';
import Footer from '../components/Footer';
import Calendly from '../components/Calendly';
import Experience from '../components/Experience';
import Pricing from '../components/Pricing';
import On1 from '../components/On1';
import Counter from '../components/Counter'
import AgilistBox from '../components/AgilistBox';
import ScrollTop from '../components/ScrollToTopButton';
import Pics from '../components/Pics';
import './Home.css'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Counter/>
        <Divider title='Welcome Agilist' />
        <Welcome />
        <Pics />
        <Divider title='Learning Objectives' />
        <Objectives />
        <Divider title='Pricing Models' />
        <Pricing />
        <Divider title='Peoples Experience' />
        <Experience />
        <Divider title='1 on 1 Model' />
        <On1 />
        <Divider title='Agilist Box' />
        <AgilistBox />
        <Divider title='Book a Call' />
        <Calendly />
        <Footer />
        <ScrollTop />
      </div>
  )
}

export default Home