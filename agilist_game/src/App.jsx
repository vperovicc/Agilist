import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Divider from './components/Divider'
import Objectives from './components/Objectives'
import Welcome from './components/Welcome'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Divider title='Welcome Agilst'/>
      <Welcome/>
      <Divider title='Learning Objectives'/>
      <Objectives/>
    </div>
  )
}

export default App
