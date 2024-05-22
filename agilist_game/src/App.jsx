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

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Divider title='Welcome Agilst'/>
      <Welcome/>
      <Divider title='Learning Objectives'/>
      <Objectives/>
      <Divider title='Peoples Experience'/>
      <Experience/>
      <Divider title='Book a Call'/>
      <Calendly/>
      <Footer/>
      
    </div>
  )
}

export default App
