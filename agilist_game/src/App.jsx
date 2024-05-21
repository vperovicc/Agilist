import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Divider from './components/Divider'
import Objectives from './components/Objectives'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import Calendly from './components/Calendly'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Divider title='Welcome Agilst'/>
      <Welcome/>
      <Divider title='Learning Objectives'/>
      <Objectives/>
      <Divider title='Book a Call'/>
      <Calendly/>
      <Footer/>
    </div>
  )
}

export default App
