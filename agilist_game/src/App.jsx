import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Divider from './components/Divider'
import Objectives from './components/Objectives'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Divider title='Welcome Agilst'/>
      <Objectives/>
    </div>
  )
}

export default App
