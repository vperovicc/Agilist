import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Divider from './components/Divider'
import Objectives from './components/Objectives'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import Calendly from './components/Calendly'
import Experience from './components/Experience'
import Pricing from './components/Pricing'
import On1 from './components/On1'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Divider title='Welcome Agilst'/>
      <Welcome/>
      <Divider title='Learning Objectives'/>
      <Objectives/>
      <Divider title='Pricing Models'/>
      <Pricing/>
      <Divider title='Peoples Experience'/>
      <Experience/>
      <Divider title='1 on 1 Model'/>
      <On1/>
      <Divider title='Book a Call'/>
      <Calendly/>
      <Footer/>
      
    </div>
  )
}

export default App
