import React from 'react'
import W3_navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Explore from './components/Explore'
import Services from './components/Services'
import Projects from './components/projects'
import Clients from './components/Clients'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.css" integrity="sha512-kJlvECunwXftkPwyvHbclArO8wszgBGisiLeuDFwNM8ws+wKIw0sv1os3ClWZOcrEB2eRXULYUsm8OVRGJKwGA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const App = () => {
  return (
    <div className='container-fliud   '>
      <div className='border-bottom'>
        <W3_navbar/>
      </div>
      <Hero/>
      <About/>
      <Explore/>
      <Services/>
      <Projects/>
      <Clients/>
    </div>
  )
}

export default App
