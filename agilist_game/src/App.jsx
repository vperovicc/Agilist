import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Divider from './components/Divider';
import Objectives from './components/Objectives';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Calendly from './components/Calendly';
import Experience from './components/Experience';
import Pricing from './components/Pricing';
import On1 from './components/On1';
import Counter from './components/Counter'
import AgilistBox from './components/AgilistBox';
import ScrollTop from './components/ScrollToTopButton';
import Pics from './components/Pics';

const RedirectToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.search === 'https://agilist-game.com/about-us') {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (location.pathname === 'https://agilist-game.com/objectives') {
      const element = document.getElementById('objectives');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (location.pathname === 'https://agilist-game.com/pricing') {
      const element = document.getElementById('pricing');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (location.pathname === 'https://agilist-game.com/1on1') {
      const element = document.getElementById('on1');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (location.pathname === 'https://agilist-game.com/experience') {
      const element = document.getElementById('experience');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (location.pathname === 'https://agilist-game.com/agilist-box') {
      const element = document.getElementById('agilistbox');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div>
        <RedirectToSection />
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
    </Router>
  );
}

export default App;
